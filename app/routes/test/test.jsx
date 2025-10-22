import { useEffect, useRef } from 'react';
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  AmbientLight,
  DirectionalLight,
  SRGBColorSpace,
} from 'three';
import { GLTFLoader } from 'three-stdlib';
import { baseMeta } from '~/utils/meta';
import styles from './test.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Quest 3 Model Test',
    description: 'Testing Quest 3 GLB model loading',
  });
};

export const Test = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    // 设置场景
    const scene = new Scene();
    
    // 设置相机
    const camera = new PerspectiveCamera(
      45,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
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
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
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
    const modelUrl = 'https://res.cloudinary.com/dkodwtxtw/image/upload/v1761088955/quest3_rrz0w1.glb';
    
    let model = null;
    
    loader.load(
      modelUrl,
      (gltf) => {
        console.log('Model loaded successfully:', gltf);
        model = gltf.scene;
        scene.add(model);
        
        // 调整模型位置和大小
        model.position.set(0, 0, 0);
        model.scale.set(1, 1, 1);
      },
      (progress) => {
        const percent = (progress.loaded / progress.total) * 100;
        console.log(`Loading: ${percent.toFixed(2)}%`);
      },
      (error) => {
        console.error('Error loading model:', error);
      }
    );

    // 动画循环
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
      if (!containerRef.current) return;
      
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      
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
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Quest 3 Model Test - Raw Three.js</h1>
      <div className={styles.modelWrapper} ref={containerRef}>
        <canvas ref={canvasRef} className={styles.canvas} />
      </div>
      <div className={styles.info}>
        <p>Loading model directly from Three.js GLTFLoader</p>
        <p>Model URL: https://res.cloudinary.com/dkodwtxtw/image/upload/v1761088955/quest3_rrz0w1.glb</p>
      </div>
    </div>
  );
};

