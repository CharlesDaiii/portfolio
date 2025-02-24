import { Link } from '~/components/link';
import { Text } from '~/components/text';
import { classes } from '~/utils/style';
import { Icon } from '~/components/icon';
import { socialLinks } from '~/layouts/navbar/nav-data';
import config from '~/config.json';
import styles from './footer.module.css';

export const Footer = ({ className }) => (
  <footer className={classes(styles.footer, className)}>
    <div className={styles.socialContainer}>
      {socialLinks.map(({ label, url, icon }) => (
        <a
          key={label}
          href={url}
          className={styles.socialLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        >
          <Icon icon={icon} />
          <span>{label}</span>
        </a>
      ))}
    </div>
    <div className={styles.footerContent}>
      <Text size="s" align="center">
        <span className={styles.date}>
          {`© ${new Date().getFullYear()} ${config.name}.`}
        </span>
        <Link secondary className={styles.link} href="/humans.txt" target="_self">
          Crafted by yours truly
        </Link>
      </Text>
    </div>
  </footer>
);
