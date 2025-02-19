import { useState, useCallback, useRef } from 'react';
import { useInViewport } from '~/hooks';
import styles from './image-carousel.module.css';

export const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const carouselRef = useRef(null);
  const inView = useInViewport(carouselRef, true);

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

  return (
    <div ref={carouselRef} className={styles.carouselContainer}>
      <button className={styles.leftArrow} onClick={goToPrevious} aria-label="Previous image">
        ❮
      </button>
      <button className={styles.rightArrow} onClick={goToNext} aria-label="Next image">
        ❯
      </button>
      <div className={styles.imageContainer}>
        {/* 只渲染当前图片和前后相邻的图片 */}
        {images.map((image, index) => {
          const shouldRender = 
            index === currentIndex ||
            index === (currentIndex + 1) % images.length ||
            index === (currentIndex - 1 + images.length) % images.length;
          
          if (!shouldRender) return null;
          
          return (
            <img 
              key={index}
              src={image} 
              alt={`Slide ${index + 1}`}
              className={getSlideClassName(index)}
              loading={index === currentIndex ? "eager" : "lazy"}
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
              src={image} 
              alt={`Thumbnail ${index + 1}`} 
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}; 