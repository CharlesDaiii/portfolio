import { Footer } from '~/components/footer';
import {
  ProjectContainer,
} from '~/layouts/project';
import { Fragment } from 'react';
import { baseMeta } from '~/utils/meta';
import styles from './bike-sharing.module.css';
import { useTheme } from '~/components/theme-provider';
import projectStyles from '~/styles/project.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Bike-Sharing in Epidemic Era',
    description: 'Created an explainable AI model using SHAP values to decode how pandemic policies and weather impacted urban mobility.',
    prefix: 'Projects',
  });
};

export const BikeSharing = () => {
  const { theme } = useTheme();
  
  return (
    <Fragment>
      <ProjectContainer className={styles.bikeSharing}>
        <div className={styles.slogan}>
          <div className={styles.sloganSubtitle}>Bike-Sharing in Epidemic Era</div>
          <h1 className={styles.sloganTitle}>
            Citi Bike's Secret Weapon: SHAP Explains Your Lockdown Ride
          </h1>
          <div className={styles.sloganDivider} />
        </div>
        
        <div className={styles.mainContent}>
          <div className={projectStyles.projectInfo}>
            <section className={projectStyles.contentSection}>
              <div className={projectStyles.contentLeft}>

                <div className={projectStyles.infoBlock}>
                  <h2 className={projectStyles.infoTitle}>Team</h2>
                  <ul className={projectStyles.infoList}>
                    <li>Yecheng Zhang, Zixuan Wang</li>
                    <li>Wenya Xu, Wen Wenen</li>
                  </ul>
                </div>

                <div className={projectStyles.infoBlock}>
                  <h2 className={projectStyles.infoTitle}>My Contribution</h2>
                  <ul className={projectStyles.infoList}>
                    <li>Data-based storytelling</li>
                    <li>Causality explanation design</li>
                    <li>Pandemic impact visualization</li>
                    <li>Cross-department model alignment</li>
                  </ul>
                </div>
              </div>
              <div className={projectStyles.contentRight}>
                <div className={projectStyles.overviewBlock}>
                  <h2 className={projectStyles.overviewTitle}>Overview</h2>
                  <p className={projectStyles.overviewText}>
                    During lockdowns, I kept wondering - why were some bike stations still busy while others emptied? The data had answers, but needed translation.
                  </p>
                  <p className={projectStyles.overviewText}>
                    I led the visualization layer of a machine learning system that decodes pandemic impacts on urban mobility. Using SHAP values, my heatmaps and interactive modules let users click any station to see exactly why ridership changed. Now urban planners can stop guessing and start data-talking with citizens.
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