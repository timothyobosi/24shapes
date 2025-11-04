import React, { useEffect, useRef, useState } from 'react';

interface LazyMountProps {
  id?: string;
  minHeight?: number;
  rootMargin?: string;
  children: React.ReactNode;
}

const LazyMount: React.FC<LazyMountProps> = ({ id, minHeight = 200, rootMargin = '200px', children }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current || visible) return;
    const el = ref.current;

    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisible(true);
              obs.disconnect();
            }
          });
        },
        { root: null, rootMargin, threshold: 0.01 }
      );
      obs.observe(el);
      return () => obs.disconnect();
    } else {
      // Fallback: render immediately
      setVisible(true);
    }
  }, [visible, rootMargin]);

  return (
    <div id={id} ref={ref} style={{ minHeight }}>
      {visible ? children : null}
    </div>
  );
};

export default LazyMount;
