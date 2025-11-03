import { useEffect, useRef, useState } from 'react';
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  AmbientLight,
  DirectionalLight,
  SRGBColorSpace,
  MathUtils,
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
  const mousePosition = useRef({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0, y: 0 });
  const currentRotation = useRef({ x: 0, y: 0 });

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

    // 动画循环 - 使用平滑插值跟随鼠标
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      // 使用lerp平滑插值跟随鼠标位置
      if (model) {
        // 平滑插值，使旋转更自然
        currentRotation.current.x = MathUtils.lerp(
          currentRotation.current.x,
          targetRotation.current.x,
          0.05
        );
        currentRotation.current.y = MathUtils.lerp(
          currentRotation.current.y,
          targetRotation.current.y,
          0.05
        );
        
        model.rotation.x = currentRotation.current.x;
        model.rotation.y = currentRotation.current.y;
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

    // 处理鼠标移动 - 小幅度跟随
    const handleMouseMove = (event) => {
      const { innerWidth, innerHeight } = window;
      
      // 计算鼠标相对于屏幕中心的位置 (-0.5 到 0.5)
      const x = (event.clientX / innerWidth) - 0.5;
      const y = (event.clientY / innerHeight) - 0.5;
      
      // 设置目标旋转角度，使用较小的系数来实现小幅度转动
      targetRotation.current.y = x * 0.3; // 水平旋转范围约 ±17度
      targetRotation.current.x = y * 0.2; // 垂直旋转范围约 ±11度
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 清理函数
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
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
