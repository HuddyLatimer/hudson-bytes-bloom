import { useRef, useEffect, ReactNode } from 'react';
import { Button } from '@/components/ui/button';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  strength?: number;
  onClick?: () => void;
  asChild?: boolean;
}

const MagneticButton = ({ 
  children, 
  className = '', 
  variant = 'default',
  size = 'default',
  strength = 0.3,
  onClick,
  asChild,
  ...props 
}: MagneticButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const moveX = x * strength;
      const moveY = y * strength;

      button.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
    };

    const handleMouseLeave = () => {
      button.style.transform = 'translate(0px, 0px) scale(1)';
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  return (
    <Button
      ref={buttonRef}
      variant={variant}
      size={size}
      className={`transition-transform duration-300 ease-out hover:shadow-2xl ${className}`}
      onClick={onClick}
      asChild={asChild}
      {...props}
    >
      {children}
    </Button>
  );
};

export default MagneticButton;