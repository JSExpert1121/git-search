import { useState, useEffect } from 'react';

export type Size = {
  width: number;
  height: number;
}

export function useWindowSize(): Size {
    const [windowSize, setWindowSize] = useState<Size>({
      width: 0,
      height: 0
    });
    
    useEffect(() => {
      function handleResize(): void {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener('resize', handleResize);
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
  }