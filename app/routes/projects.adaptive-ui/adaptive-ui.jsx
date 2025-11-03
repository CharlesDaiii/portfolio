import { Footer } from '~/components/footer';
import {
  ProjectContainer,
} from '~/layouts/project';
import { Fragment } from 'react';
import { baseMeta } from '~/utils/meta';
import styles from './adaptive-ui.module.css';
import { useTheme } from '~/components/theme-provider';
import workshopSlidesPDF from '/assets/adaptive-ui/workshop-slides.pdf';
import discussionImage from '/assets/adaptive-ui/Discussion.jpg';
import brainstormingImage from '/assets/adaptive-ui/Brainstorming.jpg';
import AUIReport1Image from '/assets/adaptive-ui/AUIReport1.jpg';
import AUIReport2Image from '/assets/adaptive-ui/AUIReprot2.jpg';
import AUIReport3Image from '/assets/adaptive-ui/AUIReprot3.jpg';
import therapy1Image from '/assets/adaptive-ui/Therapy1.png';
import therapy2Image from '/assets/adaptive-ui/Therapy2.png';
import therapy3Image from '/assets/adaptive-ui/Therapy3.png';
import therapy4Image from '/assets/adaptive-ui/Therapy4.png';
import projectStyles from '~/styles/project.module.css';
import { ProjectNav } from '~/components/project-nav/project-nav';

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
        
        <div className={styles.mainContent}>
          <div className={projectStyles.projectInfo}>
            <section className={projectStyles.contentSection}>
              <div className={projectStyles.contentLeft}>
                <div className={projectStyles.infoBlock}>
                  <h2 className={projectStyles.infoTitle}>Company</h2>
                  <div className={projectStyles.infoList}>Philips</div>
                </div>

                <div className={projectStyles.infoBlock}>
                  <h2 className={projectStyles.infoTitle}>Team</h2>
                  <ul className={projectStyles.infoList}>
                    <li>Sara Wang(UX Designer)</li>
                    <li>Keith Fraser(Senior UX Designer)</li>
                    <li>10+ Philips colleagues(R&D, Marketing, Engineering)</li>
                  </ul>
                </div>

                <div className={`${styles.infoBlock} ${projectStyles.infoBlock}`}>
                  <h2 className={projectStyles.infoTitle}>My Contribution</h2>
                  <ol className={projectStyles.infoList}>
                    <li>AUI Workshop Lead</li>
                    <li>User Research & Testing</li>
                    <li>Design Prototype & Analysis</li>
                  </ol>
                </div>
              </div>
              <div className={projectStyles.contentRight}>
                <div className={projectStyles.overviewBlock}>
                  <h2 className={projectStyles.overviewTitle}>Overview</h2>
                  <p className={projectStyles.overviewText}>
                    During my internship at Philips Sleep & Respiratory Care, I explored how <strong>Adaptive UI</strong>—small yet powerful AI enhancements—could make <strong>CPAP therapy</strong> more user-friendly.
                  </p>
                  <p className={projectStyles.overviewText}>
                    I tackled two closely related projects: first, I organized an in-house workshop to align cross-functional teams on AUI opportunities; next, I worked with two fellow UX designers to build and test four prototype concepts with real users.
                  </p>
                  <p className={projectStyles.overviewText}>
                    Our small-scale study indicated a potential <strong>10–15% boost</strong> in device usage and user satisfaction. By offering <strong>subtle, user-controlled AI features</strong>, we reduced everyday friction so patients could stick to their CPAP routines more easily—helping them stay on track with treatment in a natural, comfortable way.
                  </p>
                  <p className={projectStyles.overviewText} style={{ fontStyle: 'italic' }}>
                    *This case study reflects work done during my internship at Philips and is intended for portfolio demonstration only. Full content available upon request.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className={projectStyles.sectionContainer}>
            <div className={projectStyles.sectionHeader}>
              <div className={projectStyles.sectionSubtitle}>● Storyboard</div>
            </div>
            <div className={styles.storyboardContainer}>
              <img 
                src="/assets/adaptive-ui/Storyboard.png" 
                alt="Adaptive UI Storyboard" 
                className={styles.storyboardImage} 
              />
            </div>
          </div>

          <div className={projectStyles.sectionContainer}>
            <div className={projectStyles.sectionHeader}>
              <div className={projectStyles.sectionSubtitle}>● The Workshop</div>
              <h2 className={projectStyles.sectionTitle}>
                Exploring Adaptive UI to Improve CPAP Usage
              </h2>
              <p className={projectStyles.sectionDescription}>
                Nearly 50% of CPAP users drop out due to complexity. I led a workshop to design subtle AI cues that simplify tasks and boost adherence.
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
                  <div className={styles.timelineText}>
                    Top left shows workshop brainstorming, top right displays product psychology principles for post-analysis. Bottom row presents workshop reports.
                  </div>
                  <div className={styles.brainstormingRow}>
                    <div className={styles.brainstormingLeft}>
                      <img 
                        src={brainstormingImage} 
                        alt="Initial brainstorming ideas" 
                        className={styles.brainstormingImage} 
                      />
                    </div>
                    <div className={styles.insightCards}>
                      <div className={styles.insightCard}>
                        <div className={styles.insightHeader}>
                          <span className={styles.insightIcon}>🧠</span>
                          <span className={styles.insightTag}>#PSYCHOLOGY INSIGHT</span>
                        </div>
                        <h4 className={styles.insightTitle}>Hick's Law</h4>
                        <p className={styles.insightText}>
                          Too many options can confuse users.<sup>1</sup>
                        </p>
                        <p className={styles.insightText}>
                          By using progressive disclosure<sup>2</sup>, Scribe reduced cognitive load<sup>3</sup> and helped people complete their signature quicker.
                        </p>
                        <div className={styles.insightFooter}>
                          <span className={styles.insightReference}>¹ Hick's Law, Growth.Design</span>
                          <span className={styles.insightReference}>² Progressive Disclosure, Growth.Design</span>
                          <span className={styles.insightReference}>³ Cognitive Load, Growth.Design</span>
                        </div>
                      </div>
                      <div className={styles.insightCard}>
                        <div className={styles.insightHeader}>
                          <span className={styles.insightIcon}>🧠</span>
                          <span className={styles.insightTag}>#PSYCHOLOGY INSIGHT</span>
                        </div>
                        <h4 className={styles.insightTitle}>Drunk User Theory</h4>
                        <p className={styles.insightText}>
                          Users can be distracted, overwhelmed, or inattentive. Designing for the worst-case scenario ensures that core functions remain simple, accessible, and easy to use—even in suboptimal conditions.
                        </p>
                        <p className={styles.insightText}>
                          By minimizing friction and focusing on intuitive interactions, Adaptive UI makes CPAP therapy more seamless.
                        </p>
                        <div className={styles.insightFooter}>
                          <span className={styles.insightReference}>¹ Drunk User Theory, Cassie Kozyrkov</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.reportsRow}>
                    <div className={styles.reportCard}>
                      <img src={AUIReport1Image} alt="User scenarios analysis" className={styles.reportImage} />
                    </div>
                    <div className={styles.reportCard}>
                      <img src={AUIReport2Image} alt="AUI solutions proposal" className={styles.reportImage} />
                    </div>
                    <div className={styles.reportCard}>
                      <img src={AUIReport3Image} alt="Final implementation plan" className={styles.reportImage} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.sectionContainer}>
              <div className={styles.sectionHeader}>
                <div className={projectStyles.sectionSubtitle}>● Prototype Development </div>
                <h2 className={projectStyles.sectionTitle}>Four Prototypes, Smarter Interfaces</h2>
                <div className={projectStyles.sectionDescription}>
                Building on this workshop, I worked with colleagues on a separate research project where we designed and conducted initial testing of four conceptual prototypes for CPAP devices. Although the two projects were independent, both focused on using adaptive interactions to enhance healthcare management, each demonstrating the potential value of adaptive interfaces in different ways.
                </div>
              </div>
              <div className={styles.confidentialNote}>
                Due to confidentiality, these prototypes are shown in a blurred format.
              </div>

              <div className={styles.prototypesGrid}>
                {[
                  { image: therapy1Image, caption: 'Comfort Settings Auto-Adjustment' },
                  { image: therapy2Image, caption: 'Personalized Health Insights' },
                  { image: therapy3Image, caption: 'Auto-Suggestions for Routine Tasks' },
                  { image: therapy4Image, caption: 'Patient Data Integration for Doctor Visits' }
                ].map(({ image, caption }, index) => (
                  <div key={index} className={styles.prototypeCard}>
                    <img src={image} alt={`Prototype ${index + 1}`} className={styles.prototypeImage} />
                    <div className={styles.prototypeCaption}>{caption}</div>
                  </div>
                ))}
              </div>

            
              <div className={styles.testingSection}>
                <div className={projectStyles.sectionSubtitle}>● User Testing</div>
                <h2 className={projectStyles.sectionTitle}>From Complexity to Simplicity</h2>
                <p className={projectStyles.sectionDescription}>
                  We conducted <strong>remote usability testing</strong> with participants on UserTesting.com and <strong>in-person sessions</strong> using <strong>interactive cards</strong>, allowing users to <strong>customize their interface</strong>. The testing revealed <strong>key user preferences</strong> for features, display, and interaction hierarchy, <strong>guiding prototype refinement and validation</strong>. We aimed to achieve the following goals (expected outcomes):
                </p>

                <div className={styles.metricsRow}>
                  {/* Fewer Clicks */}
                  <div className={styles.metricCard}>
                    <div className={styles.metricHeader}>
                      <div className={styles.metricValue}>-30%</div>
                      <div className={styles.metricTitle}>FEWER CLICKS</div>
                    </div>
                    <div className={styles.barsContainer}>
                      <div className={styles.barWrapper}>
                        <div className={styles.barGroup}>
                          <div className={styles.barLabel}>100%</div>
                          <div className={`${styles.bar} ${styles.beforeBar}`} />
                          <div className={styles.barCaption}>Before</div>
                        </div>
                        <div className={styles.barGroup}>
                          <div className={styles.barLabel}>70%</div>
                          <div className={`${styles.bar} ${styles.afterBar}`} />
                          <div className={styles.barCaption}>After</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* User Satisfaction */}
                  <div className={styles.metricCard}>
                    <div className={styles.metricHeader}>
                      <div className={styles.metricValue}>4.0/5</div>
                      <div className={styles.metricTitle}>USER SATISFACTION</div>
                    </div>
                    <div className={styles.progressRings}>
                      <div className={styles.ring}>
                        <svg viewBox="0 0 120 120" className={styles.ringSVG}>
                          {/* 外层环 - 3.2分 */}
                          <circle 
                            cx="60" 
                            cy="60" 
                            r="50" 
                            className={styles.ringOuter}
                            style={{
                              strokeDasharray: `${Math.PI * 100 * 0.64} ${Math.PI * 100}`,
                            }}
                          />
                          {/* 内层环 - 4.1分 */}
                          <circle 
                            cx="60" 
                            cy="60" 
                            r="40"
                            className={styles.ringInner}
                            style={{
                              strokeDasharray: `${Math.PI * 80 * 0.82} ${Math.PI * 80}`,
                            }}
                          />
                        </svg>
                        <div className={styles.ringCaption}>↑ from 3.2</div>
                      </div>
                    </div>
                  </div>

                  {/* Usage Boost */}
                  <div className={styles.metricCard}>
                    <div className={styles.metricHeader}>
                      <div className={styles.metricValue}>+15%</div>
                      <div className={styles.metricTitle}>USAGE BOOST</div>
                    </div>
                    <div className={styles.progressRings}>
                      <div className={styles.ring}>
                        <svg viewBox="0 0 120 120" className={styles.ringSVG}>
                          {/* 基准环 */}
                          <circle 
                            cx="60" 
                            cy="60" 
                            r="50" 
                            className={styles.ringOuter}
                            style={{
                              strokeDasharray: `${Math.PI * 100 * 0.5} ${Math.PI * 100}`,
                            }}
                          />
                          {/* 增长部分 */}
                          <circle 
                            cx="60" 
                            cy="60" 
                            r="50"
                            className={styles.ringInner}
                            style={{
                              strokeDasharray: `${Math.PI * 100 * 0.15} ${Math.PI * 100}`,
                              strokeDashoffset: `${-Math.PI * 100 * 0.5}`,
                            }}
                          />
                        </svg>
                        <div className={styles.ringCaption}>10% — 15%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className={projectStyles.sectionDescription}>
                  Whether during the workshop's <strong>creative phase</strong> or the prototypes' <strong>feasibility testing phase</strong>, the goal remains the same: to help medical devices <strong>better 'understand' user needs</strong> and enable users to <strong>manage their health more conveniently</strong>. Through <strong>continuous iteration and testing</strong>, these <strong>adaptive interface concepts</strong> are poised to evolve into more fully realized product features, ultimately <strong>delivering meaningful improvements</strong> in the healthcare industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ProjectContainer>
      <ProjectNav currentPath="/projects/adaptive-ui" />
      <Footer />
    </Fragment>
  );
};
export default AdaptiveUI;