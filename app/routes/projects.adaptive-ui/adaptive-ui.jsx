import { Footer } from '~/components/footer';
import {
  ProjectContainer,
} from '~/layouts/project';
import { Fragment } from 'react';
import { baseMeta } from '~/utils/meta';
import styles from './adaptive-ui.module.css';
import { useTheme } from '~/components/theme-provider';
import workshopSlidesPDF from '~/assets/adaptive-ui/workshop-slides.pdf';
import discussionImage from '~/assets/adaptive-ui/Discussion.jpg';
import brainstormingImage from '~/assets/adaptive-ui/Brainstorming.jpg';
import auiReport1Image from '~/assets/adaptive-ui/AUIReport1.jpg';
import auiReport2Image from '~/assets/adaptive-ui/AUIReprot2.jpg';

export const meta = () => {
  return baseMeta({
    title: 'Adaptive UI for Philips Sleep & Respiratory Care',
    description: 'An AI-driven initiative at Philips—combining an Adaptive UI workshop I led and collaborative user testing with fellow designers, to deliver personalized, compliant interfaces for CPAP devices.',
    prefix: 'Projects',
  });
};

export const AdaptiveUI = () => {
  const { theme } = useTheme();
  
  return (
    <Fragment>
      <ProjectContainer className={styles.adaptiveUI}>
        <div className={styles.slogan}>
          <div className={styles.sloganSubtitle}>Adaptive UI – Workshop & User Testing for Philips Sleep & Respiratory Care</div>
          <h1 className={styles.sloganTitle}>
          Breathe easy: Subtle AI that adapts, never overshadows.
          </h1>
          <div className={styles.sloganDivider} />
        </div>
        
        <div className={styles.projectInfo}>
          <section className={styles.contentSection}>
            <div className={styles.contentLeft}>
              <div className={styles.infoBlock}>
                <h2 className={styles.infoTitle}>Company</h2>
                <div className={styles.infoContent}>Philips</div>
              </div>

              <div className={styles.infoBlock}>
                <h2 className={styles.infoTitle}>Team</h2>
                <ul className={styles.infoList}>
                  <li><strong>Sara Wang</strong> (UX Designer)</li>
                  <li><strong>Keith Fraser</strong> (Senior UX Designer)</li>
                  <li><strong>10+ Philips colleagues</strong> (R&D, Marketing, Engineering)</li>
                </ul>
              </div>

              <div className={styles.infoBlock}>
                <h2 className={styles.infoTitle}>My Contribution</h2>
                <ol className={styles.infoList}>
                  <li><strong>AUI Workshop Lead</strong></li>
                  <li><strong>User Research & Testing</strong></li>
                  <li><strong>Design Prototype & Analysis</strong></li>
                </ol>
              </div>
            </div>
            <div className={styles.contentRight}>
              <div className={styles.overviewBlock}>
                <h2 className={styles.overviewTitle}>Overview</h2>
                <p className={styles.overviewText}>
                  During my internship at Philips Sleep & Respiratory Care, I explored how <strong>Adaptive UI</strong>—small yet powerful AI enhancements—could make <strong>CPAP therapy</strong> more user-friendly.
                </p>
                <p className={styles.overviewText}>
                  I tackled two closely related projects: first, I organized an in-house workshop to align cross-functional teams on AUI opportunities; next, I worked with two fellow UX designers to build and test four prototype concepts with real users.
                </p>
                <p className={styles.overviewText}>
                  Our small-scale study indicated a potential <strong>10–15% boost</strong> in device usage and user satisfaction. By offering <strong>subtle, user-controlled AI features</strong>, we reduced everyday friction so patients could stick to their CPAP routines more easily—helping them stay on track with treatment in a natural, comfortable way.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className={styles.divider} />

        <div className={styles.workshopContainer}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionSubtitle}>● The Workshop</div>
            <h2 className={styles.sectionTitle}>
                Exploring Adaptive UI to Improve CPAP Usage
            </h2>
            <p className={styles.sectionDescription}>
                Nearly 50% of CPAP users drop out due to complexity. I led a Philips workshop to design subtle AI cues that simplify tasks and boost adherence.
            </p>
          </div>

          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineStep}>1</div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>Introduce the concept of AUI</h3>
                <div className={styles.timelineMedia}>
                  <div className={styles.pdfViewer}>
                    <object
                      data={workshopSlidesPDF}
                      type="application/pdf"
                      className={styles.pdfObject}
                    >
                      <p>Your browser does not support PDFs. Please download the PDF to view it: 
                        <a href={workshopSlidesPDF}>Download PDF</a>
                      </p>
                    </object>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineStep}>2</div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>Break & Discussion</h3>
                <div className={styles.timelineMedia}>
                  <div className={styles.discussionImage}>
                    <img src={discussionImage} alt="Team discussion during the workshop" className={styles.image} />
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineStep}>3</div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>Brainstorming: Identifying AUI Opportunities in SR&C</h3>
                <div className={styles.timelineMedia}>
                  <div className={styles.brainstormingContainer}>
                    <div className={styles.paperA4}>
                      <img src={brainstormingImage} alt="Initial brainstorming ideas" className={styles.paperImage} />
                    </div>
                    <div className={styles.arrowContainer}>
                      ➡️
                    </div>
                    <div className={styles.paperA4}>
                      <img src={auiReport1Image} alt="User scenarios analysis" className={styles.paperImage} />
                    </div>
                    <div className={styles.paperGap}></div>
                    <div className={styles.paperA4}>
                      <img src={auiReport2Image} alt="AUI solutions proposal" className={styles.paperImage} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.sectionHeader}>
            <div className={styles.sectionSubtitle}>● After Workshop</div>
          </div>

          <div className={styles.afterWorkshop}>
            <div className={styles.afterWorkshopItem}>
              <h3 className={styles.afterWorkshopTitle}>1. Prototype Development</h3>
              <p className={styles.afterWorkshopText}>Implementing AUI Concepts in Practice</p>
              <div className={styles.afterWorkshopMedia}>
                <div className={styles.prototypeGrid}>
                  Four Collaborative Prototypes
                </div>
              </div>
            </div>

            <div className={styles.afterWorkshopItem}>
              <h3 className={styles.afterWorkshopTitle}>2. User Testing Design</h3>
              <p className={styles.afterWorkshopText}>Planning the evaluation framework</p>
              <div className={styles.afterWorkshopMedia}>
                <div className={styles.testingDesign}>
                  Testing Framework & Methodology
                </div>
              </div>
            </div>

            <div className={styles.afterWorkshopItem}>
              <h3 className={styles.afterWorkshopTitle}>3. Testing Results</h3>
              <p className={styles.afterWorkshopText}>Key Findings & Insights</p>
              <div className={styles.afterWorkshopMedia}>
                <div className={styles.testingResults}>
                  10-15% Improvement in User Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.divider} />
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};

export default AdaptiveUI; 