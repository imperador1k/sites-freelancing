import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import Reveal from './ui/Reveal';
import { useLanguage } from '../context/LanguageContext';

/**
 * Gallery Section showcasing recent real works/portfolio
 */
export default function Gallery({ gallery, whatsappUrl }) {
  const { lang } = useLanguage();

  const isPt = lang === 'pt';
  const badge = isPt ? 'Portfólio Real' : 'Real Portfolio';
  const titlePre = isPt ? 'Galeria de' : 'Recent Works';
  const titleHighlight = isPt ? 'Obras Recentes' : 'Gallery';
  const subtitle = isPt
    ? 'Conheça alguns dos nossos trabalhos executados com materiais certificados, acabamentos impecáveis e clientes satisfeitos.'
    : 'Discover our recent construction and rehabilitation projects with verified structural quality and premium finishes.';
  const quotePrompt = isPt ? 'Quero uma obra semelhante' : 'Inquire about similar work';

  return (
    <section id="obras" className="py-24 md:py-32 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(230,59,46,0.12),transparent_55%)]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        <div className="text-center mb-16">
          <Reveal>
            <span className="inline-block text-primary font-heading font-bold text-sm tracking-[0.2em] uppercase mb-4">
              {badge}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              {titlePre} <span className="text-primary">{titleHighlight}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
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
                className="group relative overflow-hidden rounded-2xl bg-dark-lighter border border-white/5 hover:border-primary/40 shadow-lg flex flex-col h-full"
              >
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-80" />
                  <span className="absolute top-3 left-3 bg-primary/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                    {item.tag}
                  </span>
                </div>
                <div className="p-5 flex flex-col justify-between flex-grow bg-dark-lighter">
                  <h3 className="font-heading font-bold text-lg text-white group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-primary text-xs font-semibold uppercase tracking-wider hover:underline"
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
