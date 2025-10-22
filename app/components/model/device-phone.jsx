import { Model } from './model';
import { deviceModels } from './device-models';
import { media } from '~/utils/style';

export const DevicePhone = ({ 
  textures, 
  alt, 
  onLoad, 
  show,
  isMobile 
}) => {
  const phoneSizes = `(max-width: ${media.tablet}px) 30vw, 20vw`;

  return (
    <Model
      alt={alt}
      cameraPosition={{ x: 0, y: 0, z: isMobile ? 12 : 10 }}
      showDelay={300}
      onLoad={onLoad}
      show={show}
      models={[
        {
          ...deviceModels.phone,
          position: isMobile 
            ? { x: -0.4, y: 1.1, z: 0 } 
            : { x: -0.6, y: 1.1, z: 0 },
          texture: {
            ...textures[0],
            sizes: phoneSizes,
          },
        },
        {
          ...deviceModels.phone,
          position: isMobile 
            ? { x: 0.4, y: -0.5, z: 0.3 } 
            : { x: 0.6, y: -0.5, z: 0.3 },
          texture: {
            ...textures[1],
            sizes: phoneSizes,
          },
        },
      ]}
    />
  );
};


