import { FiAward, FiCheck, FiShield, FiTruck, FiClock } from 'react-icons/fi';
import Reveal from './ui/Reveal';
import AnimatedCounter from './ui/AnimatedCounter';

/**
 * Helper to render corresponding Feather icon based on string type
 */
function StatIcon({ type }) {
  const icons = {
    award: <FiAward />,
    check: <FiCheck />,
    shield: <FiShield />,
    truck: <FiTruck />,
    clock: <FiClock />,
  };
  return icons[type] || <FiCheck />;
}

/**
 * Animated Key Statistics Section
 */
export default function Stats({ stats }) {
  return (
    <section className="py-16 bg-gradient-to-b from-cream/80 via-white to-cream/80 border-y border-black/5 relative overflow-hidden">
      {/* Delicate ambient center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-48 bg-primary/[0.05] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="text-center group p-5 sm:p-6 rounded-2xl bg-white/80 backdrop-blur-xs border border-black/[0.05] shadow-xs hover:shadow-md hover:border-primary/30 hover:-translate-y-1 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 text-primary text-xl sm:text-2xl mb-3.5 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-xs">
                  <StatIcon type={stat.icon} />
                </div>
                <div className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-dark mb-1.5">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-warm-gray text-[11px] sm:text-xs font-heading font-bold uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
