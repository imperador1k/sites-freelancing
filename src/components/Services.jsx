import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import Reveal from './ui/Reveal';
import { useLanguage } from '../context/LanguageContext';

/**
 * Services Grid Section showing contractor specialties
 */
export default function Services({ services, servicesHeader, whatsappUrl }) {
  const { lang } = useLanguage();

  const isPt = lang === 'pt';
  const badge = servicesHeader?.badge || (isPt ? 'O Que Fazemos' : 'Our Specialties');
  const titlePre = servicesHeader?.titlePre || (isPt ? 'Serviços de' : 'Excellence in');
  const titleHighlight = servicesHeader?.titleHighlight || (isPt ? 'Excelência' : 'Construction');
  const titlePost = servicesHeader?.titlePost || (isPt ? 'Para Qualquer Obra' : 'For Any Project Scale');
  const subtitle = servicesHeader?.subtitle || (isPt
    ? 'Oferecemos soluções completas em construção civil, reabilitação e remodelações com garantia de rigor e satisfação.'
    : 'We deliver turnkey civil construction, building restoration, and luxury renovations with strict standards.');
  const ctaLabel = servicesHeader?.ctaLabel || (isPt ? 'Pedir Orçamento' : 'Request Quote');

  return (
    <section id="servicos" className="py-24 md:py-32 bg-steel relative overflow-hidden">
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

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
              <br />
              {titlePost}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-warm-gray text-lg max-w-2xl mx-auto">
              {subtitle}
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-shadow duration-500 group cursor-default h-full flex flex-col justify-between"
              >
                <div>
                  <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-dark mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-warm-gray leading-relaxed text-[15px]">
                    {service.desc}
                  </p>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform duration-300"
                >
                  {ctaLabel} <FiArrowRight />
                </a>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
