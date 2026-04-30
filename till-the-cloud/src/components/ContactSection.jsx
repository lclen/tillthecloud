import { motion } from 'framer-motion';
import { Reveal, StaggerReveal } from './motion/Reveal';
import { fadeSoft, motionTokens } from '../lib/motion';

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 bg-gradient-to-b from-[#302f2f] via-[#d3d9e1] to-[#d3d9e1] pt-16">
      <div className="mx-auto max-w-[1200px] bg-white">
        <div className="flex items-start justify-between bg-[#f9f8f4] px-8 py-10 md:px-14">
          <StaggerReveal className="flex flex-col" staggerChildren={motionTokens.stagger.tight}>
            <motion.img
              src="/images/cloud-direction-transparent.png"
              alt="向云端 Till The Cloud"
              className="w-56 md:w-72"
              loading="lazy"
              decoding="async"
              variants={fadeSoft}
              whileHover={{ y: -4, opacity: 0.96 }}
            />
            <motion.p className="mt-2 text-sm tracking-[0.18em] text-[#b7bfd4]" variants={fadeSoft}>
              Where nature breathes, Where time slows
            </motion.p>
          </StaggerReveal>
          <StaggerReveal className="space-y-5 text-right text-lg tracking-[0.16em] text-[#8190b1]" staggerChildren={motionTokens.stagger.tight}>
            <motion.p variants={fadeSoft}>文旅</motion.p>
            <motion.p variants={fadeSoft}>度假</motion.p>
            <motion.p variants={fadeSoft}>生活</motion.p>
          </StaggerReveal>
        </div>

        <div className="bg-gradient-to-b from-[#cfd5dd] to-[#c3cad3] px-8 py-20 text-white md:px-14 md:py-28">
          <Reveal className="inline-block bg-white p-2" variant="soft">
            <motion.img
              src="/images/optimized/向云端1.4跨页手册_页面_15_图像_0001.webp"
              alt="微信公众号二维码"
              className="h-28 w-28 object-contain"
              loading="lazy"
              decoding="async"
              whileHover={{ y: -3, scale: 1.02 }}
              transition={{ duration: motionTokens.durations.base, ease: motionTokens.ease }}
            />
          </Reveal>

          <StaggerReveal className="mt-14" staggerChildren={motionTokens.stagger.tight}>
            <motion.h2 className="text-2xl font-light uppercase tracking-[0.32em] md:text-3xl" variants={fadeSoft}>Till The Cloud</motion.h2>
            <motion.p className="mt-5 text-xl uppercase tracking-[0.28em] text-white/86" variants={fadeSoft}>Project Profile · Wuxi</motion.p>
            <motion.div className="mt-8 h-[1px] w-20 bg-white/75" variants={fadeSoft} />
          </StaggerReveal>

          <StaggerReveal className="mt-10 max-w-[460px] space-y-8 text-sm leading-relaxed tracking-[0.08em] text-white/92" staggerChildren={motionTokens.stagger.tight}>
            <motion.div variants={fadeSoft}>
              <p className="font-medium">向云端 · Till The Cloud</p>
            </motion.div>
            <motion.div variants={fadeSoft}>
              <p>地址 Address:</p>
              <p>中国江苏省无锡市新吴区飞凤路202号向云端世界</p>
              <p>观光列车梦乐园</p>
            </motion.div>
            <motion.div variants={fadeSoft}>
              <p>商务合作 Business:</p>
              <p>T +86 19952765273</p>
            </motion.div>
            <motion.p className="pt-6 lowercase tracking-[0.16em]" variants={fadeSoft}>www.tillthecloud.com</motion.p>
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}
