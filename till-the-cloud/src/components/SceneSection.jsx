import { useEffect, useRef, useState } from 'react';

function FadeIn({ children, className = '' }) {
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
      { threshold: 0.14 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      {children}
    </div>
  );
}

function TitleBlock({ chinese, english, align = 'left', light = false }) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col ${alignClass}`}>
      <h2 className={`text-2xl md:text-3xl font-light tracking-[0.18em] ${light ? 'text-white' : 'text-[#3f4145]'}`}>
        {chinese}
      </h2>
      <p className={`mt-3 text-base md:text-lg tracking-[0.22em] ${light ? 'text-white/60' : 'text-[#8190b1]'}`}>
        {english}
      </p>
      <div className={`mt-6 h-[2px] w-16 ${light ? 'bg-white/25' : 'bg-[#aab3c3]'}`} />
    </div>
  );
}

function Paragraphs({ children, className = '' }) {
  return (
    <div className={`text-[13px] leading-[2.1] tracking-[0.08em] text-[#68707c] ${className}`}>
      {Array.isArray(children) ? children.map((p, i) => <p key={i}>{p}</p>) : <p>{children}</p>}
    </div>
  );
}

export default function SceneSection({
  id,
  chinese,
  english,
  description,
  englishDescription,
  caption,
  images,
  layout = 'right',
  bg = 'white',
}) {
  const bgClass = bg === 'light' ? 'page-mist' : 'page-paper';

  const textBlock = (
    <div className="px-8 py-12 md:px-14 md:py-16">
      <TitleBlock chinese={chinese} english={english} />
      <div className="mt-8 border-2 border-[#c4cad4] bg-white/70 px-7 py-6">
        <Paragraphs>{description}</Paragraphs>
      </div>
    </div>
  );

  return (
    <section id={id} className={`scroll-mt-24 py-0 ${bgClass}`}>
      <div className="mx-auto max-w-[1200px]">
        <FadeIn>
          {layout === 'spread' && (
            <div className="relative min-h-[680px] overflow-hidden bg-gradient-to-b from-[#f9f8f4] via-white to-[#e8edf3] md:min-h-[760px]">
              <div className="absolute bottom-10 left-0 top-12 w-[56%] bg-[#d3d9e1]" />
              <div className="relative grid gap-10 px-4 py-12 md:px-0 md:py-16 lg:grid-cols-[1.42fr_0.88fr] lg:gap-12">
                <div className="relative pt-12 md:pt-20">
                  <figure className="relative z-10 bg-white shadow-[0_18px_45px_rgba(54,65,82,0.18)] md:-ml-10 lg:-ml-16">
                    <img src={images[0]} alt={chinese} className="block w-full aspect-[3373/2159] object-cover" loading="lazy" decoding="async" />
                  </figure>
                  {caption && <p className="relative z-10 mt-8 text-xs text-[#6f747d]">{caption}</p>}
                </div>
                <div className="relative z-20 flex flex-col items-center lg:items-start lg:pl-8 xl:pl-12">
                  {images[1] && <img src={images[1]} alt="向云端标志" className="mb-8 w-56 max-w-full md:w-64 lg:w-72" loading="lazy" decoding="async" />}
                  <div className="w-full max-w-[360px] border-2 border-[#c4cad4] bg-white/90 px-7 py-6 text-center text-[15px] leading-[2.45] text-[#656a73] shadow-[0_12px_30px_rgba(75,86,105,0.06)]">
                    {description}
                  </div>
                  {englishDescription && <p className="mt-7 max-w-[345px] text-xs leading-[1.95] text-[#7d8eaa]">{englishDescription}</p>}
                </div>
              </div>
            </div>
          )}

          {layout === 'cloudhouse' && (
            <div className="relative min-h-[760px] overflow-hidden bg-gradient-to-b from-[#e8edf3] via-[#d3d9e1] to-[#f9f8f4]">
              <img src={images[0]} alt="" className="absolute inset-y-0 right-0 hidden h-full w-[62%] object-cover opacity-32 md:block" loading="lazy" decoding="async" />
              <div className="relative grid gap-8 px-8 py-16 md:grid-cols-[0.82fr_1.55fr] md:px-10 md:py-20">
                <div className="flex flex-col justify-center">
                  <TitleBlock chinese={chinese} english={english} align="center" />
                  <div className="mx-auto mt-8 max-w-[270px] border-2 border-white/80 px-7 py-6 text-center">
                    <Paragraphs>{description}</Paragraphs>
                  </div>
                  <p className="mx-auto mt-12 max-w-[270px] text-center text-xs leading-[1.9] text-[#8190b1]">
                    Cloudshore Pavilion brings a Mediterranean coastal mood to the lakeside, combining white walls,
                    blue domes and flexible event rooms into a clear waterfront landmark.
                  </p>
                </div>
                <div className="grid content-center gap-6 md:grid-cols-2">
                  {images.slice(1, 3).map((img, idx) => (
                    <figure key={img} className="border-[5px] border-white shadow-[0_16px_30px_rgba(54,65,82,0.18)]">
                      <img src={img} alt={`${chinese} ${idx + 1}`} className="h-48 w-full object-cover md:h-56" loading="lazy" decoding="async" />
                    </figure>
                  ))}
                  <figure className="border-[5px] border-white shadow-[0_16px_30px_rgba(54,65,82,0.18)] md:col-span-2">
                    <img src={images[3] || images[0]} alt={`${chinese} 室内`} className="h-72 w-full object-cover md:h-[430px]" loading="lazy" decoding="async" />
                  </figure>
                </div>
              </div>
            </div>
          )}

          {layout === 'samelang' && (
            <div className="relative overflow-hidden bg-gradient-to-b from-[#f9f8f4] via-white to-[#e8edf3] px-8 py-16 md:px-16 md:py-20">
              <div className="absolute inset-y-0 left-0 w-[14%] bg-[#d5dbe4]/85" />
              <div className="absolute inset-y-0 right-0 w-[10%] bg-[#d5dbe4]/85" />
              <div className="relative grid gap-8 md:grid-cols-2">
                <div className="space-y-10">
                  <div className="mx-auto max-w-[480px] text-center">
                    <TitleBlock
                      chinese={(
                        <>
                          <span>{chinese}</span>
                          <span className="mt-2 block text-lg tracking-[0.14em] text-[#8190b1]">×</span>
                        </>
                      )}
                      english={english}
                      align="center"
                    />
                    <Paragraphs className="mt-8">{description}</Paragraphs>
                  </div>
                  <figure className="border-2 border-[#aeb5c0] shadow-sm">
                    <img src={images[0]} alt={chinese} className="h-72 w-full object-cover md:h-[350px]" loading="lazy" decoding="async" />
                  </figure>
                </div>
                <div className="grid content-center gap-6">
                  <figure className="border-2 border-[#aeb5c0]">
                    <img src={images[1]} alt={`${chinese} 台阶`} className="h-56 w-full object-cover md:h-64" loading="lazy" decoding="async" />
                  </figure>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="border-2 border-[#aeb5c0] bg-white px-8 py-8 text-center text-[15px] leading-[2.2] tracking-[0.14em] text-[#68707c]">
                      白色拱廊与镜面水池相映成景，一步一景，随手出片。
                    </div>
                    <figure className="border-2 border-[#aeb5c0]">
                      <img src={images[2]} alt={`${chinese} 人像`} className="h-48 w-full object-cover" loading="lazy" decoding="async" />
                    </figure>
                  </div>
                  <figure className="border-2 border-[#aeb5c0]">
                    <img src={images[3]} alt={`${chinese} 光影`} className="h-44 w-full object-cover" loading="lazy" decoding="async" />
                  </figure>
                </div>
              </div>
            </div>
          )}

          {layout === 'play' && (
            <div className="relative overflow-hidden bg-[#dfe6ec]">
              <img
                src={images[0]}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-42"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#eef2f5]/82 via-[#eef2f5]/18 to-[#dfe6ec]/18" />
              <div className="relative mx-auto max-w-[1060px] px-6 py-14 md:px-12 md:py-20">
                <div className="bg-[#f3f5f6] px-7 py-10 shadow-[0_18px_44px_rgba(69,78,94,0.08)] md:px-16 md:py-12">
                  <div className="grid gap-9 md:grid-cols-[0.92fr_1fr] md:gap-20">
                    <div className="flex flex-col items-center text-center">
                      <TitleBlock chinese={chinese} english={english} align="center" />
                      <div className="mt-8 w-full max-w-[460px] border-2 border-[#c8ced8] bg-[#fbfcfd] px-6 py-5 shadow-[0_10px_24px_rgba(69,78,94,0.05)]">
                        <Paragraphs className="text-[#5e6673]">{description}</Paragraphs>
                      </div>
                    </div>
                    <div className="space-y-5 bg-[#fbfcfd] px-6 py-6 text-[13px] leading-[2.05] tracking-[0.08em] text-[#364151] shadow-[inset_0_0_0_1px_rgba(174,181,192,0.42)] md:bg-transparent md:px-0 md:py-0 md:shadow-none">
                      <p>
                        <span className="mr-1 text-2xl leading-none text-[#3f4145]">山</span>
                        坡剧场坐级而成，可灵活用于露天观影、路演活动或小型音乐演出；山坡剧场精彩的演艺，成为园区最有视觉和听觉刺激的场域。
                      </p>
                      <p>
                        <span className="mr-1 text-2xl leading-none text-[#3f4145]">秋</span>
                        千在湖岛之中，彩虹座位色块在远景中形成视觉焦点，是亲子与闺蜜最爱停留的拍照点。
                      </p>
                      <p>
                        <span className="mr-1 text-2xl leading-none text-[#3f4145]">云</span>
                        朵沙地在风中轻轻晃动，营造宛如草地云层的空间感，适合小型露台茶歇与轻松聊天。
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#efe7d9] px-8 py-10 shadow-[0_22px_45px_rgba(69,78,94,0.10)] md:px-20 md:py-12">
                  <div className="grid gap-8 md:grid-cols-3 md:gap-14">
                    {[images[3], images[1], images[2]].filter(Boolean).map((img, idx) => (
                      <figure key={img} className="border-[5px] border-white bg-white shadow-sm">
                        <img
                          src={img}
                          alt={`${chinese} ${idx + 1}`}
                          className="h-64 w-full object-cover md:h-72"
                          loading="lazy"
                          decoding="async"
                        />
                      </figure>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {layout === 'cabins' && (
            <div className="relative overflow-hidden bg-gradient-to-b from-[#f9f8f4] via-white to-[#e8edf3] px-8 py-16 md:px-20 md:py-20">
              <div className="absolute bottom-0 left-0 right-0 h-[48%] bg-[#d3d9e1]" />
              <div className="relative grid gap-12 md:grid-cols-2">
                <div>
                  <TitleBlock chinese={chinese} english="Hillside Cabins" align="center" />
                  <figure className="mt-10">
                    <img src={images[0]} alt={chinese} className="h-[430px] w-full object-cover md:h-[540px]" loading="lazy" decoding="async" />
                  </figure>
                </div>
                <div className="flex flex-col justify-center">
                  <figure className="border-[18px] border-[#554f48] shadow-sm">
                    <img src={images[1]} alt={`${chinese} 林间`} className="h-[390px] w-full object-cover md:h-[470px]" loading="lazy" decoding="async" />
                  </figure>
                  <Paragraphs className="mt-8 max-w-[430px]">{description}</Paragraphs>
                </div>
              </div>
            </div>
          )}

          {layout === 'chapel' && (
            <div className="relative overflow-hidden bg-gradient-to-b from-[#e8edf3] via-white to-[#d3d9e1] px-8 py-16 md:px-20 md:py-20">
              <div className="absolute bottom-0 left-0 right-0 h-[48%] bg-[#d3d9e1]" />
              <div className="relative grid gap-12 md:grid-cols-2">
                <div>
                  <TitleBlock chinese="红顶礼堂 · 森林花园厅" english="Red Roof Chapel & Garden Hall" align="center" />
                  <figure className="mt-10">
                    <img src={images[0]} alt={chinese} className="h-[430px] w-full object-cover md:h-[540px]" loading="lazy" decoding="async" />
                  </figure>
                </div>
                <div className="flex flex-col justify-center">
                  <figure className="border-[18px] border-[#554f48] shadow-sm">
                    <img src={images[1]} alt={`${chinese} 室内`} className="h-[390px] w-full object-cover md:h-[470px]" loading="lazy" decoding="async" />
                  </figure>
                  <Paragraphs className="mt-8 max-w-[440px]">{description}</Paragraphs>
                </div>
              </div>
            </div>
          )}

          {layout === 'waterfront' && (
            <div className="grid min-h-[650px] overflow-hidden bg-gradient-to-b from-[#d3d9e1] via-[#f9f8f4] to-[#e8edf3] md:grid-cols-[0.88fr_1.8fr]">
              <div className="px-8 py-16 md:px-16">
                <TitleBlock chinese={chinese} english={english} />
                <div className="mt-16 border-2 border-[#c4cad4] px-8 py-6">
                  <Paragraphs>{Array.isArray(description) ? description[0] : description}</Paragraphs>
                </div>
                <Paragraphs className="mt-10">{Array.isArray(description) ? description.slice(1) : ''}</Paragraphs>
              </div>
              <div className="relative flex items-center px-8 py-14 md:px-0">
                <div className="absolute right-0 top-14 h-28 w-[70%] bg-[#d3d9e1]" />
                <div className="absolute bottom-14 right-0 h-28 w-[70%] bg-[#d3d9e1]" />
                <figure className="relative z-10 w-full border-[5px] border-white shadow-[0_18px_45px_rgba(54,65,82,0.22)] md:-ml-10">
                  <img src={images[0]} alt={chinese} className="h-[330px] w-full object-cover md:h-[520px]" loading="lazy" decoding="async" />
                </figure>
              </div>
            </div>
          )}

          {(layout === 'right' || layout === 'left' || layout === 'multi-left' || layout === 'multi-right' || layout === 'grid') && (
            <div className="grid min-h-[620px] md:grid-cols-2">
              <div className={`${layout === 'left' || layout === 'multi-left' ? 'md:order-2' : ''} flex items-center bg-[#e4e8ee]`}>
                {textBlock}
              </div>
              <div className={`${layout === 'left' || layout === 'multi-left' ? 'md:order-1' : ''} grid gap-5 bg-white p-8 md:grid-cols-2 md:p-12`}>
                {images.map((img, idx) => (
                  <figure key={img} className={`${idx === 0 ? 'md:col-span-2' : ''} border-[5px] border-white shadow-md`}>
                    <img src={img} alt={`${chinese} ${idx + 1}`} className={`${idx === 0 ? 'h-72 md:h-80' : 'h-52'} w-full object-cover`} loading="lazy" decoding="async" />
                  </figure>
                ))}
              </div>
            </div>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
