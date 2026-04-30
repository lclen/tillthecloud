export const motionTokens = {
  ease: [0.22, 1, 0.36, 1],
  softEase: [0.16, 1, 0.3, 1],
  durations: {
    fast: 0.24,
    base: 0.46,
    slow: 0.72,
    hero: 1.1,
  },
  stagger: {
    tight: 0.05,
    base: 0.1,
    wide: 0.16,
  },
  parallax: {
    desktop: 34,
    mobile: 16,
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: motionTokens.durations.slow, ease: motionTokens.ease },
  },
};

export const fadeSoft = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: motionTokens.durations.base, ease: motionTokens.softEase },
  },
};

export const imageReveal = {
  hidden: { opacity: 0, y: 30, scale: 1.045, filter: 'blur(12px)' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: motionTokens.durations.hero, ease: motionTokens.ease },
  },
};

export const lineReveal = {
  hidden: { scaleX: 0, opacity: 0, originX: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: motionTokens.durations.base, ease: motionTokens.ease },
  },
};

export const staggerContainer = (delayChildren = 0, staggerChildren = motionTokens.stagger.base) => ({
  hidden: {},
  visible: {
    transition: {
      delayChildren,
      staggerChildren,
    },
  },
});
