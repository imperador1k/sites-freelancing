import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import Reveal from './ui/Reveal';
import { useLanguage } from '../context/LanguageContext';

/**
 * Gallery Section showcasing recent real works/portfolio
 */
export default function Gallery({ gallery, galleryHeader, whatsappUrl }) {
  const { lang } = useLanguage();

  const isPt = lang === 'pt';
  const badge = galleryHeader?.badge || (isPt ? 'Portfólio Real' : 'Real Portfolio');
  const titlePre = galleryHeader?.titlePre || (isPt ? 'Galeria de' : 'Recent Works');
  const titleHighlight = galleryHeader?.titleHighlight || (isPt ? 'Obras Recentes' : 'Gallery');
  const subtitle = galleryHeader?.subtitle || (isPt
    ? 'Conheça alguns dos nossos trabalhos executados com materiais certificados, acabamentos impecáveis e clientes satisfeitos.'
    : 'Discover our recent construction and rehabilitation projects with verified structural quality and premium finishes.');
  const quotePrompt = galleryHeader?.quotePrompt || (isPt ? 'Quero uma obra semelhante' : 'Inquire about similar work');

  return (
    <section id="obras" className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-black/5">
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

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
          {gallery.map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative overflow-hidden rounded-2xl bg-white border border-black/8 hover:border-primary/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="aspect-[4/3] w-full overflow-hidden relative bg-steel">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-3 left-3 bg-white/95 text-dark text-xs font-heading font-bold px-3 py-1 rounded-full shadow-xs border border-black/5">
                    {item.tag}
                  </span>
                </div>
                <div className="p-5 flex flex-col justify-between flex-grow bg-white">
                  <h3 className="font-heading font-bold text-base sm:text-lg text-dark group-hover:text-primary transition-colors duration-300 leading-snug">
                    {item.title}
                  </h3>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-primary text-xs font-heading font-bold uppercase tracking-wider hover:underline"
                  >
                    {quotePrompt} <FiArrowRight />
                  </a>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
