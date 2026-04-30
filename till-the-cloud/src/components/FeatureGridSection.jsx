import { useEffect, useRef, useState } from 'react';

function FeatureCopy({ item, align = 'left', compact = false, rail = false, className = '' }) {
  const alignClass = align === 'right' ? 'text-right items-end' : 'text-left items-start';
  const railWrapClass = align === 'right' ? 'flex-row-reverse justify-start gap-5' : 'flex-row justify-between gap-5';

  return (
    <div className={`flex flex-col ${alignClass} ${className}`}>
      {rail ? (
        <div className={`flex w-full items-start ${railWrapClass}`}>
          <div className={`flex flex-col ${alignClass}`}>
            <h3 className={`${compact ? 'text-lg' : 'text-xl'} font-light tracking-[0.16em] text-[#3f4145]`}>{item.title}</h3>
            <p className="mt-1 text-base tracking-[0.12em] text-[#5f6063] md:text-lg">{item.subtitle}</p>
          </div>
          <div className="mt-1 h-[74px] w-[2px] shrink-0 bg-[#c4cad4]" />
        </div>
      ) : (
        <>
          <h3 className={`${compact ? 'text-lg' : 'text-xl'} font-light tracking-[0.16em] text-[#3f4145]`}>{item.title}</h3>
          <p className="mt-1 text-base tracking-[0.12em] text-[#5f6063] md:text-lg">{item.subtitle}</p>
          <div className={`${compact ? 'mt-4 h-[2px] w-12' : 'mt-4 h-16 w-[2px]'} bg-[#c4cad4]`} />
        </>
      )}
      <p className={`${rail ? 'mt-5' : 'mt-4'} ${compact ? 'max-w-none' : 'max-w-[210px]'} text-[13px] leading-[1.9] tracking-[0.08em] text-[#68707c]`}>
        {item.description}
      </p>
    </div>
  );
}

