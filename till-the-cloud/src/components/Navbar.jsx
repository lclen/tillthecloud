import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { motionTokens } from '../lib/motion';

const navItems = [
  { id: 'hero', label: '首页' },
  { id: 'contents', label: '目录' },
  { id: 'cloud-courtyard', label: '云端庭院' },
  { id: 'cloudhouse', label: '云端小筑' },
  { id: 'samelang', label: '天空之境' },
  { id: 'cloud-play', label: '云端探乐' },
  { id: 'miracle-cabins', label: '山境木屋' },
  { id: 'nono-chapel', label: '诺诺礼堂' },
  { id: 'waterfront', label: '水岸露台' },
  { id: 'features', label: '功能' },
  { id: 'group-event', label: '团建' },
  { id: 'neighborhood', label: '周边' },
  { id: 'contact', label: '联系' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return { id: item.id, top: rect.top };
        }
        return { id: item.id, top: Infinity };
      });

      const current = sections.reduce((closest, section) => {
        if (section.top <= 100 && section.top > closest.top) {
          return section;
        }
        return closest;
      }, { id: 'hero', top: -Infinity });

      setActiveSection(current.id);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: motionTokens.durations.slow, ease: motionTokens.ease }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-8 py-5 flex items-center justify-between">
        <motion.button
          onClick={() => scrollTo('hero')}
          className={`text-left transition-colors ${
            scrolled ? 'text-[#2c2c2c]' : 'text-white'
          }`}
          whileHover={{ opacity: 0.82, y: -1 }}
          whileTap={{ scale: 0.985 }}
        >
          <span className="text-lg font-light tracking-[0.15em]">向云端</span>
          <span className={`block text-[9px] tracking-[0.35em] uppercase mt-0.5 ${scrolled ? 'text-[#999]' : 'text-white/70'}`}>
            Till The Cloud
          </span>
        </motion.button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`relative text-xs tracking-wider transition-colors hover:opacity-60 ${
                activeSection === item.id
                  ? scrolled
                    ? 'text-[#2c2c2c] font-medium'
                    : 'text-white font-medium'
                  : scrolled
                  ? 'text-[#999]'
                  : 'text-white/70'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.span
                  layoutId="nav-active-line"
                  className={`absolute -bottom-2 left-1/2 h-[2px] w-6 -translate-x-1/2 rounded-full ${scrolled ? 'bg-[#2c2c2c]' : 'bg-white/90'}`}
                  transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 ${scrolled ? 'text-[#2c2c2c]' : 'text-white'}`}
          whileTap={{ scale: 0.94 }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </motion.button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          className="lg:hidden bg-white/95 backdrop-blur-md border-t border-[#eee]"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: motionTokens.durations.base, ease: motionTokens.ease }}
        >
          <motion.div
            className="px-8 py-6 grid grid-cols-2 gap-2"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.04, delayChildren: 0.04 } },
            }}
          >
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-left text-xs py-2.5 px-3 rounded transition-colors tracking-wider ${
                  activeSection === item.id
                    ? 'bg-[#f5f5f5] text-[#2c2c2c] font-medium'
                    : 'text-[#999] hover:bg-[#f5f5f5]'
                }`}
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </motion.nav>
  );
}
