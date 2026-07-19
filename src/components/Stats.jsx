import { useRef, useEffect } from 'react';
import { useScrollRevealAll } from '../hooks/useScrollReveal';

const stats = [
  { count: 500, suffix: '+', label: 'Happy Customers' },
  { count: 14, suffix: '', label: 'Dishes on Menu' },
  { count: 5, suffix: '', label: 'Star Rating' },
  { count: 30, suffix: '', label: 'Min Delivery' },
];

export default function Stats() {
  const ref = useRef(null);
  useScrollRevealAll(ref);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const nums = container.querySelectorAll('.stat-num[data-count]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.dataset.count);
            const suffix = el.dataset.suffix || '';
            let current = 0;
            const increment = Math.ceil(target / 40);
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              el.textContent = current + suffix;
            }, 30);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    nums.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats" ref={ref}>
      <div className="wrap">
        {stats.map((s, i) => (
          <div className="stat-item reveal" key={i}>
            <div className="stat-num" data-count={s.count} data-suffix={s.suffix}>
              {s.suffix ? `0${s.suffix}` : '0'}
            </div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
