import { Footer } from '~/components/footer';
import {
  ProjectContainer
} from '~/layouts/project';
import { Fragment } from 'react';
import { baseMeta } from '~/utils/meta';
import styles from './mr-finder.module.css';
import projectStyles from '~/styles/project.module.css';
import airbnbIcon from '/assets/mr-finder/noun-airbnb-6212186.png';
import travelIcon from '/assets/mr-finder/noun-arrivals-6069945.png';
import caregiverIcon from '/assets/mr-finder/noun-caregiver-6549679.png';
import scanVideo from '/assets/mr-finder/scan.mp4';
import tagVideo from '/assets/mr-finder/tag.mp4';
import askVideo from '/assets/mr-finder/Ask.mp4';
import followVideo from '/assets/mr-finder/Follow.mp4';
import airbnbImage from '/assets/mr-finder/airbnb.png';
import cognitive3dImage from '/assets/mr-finder/cognitive3d.mp4';


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
                  <a 
                    href="https://github.com/azb/MR-Finder"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.repoLink}
                  >
                    <svg 
                      viewBox="0 0 24 24" 
                      className={styles.githubIcon}
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Github Code Sample
                  </a>
                </div>
              </div>
            </section>

           

            <div className={projectStyles.sectionContainer}>
              <div className={projectStyles.sectionHeader}>
                <h2 className={projectStyles.sectionSubtitle}>● Why It Matters</h2>
                <div className={projectStyles.sectionTitle}>
                  Lost your keys... again?
                </div>
                <div className={projectStyles.sectionDescription}>
                  We've all wasted hours searching for lost keys, passports, or that one missing charger. MR Finder tackles this universal frustration by reimagining how humans interact with physical spaces.
                </div>
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
            
            
            <div className={projectStyles.solutionContainer}>
              <div className={projectStyles.inverted} data-theme="dark">
                <h2 className={projectStyles.solutionTitle}>
                  Our Solution
                </h2>

                <div className={projectStyles.solutionSteps}>
                  <div className={projectStyles.solutionStep}>
                    <div className={projectStyles.solutionImage}>
                      <video
                        className={projectStyles.solutionVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source src={scanVideo} type="video/mp4" />
                      </video>
                    </div>
                    <div className={projectStyles.stepContent}>
                      <div className={projectStyles.stepNumber}>1</div>
                      <h3 className={projectStyles.sectionTitle}>Map Your Space</h3>
                      <p className={projectStyles.sectionText}>
                      Using your Quest 3 headset, scan your room for about 20 seconds. Behind the scenes, our advanced SLAM engine builds a precise 3D map of your environment with 1cm accuracy, establishing digital anchors on walls and floors.                      </p>
                    </div>
                  </div>

                  <div className={projectStyles.solutionStep}>
                    <div className={projectStyles.solutionImage}>
                      <video
                        className={projectStyles.solutionVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source src={tagVideo} type="video/mp4" />
                      </video>
                    </div>
                    <div className={projectStyles.stepContent}>
                      <div className={projectStyles.stepNumber}>2</div>
                      <h3 className={projectStyles.sectionTitle}>Tag Critical Items</h3>
                      <p className={projectStyles.sectionText}>
                      Simply speak a command like "Tag my passport here" or capture a photo of an item. The system records its location at pinpoint-accurate, GPS-free coordinates, ensuring the tag remains intact even if the room is rearranged.</p>
                    </div>
                  </div>

                  <div className={projectStyles.solutionStep}>
                    <div className={projectStyles.solutionImage}>
                      <video
                        className={projectStyles.solutionVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source src={askVideo} type="video/mp4" />
                      </video>
                    </div>
                    <div className={projectStyles.stepContent}>
                      <div className={projectStyles.stepNumber}>3</div>
                      <h3 className={projectStyles.sectionTitle}>Voice-Activated Search</h3>
                      <p className={projectStyles.sectionText}>
                        When you need to locate something, just say, "Where's my medication?" Our GPT-4–powered system processes your natural voice command, matches it to your tagged items, and retrieves their exact coordinates instantly.</p>
                    </div>
                  </div>

                  <div className={projectStyles.solutionStep}>
                    <div className={projectStyles.solutionImage}>
                      <video
                        className={projectStyles.solutionVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source src={followVideo} type="video/mp4" />
                      </video>
                    </div>
                    <div className={projectStyles.stepContent}>
                      <div className={projectStyles.stepNumber}>4</div>
                      <h3 className={projectStyles.sectionTitle}>Follow AR Guide</h3>
                      <p className={projectStyles.sectionText}>
                    AR cues take over as virtual arrows, audio prompts, or a heatmap overlay appear in your headset, guiding you seamlessly along an optimized navigation path rendered by MRTK.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.useCaseContainer}>
              <div className={styles.useCaseStep}>
                <div className={styles.useCaseContent}>
                  <h2 className={projectStyles.sectionSubtitle}>
                    ● Airbnb Use Case
                  </h2>
                  <div className={projectStyles.sectionTitle}>
                  Effortless Hospitality, No More Notes
                </div>
                <div className={projectStyles.sectionDescription}>
                Airbnb hosts pre-tag essentials—Wi-Fi cards, extra towels, coffee machines—so guests simply wear a headset, speak their needs, and follow AR cues. No more handwritten notes or phone calls; language barriers vanish for a truly seamless stay.                </div>
                </div>
                <div className={styles.useCaseImage}>
                  <img src={airbnbImage} alt="Airbnb use case illustration" />
                </div>
              </div>
            </div>
            
            <div className={styles.useCaseContainer}>
              <div className={styles.useCaseStep}>
                <div className={styles.useCaseContent}>
                  <h2 className={projectStyles.sectionSubtitle}>
                    ● Tech Highlights
                  </h2>
                  <div className={styles.sectionGroup}>
                    <p className={styles.sectionText}>
                      ○ <strong>SLAM Precision</strong>: Continuous scanning locks virtual tags to real objects, preventing AR drift.
                    </p>
                    <p className={styles.sectionText}>
                      ○ <strong>ChatGPT Integration</strong>: Enables natural, conversational queries for a more intuitive experience.
                    </p>
                    <p className={styles.sectionText}>
                      ○ <strong>Unity MRTK</strong>: Powers 3D menus and smooth interactions from hardware inputs.
                    </p>
                    <p className={styles.sectionText}>
                      ○ <strong>Cognitive3D</strong>: Captures spatial data for actionable insights and digital twin potential.
                    </p>
                  </div>
                </div>
                <div className={styles.useCaseImage}>
                  <div className={projectStyles.solutionImage}>
                    <video
                      className={projectStyles.solutionVideo}
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src={cognitive3dImage} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>


            <div className={styles.useCaseContainer}>
              <div className={`${styles.useCaseStep} ${styles.fullWidth}`}>
                <div className={styles.useCaseContent}>
                  <h2 className={projectStyles.sectionSubtitle}>
                    ● Next Steps
                  </h2>
                  <div className={styles.sectionGroup}>
                    <p className={styles.sectionText}>
                      ○ <strong>Automatic Object Recognition</strong>: Use AI-based image analysis to tag items without manual snapshots.
                    </p>
                    <p className={styles.sectionText}>
                      ○ <strong>Expanded Collaboration</strong>: Share digital inventories across multiple headsets, ideal for offices, museums, or senior living communities.
                    </p>
                    <p className={styles.sectionText}>
                      ○ <strong>Cloud Sync & Analytics</strong>: Integrate with cloud platforms to track usage patterns, enabling future digital twin capabilities.
                    </p>
                  </div>
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
