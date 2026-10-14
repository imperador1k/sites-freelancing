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
    <section className="py-16 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(230,59,46,0.15),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary text-2xl mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <StatIcon type={stat.icon} />
                </div>
                <div className="font-heading font-black text-4xl md:text-5xl text-white mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/60 text-sm font-medium uppercase tracking-wider">
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
