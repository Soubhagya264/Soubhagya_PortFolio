
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  highlight?: boolean;
}

const AnimatedText = ({ 
  text, 
  className, 
  once = true, 
  highlight = false 
}: AnimatedTextProps) => {
  const words = text.split(' ');

  return (
    <div className={cn("inline-block", className)}>
      {words.map((word, wordIndex) => (
        <span 
          key={wordIndex} 
          className="inline-block mr-2 overflow-hidden"
        >
          <span
            className={cn(
              "inline-block transform opacity-0",
              once ? "animate-fade-in" : "animate-fade-in animate-delay-300",
              highlight && wordIndex % 2 !== 0 ? "text-gradient" : ""
            )}
            style={{ 
              animationDelay: `${wordIndex * 0.1 + 0.1}s`,
              textShadow: highlight ? "0 0 20px rgba(155, 135, 245, 0.5)" : "0 0 15px rgba(155, 135, 245, 0.3)"
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;
