import { useEffect, useRef, useState } from 'react';

function Copy({ children, className = '' }) {
  return (
    <div className={`text-[13px] leading-[2.25] tracking-[0.1em] text-white/80 ${className}`}>
      {Array.isArray(children) ? children.map((p, i) => <p key={i}>{p}</p>) : <p>{children}</p>}
    </div>
  );
}

export default function DarkSection({
  id,
  chinese,
  english,
  description,
  images,
  imagePosition = 'right',
  detailColumns,
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const isNeighborhood = imagePosition === 'left';
  const isGroupEvent = id === 'group-event';
  const isNeighborhoodSection = id === 'neighborhood';

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

  return (
    <section
      id={id}
      className={`scroll-mt-24 ${isNeighborhood ? 'bg-[#302f2f] py-0' : 'page-dark-bridge py-12 md:py-16'}`}
      ref={ref}
    >
      <div className="mx-auto max-w-[1200px]">
        <div
          className={`relative min-h-[720px] overflow-hidden bg-[#302f2f] transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {isGroupEvent ? (
            <div className="grid gap-10 px-8 py-8 md:px-10 md:py-10 lg:grid-cols-[1.18fr_0.92fr] lg:gap-8 lg:px-8 lg:py-8">
              <div className="relative min-h-[560px] lg:min-h-[620px]">
                <figure className="h-[360px] overflow-hidden lg:h-[420px]">
                  <img
                    src={images[0]}
                    alt={`${chinese} 主图`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>

                <div className="relative z-10 mt-3 bg-[rgba(34,31,31,0.94)] px-6 py-6 md:px-7 lg:w-[88%] lg:px-8 lg:py-7">
                  <h2 className="flex flex-wrap items-end gap-x-3 gap-y-2 text-[20px] font-light tracking-[0.18em] text-white md:text-[22px] lg:text-[26px]">
                    <span>{chinese}</span>
                    <span className="text-[18px] uppercase tracking-[0.28em] md:text-[20px] lg:text-[22px]">
                      {english}
                    </span>
                  </h2>
                </div>

                <div className="relative z-10 mt-4 border-[3px] border-white/85 bg-[rgba(47,43,43,0.76)] px-5 py-5 backdrop-blur-[2px] md:px-6 lg:ml-5 lg:w-[80%] lg:px-7 lg:py-7">
                  <Copy className="text-[13px] leading-[2.15] text-white/84">
                    {Array.isArray(description) ? description[0] : description}
                  </Copy>
                </div>
              </div>

              <div className="flex min-h-[560px] flex-col justify-between">
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {images.slice(1, 5).map((img, idx) => (
                    <figure key={img} className="overflow-hidden bg-white/5">
                      <img
                        src={img}
                        alt={`${chinese} ${idx + 2}`}
                        className="h-[180px] w-full object-cover md:h-[210px] lg:h-[192px]"
                        loading="lazy"
                        decoding="async"
                      />
                    </figure>
                  ))}
                </div>

                <div className="mt-8 bg-[rgba(47,43,43,0.94)] px-0 py-0">
                  <div className="grid gap-6 border-t border-white/12 pt-6 md:grid-cols-3 md:gap-5 lg:pt-7">
                    {(detailColumns?.length ? detailColumns : Array.isArray(description) ? description : [description]).map((text, idx) => (
                      <Copy
                        key={idx}
                        className="border-l border-white/14 pl-4 text-[12px] leading-[2.1] text-white/72 first:border-l-0 first:pl-0 md:text-[12px]"
                      >
                        {text}
                      </Copy>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : isNeighborhoodSection ? (
            <div className="grid gap-10 px-8 py-8 md:px-10 md:py-10 lg:grid-cols-[1.14fr_0.92fr] lg:gap-8 lg:px-8 lg:py-8">
              <div className="relative min-h-[560px] lg:min-h-[620px]">
                <figure className="h-[360px] overflow-hidden lg:h-[420px]">
                  <img
                    src={images[0]}
                    alt={`${chinese} 主图`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>

                <div className="relative z-10 mt-3 bg-[rgba(34,31,31,0.94)] px-6 py-6 md:px-7 lg:w-[98%] lg:px-8 lg:py-7">
                  <h2 className="flex flex-wrap items-end gap-x-3 gap-y-2 text-[20px] font-light tracking-[0.18em] text-white md:text-[22px] lg:text-[26px]">
                    <span>{chinese}</span>
                    <span className="text-[16px] uppercase tracking-[0.18em] text-white/92 md:text-[18px] lg:text-[20px]">
                      {english}
                    </span>
                  </h2>
                </div>

                <div className="relative z-10 mt-4 border-[3px] border-white/85 bg-[rgba(47,43,43,0.78)] px-5 py-5 backdrop-blur-[2px] md:px-6 lg:ml-1 lg:w-[92%] lg:px-7 lg:py-7">
                  <Copy className="text-[13px] leading-[2.15] text-white/84">
                    {Array.isArray(description) ? description[0] : description}
                  </Copy>
                </div>
              </div>

              <div className="flex min-h-[560px] flex-col justify-between">
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {images.slice(1, 5).map((img, idx) => (
                    <figure key={img} className="overflow-hidden bg-white/5">
                      <img
                        src={img}
                        alt={`${chinese} ${idx + 2}`}
                        className="h-[180px] w-full object-cover md:h-[210px] lg:h-[192px]"
                        loading="lazy"
                        decoding="async"
                      />
                    </figure>
                  ))}
                </div>

                <div className="mt-8 bg-[rgba(47,43,43,0.94)]">
                  <div className="grid gap-6 border-t border-white/12 pt-6 md:grid-cols-3 md:gap-5 lg:pt-7">
                    {(detailColumns?.length ? detailColumns : Array.isArray(description) ? description : [description]).map((text, idx) => (
                      <Copy
                        key={idx}
                        className="border-l border-white/14 pl-4 text-[12px] leading-[2.1] text-white/72 first:border-l-0 first:pl-0 md:text-[12px]"
                      >
                        {text}
                      </Copy>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid lg:grid-cols-2">
            <div className={isNeighborhood ? 'lg:order-1' : ''}>
              <figure className="h-[330px] lg:h-[430px]">
                <img src={images[0]} alt={`${chinese} 主图`} className="h-full w-full object-cover" loading="lazy" decoding="async" />
              </figure>
              <div className="bg-[#2f2d2d]/92 px-8 py-8 md:px-10">
                <h2 className="text-2xl font-light tracking-[0.18em] text-white md:text-3xl">
                  {chinese}
                  <span className="ml-3 text-xl uppercase tracking-[0.22em]">{english}</span>
                </h2>
                <div className="mt-7 border-2 border-white/80 px-6 py-5">
                  <Copy>{Array.isArray(description) ? description[0] : description}</Copy>
                </div>
              </div>
            </div>

            <div className={`${isNeighborhood ? 'lg:order-2' : ''} flex flex-col justify-between px-8 py-10 md:px-12`}>
              <div className="grid grid-cols-2 gap-4">
                {(isNeighborhood ? images.slice(1) : images.slice(1, 5)).map((img, idx) => (
                  <figure key={img} className={`${idx === 2 && !isNeighborhood ? 'col-span-1' : ''}`}>
                    <img src={img} alt={`${chinese} ${idx + 2}`} className="h-40 w-full object-cover md:h-44" loading="lazy" decoding="async" />
                  </figure>
                ))}
              </div>
              <div className="mt-10 grid gap-5 md:grid-cols-2">
                {Array.isArray(description) ? (
                  description.map((p, idx) => (
                    <Copy key={idx} className="bg-white/10 px-5 py-4 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.16)]">
                      {p}
                    </Copy>
                  ))
                ) : (
                  <Copy className="bg-white/10 px-5 py-4 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.16)]">{description}</Copy>
                )}
                {!Array.isArray(description) && (
                  <Copy className="bg-white/10 px-5 py-4 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.16)]">
                    从场地、餐饮到活动组织形成完整接待链路，适合企业与家庭客群复合使用。
                  </Copy>
                )}
              </div>
            </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
