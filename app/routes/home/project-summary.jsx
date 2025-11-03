import { Button } from '~/components/button';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Loader } from '~/components/loader';
import { useWindowSize } from '~/hooks';
import { Suspense, lazy, useState } from 'react';
import { media } from '~/utils/style';
import { useHydrated } from '~/hooks/useHydrated';
import styles from './project-summary.module.css';
import philipsLogo from '/assets/adaptive-ui/Philips.png';
import philipsSRCLogo from '/assets/adaptive-ui/SRC.png';
import bikelogo from '/assets/bike-sharing/bikelogo.jpg';

// 懒加载设备组件，类似云朵的加载方式
const DevicePhone = lazy(() =>
  import('~/components/model/device-phone').then(module => ({ default: module.DevicePhone }))
);

const DeviceLaptop = lazy(() =>
  import('~/components/model/device-laptop').then(module => ({ default: module.DeviceLaptop }))
);

const DeviceQuest3 = lazy(() =>
  import('~/components/model/device-quest3').then(module => ({ default: module.DeviceQuest3 }))
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

  const { width } = useWindowSize();
  const isHydrated = useHydrated();

  const titleId = `${id}-title`;
  const isMobile = width <= media.tablet;
  const indexText = index < 10 ? `0${index}` : index;

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
              <span className={styles.tag}>Design Sprint</span>
              <span className={styles.tag}>User Testing</span>
              <span className={styles.tag}>AI</span>
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
        {/* Laptop - 懒加载方式，类似云朵 */}
        {model?.type === 'laptop' && (
          <div
            className={styles.model}
            data-device="laptop"
            data-loaded={modelLoaded}
            style={{ '--delay': '700ms', transform: isMobile ? 'scale(0.8)' : 'scale(0.8)' }}
            suppressHydrationWarning
          >
            {isHydrated && (
              <Suspense
                fallback={
                  <Loader
                    center
                    className={styles.loader}
                    data-visible={visible}
                  />
                }
              >
                <DeviceLaptop
                  alt={model.alt}
                  video={model.video}
                  texture={model.textures?.[0]}
                  onLoad={handleModelLoad}
                  show={visible}
                  isMobile={isMobile}
                />
              </Suspense>
            )}
          </div>
        )}

        {/* Phone - 懒加载方式，类似云朵 */}
        {model?.type === 'phone' && (
          <div
            className={styles.model}
            data-device="phone"
            data-loaded={modelLoaded}
            style={{ '--delay': '300ms' }}
            suppressHydrationWarning
          >
            {isHydrated && (
              <Suspense
                fallback={
                  <Loader
                    center
                    className={styles.loader}
                    data-visible={visible}
                  />
                }
              >
                <DevicePhone
                  alt={model.alt}
                  textures={model.textures}
                  onLoad={handleModelLoad}
                  show={visible}
                  isMobile={isMobile}
                />
              </Suspense>
            )}
          </div>
        )}

        {/* Quest3 - 懒加载方式，类似云朵 */}
        {model?.type === 'quest3' && (
          <div
            className={styles.model}
            data-device="quest3"
            data-loaded={modelLoaded}
            style={{ '--delay': '300ms' }}
            suppressHydrationWarning
          >
            {isHydrated && (
              <Suspense
                fallback={
                  <Loader
                    center
                    className={styles.loader}
                    data-visible={visible}
                  />
                }
              >
                <DeviceQuest3
                  alt={model.alt}
                  onLoad={() => {
                    handleModelLoad();
                  }}
                  show={visible}
                  isMobile={isMobile}
                />
              </Suspense>
            )}
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