import profileSetupVideo from '/assets/petpals/ProfileSetup.mov';
import matchingVideo from '/assets/petpals/Matching.mov';
import chattingImage from '/assets/petpals/Chatting.png';
import petzbeLogoImage from '/assets/petpals/logos/petzbe.png';
import dogchaLogoImage from '/assets/petpals/logos/dogcha.png';
import woofzLogoImage from '/assets/petpals/logos/woofz.png';
import tinderLogoImage from '/assets/petpals/logos/tinder.png';
import bumbleLogoImage from '/assets/petpals/logos/bumble.png';
import { Footer } from '~/components/footer';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment } from 'react';
import { baseMeta } from '~/utils/meta';
import styles from './petpals.module.css';
import { useTheme } from '~/components/theme-provider';
import { ProjectNav } from '~/components/project-nav/project-nav';

export const meta = () => {
  return baseMeta({
    title: 'PetPals: Online Pet Social Web App',
    description: 'A responsive web app for personalized pet social experiences, featuring AI-driven recommendation system and seamless user interactions.',
    prefix: 'Projects',
  });
};

export const PetPals = () => {
  const { theme } = useTheme();
  
  return (
    <Fragment>
      <ProjectContainer className={styles.petpals}>
        <div className={styles.slogan}>
          <div className={styles.sloganSubtitle}>Petpals - Pet Social Web App</div>
          <h1 className={styles.sloganTitle}>
          Swipe right for the perfect playmate—AI does the rest.
          </h1>
          <div className={styles.sloganDivider} />
        </div>
        
        <div className={styles.projectInfo}>
          <section className={styles.contentSection}>
            <div className={styles.contentLeft}>
              <div className={styles.infoBlock}>
                <h2 className={styles.infoTitle}>Team</h2>
                <ul className={styles.infoList}>
                  <li>Miaoyang Ye</li>
                  <li>Apple Sun</li>
                </ul>
              </div>

              <div className={styles.infoBlock}>
                <h2 className={styles.infoTitle}>Tech Stack</h2>
                <ul className={styles.infoList}>
                  <li>Python, Django, React</li>
                  <li>SQL, OpenAI API, AWS</li>
                </ul>
              </div>

              <div className={styles.infoBlock}>
                <h2 className={styles.infoTitle}>My Contribution</h2>
                <ul className={styles.infoList}>
                  <li>User Research & Testing</li>
                  <li>UIUX Design</li>
                  <li>Agile Development</li>
                </ul>
              </div>
            </div>
            <div className={styles.contentRight}>
              <div className={styles.overviewBlock}>
                <h2 className={styles.overviewTitle}>Overview</h2>
                <p className={styles.overviewText}>
                  This is a <strong>0 to 1 end-to-end</strong> project developing an AI-powered pet social platform, integrating ChatGPT for matchmaking and Google Maps for location-based meetups.
                </p>
                <p className={styles.overviewText}>
                  My primary contributions include user research, designing high-fidelity prototypes in Figma, and <strong>optimizing the design-to-code workflow</strong> by leveraging Figma's developer mode to generate structured React.js components. I developed the entire frontend architecture and implemented backend API integrations, ensuring seamless system interactions and AI-driven recommendations.
                </p>
                <p className={styles.overviewText}>
                  PetPals was praised by faculty for its innovative use of AI and dating app mechanics, effectively bridging market gaps in pet socialization.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className={styles.divider} />

        <div className={styles.projectDetails}>
          <div className={styles.problemHeader}>
            <div className={styles.problemSubtitle}>● What's wrong</div>
            <h2 className={styles.problemTitle}>
              Finding Dog Community Shouldn't Be Hard
            </h2>
            <p className={styles.problemDescription}>
              New pet owners struggle to find a dog-friendly community, leaving both them and their pets isolated.
            </p>
          </div>

          <section className={styles.contentSection}>
            <div className={styles.contentLeft}>
              <h2 className={styles.sectionTitle}>No Easy Way to Connect</h2>
            </div>
            <div className={styles.contentRight}>
              <div className={styles.sectionGroup}>
                <p className={styles.sectionText}>
                ○ Meeting other dog owners relies on chance encounters—there's no structured way to find a local pet community.
                </p>
                <p className={styles.sectionText}>
                ○ Without existing connections, it's awkward to approach strangers just to set up playdates.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.contentSection}>
            <div className={styles.contentLeft}>
              <h2 className={styles.sectionTitle}>Scattered & Inefficient Information</h2>
            </div>
            <div className={styles.contentRight}>
              <div className={styles.sectionGroup}>
                <p className={styles.sectionText}>
                ○ No clear guidance on where to walk dogs, nearby dog parks, or active pet communities.
                </p>
                <p className={styles.sectionText}>
                ○ Existing pet apps are overcomplicated, requiring extensive profiles but failing to match pets effectively.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.contentSection}>
            <div className={styles.contentLeft}>
              <h2 className={styles.sectionTitle}>Mismatch & Compatibility Issues</h2>
            </div>
            <div className={styles.contentRight}>
              <div className={styles.sectionGroup}>
                <p className={styles.sectionText}>
                ○ Dogs have specific play needs based on size, breed, and status (spayed/neutered), making random matching ineffective.
                </p>
                <p className={styles.sectionText}>
                ○ Scheduling a walk with a compatible playmate is frustrating—no one has time to browse endless profiles.
                </p>
              </div>
            </div>
              </section>


          <div className={styles.divider} />

          <div className={styles.projectDetails}>
            <div className={styles.problemHeader}>
              <div className={styles.problemSubtitle}>● Market Research</div>
              <h2 className={styles.problemTitle}>
                Pet Social Apps vs. Dating Apps
              </h2>
            </div>

            <div className={styles.comparisonSection}>
              <div className={styles.comparisonLeft}>
                <h3 className={styles.comparisonTitle}>Pet Social Apps: Complicated & Ineffective</h3>
                <p className={styles.comparisonText}>
                  <strong>Petzbe, DogCha!, Woofz</strong> – Require long setups, lack smart matching, and don't help with real-world meetups.
                </p>
                <div className={styles.comparisonLogos}>
                  <img src={petzbeLogoImage} alt="Petzbe" className={styles.comparisonLogo} />
                  <img src={dogchaLogoImage} alt="DogCha!" className={styles.comparisonLogo} />
                  <img src={woofzLogoImage} alt="Woofz" className={styles.comparisonLogo} />
                </div>
              </div>

              <div className={styles.comparisonRight}>
                <h3 className={styles.comparisonTitle}>Dating Apps: Simple & Effective</h3>
                <p className={styles.comparisonText}>
                  <strong>Tinder, Bumble</strong> – Use swipe-based matching, smart filters, and effortless meetups.
                </p>
                <div className={styles.comparisonLogos}>
                  <img src={tinderLogoImage} alt="Tinder" className={styles.comparisonLogo} />
                  <img src={bumbleLogoImage} alt="Bumble" className={styles.comparisonLogo} />
                </div>
              </div>
            </div>

            <div className={styles.comparisonInsight}>
              <p className={styles.insightText}>
                    💡 More in Common Than You Think! Both connect strangers based on compatibility, but pet social apps lag behind. So we built an AI-powered pet matchmaking app with swipe-based matching, smart filters, and easy meetups—just like a dating app, but for pets!
                  </p>
                </div>
          </div>

          <div className={styles.divider} />

          <div className={styles.solutionContainer}>
            <div className={styles.inverted} data-theme={theme === 'light' ? 'dark' : 'light'}>
              <h2 className={styles.solutionTitle}>
                Our Solution
              </h2>

              <div className={styles.solutionSteps}>
                <div className={styles.solutionStep}>
                  <div className={styles.solutionImage}>
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className={styles.solutionVideo}
                    >
                      <source src={profileSetupVideo} type="video/mp4" />
                    </video>
                  </div>
                  <div className={styles.stepContent}>
                    <div className={styles.stepNumber}>1</div>
                    <h3 className={styles.sectionTitle}>Quick Profile Setup – Fast & Engaging Onboarding</h3>
                    <div className={styles.sectionGroup}>
                      <p className={styles.sectionText}>
                        Effortless onboarding – Set up your pet's profile in seconds, no lengthy forms.
                      </p>
                      <p className={styles.sectionText}>
                        Red Flags & Green Flags – A fun, dating-app-inspired way to filter playmates, making compatibility selection quick and engaging.
                      </p>
                    </div>
                  </div>
                </div>

                <div className={styles.solutionStep}>
                  <div className={styles.solutionImage}>
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className={styles.solutionVideo}
                    >
                      <source src={matchingVideo} type="video/mp4" />
                    </video>
                  </div>
                  <div className={styles.stepContent}>
                    <div className={styles.stepNumber}>2</div>
                    <h3 className={styles.sectionTitle}>Swipe to Match – AI-Driven & Convenient</h3>
                    <div className={styles.sectionGroup}>
                      <p className={styles.sectionText}>
                        Two Smart Sorting Options – AI ranks matches by distance and compatibility score, ensuring better connections.
                      </p>
                      <p className={styles.sectionText}>
                        Swipe Right to "Swap Your Tail" – An intuitive, swipe-based experience for effortless pet matchmaking.
                      </p>
                    </div>
                  </div>
                </div>

                <div className={styles.solutionStep}>
                  <div className={styles.solutionImage}>
                    <img src={chattingImage} alt="Chat & Meet Up" />
                  </div>
                  <div className={styles.stepContent}>
                    <div className={styles.stepNumber}>3</div>
                    <h3 className={styles.sectionTitle}>Chat & Meet Up – Find & Connect Instantly</h3>
                    <div className={styles.sectionGroup}>
                      <p className={styles.sectionText}>
                        Match. Chat. Meet. – Instantly connect with nearby pet owners for a perfect playdate.
                      </p>
                      <p className={styles.sectionText}>
                        Google Maps Integration – Quickly find dog-friendly parks and walking spots to schedule meetups.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ProjectContainer>
      <ProjectNav currentPath="/projects/petpals" />
      <Footer />
    </Fragment>
  );
};

export default PetPals;