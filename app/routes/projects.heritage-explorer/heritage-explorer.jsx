import { Footer } from '~/components/footer';
import {
  ProjectContainer,
} from '~/layouts/project';
import { Fragment } from 'react';
import { baseMeta } from '~/utils/meta';
import styles from './heritage-explorer.module.css';
import { useTheme } from '~/components/theme-provider';
import projectStyles from '~/styles/project.module.css';
import { ImageCarousel } from '~/components/image-carousel/image-carousel';
import image1 from '~/assets/heritage-explorer/data4_1.jpg';
import image2 from '~/assets/heritage-explorer/data4_2.jpg';
import image3 from '~/assets/heritage-explorer/data4_3.jpg';
import image4 from '~/assets/heritage-explorer/data4_4.jpg';

export const meta = () => {
  return baseMeta({
    title: 'Heritage Knowledge Explorer',
    description: 'Prototype a mobile app generating personalized heritage tours via voice/text queries, powered by a 5,000-node knowledge graph.',
    prefix: 'Projects',
  });
};

export const HeritageExplorer = () => {
  const { theme } = useTheme();
  const images = [image1, image2, image3, image4];
  
  return (
    <Fragment>
      <ProjectContainer className={styles.heritageExplorer}>
        <div className={styles.slogan}>
          <div className={styles.sloganSubtitle}>Heritage Knowledge Explorer</div>
          <h1 className={styles.sloganTitle}>
            Click Through Centuries: Forgotten Histories Reloaded
          </h1>
          <div className={styles.sloganDivider} />
        </div>
        
        <div className={styles.mainContent}>
          <div className={projectStyles.projectInfo}>
            <section className={projectStyles.contentSection}>
              <div className={projectStyles.contentLeft}>
                <div className={projectStyles.infoBlock}>
                  <h2 className={projectStyles.infoTitle}>Company</h2>
                  <div className={projectStyles.infoList}>
                    <li>Nanjing Cultural Bureau</li>
                    <li>Southeast University</li>
                  </div>
                </div>

                <div className={projectStyles.infoBlock}>
                  <h2 className={projectStyles.infoTitle}>Team</h2>
                  <ul className={projectStyles.infoList}>
                    <li>Meixuan Liang</li>
                    <li>Yunru Lin</li>
                  </ul>
                </div>

                <div className={projectStyles.infoBlock}>
                  <h2 className={projectStyles.infoTitle}>My Contribution</h2>
                  <ul className={projectStyles.infoList}>
                    <li>User testing</li>
                    <li>Interactive knowledge mapping</li>
                    <li>Visual search optimization</li>
                    <li>Time-based exploration design</li>
                  </ul>
                </div>
              </div>
              <div className={projectStyles.contentRight}>
                <div className={projectStyles.overviewBlock}>
                  <h2 className={projectStyles.overviewTitle}>Overview</h2>
                  <p className={projectStyles.overviewText}>
                    Nanjing's archives hold incredible stories of China's revolutionary past – but how do you get Gen Z to care about dusty old records? That was the challenge from Nanjing Cultural Bureau.
                  </p>
                  <p className={projectStyles.overviewText}>
                    We took 1.6 million words of historical texts and turned them into something you can actually play with. My focus: making historical connections as intuitive as TikTok scrolling.
                  </p>
                  <p className={projectStyles.overviewText}>
                    Here's how it works:
                  </p>
                  <p className={projectStyles.overviewText}>
                    1. <strong>Time Slider</strong>: Drag to see how a site changed from 1927→2024<br/>
                    2. <strong>Bar Search</strong>: "Show protest routes" triggers instant maps<br/>
                    3. <strong>3D Mind Map</strong>: Tap any person/event to see hidden links
                  </p>
                  <p className={projectStyles.overviewText}>
                    Neo4j mapped relationships like social networks, paired with 3D gaming visuals. Teachers loved it – testers at Nanjing Normal University said it made history class feel like detective work!
                  </p>
                </div>
              </div>
            </section>
          </div>
          
          <ImageCarousel 
            images={images.map(img => ({
              src: img,
              srcSet: `${img.replace('.jpg', '-small.webp')} 800w, 
                       ${img.replace('.jpg', '-medium.webp')} 1200w, 
                       ${img.replace('.jpg', '-large.webp')} 1920w`,
              sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            }))} 
          />
        </div>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
}; 