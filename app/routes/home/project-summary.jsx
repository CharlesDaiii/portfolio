import { Button } from '~/components/button';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { deviceModels, ModelAnimationType } from '~/components/model/device-models';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { useTheme } from '~/components/theme-provider';
import { Transition } from '~/components/transition';
import { Loader } from '~/components/loader';
import { useWindowSize } from '~/hooks';
import { Suspense, lazy, useState } from 'react';
import { cssProps, media } from '~/utils/style';
import { useHydrated } from '~/hooks/useHydrated';
import styles from './project-summary.module.css';
import philipsLogo from '/assets/adaptive-ui/Philips.png';
import philipsSRCLogo from '/assets/adaptive-ui/SRC.png';
import bikelogo from '/assets/bike-sharing/bikelogo.jpg';

const Model = lazy(() =>
  import('~/components/model').then(module => ({ default: module.Model }))
);

export function ProjectSummary({
  id,
  visible: sectionVisible,
  sectionRef,
  index,
  title,
  description,
  model,
  buttonText,
  buttonLink,
  alternate,
  category,
  images,
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);

  const { theme } = useTheme();
  const { width } = useWindowSize();
  const isHydrated = useHydrated();

  const titleId = `${id}-title`;
  const isMobile = width <= media.tablet;
  const svgOpacity = theme === 'light' ? 0.7 : 1;
  const indexText = index < 10 ? `0${index}` : index;
  const phoneSizes = `(max-width: ${media.tablet}px) 30vw, 20vw`;
  const laptopSizes = `(max-width: ${media.tablet}px) 80vw, 40vw`;

  // 仅客户端加载后才回调
  function handleModelLoad() {
    setModelLoaded(true);
  }

  function renderDetails(visible) {
    return (
      <div className={styles.details}>
        <div aria-hidden className={styles.index}>
          <Divider
            notchWidth="64px"
            notchHeight="8px"
            collapsed={!visible}
            collapseDelay={1000}
          />
          <span className={styles.indexNumber} data-visible={visible}>
            {`${category} ${indexText}`}
          </span>
        </div>

        {/* 这里是一些特定的项目 Logo */}
        {title === "Adaptive UI for Sleep & Respiratory Care" && (
          <div className={styles.projectLogos} data-visible={visible}>
            <div className={styles.logoWrapper} data-logo="philips">
              <img src={philipsLogo} alt="Philips Logo" className={styles.projectLogo} />
            </div>
            <div className={styles.logoWrapper} data-logo="respironics">
              <img src={philipsSRCLogo} alt="Philips Sleep & Respiratory Care Logo" className={styles.projectLogo} />
            </div>
          </div>
        )}

        {title === "Bike-Sharing in Epidemic Era" && (
          <div className={styles.projectLogos} data-visible={visible}>
            <div className={styles.logoWrapper} data-logo="bike">
              <img src={bikelogo} alt="Bike-sharing Logo" className={styles.projectLogo} />
            </div>
          </div>
        )}

        <Heading
          level={3}
          as="h2"
          className={styles.title}
          data-visible={visible}
          id={titleId}
        >
          {title}
        </Heading>
        <Text className={styles.description} data-visible={visible} as="p">
          {description}
        </Text>

        {/* 这里是项目 Tag */}
        <div className={styles.tags} data-visible={visible}>
          {title === "MR Finder: Mixed Reality Lost & Found" ? (
            <>
              <span className={styles.tag}>Mixed Reality</span>
              <span className={styles.tag}>ChatGPT Voice</span>
              <span className={styles.tag}>SLAM Mapping</span>
              <span className={styles.tag}>Unity MRTK</span>
            </>
          ) : title === "Infrastructure Equality" ? (
            <>
              <span className={styles.tag}>Python</span>
              <span className={styles.tag}>Evolutionary Algorithm</span>
              <span className={styles.tag}>Cost-Benefit Model</span>
            </>
          ) : title === "Heritage Knowledge Explorer" ? (
            <>
              <span className={styles.tag}>TextCNN</span>
              <span className={styles.tag}>Storytelling</span>
              <span className={styles.tag}>Knowledge Graph</span>
              <span className={styles.tag}>User Flow</span>
            </>
          ) : title === "Bike-Sharing in Epidemic Era" ? (
            <>
              <span className={styles.tag}>Python</span>
              <span className={styles.tag}>SHAP</span>
              <span className={styles.tag}>User Research</span>
            </>
          ) : title === "Adaptive UI for Sleep & Respiratory Care" ? (
            <>
              <span className={styles.tag}>Co-Creation</span>
              <span className={styles.tag}>User Testing</span>
              <span className={styles.tag}>Proactive Intelligence</span>
              <span className={styles.tag}>Healthcare</span>
            </>
          ) : title === "Fireboy & Watergirl" ? (
            <>
              <span className={styles.tag}>Python</span>
              <span className={styles.tag}>Game Development</span>
              <span className={styles.tag}>Dual-Player</span>
            </>
          ) : (
            <>
              <span className={styles.tag}>Frontend</span>
              <span className={styles.tag}>UI/UX Design</span>
              <span className={styles.tag}>React.js</span>
              <span className={styles.tag}>Django</span>
            </>
          )}
        </div>

        <div className={styles.button} data-visible={visible}>
          <Button iconHoverShift href={buttonLink} iconEnd="arrow-right">
            {buttonText}
          </Button>
        </div>
      </div>
    );
  }


  function renderPreview(visible) {
    return (
      <div className={styles.preview}>
        {/* Laptop */}
        {model?.type === 'laptop' && (
          <div
            className={styles.model}
            data-device="laptop"
            style={{ transform: isMobile ? 'scale(0.8)' : 'scale(0.8)' }}
            suppressHydrationWarning
          >
            <Suspense
              fallback={
                <Loader
                  center
                  className={styles.loader}
                  data-visible={visible}
                />
              }
            >
              {/* 仅在客户端且 section 可见时真正挂载 Model */}
              {isHydrated && visible ? (
                <Model
                  alt={model.alt}
                  cameraPosition={{ x: 0, y: 0, z: isMobile ? 7 : 6 }}
                  showDelay={700}
                  onLoad={handleModelLoad}
                  show={visible}
                  models={[
                    {
                      ...deviceModels.laptop,
                      position: isMobile 
                        ? { x: 0, y: 0, z: 0 } 
                        : deviceModels.laptop.position,
                      texture: model.video
                        ? {
                            type: 'video',
                            src: model.video,
                            autoPlay: true,
                            loop: true,
                            muted: true,
                            playsInline: true,
                          }
                        : {
                            ...model.textures?.[0],
                            sizes: laptopSizes,
                          },
                    },
                  ]}
                />
              ) : null}
            </Suspense>
          </div>
        )}

        {/* Phone */}
        {model?.type === 'phone' && (
          <div
            className={styles.model}
            data-device="phone"
            suppressHydrationWarning
          >
            <Suspense
              fallback={
                <Loader
                  center
                  className={styles.loader}
                  data-visible={visible}
                />
              }
            >
              {isHydrated && visible ? (
                <Model
                  alt={model.alt}
                  cameraPosition={{ x: 0, y: 0, z: isMobile ? 12 : 10 }}
                  showDelay={300}
                  onLoad={handleModelLoad}
                  show={visible}
                  models={[
                    {
                      ...deviceModels.phone,
                      position: isMobile 
                        ? { x: -0.4, y: 1.1, z: 0 } 
                        : { x: -0.6, y: 1.1, z: 0 },
                      texture: {
                        ...model.textures[0],
                        sizes: phoneSizes,
                      },
                    },
                    {
                      ...deviceModels.phone,
                      position: isMobile 
                        ? { x: 0.4, y: -0.5, z: 0.3 } 
                        : { x: 0.6, y: -0.5, z: 0.3 },
                      texture: {
                        ...model.textures[1],
                        sizes: phoneSizes,
                      },
                    },
                  ]}
                />
              ) : null}
            </Suspense>
          </div>
        )}

        {/* Quest3 */}
        {model?.type === 'quest3' && (
          <div
            className={styles.model}
            data-device="quest3"
            suppressHydrationWarning
          >
            <Suspense
              fallback={
                <Loader
                  center
                  className={styles.loader}
                  data-visible={visible}
                />
              }
            >
              {isHydrated && visible ? (
                <Model
                  alt={model.alt}
                  cameraPosition={{ x: 0, y: 0, z: isMobile ? 0.8 : 0.6 }}
                  showDelay={300}
                  onLoad={() => {
                    console.log('Quest3 model loaded successfully');
                    handleModelLoad();
                  }}
                  show={visible}
                  models={[
                    {
                      type: 'quest3',
                      url: deviceModels.quest3.url,
                      position: isMobile
                        ? { x: 0, y: -0.1, z: 0 }
                        : { x: deviceModels.quest3.position.x, y: deviceModels.quest3.position.y, z: deviceModels.quest3.position.z },
                      rotation: deviceModels.quest3.rotation,
                      scale: deviceModels.quest3.scale,
                      animation: ModelAnimationType.Quest3Rotate,
                    },
                  ]}
                />
              ) : null}
            </Suspense>
          </div>
        )}

        {/* 如果没有 model，就显示 images */}
        {!model && images && (
          <div className={styles.imageContainer} suppressHydrationWarning>
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className={styles.projectImage}
                data-visible={visible}
                data-index={index}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Section
      className={styles.summary}
      data-alternate={alternate}
      data-first={index === 1}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      aria-labelledby={titleId}
      ref={sectionRef}
      id={id}
      tabIndex={-1}
      {...rest}
    >
      <div className={styles.content}>
        <Transition in={sectionVisible || focused} timeout={0}>
          {({ visible, status }) => (
            <>
              {!alternate && !isMobile && (
                <>
                  {renderDetails(visible)}
                  <div
                    style={{
                      transitionDelay: '200ms',
                      opacity: visible ? 1 : 0,
                      transition: 'opacity 0.3s ease'
                    }}
                  >
                    {renderPreview(visible)}
                  </div>
                </>
              )}
              {(alternate || isMobile) && (
                <>
                  {renderPreview(visible)}
                  {renderDetails(visible)}
                </>
              )}
            </>
          )}
        </Transition>
      </div>
    </Section>
  );
}