'use client';

import { useEffect, useRef, useState } from 'react';

export default function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay === 1 ? 'reveal-delay-1' : delay === 2 ? 'reveal-delay-2' : delay === 3 ? 'reveal-delay-3' : delay === 4 ? 'reveal-delay-4' : '';

  return (
    <div ref={ref} className={`reveal ${delayClass} ${isVisible ? 'active' : ''} ${className}`}>
      {children}
    </div>
  );
}
