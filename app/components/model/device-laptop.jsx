import { Model } from './model';
import { deviceModels } from './device-models';
import { media } from '~/utils/style';

export const DeviceLaptop = ({ 
  video,
  texture, 
  alt, 
  onLoad, 
  show,
  isMobile 
}) => {
  const laptopSizes = `(max-width: ${media.tablet}px) 80vw, 40vw`;

  return (
    <Model
      alt={alt}
      cameraPosition={{ x: 0, y: 0, z: isMobile ? 7 : 6 }}
      showDelay={700}
      onLoad={onLoad}
      show={show}
      models={[
        {
          ...deviceModels.laptop,
          position: isMobile 
            ? { x: 0, y: 0, z: 0 } 
            : deviceModels.laptop.position,
          texture: video
            ? {
                type: 'video',
                src: video,
                autoPlay: true,
                loop: true,
                muted: true,
                playsInline: true,
              }
            : {
                ...texture,
                sizes: laptopSizes,
              },
        },
      ]}
    />
  );
};


