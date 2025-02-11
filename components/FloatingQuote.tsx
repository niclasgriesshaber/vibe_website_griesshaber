import React from 'react';

interface FloatingQuoteProps {
  text: string;
  author: string;
  style?: React.CSSProperties;
  className?: string;
}

export const FloatingQuote: React.FC<FloatingQuoteProps> = ({ text, author, style, className }) => {
  return (
    <div 
      className={`quote-float ${className || ''}`}
      style={{
        position: 'absolute',
        maxWidth: '300px',
        ...style
      }}
    >
      <blockquote className="text-gray-700 italic text-sm">
        "{text}"
        <footer className="text-gray-600 text-xs mt-1">
          — {author}
        </footer>
      </blockquote>
    </div>
  );
}; 