import { FiCheck } from 'react-icons/fi';
import Reveal from './ui/Reveal';

/**
 * About Section displaying institutional trust and company strengths
 */
export default function About({ about }) {
  return (
    <section id="despre" className="py-24 md:py-32 bg-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-steel-dark/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left description */}
          <div>
            <Reveal>
              <span className="inline-block text-primary font-heading font-bold text-sm tracking-[0.2em] uppercase mb-4">
                {about.badge}
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-dark leading-[1.05] mb-6">
                {about.title}
                <span className="text-primary block sm:inline"> {about.titleHighlight}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-warm-gray text-lg leading-relaxed mb-6">
                {about.description1}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-warm-gray text-lg leading-relaxed mb-8">
                {about.description2}
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="flex flex-wrap gap-4">
                {about.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2 text-dark font-medium">
                    <FiCheck className="text-primary text-xl flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right decorative card */}
          <Reveal direction="right" delay={0.2}>
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-black/8 shadow-xl shadow-black/5">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-2xl rotate-12 pointer-events-none" />
                <div className="relative z-10">
                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-dark mb-4">
                    {about.card.title}
                  </h3>
                  <p className="text-warm-gray leading-relaxed mb-8">
                    {about.card.desc}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-cream rounded-xl p-4 sm:p-5 border border-black/5">
                      <div className="text-primary font-heading font-black text-2xl sm:text-3xl">{about.card.stat1.value}</div>
                      <div className="text-dark/70 font-heading font-medium text-xs sm:text-sm mt-1">{about.card.stat1.label}</div>
                    </div>
                    <div className="bg-cream rounded-xl p-4 sm:p-5 border border-black/5">
                      <div className="text-primary font-heading font-black text-2xl sm:text-3xl">{about.card.stat2.value}</div>
                      <div className="text-dark/70 font-heading font-medium text-xs sm:text-sm mt-1">{about.card.stat2.label}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
