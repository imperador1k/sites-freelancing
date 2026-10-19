import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowDown, FiMessageCircle, FiCheck } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

/**
 * Editorial Split Hero Section (Option 1 — High-End & Responsiveness-First)
 * - Separates typography and photography into a balanced editorial split.
 * - Protects photos from muddy full-bleed dark gradient overlays.
 * - Presents client imagery inside a double-bezel architectural frame.
 * - 100% fluidly responsive from 320px mobile up to 4K ultra-wide screens.
 */
export default function Hero({ hero, whatsappUrl }) {
  const heroRef = useRef(null);
  const { lang } = useLanguage();
  const isPt = lang === 'pt';

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  const trustBadgeText = hero?.trustCard?.title || (isPt ? 'Qualidade & Rigor' : 'Quality & Rigor');
  const trustBadgeSub = hero?.trustCard?.desc || (isPt ? 'Acompanhamento dedicado' : 'Dedicated technical oversight');
  const microItem1 = isPt ? 'Orçamento Gratuito' : 'Free Quotation';
  const microItem2 = isPt ? 'Resposta em 24h' : '24h Response';
  const microItem3 = isPt ? 'Cobertura Nacional' : 'Nationwide Service';

  return (
    <section
      id="acasa"
      ref={heroRef}
      className="relative min-h-[100dvh] flex items-center justify-center bg-dark overflow-hidden pt-24 sm:pt-28 pb-16 sm:pb-20"
    >
      {/* Subtle Architectural Ambient Glow (Subtle and non-intrusive) */}
      <div className="absolute top-0 right-1/4 w-[32rem] h-[32rem] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-steel-dark/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Grid Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-14 items-center">
          {/* Left Editorial Text Column */}
          <div className="lg:col-span-7 xl:col-span-6 w-full min-w-0">
            {/* Minimalist Eyebrow Badge */}
            {hero.badge && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 mb-5 sm:mb-6 shadow-sm max-w-full"
              >
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-white/80 text-[11px] sm:text-xs font-heading font-semibold uppercase tracking-[0.14em] break-words line-clamp-2 sm:line-clamp-none">
                  {hero.badge}
                </span>
              </motion.div>
            )}

            {/* Editorial Headline with Fluid Typography */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-heading font-black text-3xl xs:text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-white leading-[1.08] sm:leading-[1.02] tracking-tight mb-4 sm:mb-5 break-words [overflow-wrap:anywhere]"
            >
              <span className="block text-white">{hero.title}</span>
              <span className="text-primary block mt-1">{hero.titleHighlight}</span>
            </motion.h1>

            {/* Slogan */}
            {hero.slogan && (
              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-base sm:text-lg md:text-xl text-white/90 font-heading font-medium leading-relaxed mb-4 max-w-xl break-words"
              >
                {hero.slogan}
              </motion.p>
            )}

            {/* Detailed Description */}
            {hero.description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="text-xs sm:text-sm md:text-base text-white/60 leading-relaxed mb-7 sm:mb-8 max-w-lg font-normal break-words"
              >
                {hero.description}
              </motion.p>
            )}

            {/* Responsive Actions / CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 items-stretch sm:items-center w-full sm:w-auto"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto justify-between sm:justify-start inline-flex items-center gap-3.5 bg-primary hover:bg-primary-dark text-white font-heading font-bold pl-6 sm:pl-7 pr-2.5 sm:pr-3 py-3.5 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:scale-98 text-sm sm:text-base group"
              >
                <span className="whitespace-nowrap">{hero.ctaPrimary}</span>
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <FiMessageCircle className="text-base" />
                </div>
              </a>

              {hero.ctaSecondary && (
                <a
                  href="#servicos"
                  className="w-full sm:w-auto justify-between sm:justify-start inline-flex items-center gap-3 bg-white/[0.06] hover:bg-white/[0.12] text-white font-heading font-medium pl-6 sm:pl-7 pr-2.5 sm:pr-3 py-3.5 rounded-full border border-white/10 transition-all duration-300 hover:-translate-y-0.5 active:scale-98 text-sm sm:text-base group"
                >
                  <span className="whitespace-nowrap">{hero.ctaSecondary}</span>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-y-0.5 transition-transform duration-300 flex-shrink-0">
                    <FiArrowDown className="text-sm sm:text-base" />
                  </div>
                </a>
              )}
            </motion.div>

            {/* Clean Value Micro-Bullets */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex flex-wrap items-center gap-y-2 gap-x-5 mt-6 sm:mt-8 pt-5 border-t border-white/10 text-xs text-white/60"
            >
              <div className="flex items-center gap-1.5">
                <FiCheck className="text-primary text-sm flex-shrink-0" />
                <span>{microItem1}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FiCheck className="text-primary text-sm flex-shrink-0" />
                <span>{microItem2}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FiCheck className="text-primary text-sm flex-shrink-0" />
                <span>{microItem3}</span>
              </div>
            </motion.div>
          </div>

          {/* Right Framed Showcase Media (Double-Bezel Architecture) */}
          <div className="lg:col-span-5 xl:col-span-6 w-full min-w-0">
            <motion.div
              style={{ y: heroY }}
              initial={{ opacity: 0, scale: 0.96, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative mx-auto w-full max-w-lg lg:max-w-none"
            >
              {/* Outer Shell (Double-Bezel machined housing) */}
              <div className="relative rounded-[2rem] p-2.5 sm:p-3 bg-gradient-to-b from-white/15 via-white/5 to-white/0 border border-white/15 shadow-2xl backdrop-blur-sm">
                {/* Inner Image Container (Crisp, pure photograph with zero dark mud overlay) */}
                <div className="relative rounded-[calc(2rem-0.625rem)] overflow-hidden aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] xl:aspect-[1/1] w-full bg-dark-lighter">
                  <img
                    src={hero.bgImage}
                    alt={`${hero.title} ${hero.titleHighlight}`}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="eager"
                  />

                  {/* Delicate bottom vignette for the inner tag */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-dark/80 via-dark/30 to-transparent pointer-events-none" />

                  {/* High-End Frosted Glass Stamp / Trust Pill */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3.5 sm:p-4 rounded-xl bg-dark/75 backdrop-blur-md border border-white/15 shadow-lg flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 text-amber-400 text-xs mb-0.5">
                        {'★'.repeat(5)}
                        <span className="text-white text-xs font-heading font-bold ml-1">5.0</span>
                      </div>
                      <h4 className="font-heading font-bold text-white text-xs sm:text-sm truncate">
                        {trustBadgeText}
                      </h4>
                      <p className="text-white/60 text-[11px] truncate mt-0.5">
                        {trustBadgeSub}
                      </p>
                    </div>

                    <div className="w-9 h-9 rounded-lg bg-primary/20 text-primary flex items-center justify-center flex-shrink-0">
                      <FiCheck className="text-base" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
