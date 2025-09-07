import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
}

const ScrollReveal = ({ 
  children, 
  className = '', 
  delay = 0, 
  direction = 'up' 
}: ScrollRevealProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('scroll-reveal-visible');
            }, delay);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(element);

    return () => observer.unobserve(element);
  }, [delay]);

  const getDirectionClasses = () => {
    switch (direction) {
      case 'up':
        return 'translate-y-12 opacity-0';
      case 'down':
        return '-translate-y-12 opacity-0';
      case 'left':
        return 'translate-x-12 opacity-0';
      case 'right':
        return '-translate-x-12 opacity-0';
      case 'fade':
        return 'opacity-0';
      default:
        return 'translate-y-12 opacity-0';
    }
  };

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal ${getDirectionClasses()} transition-all duration-1000 ease-out ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;