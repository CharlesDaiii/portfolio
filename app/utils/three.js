import { Cache, TextureLoader } from 'three';
import { DRACOLoader, GLTFLoader } from 'three-stdlib';

// Enable caching for all loaders (this is safe for SSR)
if (typeof window !== 'undefined') {
  Cache.enabled = true;
}

// Lazy initialization to avoid SSR issues
let dracoLoader = null;
let gltfLoader = null;
let textureLoaderInstance = null;

function initLoaders() {
  if (typeof window === 'undefined') {
    return;
  }
  
  if (!dracoLoader) {
    dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/draco/');
  }
  
  if (!gltfLoader) {
    gltfLoader = new GLTFLoader();
    gltfLoader.setDRACOLoader(dracoLoader);
  }
  
  if (!textureLoaderInstance) {
    textureLoaderInstance = new TextureLoader();
  }
}

/**
 * GLTF model loader configured with draco decoder
 */
export const modelLoader = new Proxy({}, {
  get(target, prop) {
    initLoaders();
    return gltfLoader?.[prop];
  }
});

export const textureLoader = new Proxy({}, {
  get(target, prop) {
    initLoaders();
    return textureLoaderInstance?.[prop];
  }
});

/**
 * Clean up a scene's materials and geometry
 */
export const cleanScene = scene => {
  scene?.traverse(object => {
    if (!object.isMesh) return;

    object.geometry.dispose();

    if (object.material.isMaterial) {
      cleanMaterial(object.material);
    } else {
      for (const material of object.material) {
        cleanMaterial(material);
      }
    }
  });
};

/**
 * Clean up and dispose of a material
 */
export const cleanMaterial = material => {
  material.dispose();

  for (const key of Object.keys(material)) {
    const value = material[key];
    if (value && typeof value === 'object' && 'minFilter' in value) {
      value.dispose();

      // Close GLTF bitmap textures
      value.source?.data?.close?.();
    }
  }
};

/**
 * Clean up and dispose of a renderer
 */
export const cleanRenderer = renderer => {
  renderer.dispose();
  renderer = null;
};

/**
 * Clean up lights by removing them from their parent
 */
export const removeLights = lights => {
  for (const light of lights) {
    light.parent.remove(light);
  }
};

/**
 * Get child by name
 */
export const getChild = (name, object) => {
  let node;

  object.traverse(child => {
    if (child.name === name) {
      node = child;
    }
  });

  return node;
};


// 扩展现有的 modelLoader
const originalLoad = modelLoader.load.bind(modelLoader);
modelLoader.load = (url, onLoad, onProgress, onError) => {
  
  console.log('Loading model:', url);
  return originalLoad(
    url,
    onLoad,
    onProgress,
    (error) => {
      console.error('Model loading error:', error);
      onError?.(error);
    }
  );
};

// 新增检测函数
export function isWebGLAvailable() {
  if (typeof window === 'undefined') {
    return false;
  }
  
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext && 
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch (e) {
    return false;
  }
}

// 仅在客户端添加错误监听器
if (typeof window !== 'undefined') {
  window.addEventListener('error', (event) => {
    console.error('WebGL Error:', event.error);
  });
}
