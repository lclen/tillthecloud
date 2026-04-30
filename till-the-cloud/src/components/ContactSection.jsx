export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 bg-gradient-to-b from-[#302f2f] via-[#d3d9e1] to-[#d3d9e1] pt-16">
      <div className="mx-auto max-w-[1200px] bg-white">
        <div className="flex items-start justify-between bg-[#f9f8f4] px-8 py-10 md:px-14">
          <div>
            <img
              src="/images/optimized/向云端1.4跨页手册_页面_01_图像_0002.webp"
              alt="向云端 Till The Cloud"
              className="w-56 md:w-72"
              loading="lazy"
              decoding="async"
            />
            <p className="mt-2 text-sm tracking-[0.18em] text-[#b7bfd4]">
              Where nature breathes, Where time slows
            </p>
          </div>
          <div className="space-y-5 text-right text-lg tracking-[0.16em] text-[#8190b1]">
            <p>文旅</p>
            <p>度假</p>
            <p>生活</p>
          </div>
        </div>

        <div className="bg-gradient-to-b from-[#cfd5dd] to-[#c3cad3] px-8 py-20 text-white md:px-14 md:py-28">
          <div className="inline-block bg-white p-2">
            <img
              src="/images/optimized/向云端1.4跨页手册_页面_15_图像_0001.webp"
              alt="微信公众号二维码"
              className="h-28 w-28 object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="mt-14">
            <h2 className="text-2xl font-light uppercase tracking-[0.32em] md:text-3xl">Till The Cloud</h2>
            <p className="mt-5 text-xl uppercase tracking-[0.28em] text-white/86">Project Profile · Wuxi</p>
            <div className="mt-8 h-[1px] w-20 bg-white/75" />
          </div>

          <div className="mt-10 max-w-[460px] space-y-8 text-sm leading-relaxed tracking-[0.08em] text-white/92">
            <div>
              <p className="font-medium">向云端 · Till The Cloud</p>
            </div>
            <div>
              <p>地址 Address:</p>
              <p>中国江苏省无锡市新吴区飞凤路202号向云端世界</p>
              <p>观光列车梦乐园</p>
            </div>
            <div>
              <p>商务合作 Business:</p>
              <p>T +86 19952765273</p>
            </div>
            <p className="pt-6 lowercase tracking-[0.16em]">www.tillthecloud.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
