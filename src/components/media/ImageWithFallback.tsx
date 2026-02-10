import React from 'react';

export type ImageWithFallbackProps = {
  srcs: string[]; // ordered list: local-first, then remote, etc.
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: 'lazy' | 'eager';
};

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ srcs, alt, className, style, loading = 'lazy' }) => {
  const [idx, setIdx] = React.useState(0);

  const handleError: React.ReactEventHandler<HTMLImageElement> = (e) => {
    if (idx < srcs.length - 1) {
      setIdx((i) => i + 1);
      return;
    }
    const img = e.currentTarget;
    if (img.src.endsWith('/placeholder.svg')) return; // avoid loops
    img.src = '/placeholder.svg';
  };

  // Guard against empty srcs
  const currentSrc = srcs[idx] ?? '/placeholder.svg';

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      style={style}
      loading={loading}
      onError={handleError}
    />
  );
};

export default ImageWithFallback;
