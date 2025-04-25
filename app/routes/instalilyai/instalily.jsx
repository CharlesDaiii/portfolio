import { Fragment, useEffect } from 'react';
import { Link } from '@remix-run/react';
import styles from './instalily.module.css';
import { baseMeta } from '~/utils/meta';

export const meta = () => {
  return baseMeta({
    title: 'Ziying Qi - Design Engineer Candidate @ Instalily',
    description: 'A tailored portfolio page highlighting Ziying Qi\'s relevant experience and skills for the Design Engineer position at Instalily.',
  });
};

export default function Instalily() {
  // Log when component mounts to verify it's being loaded
  useEffect(() => {
    console.log("Instalily page loaded");
  }, []);

  return (
    <Fragment>
      <div className={styles.container}>
        <section className={styles.hero}>
          <h1 className={styles.name}>Ziying Qi</h1>
          <h2 className={styles.title}>Design Engineer Candidate @ Instalily.ai</h2>
        </section>
        
        <div className={styles.twoColumnLayout}>
          <div className={styles.leftColumn}>
            <section className={styles.about}>
              <h3 className={styles.sectionHeading}>👋 Who I Am</h3>
              <p className={styles.paragraph}>
                Hi, I'm Ziying — a design engineer who loves building things that actually work and feel good to use. I come from a background in computational design and UX, and I've spent the past few years working across healthcare, social platforms, and AI-driven tools. Whether it's designing interfaces in Figma, coding up responsive React components, or integrating APIs like ChatGPT or Google Maps, I enjoy connecting the dots between ideas and real-world products.
              </p>
              
              <h3 className={styles.sectionHeading}>🤝 Why I'm a Fit for Instalily</h3>
              <p className={styles.paragraph}>
                What really drew me to Instalily is the way you treat agents not as one-off tools, but as composable systems that adapt, learn, and move work forward. That kind of structure-first, outcomes-driven mindset really resonates with how I approach design and engineering. I've built AI-powered features into full-stack apps, collaborated on conversational UX for healthcare, and led end-to-end design projects that balance complexity and clarity. I'm excited about the possibility of contributing to something that's pushing agentic systems beyond dashboards—and into action.
              </p>
            </section>
          </div>
          
          <div className={styles.rightColumn}>
            <section className={styles.projects}>
              <h2 className={styles.sectionTitle}>Relevant Projects</h2>
              
              <div className={styles.projectsGrid}>
                <Link to="/projects/petpals" className={styles.projectCard}>
                  <div className={styles.projectContent}>
                    <h3 className={styles.projectTitle}>PetPals</h3>
                    <p className={styles.projectDescription}>
                      A pet social web app using AI-driven matching and full-stack development.
                    </p>
                  </div>
                </Link>
                
                <Link to="/projects/adaptive-ui" className={styles.projectCard}>
                  <div className={styles.projectContent}>
                    <h3 className={styles.projectTitle}>Philips UX Internship</h3>
                    <p className={styles.projectDescription}>
                      Embedded UI, usability testing, and smart mask design for medical devices.
                    </p>
                  </div>
                </Link>
                
                <Link to="/projects/mr-finder" className={styles.projectCard}>
                  <div className={styles.projectContent}>
                    <h3 className={styles.projectTitle}>MR Finder: Mixed Reality</h3>
                    <p className={styles.projectDescription}>
                      A mixed reality application designed to help find lost items, showcasing my interface design for emerging technologies.
                    </p>
                  </div>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Fragment>
  );
} 