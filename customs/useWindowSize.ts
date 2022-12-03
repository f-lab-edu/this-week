import { useState, useEffect } from 'react';

type WindowSize = {
  width: number | null;
  height: number | null;
  type: 'sm' | 'lg';
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: null,
    height: null,
    type: 'sm',
  });

  const handleResize = () => {
    const { innerWidth, innerHeight } = window;
    setWindowSize({
      width: innerWidth,
      height: innerHeight,
      type: innerWidth >= 1024 ? 'lg' : 'sm',
    });
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
