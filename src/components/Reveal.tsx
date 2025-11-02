import React from 'react';
import { useInView } from '../hooks/useInView';

type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

const Reveal: React.FC<Props> = ({ children, delay = 0, className }) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const style: React.CSSProperties = {
    transition: 'all 600ms cubic-bezier(0.22, 1, 0.36, 1)',
    transitionDelay: `${delay}ms`,
    transform: inView ? 'none' : 'translateY(12px)',
    opacity: inView ? 1 : 0,
    willChange: 'transform, opacity',
  };
  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
};

export default Reveal;
