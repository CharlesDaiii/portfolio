import { useEffect, useRef, useState } from 'react';
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  AmbientLight,
  DirectionalLight,
  SRGBColorSpace,
} from 'three';
import { GLTFLoader } from 'three-stdlib';
import { deviceModels } from './device-models';
import styles from './model.module.css';

export const DeviceQuest3 = ({ 
  alt, 
  onLoad, 
  show,
  isMobile 
}) => {
  const canvasRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // 关键：等待 show 为 true 才初始化，像其他模型组件一样
    if (!canvasRef.current || !show) return;

    // 使用 canvas 的父元素作为容器
    const container = canvasRef.current.parentElement;
    if (!container) return;

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // 设置场景
    const scene = new Scene();
    
    // 设置相机 - 完全按照 test 的设置
    const camera = new PerspectiveCamera(
      45,
      containerWidth / containerHeight || 1,
      0.1,
      1000
    );
    camera.position.set(0, 0, 2);

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

    // 加载模型
    const loader = new GLTFLoader();
    const modelUrl = deviceModels.quest3.url;
    
    let model = null;
    
    loader.load(
      modelUrl,
      (gltf) => {
        model = gltf.scene;
        scene.add(model);
        
        // 调整模型位置和大小
        model.position.set(-0.15, 0, 0);
        model.scale.set(3, 3, 3);
        
        setLoaded(true);
        onLoad?.();
      },
      undefined,
      (error) => {
        console.error('Error loading Quest3 model:', error);
      }
    );

    // 动画循环 - 完全按照 test 的设置
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      // 旋转模型
      if (model) {
        model.rotation.y += 0.005;
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
      
      if (model) {
        scene.remove(model);
      }
      
      scene.clear();
      renderer.dispose();
    };
  }, [show]); // 当 show 变化时重新初始化

  return <canvas ref={canvasRef} className={styles.canvas} data-loaded={loaded} />;
};
