export default function HeroSection() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/optimized/向云端1.4跨页手册_页面_01_图像_0001.webp"
          alt="向云端营地"
          className="w-full h-full object-cover"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/15" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-6">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-extralight tracking-[0.25em] mb-3">
            向云端
          </h1>
          <p className="text-sm md:text-base tracking-[0.5em] uppercase font-light opacity-90">
            Till The Cloud
          </p>
          <div className="w-16 h-[1px] bg-white/50 mx-auto my-8" />
          <p className="text-base md:text-lg tracking-[0.15em] opacity-80 font-light">
            Where nature breathes, Where time slows
          </p>
          <p className="text-xs md:text-sm tracking-[0.25em] opacity-60 mt-4 uppercase font-light">
            Ecological Cultural Tourism Destination
          </p>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <svg className="w-5 h-5 text-white/50 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
