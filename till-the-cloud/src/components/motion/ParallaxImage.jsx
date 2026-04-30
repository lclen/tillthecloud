import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { motionTokens } from '../../lib/motion';

export default function ParallaxImage({
  src,
  alt,
  className = '',
  containerRef,
  range = [-1, 1],
  output,
  ...props
}) {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(
    scrollYProgress,
    range,
    output ?? [prefersReducedMotion ? 0 : motionTokens.parallax.mobile, prefersReducedMotion ? 0 : -motionTokens.parallax.desktop]
  );

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      style={{ y }}
      {...props}
    />
  );
}
