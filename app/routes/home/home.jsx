import gamestackTexture2Large from '~/assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from '~/assets/gamestack-list.jpg';
import gamestackTextureLarge from '~/assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import gamestackTexture from '~/assets/gamestack-login.jpg';
import matchingVideo from '~/assets/Matching.mov';
import petpalsTexture from '~/assets/petpals.jpg';
import petpalsTextureLarge from '~/assets/petpals-large.jpg';
import petpalsPlaceholder from '~/assets/petpals-placeholder.jpg';
import sliceTextureLarge from '~/assets/slice-app-large.jpg';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceTexture from '~/assets/slice-app.jpg';
import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/spr-lesson-builder-dark.jpg';
import adaptiveUIMain from '../../assets/adaptive-ui/adaptive-ui-main.jpg';
import adaptiveUIDetail from '../../assets/adaptive-ui/adaptive-ui-detail.jpg';
import philipsLogo from '../../assets/adaptive-ui/Philips.png';
import philipsSRCLogo from '../../assets/adaptive-ui/SRC.png';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';
import { SectionTitle } from '~/components/section-title/section-title';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Designer + Developer',
    description: `Design portfolio of ${config.name} — a computational designer working on web & mobile apps with a focus on AI, Data-driven,motion, experience design, and accessibility.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const others = useRef();
  const contact = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, others, contact];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      if (section.current) {
        sectionObserver.observe(section.current);
      }
    });

    if (intro.current) {
      indicatorObserver.observe(intro.current);
    }

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <SectionTitle />
      <ProjectSummary
        id="ai-product"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        category="AI Product"
        title="PetPals"
        description="An AI-powered platform that helps pets seamlessly connect, find nearby playmates, and join vibrant pet communities."
        buttonText="View project"
        buttonLink="/projects/petpals"
        model={{
          type: 'laptop',
          alt: 'PetPals web application interface',
          video: matchingVideo
        }}
      />
      <ProjectSummary
        id="data-narratives"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        category="AI Product"
        title="Adaptive UI for Sleep & Respiratory Care"
        description="An AI-driven initiative at Philips—combining an Adaptive UI workshop I led and collaborative user testing with fellow designers, to deliver personalized, compliant interfaces for CPAP devices."
        buttonText="View project"
        buttonLink="/projects/adaptive-ui"
        model={{
          type: 'phone',
          alt: 'Adaptive UI for medical devices interface',
          scale: 0.8,
          textures: [
            {
              srcSet: `${adaptiveUIMain} 375w, ${adaptiveUIMain} 750w`,
              placeholder: adaptiveUIMain,
            },
            {
              srcSet: `${adaptiveUIDetail} 375w, ${adaptiveUIDetail} 750w`,
              placeholder: adaptiveUIDetail,
            },
          ],
        }}
      />
      <ProjectSummary
        id="vr-project"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        category="AI Product"
        title="MR Finder: Mixed Reality Lost & Found"
        description="An AI-powered XR solution merging ChatGPT voice commands and SLAM-based spatial mapping, giving you real-time guidance to find lost items around you."
        buttonText="View project"
        buttonLink="/projects/mr-finder"
        model={{
          type: 'quest3',
          alt: 'Quest3 VR headset demonstrating MR Finder application',
          scale: 1.0,
        }}
      />
      <ProjectSummary
        id="others"
        sectionRef={others}
        visible={visibleSections.includes(others.current)}
        index={4}
        title="Other Works & Skills"
        description="A collection of my other projects, technical writings, and additional skills"
        buttonText="View all"
        buttonLink="/others"
        model={{
          type: 'laptop',
          alt: 'Other works preview',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="contact"
        alternate
        sectionRef={contact}
        visible={visibleSections.includes(contact.current)}
        index={5}
        title="Get in Touch"
        description="Interested in collaborating? Feel free to reach out for projects or just to say hi"
        buttonText="Send a message"
        buttonLink="/contact"
        model={{
          type: 'laptop',
          alt: 'Contact section preview',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <Footer />
    </div>
  );
};
