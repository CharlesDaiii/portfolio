import { Link } from '@remix-run/react';
import styles from './project-nav.module.css';
import { ArrowLeft } from '~/components/icon/arrow-left.jsx';
import { ArrowRight } from '~/components/icon/arrow-right.jsx';

const projects = [
  {
    name: 'PetPals',
    path: '/projects/petpals'
  },
  {
    name: 'Adaptive UI for Sleep & Respiratory Care',
    path: '/projects/adaptive-ui'
  },
  {
    name: 'MR Finder: Mixed Reality Lost & Found',
    path: '/projects/mr-finder'
  },
  {
    name: 'Heritage Knowledge Explorer',
    path: '/projects/heritage-explorer'
  },
  {
    name: 'Bike-Sharing in Epidemic Era',
    path: '/projects/bike-sharing'
  },
  {
    name: 'Infrastructure Equality',
    path: '/projects/infrastructure'
  },
  {
    name: 'Fireboy & Watergirl',
    path: '/projects/fireboy-watergirl'
  }
];

export const ProjectNav = ({ currentPath }) => {
  const currentIndex = projects.findIndex(project => project.path === currentPath);
  const prevProject = projects[currentIndex - 1] || projects[projects.length - 1];
  const nextProject = projects[currentIndex + 1] || projects[0];

  return (
    <nav className={styles.projectNav}>
      <Link to={prevProject.path} className={styles.projectNavLink}>
        <ArrowLeft className={styles.projectNavIcon} />
        <div className={styles.projectNavContent}>
          <span className={styles.projectNavLabel}>Previous Project</span>
          <span className={styles.projectNavTitle}>{prevProject.name}</span>
        </div>
      </Link>
      <Link to={nextProject.path} className={styles.projectNavLink}>
        <div className={styles.projectNavContent}>
          <span className={styles.projectNavLabel}>Next Project</span>
          <span className={styles.projectNavTitle}>{nextProject.name}</span>
        </div>
        <ArrowRight className={styles.projectNavIcon} />
      </Link>
    </nav>
  );
}; 