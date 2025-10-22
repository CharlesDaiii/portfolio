import { useEffect, useRef, useState } from 'react';
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  AmbientLight,
  DirectionalLight,
  SRGBColorSpace,
  MeshBasicMaterial,
  Color,
  VideoTexture,
  LinearFilter,
  TextureLoader,
} from 'three';
import { GLTFLoader, DRACOLoader } from 'three-stdlib';
import { deviceModels } from './device-models';
import { resolveSrcFromSrcSet } from '~/utils/image';
import styles from './model.module.css';

const MeshType = {
  Screen: 'Screen',
};

export const DeviceLaptop = ({ 
  video,
  texture, 
  alt, 
  onLoad, 
  show,
  isMobile 
}) => {
  const canvasRef = useRef(null);
  const videoElement = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!canvasRef.current || !show) return;

    const container = canvasRef.current.parentElement;
    if (!container) return;

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // 设置场景
    const scene = new Scene();
    
    // 设置相机
    const camera = new PerspectiveCamera(
      45,
      containerWidth / containerHeight || 1,
      0.1,
      1000
    );
    camera.position.set(0, 0, isMobile ? 7 : 6);

    // 设置渲染器
    const renderer = new WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(containerWidth, containerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = SRGBColorSpace;

    // 添加光照
    const ambientLight = new AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const directionalLight1 = new DirectionalLight(0xffffff, 1.0);
    directionalLight1.position.set(5, 5, 5);
    scene.add(directionalLight1);

    const directionalLight2 = new DirectionalLight(0xffffff, 0.5);
    directionalLight2.position.set(-5, -5, -5);
    scene.add(directionalLight2);

    // 配置 DRACO 解码器
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/draco/');
    
    // 加载模型
    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);
    const modelUrl = deviceModels.laptop.url;
    
    let model = null;

    loader.load(
      modelUrl,
      async (gltf) => {
        model = gltf.scene;
        scene.add(model);
        
        const position = isMobile 
          ? { x: 0, y: 0, z: 0 } 
          : deviceModels.laptop.position;
        model.position.set(position.x, position.y, position.z);
        model.scale.set(1, 1, 1);
        
        // 设置纹理或视频
        if (video) {
          // 视频纹理
          videoElement.current = document.createElement('video');
          videoElement.current.src = video;
          videoElement.current.autoplay = true;
          videoElement.current.loop = true;
          videoElement.current.muted = true;
          videoElement.current.playsInline = true;
          videoElement.current.play();
          
          const videoTexture = new VideoTexture(videoElement.current);
          videoTexture.colorSpace = SRGBColorSpace;
          videoTexture.flipY = false;
          videoTexture.minFilter = LinearFilter;
          videoTexture.magFilter = LinearFilter;
          
          model.traverse((node) => {
            if (node.isMesh && node.name === MeshType.Screen) {
              node.material = new MeshBasicMaterial({ map: videoTexture });
            } else if (node.isMesh) {
              node.material.color = new Color(0x1f2025);
            }
          });
        } else if (texture) {
          // 图片纹理
          const image = await resolveSrcFromSrcSet(texture);
          const textureLoader = new TextureLoader();
          const loadedTexture = await textureLoader.loadAsync(image);
          loadedTexture.colorSpace = SRGBColorSpace;
          loadedTexture.flipY = false;
          
          model.traverse((node) => {
            if (node.isMesh && node.name === MeshType.Screen) {
              node.material.map = loadedTexture;
              node.material.color = new Color(0xffffff);
            } else if (node.isMesh) {
              node.material.color = new Color(0x1f2025);
            }
          });
        }
        
        setLoaded(true);
        onLoad?.();
      },
      undefined,
      (error) => {
        console.error('Error loading Laptop model:', error);
      }
    );

    // 动画循环
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      // 轻微旋转模型
      if (model) {
        model.rotation.y += 0.002;
      }
      
      renderer.render(scene, camera);
    };
    animate();

    // 处理窗口大小变化
    const handleResize = () => {
      const currentContainer = canvasRef.current?.parentElement;
      if (!currentContainer) return;
      
      const width = currentContainer.clientWidth;
      const height = currentContainer.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // 清理函数
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      
      if (videoElement.current) {
        videoElement.current.pause();
        videoElement.current.src = '';
        videoElement.current.load();
      }
      
      if (model) {
        scene.remove(model);
      }
      
      dracoLoader.dispose();
      scene.clear();
      renderer.dispose();
    };
  }, [show, video, texture, isMobile, onLoad]);

  return <canvas ref={canvasRef} className={styles.canvas} data-loaded={loaded} />;
};
