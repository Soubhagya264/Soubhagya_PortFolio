
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-in' | 'scale-in';
  threshold?: number;
  delay?: number;
}

const ScrollAnimation = ({
  children,
  className,
  animation = 'fade-in',
  threshold = 0.1,
  delay = 0
}: ScrollAnimationProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, delay]);

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-in':
        return 'animate-fade-in';
      case 'slide-in':
        return 'animate-slide-in';
      case 'scale-in':
        return 'animate-scale-in';
      default:
        return 'animate-fade-in';
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        'opacity-0 transition-all duration-700',
        isVisible && getAnimationClass(),
        className
      )}
      style={{ 
        animationDelay: `${delay}ms`,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
