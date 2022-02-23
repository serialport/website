import React, { useEffect, useRef } from 'react';

export const AsciinemaPlayer = ({ src, theme, autoPlay, preload }) => {
  const ref = useRef();

  useEffect(() => {
    let unload;
    if (ref.current) {
      import('asciinema-player').then(({ create }) => {
        if (!ref.current) {
          return;
        }
        const { dispose } = create(src, ref.current, { theme, autoPlay, preload });
        unload = dispose;
      });
    }
    return () => unload && unload();
  }, [ref.current]);
  return <div ref={ref} />;
};
