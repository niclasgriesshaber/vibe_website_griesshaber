declare module 'react-katex' {
  import { FC } from 'react';
  
  interface KaTeXProps {
    math?: string;
    children?: string;
    block?: boolean;
    errorColor?: string;
    renderError?: (error: Error | TypeError) => JSX.Element;
    settings?: any;
  }

  export const InlineMath: FC<KaTeXProps>;
  export const BlockMath: FC<KaTeXProps>;
} 