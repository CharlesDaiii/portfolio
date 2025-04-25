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

// 添加自定义样式，覆盖Link组件的默认紫色
const linkStyle = {
  color: 'inherit',
  textDecoration: 'none'
};

// 添加内联链接样式，带下划线
const inlineLink = {
  color: 'var(--text-primary)',
  textDecoration: 'underline',
  textUnderlineOffset: '2px',
  fontWeight: '500'
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
                Hi, I'm Ziying, a design engineer passionate about building intuitive, enjoyable products. My background blends computational design with hands-on UX/UI development. I've created responsive React experiences, integrated APIs like ChatGPT and Google Maps, and led projects in healthcare UX (<Link to="/projects/adaptive-ui" style={inlineLink}>Philips</Link>) and conversational AI research (<Link to="/projects/breast-cancer-ai" style={inlineLink}>Breast cancer support</Link>). I love turning complex ideas into simple, effective experiences like <Link to="/projects/petpals" style={inlineLink}>PetPals</Link> and <Link to="/projects/mr-finder" style={inlineLink}>MR Finder</Link>.
              </p>
              
              <h3 className={styles.sectionHeading}>🤝 Why I'm a Fit for Instalily</h3>
              <p className={styles.paragraph}>
                What really drew me to Instalily is the way you treat agents not as one-off tools, but as composable systems that adapt, learn, and move work forward. That kind of structure-first, outcomes-driven mindset really resonates with how I approach design and engineering. I'm excited about the possibility of contributing to something that's pushing agentic systems beyond dashboards—and into action.
              </p>
            </section>
          </div>
          
          <div className={styles.rightColumn}>
            <section className={styles.projects}>
              <h2 className={styles.sectionTitle}>Relevant Projects</h2>
              
              <div className={styles.projectsGrid}>
                <Link to="/projects/adaptive-ui" className={styles.projectCard} style={linkStyle}>
                  <div className={styles.projectContent}>
                    <h3 className={styles.projectTitle}>Philips UX Internship</h3>
                    <p className={styles.projectDescription}>
                      Embedded UI, usability testing, and smart mask design for medical devices.
                    </p>
                  </div>
                </Link>
                
                <Link to="/projects/petpals" className={styles.projectCard} style={linkStyle}>
                  <div className={styles.projectContent}>
                    <h3 className={styles.projectTitle}>PetPals</h3>
                    <p className={styles.projectDescription}>
                      A pet social web app using AI-driven matching and full-stack development.
                    </p>
                  </div>
                </Link>
                
                <Link to="/projects/mr-finder" className={styles.projectCard} style={linkStyle}>
                  <div className={styles.projectContent}>
                    <h3 className={styles.projectTitle}>MR Finder: Mixed Reality</h3>
                    <p className={styles.projectDescription}>
                      A mixed reality application designed to help find lost items, showcasing my interface design for emerging technologies.
                    </p>
                  </div>
                </Link>
                
                <Link to="/projects/breast-cancer-ai" className={styles.projectCard} style={linkStyle}>
                  <div className={styles.projectContent}>
                    <h3 className={styles.projectTitle}>Breast Cancer Conversational AI</h3>
                    <p className={styles.projectDescription}>
                      Researching and designing supportive conversational AI interfaces for breast cancer patients.
                    </p>
                  </div>
                </Link>
                
                <a 
                  href="https://www.figma.com/design/ZDyqTe2ovpNTS7SOiLj8Ba/IntheLens-EatMeFirst?node-id=0-1&p=f&t=IWuO5P8XX6XsWpYf-0" 
                  className={styles.projectCard} 
                  style={linkStyle}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={styles.projectContent}>
                    <h3 className={styles.projectTitle}>Ongoing Swift UI Project</h3>
                    <p className={styles.projectDescription}>
                      IntheLens & EatMeFirst - A Swift UI design project focused on intuitive mobile experiences.
                    </p>
                  </div>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Fragment>
  );
}