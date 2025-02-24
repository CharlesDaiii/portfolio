import { Footer } from '~/components/footer';
import { useTheme } from '~/components/theme-provider';
import { ImageCarousel } from '~/components/image-carousel';
import {
  ProjectContainer,
} from '~/layouts/project';
import { Fragment, useState, useEffect } from 'react';
import { baseMeta } from '~/utils/meta';
import { optimizeImage } from '~/utils/image-optimization';
import styles from './bike-sharing.module.css';
import projectStyles from '~/styles/project.module.css';
import { ProjectNav } from '~/components/project-nav/project-nav';

import data5_1 from '/assets/bike-sharing/data5_1.jpg';
import data5_2 from '/assets/bike-sharing/data5_2.jpg';
import data5_3 from '/assets/bike-sharing/data5_3.jpg';
import data5_4 from '/assets/bike-sharing/data5_4.jpg';
import data5_5 from '/assets/bike-sharing/data5_5.jpg';

export const meta = () => {
  return baseMeta({
    title: 'Bike-Sharing in Epidemic Era',
    description: 'Created an explainable AI model using SHAP values to decode how pandemic policies and weather impacted urban mobility.',
    prefix: 'Projects',
  });
};

export const BikeSharing = () => {
  const [optimizedImages, setOptimizedImages] = useState([]);
  const { theme } = useTheme();
  const originalImages = [data5_1, data5_2, data5_3, data5_4, data5_5];

  useEffect(() => {
    const processImages = async () => {
      const processed = await Promise.all(
        originalImages.map(async (img) => {
          return {
            original: img,
            compressed: await optimizeImage(img, {
              maxWidth: 1600,
              quality: 95,
              format: 'webp'
            }),
            thumbnail: await optimizeImage(img, {
              maxWidth: 300,
              quality: 90,
              format: 'webp'
            })
          };
        })
      );
      setOptimizedImages(processed);
    };

    processImages();
  }, []);

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
                    <li>Wenya Xu, Wen Wen</li>
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
          <ImageCarousel 
            images={optimizedImages.map(img => ({
              src: img.original,
              compressed: img.compressed,
              thumbnail: img.thumbnail
            }))}
          />
        </div>
      </ProjectContainer>
      <ProjectNav currentPath="/projects/bike-sharing" />
      <Footer />
    </Fragment>
  );
}; 