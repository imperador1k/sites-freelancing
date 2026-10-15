import { motion } from 'framer-motion';
import Reveal from './ui/Reveal';
import { useLanguage } from '../context/LanguageContext';

/**
 * 4-Step Process Section with bilingual headings and descriptions
 */
export default function Process({ steps, processConfig }) {
  const { lang } = useLanguage();

  const isPt = lang === 'pt';
  const badge = processConfig?.badge || (isPt ? 'Como Trabalhamos' : 'How We Work');
  const titlePre = processConfig?.titlePre || (isPt ? 'Como Funciona o' : 'How Our');
  const titleHighlight = processConfig?.titleHighlight || (isPt ? 'Nosso Processo' : 'Process Works');
  const subtitle = processConfig?.subtitle || (isPt
    ? 'Um método simples, transparente e sem surpresas para que a sua obra avance com total tranquilidade.'
    : 'A clear, transparent, and structured milestone methodology ensuring total peace of mind.');

  return (
    <section id="processo" className="py-24 md:py-32 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        <div className="text-center mb-16">
          <Reveal>
            <span className="inline-block text-primary font-heading font-bold text-sm tracking-[0.2em] uppercase mb-4">
              {badge}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-dark mb-6">
              {titlePre} <span className="text-primary">{titleHighlight}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-warm-gray text-lg max-w-2xl mx-auto">
              {subtitle}
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((stepItem, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="bg-white rounded-2xl p-8 border border-steel-dark/20 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 h-full flex flex-col justify-between relative group"
              >
                <div className="absolute top-6 right-6 font-heading font-black text-4xl text-steel-dark/40 group-hover:text-primary/20 transition-colors">
                  {stepItem.step}
                </div>
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary font-heading font-bold text-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {stepItem.step}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-dark mb-3 group-hover:text-primary transition-colors">
                    {stepItem.title}
                  </h3>
                  <p className="text-warm-gray text-sm leading-relaxed">
                    {stepItem.desc}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
