import { useEffect, useRef, useState } from 'react';

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
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="contents" className="bg-gradient-to-b from-[#eef2f5] via-[#f9f8f4] to-[#e8edf3] py-28 md:py-40" ref={ref}>
      <div className="max-w-[1100px] mx-auto px-8 md:px-12">
        <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            {/* Left - Contents */}
            <div>
              <p className="text-[10px] md:text-xs tracking-[0.35em] text-[#999] uppercase mb-3">CONTENTS</p>
              <h2 className="text-3xl md:text-4xl font-light tracking-wider text-[#2c2c2c] mb-10">目录</h2>
              <div className="w-10 h-[1px] bg-[#2c2c2c]/20 mb-10" />
              <div className="space-y-10">
                {categories.map((cat, idx) => (
                  <button
                    key={cat.id}
                    onClick={() => scrollTo(cat.id)}
                    className="block text-left group w-full"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="text-2xl md:text-3xl font-extralight tracking-wider text-[#2c2c2c] group-hover:text-[#999] transition-colors">
                        {cat.en}
                      </span>
                    </div>
                    <p className="text-sm text-[#999] mt-2 tracking-[0.2em]">{cat.zh}</p>
                    {idx < categories.length - 1 && (
                      <div className="mt-10 w-full h-[1px] bg-[#2c2c2c]/10" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Right - Welcome */}
            <div className="bg-white/58 p-8 shadow-[0_20px_50px_rgba(69,78,94,0.08)] md:p-12">
              <p className="text-[10px] tracking-[0.3em] text-[#999] uppercase mb-2">WELCOME TO</p>
              <h3 className="text-2xl font-light text-[#2c2c2c] mb-6 tracking-wider">向云端</h3>
              <div className="space-y-4 text-[13px] text-[#666] leading-[2]">
                <p>「向云端」是一种面向理想生活的想象与精神栖居。它既指向云端、山野等物理上的「高处与远方」，也是对话内照耕在日常琐碎的温柔逃离——让身体暂时离开，心灵得以舒展。</p>
                <p>品牌首店落子安徽黄山休宁，依托溪岸公路与静谧水杉林，以最少的现代工业嵌入自然，让自然成为主角。全新无锡项目位于新吴区鸿山生态·中华赏石园，在厚重文脉与江南诗意之间，以复合建筑与立体景观搭接起城市生活，为城市提供一处轻盈而克制的精神乌托邦。</p>
              </div>
              <div className="mt-8 bg-white p-2 shadow-sm">
                <img
                  src="/images/optimized/向云端1.4跨页手册_页面_02_图像_0001.webp"
                  alt="向云端打卡"
                  className="w-full h-56 object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