export default function FeatureGridSection({ id, chinese, english, items, backgroundImage, bg = 'white' }) {
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
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  if (backgroundImage) {
    const isDining = chinese.includes('餐饮');
    const titleBlock = (
      <div>
        <p className="text-2xl font-light tracking-[0.18em] text-[#3f4145]">{chinese}</p>
        <p className="mt-4 text-sm uppercase tracking-[0.28em] text-[#8190b1]">{english}</p>
      </div>
    );

    return (
      <section id={id} className={`scroll-mt-24 py-0 ${isDining ? 'page-mist' : 'page-paper'}`} ref={ref}>
        <div className="mx-auto max-w-[1200px]">
          <div
            className={`relative min-h-[720px] overflow-hidden transition-all duration-1000 ${
              isDining ? 'bg-gradient-to-b from-[#e8edf3] via-[#f9f8f4] to-[#f2ebe0]' : 'bg-gradient-to-b from-[#f2ebe0] via-[#f9f8f4] to-[#e8edf3]'
            } ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {isDining ? (
              <>
                <div className="absolute inset-y-0 left-[24%] hidden w-[52%] overflow-hidden lg:block">
                  <img src={backgroundImage} alt="" className="h-full w-full object-cover opacity-70" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-white/10" />
                </div>

                <div className="relative min-h-[720px] px-6 py-12 md:px-8 lg:hidden">
                  <div className="mb-8">
                    <p className="text-2xl font-light tracking-[0.12em] text-[#3f4145]">{chinese}</p>
                    <p className="mt-4 text-sm uppercase tracking-[0.22em] text-[#8190b1]">{english}</p>
                  </div>
                  <div className="grid gap-6">
                    {items.map((item) => (
                      <div key={item.title} className="bg-white/88 p-3 shadow-[0_12px_26px_rgba(54,65,82,0.12)]">
                        <figure className="border-[5px] border-white shadow-md">
                          <img src={item.image} alt={item.title} className="h-48 w-full object-cover sm:h-56" loading="lazy" decoding="async" />
                        </figure>
                        <div className="px-2 py-5">
                          <FeatureCopy item={item} compact />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative hidden min-h-[760px] lg:grid lg:grid-cols-[0.78fr_1.56fr_0.78fr] lg:gap-6 lg:px-8 lg:py-12">
                  <div className="flex flex-col justify-between bg-[#f8f6f1]/92 px-8 py-10 backdrop-blur-[1px]">
                    {titleBlock}
                    <FeatureCopy item={items[0]} rail />
                    <FeatureCopy item={items[1]} rail />
                  </div>

                  <div className="relative">
                    <figure className="absolute left-2 top-16 w-[45%] border-[5px] border-white shadow-[0_12px_28px_rgba(54,65,82,0.18)]">
                      <img src={items[0].image} alt={items[0].title} className="h-56 w-full object-cover" loading="lazy" decoding="async" />
                    </figure>
                    <figure className="absolute right-3 top-16 w-[45%] border-[5px] border-white shadow-[0_12px_28px_rgba(54,65,82,0.18)]">
                      <img src={items[2].image} alt={items[2].title} className="h-56 w-full object-cover" loading="lazy" decoding="async" />
                    </figure>
                    <figure className="absolute left-2 bottom-14 w-[45%] border-[5px] border-white shadow-[0_12px_28px_rgba(54,65,82,0.18)]">
                      <img src={items[1].image} alt={items[1].title} className="h-56 w-full object-cover" loading="lazy" decoding="async" />
                    </figure>
                    <figure className="absolute right-3 bottom-12 w-[45%] border-[5px] border-white shadow-[0_12px_28px_rgba(54,65,82,0.18)]">
                      <img src={items[3].image} alt={items[3].title} className="h-56 w-full object-cover" loading="lazy" decoding="async" />
                    </figure>
                  </div>

                  <div className="flex flex-col justify-between bg-[#f8f6f1]/92 px-8 py-10 backdrop-blur-[1px]">
                    <FeatureCopy item={items[2]} align="right" rail />
                    <FeatureCopy item={items[3]} align="right" rail />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="absolute inset-y-0 left-1/2 hidden w-[42%] -translate-x-1/2 overflow-hidden lg:block">
                  <img src={backgroundImage} alt="" className="h-full w-full object-cover opacity-50" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,245,239,0.08),rgba(247,245,239,0.18))]" />
                </div>

                <div className="relative min-h-[720px] px-6 py-12 md:px-8 lg:hidden">
                  <div className="mb-8">
                    <p className="text-2xl font-light tracking-[0.12em] text-[#3f4145]">{chinese}</p>
                    <p className="mt-4 text-sm uppercase tracking-[0.22em] text-[#8190b1]">{english}</p>
                  </div>
                  <div className="grid gap-6">
                    {items.map((item) => (
                      <div key={item.title} className="bg-white/90 p-3 shadow-[0_12px_26px_rgba(54,65,82,0.12)]">
                        <figure className="border-[5px] border-white shadow-md">
                          <img src={item.image} alt={item.title} className="h-48 w-full object-cover sm:h-56" loading="lazy" decoding="async" />
                        </figure>
                        <div className="px-2 py-5">
                          <FeatureCopy item={item} compact />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative hidden min-h-[820px] lg:grid lg:grid-cols-[0.82fr_1.64fr_0.82fr] lg:gap-8 lg:px-8 lg:py-12">
                  <div className="grid grid-rows-[auto_272px_272px] gap-8 bg-[#f8f6f1]/94 px-8 py-10 backdrop-blur-[1px]">
                    <div className="self-start">{titleBlock}</div>
                    <div className="flex items-center">
                      <FeatureCopy item={items[0]} rail className="w-full justify-center" />
                    </div>
                    <div className="flex items-center">
                      <FeatureCopy item={items[2]} rail className="w-full justify-center" />
                    </div>
                  </div>

                  <div className="grid grid-rows-[272px_272px] gap-8 pt-[118px]">
                    <div className="grid grid-cols-2 gap-8">
                      <figure className="h-full border-[5px] border-white shadow-[0_16px_34px_rgba(54,65,82,0.20)]">
                        <img src={items[0].image} alt={items[0].title} className="h-full w-full object-cover" loading="lazy" decoding="async" />
                      </figure>
                      <figure className="h-full border-[5px] border-white shadow-[0_16px_34px_rgba(54,65,82,0.20)]">
                        <img src={items[1].image} alt={items[1].title} className="h-full w-full object-cover" loading="lazy" decoding="async" />
                      </figure>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                      <figure className="h-full border-[5px] border-white shadow-[0_16px_34px_rgba(54,65,82,0.20)]">
                        <img src={items[2].image} alt={items[2].title} className="h-full w-full object-cover" loading="lazy" decoding="async" />
                      </figure>
                      <figure className="h-full border-[5px] border-white shadow-[0_16px_34px_rgba(54,65,82,0.20)]">
                        <img src={items[3].image} alt={items[3].title} className="h-full w-full object-cover" loading="lazy" decoding="async" />
                      </figure>
                    </div>
                  </div>

                  <div className="grid grid-rows-[118px_272px_272px] gap-8 bg-[#f8f6f1]/94 px-8 py-10 backdrop-blur-[1px]">
                    <div />
                    <div className="flex items-center justify-end">
                      <FeatureCopy item={items[1]} align="right" rail className="w-full justify-center" />
                    </div>
                    <div className="flex items-center justify-end">
                      <FeatureCopy item={items[3]} align="right" rail className="w-full justify-center" />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    );
  }

  const bgClass = bg === 'light' ? 'page-mist' : 'page-paper';

  return (
    <section id={id} className={`scroll-mt-24 py-28 md:py-36 ${bgClass}`} ref={ref}>
      <div className="mx-auto max-w-[1100px] px-8 md:px-12">
        <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-14 text-center">
            <p className="mb-3 text-[10px] uppercase tracking-[0.35em] text-[#999]">{english}</p>
            <h2 className="mb-4 text-2xl font-light tracking-wider text-[#2c2c2c] md:text-3xl">{chinese}</h2>
            <div className="mx-auto h-[1px] w-10 bg-[#2c2c2c]/20" />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item) => (
              <div key={item.title} className="group">
                <div className="mb-4 overflow-hidden bg-white p-2 shadow-sm">
                  <img src={item.image} alt={item.title} className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-60" loading="lazy" decoding="async" />
                </div>
                <h3 className="mb-1 text-sm font-normal tracking-wider text-[#2c2c2c]">{item.title}</h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#999]">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
