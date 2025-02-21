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
import data4Image from '../../assets/homepage/data4_1.jpg';
import data4_4Image from '../../assets/homepage/data4_4.jpg';
import data5Image from '../../assets/homepage/data5_5.jpg';
import data5_2Image from '../../assets/homepage/data5_2.jpg';
import data6Image from '../../assets/homepage/data6_2.jpg';
import data6_1Image from '../../assets/homepage/data6_1.jpg';
import data7_1Image from '~/assets/fireboywatergirl/7.1.png';
import data7Image from '~/assets/fireboywatergirl/7.2.png';
import { Contact } from '../contact/contact';
import bikelogo from '~/assets/bike-sharing/bikelogo.jpg';

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
  const projectFour = useRef();
  const projectFive = useRef();
  const projectSix = useRef();
  const projectSeven = useRef();
  const contact = useRef();

  const sectionRefs = [
    intro,
    projectOne,
    projectTwo,
    projectThree,
    projectFour,
    projectFive,
    projectSix,
    projectSeven,
    contact,
  ];

  useEffect(() => {
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

    sectionRefs.forEach(section => {
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
        id="data-visualization-04"
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        category="Data Visualization"
        title="Heritage Knowledge Explorer"
        description="Prototype a mobile app generating personalized heritage tours via voice/text queries, powered by a 5,000-node knowledge graph."
        buttonText="View project"
        buttonLink="/projects/heritage-explorer"
        images={[
          {
            src: data4Image,
            alt: 'Heritage Knowledge Explorer preview 1'
          },
          {
            src: data4_4Image,
            alt: 'Heritage Knowledge Explorer preview 2'
          }
        ]}
      />
      <ProjectSummary
        id="data-visualization-05"
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        category="Data Visualization"
        title="Bike-Sharing in Epidemic Era"
        description="Created an explainable AI model using SHAP values to decode how pandemic policies and weather impacted urban mobility."
        buttonText="View project"
        buttonLink="/projects/bike-sharing"
        logos={[
          {
            src: bikelogo,
            alt: 'Bike-sharing logo',
            dataLogo: 'bike'
          }
        ]}
        images={[
          {
            src: data5_2Image,
            alt: 'Bike sharing analysis dashboard preview 1'
          },
          {
            src: data5Image,
            alt: 'Bike sharing analysis dashboard preview 2'
          }
        ]}
      />
      <ProjectSummary
        id="data-visualization-06"
        alternate
        sectionRef={projectSix}
        visible={visibleSections.includes(projectSix.current)}
        index={6}
        category="Data Visualization"
        title="Infrastructure Equality"
        description="Developed a multi-objective optimization framework combining geospatial analysis and evolutionary algorithms to balance flood risks, infrastructure costs, and social equity."
        buttonText="View project"
        buttonLink="/projects/infrastructure"
        images={[
          {
            src: data6_1Image,
            alt: 'Infrastructure optimization visualization 1'
          },
          {
            src: data6Image,
            alt: 'Infrastructure optimization visualization 2'
          }
        ]}
      />
      <ProjectSummary
        id="creative-computing-07"
        sectionRef={projectSeven}
        visible={visibleSections.includes(projectSeven.current)}
        index={7}
        category="Creative Computing"
        title="Fireboy & Watergirl"
        description="Built a Python-based 2D platformer with dynamically generated levels, enabling two players to collaborate in real-time to solve physics-driven puzzles and navigate shifting obstacles."
        buttonText="View project"
        buttonLink="/projects/fireboy-watergirl"
        images={[
          {
            src: data7_1Image,
            alt: 'Fireboy & Watergirl visualization 1'
          },
          {
            src: data7Image,
            alt: 'Fireboy & Watergirl visualization 2'
          }
        ]}
      />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};