const iphone11 = '/assets/iphone-11.glb';
const macbookPro = '/assets/macbook-pro.glb';
const quest3Model = '/assets/quest3.glb';

export const ModelAnimationType = {
  SpringUp: 'spring-up',
  LaptopOpen: 'laptop-open',
  Quest3Rotate: 'quest3-rotate',
};

export const deviceModels = {
  phone: {
    url: iphone11,
    width: 374,
    height: 512,
    position: { x: 0, y: 0, z: 0 },
    animation: ModelAnimationType.SpringUp,
  },
  laptop: {
    url: macbookPro,
    width: 1280,
    height: 800,
    position: { x: 0, y: 0, z: 0 },
    animation: ModelAnimationType.LaptopOpen,
  },
  quest3: {
    type: 'quest3',
    url: quest3Model,
    width: 1.0,
    height: 1.0,
    position: { x: -0.15, y: 0, z: 0 },
    rotation: { x: 0, y: 0, z: 0 },
    scale: { x: 1, y: 1, z: 1 },
    animation: ModelAnimationType.Quest3Rotate,
  }
};
