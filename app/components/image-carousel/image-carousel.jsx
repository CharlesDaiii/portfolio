import { useState, useCallback, useRef, useEffect } from 'react';
import { useInViewport } from '~/hooks';
import styles from './image-carousel.module.css';

export const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const carouselRef = useRef(null);
  const inView = useInViewport(carouselRef, true);
  
  // 预加载下一张图片
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % images.length;
    const img = new Image();
    img.src = getImageSrc(images[nextIndex]);
  }, [currentIndex, images]);

  const getImageSrc = (image) => {
    if (typeof image === 'string') return image;
    return image.src || image.url || '';
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
    if (index === currentIndex) return `${styles.slide} ${styles.active}`;
    if (direction === 'next' && index === (currentIndex - 1 + images.length) % images.length) {
      return `${styles.slide} ${styles.previous}`;
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
        {/* 只渲染当前图片 */}
        <img 
          key={currentIndex}
          src={getImageSrc(images[currentIndex])}
          alt={`Slide ${currentIndex + 1}`}
          className={styles.slide}
          loading="eager"
        />
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