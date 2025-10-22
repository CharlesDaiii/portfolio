import { Model } from './model';
import { deviceModels, ModelAnimationType } from './device-models';

export const DeviceQuest3 = ({ 
  alt, 
  onLoad, 
  show,
  isMobile 
}) => {
  return (
    <Model
      alt={alt}
      cameraPosition={{ x: 0, y: 0, z: isMobile ? 0.8 : 0.6 }}
      showDelay={300}
      onLoad={onLoad}
      show={show}
      models={[
        {
          type: 'quest3',
          url: deviceModels.quest3.url,
          position: isMobile
            ? { x: 0, y: -0.1, z: 0 }
            : { 
                x: deviceModels.quest3.position.x, 
                y: deviceModels.quest3.position.y, 
                z: deviceModels.quest3.position.z 
              },
          rotation: deviceModels.quest3.rotation,
          scale: deviceModels.quest3.scale,
          animation: ModelAnimationType.Quest3Rotate,
        },
      ]}
    />
  );
};


