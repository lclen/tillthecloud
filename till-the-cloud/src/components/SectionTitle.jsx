export default function SectionTitle({ chinese, english, align = 'center', light = false }) {
  return (
    <div className={`mb-8 ${align === 'center' ? 'text-center' : align === 'left' ? 'text-left' : 'text-right'}`}>
      {english && (
        <p className={`text-xs tracking-[0.3em] uppercase mb-2 ${light ? 'text-white/60' : 'text-muted'}`}>
          {english}
        </p>
      )}
      <h2 className={`text-2xl md:text-3xl font-medium tracking-wide ${light ? 'text-white' : 'text-primary'}`}>
        {chinese}
      </h2>
      <div className={`mt-3 w-12 h-[1px] ${align === 'center' ? 'mx-auto' : ''} ${light ? 'bg-white/40' : 'bg-primary/20'}`} />
    </div>
  );
}
