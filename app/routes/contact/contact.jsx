import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Icon } from '~/components/icon';
import { Input } from '~/components/input';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { useFormInput } from '~/hooks';
import { useRef } from 'react';
import { cssProps, msToNum, numToMs } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import { Form, useActionData, useNavigation } from '@remix-run/react';
import { json } from '@remix-run/cloudflare';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import styles from './contact.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Contact',
    description:
      'Send me a message if you‘re interested in discussing a project or if you just want to say hi',
  });
};

const MAX_EMAIL_LENGTH = 512;
const MAX_MESSAGE_LENGTH = 4096;
const EMAIL_PATTERN = /(.+)@(.+){2,}\.(.+){2,}/;

export async function action({ context, request }) {
  const ses = new SESClient({
    region: 'us-east-1',
    credentials: {
      accessKeyId: context.cloudflare.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: context.cloudflare.env.AWS_SECRET_ACCESS_KEY,
    },
  });

  const formData = await request.formData();
  const isBot = String(formData.get('name'));
  const email = String(formData.get('email'));
  const message = String(formData.get('message'));
  const errors = {};

  // Return without sending if a bot trips the honeypot
  if (isBot) return json({ success: true });

  // Handle input validation on the server
  if (!email || !EMAIL_PATTERN.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!message) {
    errors.message = 'Please enter a message.';
  }

  if (email.length > MAX_EMAIL_LENGTH) {
    errors.email = `Email address must be shorter than ${MAX_EMAIL_LENGTH} characters.`;
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    errors.message = `Message must be shorter than ${MAX_MESSAGE_LENGTH} characters.`;
  }

  if (Object.keys(errors).length > 0) {
    return json({ errors });
  }

  // Send email via Amazon SES
  await ses.send(
    new SendEmailCommand({
      Destination: {
        ToAddresses: [context.cloudflare.env.EMAIL],
      },
      Message: {
        Body: {
          Text: {
            Data: `From: ${email}\n\n${message}`,
          },
        },
        Subject: {
          Data: `Portfolio message from ${email}`,
        },
      },
      Source: `Portfolio <${context.cloudflare.env.FROM_EMAIL}>`,
      ReplyToAddresses: [email],
    })
  );

  return json({ success: true });
}

export const Contact = () => {
  const errorRef = useRef();
  const email = useFormInput('');
  const message = useFormInput('');
  const initDelay = tokens.base.durationS;
  const actionData = useActionData();
  const { state } = useNavigation();
  const sending = state === 'submitting';

  return (
    <Section className={styles.contact}>
      <div className={styles.contactWrapper}>
        <Transition in appear>
          {({ status }) => (
            <div className={styles.contactInfo} data-status={status}>
              <Text className={styles.contactText}>
                <span className={styles.emoji}>👾</span>
                Hey there—welcome to my little slice of the internet!
                <span className={styles.emoji}>👾</span>
              </Text>
              <Text className={styles.contactText}>
                I cooked this site up with React, Remix, Three.js, and Framer Motion.
              </Text>
              <Text className={styles.contactText}>
                Everything's open source on my{' '}
                <a 
                  href="https://github.com/Qiqicoder/portfolio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  Github
                </a>
                , so if you're curious about the code or just want to chat about blending creativity and tech, let's connect!
              </Text>
            </div>
          )}
        </Transition>

        <div>
          <Transition unmount in={!actionData?.success} timeout={1600}>
            {({ status, nodeRef }) => (
              <Form
                className={styles.form}
                method="post"
                ref={nodeRef}
              >
                <Heading
                  className={styles.title}
                  data-status={status}
                  level={3}
                  as="h1"
                  style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
                >
                  <DecoderText text="Let's chat!" start={status !== 'exited'} delay={300} />
                </Heading>
                <Divider
                  className={styles.divider}
                  data-status={status}
                  style={getDelay(tokens.base.durationXS, initDelay, 0.4)}
                />
                {/* Hidden honeypot field to identify bots */}
                <Input
                  className={styles.botkiller}
                  label="Name"
                  name="name"
                  maxLength={MAX_EMAIL_LENGTH}
                />
                <Input
                  required
                  className={styles.input}
                  data-status={status}
                  style={getDelay(tokens.base.durationXS, initDelay)}
                  autoComplete="email"
                  label="Your email"
                  type="email"
                  name="email"
                  maxLength={MAX_EMAIL_LENGTH}
                  {...email}
                />
                <Input
                  required
                  multiline
                  className={styles.input}
                  data-status={status}
                  style={getDelay(tokens.base.durationS, initDelay)}
                  autoComplete="off"
                  label="Message"
                  name="message"
                  maxLength={MAX_MESSAGE_LENGTH}
                  {...message}
                />
                <Transition
                  unmount
                  in={!sending && actionData?.errors}
                  timeout={msToNum(tokens.base.durationM)}
                >
                  {({ status: errorStatus, nodeRef }) => (
                    <div
                      className={styles.formError}
                      ref={nodeRef}
                      data-status={errorStatus}
                      style={cssProps({
                        height: errorStatus ? errorRef.current?.offsetHeight : 0,
                      })}
                    >
                      <div className={styles.formErrorContent} ref={errorRef}>
                        <div className={styles.formErrorMessage}>
                          <Icon className={styles.formErrorIcon} icon="error" />
                          {actionData?.errors?.email}
                          {actionData?.errors?.message}
                        </div>
                      </div>
                    </div>
                  )}
                </Transition>
                <Button
                  className={styles.button}
                  data-status={status}
                  data-sending={sending}
                  style={getDelay(tokens.base.durationM, initDelay)}
                  disabled={sending}
                  loading={sending}
                  loadingText="Sending..."
                  icon="send"
                  type="submit"
                >
                  Send message
                </Button>
              </Form>
            )}
          </Transition>
          <Transition unmount in={actionData?.success}>
            {({ status, nodeRef }) => (
              <div className={styles.complete} aria-live="polite" ref={nodeRef}>
                <Heading
                  level={3}
                  as="h3"
                  className={styles.completeTitle}
                  data-status={status}
                >
                  Message Sent
                </Heading>
                <Text
                  size="l"
                  as="p"
                  className={styles.completeText}
                  data-status={status}
                  style={getDelay(tokens.base.durationXS)}
                >
                  I'll get back to you within a couple days, sit tight
                </Text>
                <Button
                  secondary
                  iconHoverShift
                  className={styles.completeButton}
                  data-status={status}
                  style={getDelay(tokens.base.durationM)}
                  href="/"
                  icon="chevron-right"
                >
                  Back to homepage
                </Button>
              </div>
            )}
          </Transition>
        </div>
      </div>
    </Section>
  );
};

function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}
