import { Footer } from '~/components/footer';
import {
  ProjectContainer,
} from '~/layouts/project';
import { Fragment } from 'react';
import { baseMeta } from '~/utils/meta';
import styles from './infrastructure.module.css';
import { useTheme } from '~/components/theme-provider';
import projectStyles from '~/styles/project.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Infrastructure Equality',
    description: 'Developed a multi-objective optimization framework combining geospatial analysis and evolutionary algorithms to balance flood risks, infrastructure costs, and social equity.',
    prefix: 'Projects',
  });
};

export const Infrastructure = () => {
  const { theme } = useTheme();
  
  return (
    <Fragment>
      <ProjectContainer className={styles.infrastructure}>
        <div className={styles.slogan}>
          <div className={styles.sloganSubtitle}>Infrastructure Equality</div>
          <h1 className={styles.sloganTitle}>
            AI-powered urban resilience: intuitive design for stormwater challenges
          </h1>
          <div className={styles.sloganDivider} />
        </div>
        
        <div className={styles.mainContent}>
          <div className={projectStyles.projectInfo}>
            <section className={projectStyles.contentSection}>
              <div className={projectStyles.contentLeft}>

                <div className={projectStyles.infoBlock}>
                  <h2 className={projectStyles.infoTitle}>Tech Stack</h2>
                  <ul className={projectStyles.infoList}>
                    <li>Python</li>
                    <li>NSGA-II Optimization</li>
                    <li>ArcGIS Spatial Analysis</li>
                  </ul>
                </div>

                <div className={`${styles.infoBlock} ${projectStyles.infoBlock}`}>
                  <h2 className={projectStyles.infoTitle}>My Contribution</h2>
                  <ul className={projectStyles.infoList}>
                    <li>Interface design</li>
                    <li>Policy decision simulations</li>
                    <li>Stakeholder usability validation</li>
                    <li>Risk-benefit visualization</li>
                  </ul>
                </div>
              </div>
              <div className={projectStyles.contentRight}>
                <div className={projectStyles.overviewBlock}>
                  <h2 className={projectStyles.overviewTitle}>Overview</h2>
                  <p className={projectStyles.overviewText}>
                    Traditional flood management focused only on costs, but what about fairness? I built an AI tool that helps cities balance flood risks, infrastructure budgets, and social equity - three goals that often conflict.
                  </p>
                  <p className={projectStyles.overviewText}>
                    To simplify complex tradeoffs, I designed an interactive dashboard where policymakers visually compare scenarios through a sliding interface. For example, adjusting a "Low-Income Priority" slider instantly recalculates flood protection coverage and costs across neighborhoods. The system revealed hybrid strategies deliver more equitable results than conventional methods — all through a single streamlined workflow that turns months of debates into data-driven decisions.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
}; 