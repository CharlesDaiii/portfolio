import { useState, useCallback, useRef, useEffect } from 'react';
import { useInViewport } from '~/hooks';
import styles from './image-carousel.module.css';

export const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const carouselRef = useRef(null);
  const inView = useInViewport(carouselRef, true);
  
  // 优化预加载策略
  useEffect(() => {
    if (!images.length) return;
    
    const preloadImages = async () => {
      try {
        // 只预加载当前图片和下一张图片
        const imagesToLoad = [
          images[currentIndex],
          images[(currentIndex + 1) % images.length]
        ];

        await Promise.all(
          imagesToLoad.map(image => {
            return new Promise((resolve, reject) => {
              const img = new Image();
              img.onload = resolve;
              img.onerror = reject;
              img.src = getImageSrc(image);
            });
          })
        );
        
        setIsLoading(false);
      } catch (error) {
        console.error('Error preloading images:', error);
        setIsLoading(false);
      }
    };

    preloadImages();
  }, [currentIndex, images]);

  const getImageSrc = (image) => {
    if (typeof image === 'string') return image;
    // 优先使用压缩后的图片
    return image.compressed || image.src || image.url || '';
  };

  const goToPrevious = useCallback(() => {
    setDirection('previous');
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const goToNext = useCallback(() => {
    setDirection('next');
    setCurrentIndex(prevIndex => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const getSlideClassName = (index) => {
    if (index === currentIndex) {
      return `${styles.slide} ${styles.active}`;
    }
    if (direction === 'next' && index === (currentIndex - 1 + images.length) % images.length) {
      return `${styles.slide} ${styles.previous}`;
    }
    if (direction === 'next' && index === (currentIndex + 1) % images.length) {
      return `${styles.slide} ${styles.next}`;
    }
    if (direction === 'previous' && index === (currentIndex - 1 + images.length) % images.length) {
      return `${styles.slide} ${styles.previous}`;
    }
    if (direction === 'previous' && index === (currentIndex + 1) % images.length) {
      return `${styles.slide} ${styles.next}`;
    }
    return styles.slide;
  };

  // 添加图片加载错误处理
  const handleImageError = (e) => {
    console.error('Image failed to load:', e.target.src);
    // 可以设置一个默认的占位图
    // e.target.src = '/path/to/fallback-image.jpg';
  };

  return (
    <div ref={carouselRef} className={styles.carouselContainer}>
      <button className={styles.leftArrow} onClick={goToPrevious} aria-label="Previous image">
        ❮
      </button>
      <button className={styles.rightArrow} onClick={goToNext} aria-label="Next image">
        ❯
      </button>
      <div className={styles.imageContainer}>
        {images.map((image, index) => {
          const shouldRender = 
            index === currentIndex ||
            index === (currentIndex + 1) % images.length ||
            index === (currentIndex - 1 + images.length) % images.length;
          
          if (!shouldRender) return null;
          
          return (
            <img 
              key={index}
              src={getImageSrc(image)}
              alt={`Slide ${index + 1}`}
              className={getSlideClassName(index)}
              loading={index === currentIndex ? "eager" : "lazy"}
              style={{ opacity: isLoading ? 0 : 1 }}
            />
          );
        })}
      </div>
      <div className={styles.thumbnailContainer}>
        {images.map((image, index) => (
          <div 
            key={index}
            className={`${styles.thumbnail} ${index === currentIndex ? styles.activeThumbnail : ''}`}
            onClick={() => {
              setDirection(index > currentIndex ? 'next' : 'previous');
              setCurrentIndex(index);
            }}
          >
            <img 
              src={getImageSrc(image)}
              alt={`Thumbnail ${index + 1}`}
              loading="lazy"
              onError={handleImageError}
            />
          </div>
        ))}
      </div>
    </div>
  );
}; 