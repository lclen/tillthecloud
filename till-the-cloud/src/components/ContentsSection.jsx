import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { StaggerReveal } from './motion/Reveal';
import { fadeSoft, imageReveal, lineReveal, motionTokens } from '../lib/motion';

const categories = [
  { id: 'cloud-courtyard', en: 'BUILDING', zh: '场景' },
  { id: 'features', en: 'FUNCTION', zh: '功能' },
  { id: 'neighborhood', en: 'NEIGHBOR', zh: '周边' },
];

export default function ContentsSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.16 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="contents"
      className="scroll-mt-24 bg-gradient-to-b from-[#eff3f7] via-[#f9f8f4] to-[#d9dee7] py-0"
      ref={ref}
    >
      <div className="mx-auto max-w-[1200px] px-0">
        <motion.div
          className={`transition-all duration-1000 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          initial={false}
        >
          <div className="relative overflow-hidden bg-[#d9dee7]">
            <div className="grid lg:grid-cols-[1.02fr_0.98fr]">
              <div className="bg-[#fbfaf7] px-10 py-16 md:px-14 md:py-20 lg:min-h-[524px] lg:px-16 lg:py-14">
                <StaggerReveal className="mx-auto max-w-[300px] text-center" staggerChildren={motionTokens.stagger.tight}>
                  <motion.p className="text-[38px] font-light tracking-[0.32em] text-[#54585f] md:text-[46px]" variants={fadeSoft}>
                    CONTENTS
                  </motion.p>
                  <motion.p className="mt-3 text-[18px] tracking-[0.18em] text-[#7f90b3]" variants={fadeSoft}>目录</motion.p>
                  <motion.div className="mx-auto mt-5 h-[2px] w-14 bg-[#93a4c5]" variants={lineReveal} />
                </StaggerReveal>

                <StaggerReveal className="mx-auto mt-12 flex max-w-[240px] flex-col gap-11 md:mt-16" staggerChildren={motionTokens.stagger.base}>
                  {categories.map((cat) => (
                    <motion.button
                      key={cat.id}
                      onClick={() => scrollTo(cat.id)}
                      className="group text-center"
                      variants={fadeSoft}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.986 }}
                    >
                      <motion.p className="text-[28px] font-light tracking-[0.16em] text-[#565b64] transition-colors duration-300 group-hover:text-[#7f90b3]">
                        {cat.en}
                      </motion.p>
                      <motion.p className="mt-4 text-[18px] tracking-[0.18em] text-[#7f90b3] transition-colors duration-300 group-hover:text-[#65789e]">
                        {cat.zh}
                      </motion.p>
                    </motion.button>
                  ))}
                </StaggerReveal>
              </div>

              <div className="relative px-10 py-16 md:px-14 md:py-20 lg:min-h-[524px] lg:px-16 lg:py-12">
                <StaggerReveal className="max-w-[285px]" staggerChildren={motionTokens.stagger.tight}>
                  <div className="flex flex-wrap items-end gap-x-2 gap-y-2">
                    <motion.h3 className="text-[28px] font-light tracking-[0.12em] text-[#6f737b] md:text-[34px]" variants={fadeSoft}>
                      欢迎来到
                    </motion.h3>
                    <motion.div variants={fadeSoft}>
                      <p className="text-[28px] font-light tracking-[0.18em] text-[#7d8fb2] md:text-[34px]">
                        向云端
                      </p>
                    </motion.div>
                    <motion.p className="pb-[3px] text-[12px] uppercase tracking-[0.24em] text-[#8b97aa]" variants={fadeSoft}>
                      Till The Cloud
                    </motion.p>
                  </div>
                  <motion.div className="mt-4 h-[2px] w-full bg-[#9ea9bc]" variants={lineReveal} />
                  <motion.div className="mt-5 space-y-7 text-[13px] leading-[2.02] tracking-[0.08em] text-[#5f6570]" variants={fadeSoft}>
                    <p className="motion-hover-lift">
                      「向云端」是一种面向理想生活的想象与精神栖居。它既指向云端、山野等物理上的“高处与远方”，也是对城市拥挤与日常琐碎的温柔抽离，让身体暂时离开，心灵得以舒展。
                    </p>
                    <p className="motion-hover-lift">
                      品牌首店落子安徽黄山休宁，依托溪岸公路与原生水杉林，以极少的现代工业嵌入自然，让自然成为主角。全新无锡项目位于新吴区鸿山生态·中华赏石园，在厚重文脉与江南诗意之间，以蓝白建筑与水岸景观串联起城市生活，为城市提供一处轻盈而克制的精神乌托邦。
                    </p>
                  </motion.div>
                </StaggerReveal>
              </div>
            </div>

            <div className="grid lg:grid-cols-[1.02fr_0.98fr]">
              <div className="bg-[#d9dee7] px-10 py-12 md:px-14 lg:px-16 lg:py-12">
                <StaggerReveal className="max-w-[360px]" staggerChildren={motionTokens.stagger.tight}>
                  <motion.div className="h-[2px] w-full bg-[#8fa0bf]" variants={lineReveal} />
                  <motion.p className="mt-6 text-[12px] leading-[1.95] tracking-[0.09em] text-[#8d9ab0] md:text-[13px]" variants={fadeSoft}>
                    Till The Cloud is a curated micro-park brand rooted in landscape and everyday life.
                    Each site transforms land and nature into spaces for leisure and gatherings,
                    summarized in this brochure&apos;s overview of spaces, functions and collaboration.
                  </motion.p>
                  <motion.div className="mt-5 flex items-center gap-4 text-[#51555f]" variants={fadeSoft}>
                    <div className="h-[2px] w-5 bg-[#51555f]" />
                    <span className="text-[26px] font-light leading-none">2</span>
                    <div className="h-[2px] w-5 bg-[#51555f]" />
                  </motion.div>
                </StaggerReveal>
              </div>

              <div className="relative min-h-[220px] bg-[#bcc5d4] lg:min-h-[168px]">
                <motion.figure
                  className="mx-auto -mt-4 w-[78%] border border-[#7a7f87]/50 bg-white p-[3px] shadow-[0_18px_36px_rgba(72,80,94,0.12)] md:w-[66%] lg:absolute lg:-top-[164px] lg:left-[-56px] lg:m-0 lg:w-[430px]"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={imageReveal}
                >
                  <motion.img
                    src="/images/optimized/向云端1.4跨页手册_页面_02_图像_0001.webp"
                    alt="向云端打卡"
                    className="h-[210px] w-full object-cover md:h-[270px] lg:h-[248px]"
                    loading="lazy"
                    decoding="async"
                    whileHover={{ scale: 1.025 }}
                    transition={{ duration: motionTokens.durations.slow, ease: motionTokens.ease }}
                  />
                </motion.figure>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
