import { useRef } from 'react';
import { useScrollRevealAll } from '../hooks/useScrollReveal';
import { specialtyCombo } from '../data/menuData';

export default function Specialty() {
  const ref = useRef(null);
  useScrollRevealAll(ref);

  return (
    <section className="feature" id="specialty" ref={ref}>
      <div className="wrap">
        <div className="reveal">
          <p className="eyebrow" style={{ color: 'var(--turmeric-light)' }}>
            House Specialty
          </p>
          <h2>{specialtyCombo.name}</h2>
          <p>{specialtyCombo.description}</p>
          <a className="btn-turmeric" href="tel:+918374964740">
            📞 Call to Order This
          </a>
        </div>
        <div className="feature-card reveal">
          {specialtyCombo.items.map((item, i) => (
            <div className="feature-row" key={i}>
              <span>{item.label}</span>
              <span
                className={item.isSpice ? 'spice' : ''}
                style={item.highlight ? { fontWeight: 700, color: 'var(--turmeric-light)' } : {}}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
