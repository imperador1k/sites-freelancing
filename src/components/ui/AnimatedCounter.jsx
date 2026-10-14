import { useState, useRef, useEffect } from 'react';
import { useInView, animate } from 'framer-motion';

/**
 * Animated counter component using Framer Motion
 */
export default function AnimatedCounter({ target, suffix = '', duration = 1.5 }) {
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, target, {
      duration,
      ease: 'easeOut',
      onUpdate: (latestValue) => setCount(Math.floor(latestValue)),
    });
    return () => controls.stop();
  }, [isInView, target, duration]);

  return <span ref={counterRef}>{count}{suffix}</span>;
}
