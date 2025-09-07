import { useEffect, useState } from 'react';

const FloatingElements = () => {
  const [elements, setElements] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    delay: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    const createElements = () => {
      const newElements = [];
      for (let i = 0; i < 15; i++) {
        newElements.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 60 + 20,
          delay: Math.random() * 2,
          duration: Math.random() * 20 + 10,
        });
      }
      setElements(newElements);
    };

    createElements();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute rounded-full opacity-5 bg-gradient-to-br from-cyan to-purple blur-sm animate-float"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`,
          }}
        />
      ))}
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan/10 to-transparent rounded-full blur-3xl animate-pulse" 
           style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple/10 to-transparent rounded-full blur-3xl animate-pulse" 
           style={{ animationDuration: '6s', animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-r from-electric/10 to-transparent rounded-full blur-3xl animate-pulse" 
           style={{ animationDuration: '8s', animationDelay: '4s' }} />
    </div>
  );
};

export default FloatingElements;