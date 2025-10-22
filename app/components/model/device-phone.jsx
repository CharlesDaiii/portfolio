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
  MathUtils,
} from 'three';
import { GLTFLoader, DRACOLoader } from 'three-stdlib';
import { deviceModels } from './device-models';
import { resolveSrcFromSrcSet } from '~/utils/image';
import styles from './model.module.css';

const MeshType = {
  Screen: 'Screen',
};

export const DevicePhone = ({ 
  textures, 
  alt, 
  onLoad, 
  show,
  isMobile 
}) => {
  const canvasRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const targetRotation = useRef({ x: 0, y: 0 });
  const currentRotation = useRef({ x: 0, y: 0 });

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
    camera.position.set(0, 0, isMobile ? 12 : 10);

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
    
    // 加载两个手机模型
    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);
    const modelUrl = deviceModels.phone.url;
    
    let models = [];
    let loadedCount = 0;
    const totalModels = 2;

    // 加载第一个手机
    loader.load(
      modelUrl,
      async (gltf) => {
        const model1 = gltf.scene.clone();
        scene.add(model1);
        
        const pos1 = isMobile 
          ? { x: -0.4, y: 1.1, z: 0 } 
          : { x: -0.6, y: 1.1, z: 0 };
        model1.position.set(pos1.x, pos1.y, pos1.z);
        model1.scale.set(1, 1, 1);
        
        // 设置纹理
        if (textures && textures[0]) {
          try {
            const image = await resolveSrcFromSrcSet(textures[0]);
            const textureLoader = new TextureLoader();
            const texture = await textureLoader.loadAsync(image);
            texture.colorSpace = SRGBColorSpace;
            texture.flipY = false;
            
            model1.traverse((node) => {
              if (node.isMesh && node.name === MeshType.Screen) {
                // Clone material to avoid sharing issues
                node.material = node.material.clone();
                node.material.map = texture;
                node.material.color = new Color(0xffffff);
                node.material.needsUpdate = true;
              } else if (node.isMesh) {
                node.material.color = new Color(0x1f2025);
              }
            });
            console.log('Phone model 1 texture loaded successfully');
          } catch (error) {
            console.error('Error loading texture for Phone model 1:', error);
          }
        }
        
        models.push(model1);
        loadedCount++;
        if (loadedCount === totalModels) {
          setLoaded(true);
          onLoad?.();
        }
      },
      undefined,
      (error) => {
        console.error('Error loading Phone model 1:', error);
      }
    );

    // 加载第二个手机
    loader.load(
      modelUrl,
      async (gltf) => {
        const model2 = gltf.scene.clone();
        scene.add(model2);
        
        const pos2 = isMobile 
          ? { x: 0.4, y: -0.5, z: 0.3 } 
          : { x: 0.6, y: -0.5, z: 0.3 };
        model2.position.set(pos2.x, pos2.y, pos2.z);
        model2.scale.set(1, 1, 1);
        
        // 设置纹理
        if (textures && textures[1]) {
          try {
            const image = await resolveSrcFromSrcSet(textures[1]);
            const textureLoader = new TextureLoader();
            const texture = await textureLoader.loadAsync(image);
            texture.colorSpace = SRGBColorSpace;
            texture.flipY = false;
            
            model2.traverse((node) => {
              if (node.isMesh && node.name === MeshType.Screen) {
                // Clone material to avoid sharing issues
                node.material = node.material.clone();
                node.material.map = texture;
                node.material.color = new Color(0xffffff);
                node.material.needsUpdate = true;
              } else if (node.isMesh) {
                node.material.color = new Color(0x1f2025);
              }
            });
            console.log('Phone model 2 texture loaded successfully');
          } catch (error) {
            console.error('Error loading texture for Phone model 2:', error);
          }
        }
        
        models.push(model2);
        loadedCount++;
        if (loadedCount === totalModels) {
          setLoaded(true);
          onLoad?.();
        }
      },
      undefined,
      (error) => {
        console.error('Error loading Phone model 2:', error);
      }
    );

    // 动画循环 - 使用平滑插值跟随鼠标
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      // 使用lerp平滑插值跟随鼠标位置
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
      
      // 应用旋转到所有模型
      models.forEach((model) => {
        if (model) {
          model.rotation.x = currentRotation.current.x;
          model.rotation.y = currentRotation.current.y;
        }
      });
      
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
      
      models.forEach((model) => {
        if (model) {
          scene.remove(model);
        }
      });
      
      dracoLoader.dispose();
      scene.clear();
      renderer.dispose();
    };
  }, [show, textures, isMobile, onLoad]);

  return <canvas ref={canvasRef} className={styles.canvas} data-loaded={loaded} />;
};
