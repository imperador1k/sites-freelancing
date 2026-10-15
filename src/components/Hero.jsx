import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowDown, FiMessageCircle, FiCheckCircle } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

/**
 * High-End Parallax Hero Section with bilingual i18n support
 */
export default function Hero({ hero, whatsappUrl }) {
  const heroRef = useRef(null);
  const { lang } = useLanguage();
  const isPt = lang === 'pt';

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const trustCardTitle = hero?.trustCard?.title || (isPt ? 'Garantia e Rigor' : 'Guaranteed Rigor');
  const trustCardDesc = hero?.trustCard?.desc || (isPt
    ? 'Mais de 800 obras concluídas com materiais certificados e acompanhamento técnico dedicado.'
    : 'Over 800 completed projects with certified materials and dedicated engineering oversight.');
  const trustItem1 = hero?.trustCard?.item1 || (isPt ? 'Orçamento Gratuito em 24h' : 'Free 24h Quote Proposal');
  const trustItem2 = hero?.trustCard?.item2 || (isPt ? 'Equipas Especializadas' : 'Specialized Engineering Teams');
  const scrollLabel = isPt ? 'Explorar' : 'Explore';

  return (
    <section id="acasa" ref={heroRef} className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Parallax background with multi-layered gradient */}
      <motion.div style={{ y: heroY }} className="absolute inset-0 -top-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${hero.bgImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      </motion.div>

      {/* Main Container */}
      <motion.div
        style={{ opacity: heroOpacity }}
        className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 pt-28 sm:pt-32 pb-20 sm:pb-24 w-full"
      >
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-8 max-w-3xl w-full min-w-0">
            {/* Eyebrow Micro-Badge (Fluid wrapping) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="inline-flex items-center gap-2 sm:gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3.5 py-1.5 sm:px-4 sm:py-1.5 mb-6 sm:mb-8 shadow-sm max-w-full"
            >
              <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-primary" />
              </span>
              <span className="text-white/90 text-[10px] sm:text-xs font-heading font-semibold uppercase tracking-[0.08em] sm:tracking-[0.15em] break-words line-clamp-2 sm:line-clamp-none">
                {hero.badge}
              </span>
            </motion.div>

            {/* Headline with fluid scaling & unbreakable word wrap protection */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-heading font-black text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.02] sm:leading-[0.95] tracking-tight mb-5 sm:mb-6 break-words [overflow-wrap:anywhere]"
            >
              <span className="block">{hero.title}</span>
              <span className="text-primary drop-shadow-sm block">{hero.titleHighlight}</span>
            </motion.h1>

            {/* Slogan */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-lg sm:text-2xl md:text-3xl text-white/95 font-heading font-medium leading-snug mb-5 sm:mb-6 max-w-2xl break-words"
            >
              {hero.slogan}
            </motion.p>

            {/* Sub-text description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-sm sm:text-base md:text-lg text-white/70 max-w-xl mb-8 sm:mb-10 leading-relaxed font-normal break-words"
            >
              {hero.description}
            </motion.p>

            {/* Action CTAs: full width touch-friendly on mobile, inline on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 items-stretch sm:items-center w-full sm:w-auto"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto justify-between sm:justify-start inline-flex items-center gap-4 bg-primary hover:bg-primary-dark text-white font-heading font-bold pl-6 sm:pl-8 pr-2.5 sm:pr-3 py-3 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 group text-sm sm:text-base active:scale-98"
              >
                <span className="whitespace-nowrap">{hero.ctaPrimary}</span>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 flex-shrink-0">
                  <FiMessageCircle className="text-base sm:text-lg" />
                </div>
              </a>

              <a
                href="#obras"
                className="w-full sm:w-auto justify-between sm:justify-start inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-heading font-medium pl-6 sm:pl-7 pr-2.5 sm:pr-3 py-3 rounded-full border border-white/20 transition-all duration-300 hover:-translate-y-1 text-sm sm:text-base group active:scale-98"
              >
                <span className="whitespace-nowrap">{hero.ctaSecondary}</span>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-y-1 transition-transform duration-300 flex-shrink-0">
                  <FiArrowDown className="text-sm sm:text-base" />
                </div>
              </a>
            </motion.div>
          </div>

          {/* Right Floating Trust-Card (Desktop Double-Bezel) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hidden lg:flex lg:col-span-4 justify-end"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/15 rounded-3xl p-2.5 shadow-2xl max-w-xs w-full">
              <div className="bg-dark-lighter/80 rounded-[1.25rem] p-6 border border-white/5 space-y-5">
                <div className="flex items-center gap-1.5 text-amber-400 text-lg">
                  {'★'.repeat(5)}
                  <span className="text-white text-sm font-heading font-bold ml-1.5">4.9 / 5</span>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-white text-base">{trustCardTitle}</h4>
                  <p className="text-white/60 text-xs mt-1 leading-relaxed">
                    {trustCardDesc}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/10 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-white/80">
                    <FiCheckCircle className="text-primary text-sm flex-shrink-0" />
                    <span>{trustItem1}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <FiCheckCircle className="text-primary text-sm flex-shrink-0" />
                    <span>{trustItem2}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Modern Architectural Vertical Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] font-heading font-bold uppercase tracking-[0.3em] text-white/40">
          {scrollLabel}
        </span>
        <div className="w-[1.5px] h-11 bg-white/20 rounded-full overflow-hidden relative">
          <motion.div
            animate={{ y: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-full h-6 bg-gradient-to-b from-transparent via-primary to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
