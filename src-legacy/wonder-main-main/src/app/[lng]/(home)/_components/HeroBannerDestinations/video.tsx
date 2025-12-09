'use client';

import { useEffect, useRef, useState } from 'react';

interface ILazyVideoProps {
  src: string;
  className?: string;
  poster?: string;
  controls?: boolean;
}

const LazyVideo = ({ src, poster, className, controls=false, ...props }: ILazyVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const checkAndLoadVideo = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const { top } = videoElement.getBoundingClientRect();
      const { innerHeight } = window;
      if (top <= innerHeight) {
        setIsLoaded(true);
        window.removeEventListener('scroll', checkAndLoadVideo);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkAndLoadVideo);
    // checkAndLoadVideo();
    return () => {
      window.removeEventListener('scroll', checkAndLoadVideo);
    };
  }, []);

  return (
    <video
      className={className}
      {...props}
      ref={videoRef}
      controls={controls}
      autoPlay
      muted
      loop
      playsInline
      poster={poster}
    >
      {isLoaded && (
        <>
          <source src={src} type='video/mp4' />
        </>
      )}
      Tu navegador no soporta el elemento <code>video</code>.
    </video>
  );
};

export default LazyVideo;
