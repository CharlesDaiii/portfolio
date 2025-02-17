import { Footer } from '~/components/footer';
import {
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
  ProjectImage,
} from '~/layouts/project';
import { Fragment } from 'react';
import { baseMeta } from '~/utils/meta';
import styles from './mr-finder.module.css';
import projectStyles from '~/styles/project.module.css';
import demoVideo from '~/assets/mr-finder/demo.mp4';
import demoPoster from '~/assets/mr-finder/demo-poster.jpg';
import mrfinder1 from '~/assets/mr-finder/mrfinder1.png';
import mrfinder2 from '~/assets/mr-finder/mrfinder2.png';
import mrfinder3 from '~/assets/mr-finder/mrfinder3.png';
import airbnbIcon from '~/assets/mr-finder/noun-airbnb-6212186.png';
import travelIcon from '~/assets/mr-finder/noun-arrivals-6069945.png';
import caregiverIcon from '~/assets/mr-finder/noun-caregiver-6549679.png';

export const meta = () => {
  return baseMeta({
    title: 'MR Finder - Spatial Intelligence for Real-World Search',
    description: 'Never Lose Anything Again. Anywhere.',
    prefix: 'Projects | ',
  });
};

export default function MRFinder() {
  return (
    <Fragment>
      <ProjectContainer className={styles.mrFinder}>
        <div className={styles.slogan}>
          <div className={styles.sloganSubtitle}>MR Finder - Spatial Intelligence for Real-World Search</div>
          <h1 className={styles.sloganTitle}>
            Never Lose Anything Again. Anywhere.
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
                    <li>Sutanuka Jashu (Researcher)</li>
                    <li>Arthur Baney (SDE)</li>
                    <li>Sowilo Xiong (SDE)</li>
                    <li>Jiachen Zeng (PM)</li>
                  </ul>
                </div>

                <div className={projectStyles.infoBlock}>
                  <h2 className={projectStyles.infoTitle}>My Contribution</h2>
                  <ul className={projectStyles.infoList}>
                    <li>Built Figma-Unity Design Workflows</li>
                    <li>Designed Voice-Driven AR Navigation</li>
                    <li>Led Cross-Team UX Alignment</li>
                  </ul>
                </div>

                <div className={projectStyles.infoBlock}>
                  <h2 className={projectStyles.infoTitle}>Tech Stack</h2>
                  <div className={projectStyles.infoList}>
                    Unity + MRTK, Wit.ai, Meta Quest SDK, SLAM, Cognitive3D
                    <div className={styles.hackathonNote}>Developed at MIT Reality Hack 2024</div>
                  </div>
                </div>
              </div>
              
              <div className={projectStyles.contentRight}>
                <div className={projectStyles.overviewBlock}>
                  <h2 className={projectStyles.overviewTitle}>Overview</h2>
                  <p className={projectStyles.overviewText}>
                    We lose critical items daily—passports buried in drawers, keys swallowed by clutter, Wi-Fi codes on vanishing sticky notes. MR Finder tackles this chaos through AI-driven spatial anchors, blending voice commands and persistent mixed reality markers to turn any space into a searchable inventory.
                  </p>
                  <p className={projectStyles.overviewText}>
                    As a five-person team at MIT Reality Hack, we reimagined lost-and-found by merging <strong>SLAM-based 3D mapping</strong> (Meta Quest 3) and Unity MRTK interactions with <strong>conversational AI</strong>. Users tag items via voice/photo and retrieve them months later with AR arrows—no computer vision or extra hardware required.
                  </p>
                  <p className={projectStyles.overviewText}>
                    By anchoring digital memory to physical spaces, MR Finder redefines lost-and-found for real-world chaos.
                  </p>
                </div>
              </div>
            </section>

            <section className={styles.demoSection}>
              <div>
                <div className={styles.demoHeader}>
                  <span className={styles.demoText}>Watch 30s Demo below⬇️</span>
                  <span className={styles.divider}>|</span>
                  <a 
                    href="https://github.com/azb/MR-Finder"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.repoLink}
                  >
                    Github Code Sample
                  </a>
                </div>
                <div className={styles.videoContainer}>
                  <video
                    className={styles.video}
                    poster={demoPoster}
                    controls
                    muted
                    playsInline
                    preload="none"
                  >
                    <source src={demoVideo} type="video/mp4" />
                  </video>
                </div>
              </div>
              
              
              <div className={styles.imagesContainer}>
                <div className={styles.demoImage}>
                  <img src={mrfinder1} alt="MR Finder interface 1" />
                </div>
                <div className={styles.demoImage}>
                  <img src={mrfinder3} alt="MR Finder interface 3" />
                </div>
              </div>
            </section>

            <div className={projectStyles.sectionContainer}>
              <div className={projectStyles.sectionHeader}>
                <h2 className={projectStyles.sectionSubtitle}>Why It Matters</h2>
                <div className={projectStyles.sectionTitle}>
                Lost your keys... again?
                </div>
                <div className={projectStyles.sectionDescription}>
                We've all wasted hours searching for lost keys, passports, or that one missing charger. MR Finder tackles this universal frustration by reimagining how humans interact with physical spaces.
                </div>
              </div>

              <div className={styles.scenariosContainer}>
                <div className={styles.scenariosGrid}>
                  {[
                    {
                      title: 'Airbnb Hosts',
                      icon: airbnbIcon,
                      frustration: '"Guests call me at 2AM for Wi-Fi codes"',
                    },
                    {
                      title: 'Frequent Travelers',
                      icon: travelIcon,
                      frustration: '"I hid my passport somewhere safe..."',
                    },
                    {
                      title: 'Caregivers',
                      icon: caregiverIcon,
                      frustration: '"I spend 30 mins daily searching for pills"',
                    }
                  ].map((scenario, index) => (
                    <div key={index} className={styles.scenarioCard}>
                      <h3 className={styles.scenarioTitle}>
                        <img 
                          src={scenario.icon} 
                          alt="" 
                          className={styles.scenarioIcon}
                        />
                        {scenario.title}
                      </h3>
                      <div className={styles.scenarioContent}>
                        <p className={styles.blockText}>{scenario.frustration}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
}
