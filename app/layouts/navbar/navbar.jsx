import { Icon } from '~/components/icon';
import { Monogram } from '~/components/monogram';
import { useTheme } from '~/components/theme-provider';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { useScrollToHash, useWindowSize } from '~/hooks';
import { Link, useLocation } from '@remix-run/react';
import { useEffect, useRef, useState } from 'react';
import { cssProps, media, msToNum, numToMs } from '~/utils/style';
import { NavToggle } from './nav-toggle';
import { ThemeToggle } from './theme-toggle';
import { navLinks, socialLinks } from './nav-data';
import config from '~/config.json';
import styles from './navbar.module.css';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const windowSize = useWindowSize();
  const isMobile = windowSize.width <= media.mobile || windowSize.height <= 696;
  const location = useLocation();

  return (
    <header className={styles.navbar}>
      <Link
        to="/"
        className={styles.logo}
        aria-label={`${config.name}, ${config.role}`}
      >
        <Monogram />
      </Link>
      <nav className={styles.nav}>
        {navLinks.map(({ label, pathname, type, download }) => (
          <a
            key={label}
            href={pathname}
            className={styles.navLink}
            data-type={type}
            download={download}
            target={download ? "_blank" : undefined}
            rel={download ? "noopener noreferrer" : undefined}
            aria-current={location.pathname === pathname ? 'page' : undefined}
          >
            {label}
          </a>
        ))}
        <ThemeToggle className={styles.themeToggle} />
      </nav>
      {isMobile && (
        <>
          <NavToggle onClick={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen} />
          <nav className={`${styles.mobileNav} ${menuOpen ? styles.visible : ''}`}>
            {navLinks.map(({ label, pathname, download }) => (
              <a
                key={label}
                href={pathname}
                className={styles.mobileNavLink}
                onClick={() => setMenuOpen(false)}
                download={download}
              >
                {label}
              </a>
            ))}
            <ThemeToggle isMobile />
          </nav>
        </>
      )}
    </header>
  );
};

const NavbarIcons = ({ desktop }) => (
  <div className={styles.navIcons}>
    {socialLinks.map(({ label, url, icon }) => (
      <a
        key={label}
        data-navbar-item={desktop || undefined}
        className={styles.navIconLink}
        aria-label={label}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className={styles.navIcon} icon={icon} />
      </a>
    ))}
  </div>
);
