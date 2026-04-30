import { useEffect, useRef, useState } from 'react';

export default function WelcomeSection() {
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

  return (
    <section id="welcome" className="bg-gradient-to-b from-[#e8edf3] via-[#f9f8f4] to-[#f9f8f4] py-28 md:py-40" ref={ref}>
      <div className="max-w-[1100px] mx-auto px-8 md:px-12">
        <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="order-2 md:order-1">
              <p className="text-[10px] tracking-[0.3em] text-[#999] uppercase mb-2">WELCOME TO</p>
              <h2 className="text-3xl md:text-4xl font-light text-[#2c2c2c] mb-2 tracking-wider">
                欢迎来到
              </h2>
              <h2 className="text-3xl md:text-4xl font-light text-[#2c2c2c] mb-8 tracking-wider">
                向云端
              </h2>
              <div className="w-10 h-[1px] bg-[#2c2c2c]/20 mb-8" />
              <div className="space-y-5 text-[13px] text-[#666] leading-[2]">
                <p>「向云端」是一种面向理想生活的想象与精神栖居。它既指向云端、山野等物理上的「高处与远方」，也是对话内照耕在日常琐碎的温柔逃离——让身体暂时离开，心灵得以舒展。</p>
                <p>品牌首店落子安徽黄山休宁，依托溪岸公路与静谧水杉林，以最少的现代工业嵌入自然，让自然成为主角。全新无锡项目位于新吴区鸿山生态·中华赏石园，在厚重文脉与江南诗意之间，以复合建筑与立体景观搭接起城市生活，为城市提供一处轻盈而克制的精神乌托邦。</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-white p-2 shadow-sm">
                <img
                  src="/images/optimized/向云端1.4跨页手册_页面_02_图像_0001.webp"
                  alt="向云端打卡"
                  className="w-full h-[420px] md:h-[520px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
