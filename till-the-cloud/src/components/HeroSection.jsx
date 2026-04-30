import { motion, useReducedMotion } from 'framer-motion';
import { imageReveal, lineReveal, motionTokens, staggerContainer, fadeSoft } from '../lib/motion';

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: prefersReducedMotion ? 1 : 1.06, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: motionTokens.durations.hero + 0.2, ease: motionTokens.ease }}
      >
        <motion.img
          src="/images/optimized/向云端1.4跨页手册_页面_01_图像_0001.webp"
          alt="向云端营地"
          className="w-full h-full object-cover"
          fetchPriority="high"
          decoding="async"
          initial="hidden"
          animate="visible"
          variants={imageReveal}
        />
        <motion.div
          className="absolute inset-0 bg-black/15"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: motionTokens.durations.hero, ease: motionTokens.ease }}
        />
      </motion.div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-6">
        <motion.div
          className="text-center"
          variants={staggerContainer(0.18, motionTokens.stagger.base)}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="text-6xl md:text-8xl font-extralight tracking-[0.25em] mb-3" variants={fadeSoft}>
            向云端
          </motion.h1>
          <motion.p className="text-sm md:text-base tracking-[0.5em] uppercase font-light opacity-90" variants={fadeSoft}>
            Till The Cloud
          </motion.p>
          <motion.div className="w-16 h-[1px] bg-white/50 mx-auto my-8" variants={lineReveal} />
          <motion.p className="text-base md:text-lg tracking-[0.15em] opacity-80 font-light" variants={fadeSoft}>
            Where nature breathes, Where time slows
          </motion.p>
          <motion.p className="text-xs md:text-sm tracking-[0.25em] opacity-60 mt-4 uppercase font-light" variants={fadeSoft}>
            Ecological Cultural Tourism Destination
          </motion.p>
        </motion.div>

        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: motionTokens.durations.base, ease: motionTokens.ease }}
        >
          <svg className="hero-breathe w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
