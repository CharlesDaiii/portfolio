export const optimizeImage = async (src, options = {}) => {
  const {
    maxWidth = 1200,
    quality = 90,
    format = 'webp'
  } = options;

  // 创建一个 canvas 来处理图片
  const img = new Image();
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  return new Promise((resolve, reject) => {
    img.onload = () => {
      // 计算新的尺寸，保持更高的分辨率
      let width = img.width;
      let height = img.height;
      
      if (width > maxWidth) {
        height = (height * maxWidth) / width;
        width = maxWidth;
      }

      // 使用更高的分辨率
      canvas.width = width;
      canvas.height = height;
      
      // 使用更好的图像平滑设置
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      // 绘制并压缩图片
      ctx.drawImage(img, 0, 0, width, height);
      
      // 使用更高质量的压缩
      const optimized = canvas.toDataURL(`image/${format}`, quality / 100);
      resolve(optimized);
    };

    img.onerror = reject;
    img.src = src;
  });
}; 