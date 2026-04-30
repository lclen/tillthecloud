import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useMemo, useRef } from 'react';
import { fadeSoft, fadeUp, motionTokens, staggerContainer } from '../../lib/motion';

export function Reveal({
  children,
  className = '',
  as = 'div',
  amount = 0.18,
  delay = 0,
  variant = 'up',
  once = true,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, amount });
  const prefersReducedMotion = useReducedMotion();
  const Component = motion[as];

  const variants = useMemo(() => {
    const base = variant === 'soft' ? fadeSoft : fadeUp;
    if (!delay) return base;
    return {
      hidden: base.hidden,
      visible: {
        ...base.visible,
        transition: {
          ...base.visible.transition,
          delay,
          duration: prefersReducedMotion ? motionTokens.durations.fast : base.visible.transition.duration,
        },
      },
    };
  }, [delay, prefersReducedMotion, variant]);

  return (
    <Component
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
    >
      {children}
    </Component>
  );
}

export function StaggerReveal({
  children,
  className = '',
  as = 'div',
  amount = 0.18,
  delayChildren = 0,
  staggerChildren = motionTokens.stagger.base,
  once = true,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, amount });
  const Component = motion[as];

  return (
    <Component
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={staggerContainer(delayChildren, staggerChildren)}
    >
      {children}
    </Component>
  );
}
