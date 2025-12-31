import React, { useState, useRef, useEffect } from 'react';

type Props = {
  className?: string;
  src: string;
  alt?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  onLoad?: () => void;
  onError?: () => void;
};

function LazyImage(props: Props): React.ReactElement {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(() => !('IntersectionObserver' in window));
  const imgRef = useRef<HTMLImageElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!imgRef.current) return;
    // 浏览器不支持 IntersectionObserver
    if (!imgRef.current || !('IntersectionObserver' in window)) {
      return;
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setIsInView(true);
        observerRef.current?.unobserve(entry.target);
      },
      { rootMargin: '100px' },
    );
    observerRef.current.observe(imgRef.current);

    return () => {
      if (observerRef.current && imgRef.current) {
        observerRef.current.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <img
      className={`lazy-image ${isLoaded ? 'lazy-loaded' : 'lazy-loading'} ${props.className}`}
      ref={imgRef}
      src={isInView ? props.src : undefined}
      alt={props.alt ?? ''}
      style={props.style}
      onClick={() => props.onClick?.()}
      onLoad={() => {
        setIsLoaded(true);
        props.onLoad?.();
      }}
      onError={() => props.onError?.()}
      loading="lazy"
    />
  );
}

export default LazyImage;
