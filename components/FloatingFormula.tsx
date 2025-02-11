import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

interface FloatingFormulaProps {
  formula: string;
  style?: React.CSSProperties;
  className?: string;
}

export const FloatingFormula: React.FC<FloatingFormulaProps> = ({ formula, style, className }) => {
  return (
    <div 
      className={`formula-float ${className || ''}`}
      style={{
        position: 'absolute',
        ...style
      }}
    >
      <InlineMath>{formula}</InlineMath>
    </div>
  );
}; 