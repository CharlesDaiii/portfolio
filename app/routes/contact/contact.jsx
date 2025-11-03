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
import { useRef, useState } from 'react';
import { cssProps, msToNum, numToMs } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import { json } from '@remix-run/node';
import styles from './contact.module.css';
import { Footer } from '~/components/footer';
import { emailConfig } from '~/config/email';

export const meta = () => {
  return baseMeta({
    title: 'Contact',
    description: "Send me a message if you're interested in discussing a project or if you just want to say hi",
  });
};

const MAX_EMAIL_LENGTH = 512;
const MAX_MESSAGE_LENGTH = 4096;

export const Contact = () => {
  const errorRef = useRef();
  const email = useFormInput('');
  const message = useFormInput('');
  const initDelay = tokens.base.durationS;
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Get the current URL for the _next parameter
  const getReturnUrl = () => {
    if (typeof window !== 'undefined') {
      return window.location.href;
    }
    return '/';
  };

  // Handle form submission - this allows us to show success UI without redirecting
  const handleSubmit = (e) => {
    // Form will be submitted normally to formsubmit.co
    // We just want to track submission state for UI
    setFormSubmitted(true);
  };

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
                I cooked this site up with{' '}
                <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                  React
                </a>
                ,{' '}
                <a href="https://remix.run" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                  Remix
                </a>
                ,{' '}
                <a href="https://threejs.org" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                  Three.js
                </a>
                , and{' '}
                <a href="https://www.framer.com/motion" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                  Framer Motion
                </a>
                .
                Beyond web development, my journey includes:
              </Text>
              <p className={styles.contactText}>
              
                🎓 Computational Design @{' '}
                <a href="https://www.cmu.edu" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                  CMU
                </a>
                <br />
                💼 Previous UX Designer @{' '}
                <a href="https://www.usa.philips.com" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                  Philips
                </a>
              </p>
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
          <Transition unmount in={!formSubmitted} timeout={1600}>
            {({ status, nodeRef }) => (
              <form
                className={styles.form}
                action={`https://formsubmit.co/${emailConfig.emailTo}`}
                method="POST"
                ref={nodeRef}
                onSubmit={handleSubmit}
              >
                {/* FormSubmit.co configuration fields */}
                <input type="hidden" name="_subject" value="New Contact Form Message" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_honey" value="" />
                <input type="hidden" name="_next" value={getReturnUrl()} />
                <input type="hidden" name="_autoresponse" value="Thank you for your message! I'll get back to you soon." />

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
                {/* Name field */}
                <Input
                  className={styles.input}
                  style={getDelay(tokens.base.durationXS, initDelay)}
                  data-status={status}
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
                <Button
                  className={styles.button}
                  data-status={status}
                  style={getDelay(tokens.base.durationM, initDelay)}
                  icon="send"
                  type="submit"
                >
                  Send message
                </Button>
              </form>
            )}
          </Transition>
          <Transition unmount in={formSubmitted}>
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
      <Footer />
    </Section>
  );
};

function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}