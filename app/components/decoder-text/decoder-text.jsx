import { VisuallyHidden } from '~/components/visually-hidden';
import { useReducedMotion } from 'framer-motion';
import { memo, useEffect, useRef } from 'react';
import { delay } from '~/utils/delay';
import { classes } from '~/utils/style';
import styles from './decoder-text.module.css';

// 简化字符集，只使用英文字母和数字
const chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

export const DecoderText = memo(
  ({ text, start = true, delay: startDelay = 0, className, ...rest }) => {
    const output = useRef();
    const container = useRef();
    const reduceMotion = useReducedMotion();

    useEffect(() => {
      const outputInstance = output.current;

      const initText = async () => {
        if (start && !reduceMotion) {
          await delay(startDelay);
        }
        outputInstance.textContent = text;
      };

      initText();

      return () => {
        outputInstance.textContent = '';
      };
    }, [reduceMotion, start, startDelay, text]);

    return (
      <span className={classes(styles.text, className)} {...rest}>
        <VisuallyHidden className={styles.label}>{text}</VisuallyHidden>
        <span aria-hidden className={styles.content} ref={container}>
          <span className={styles.value} ref={output} />
        </span>
      </span>
    );
  }
);
