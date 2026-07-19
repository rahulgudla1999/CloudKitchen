import { useRef } from 'react';
import { useScrollRevealAll } from '../hooks/useScrollReveal';
import { contactInfo } from '../data/menuData';

export default function Order() {
  const ref = useRef(null);
  useScrollRevealAll(ref);

  return (
    <section className="order" id="order" ref={ref}>
      <div className="wrap">
        <div className="reveal">
          <p className="eyebrow">Order Direct</p>
          <h2>No app, no markup — just call or message us.</h2>
          <p style={{ marginTop: 12, opacity: 0.8 }}>
            We cook and pack to order, so ring ahead for anything outside regular meal hours.
          </p>
        </div>
        <div className="order-cards">
          <div className="order-card reveal">
            <p className="eyebrow">Call / WhatsApp</p>
            {contactInfo.phones.map((phone, i) => (
              <a key={i} className="phone" href={`tel:${contactInfo.phonesRaw[i]}`}>
                {phone}
              </a>
            ))}
          </div>
          <div className="order-card reveal">
            <p className="eyebrow">Find Us</p>
            <p
              style={{
                fontFamily: "'Baloo 2'",
                fontWeight: 600,
                fontSize: '1.15rem',
                color: 'var(--brick-dark)',
                marginTop: 4,
              }}
            >
              📍 {contactInfo.location}
            </p>
            <p style={{ marginTop: 10 }}>
              Instagram:{' '}
              <a
                className="social-link"
                href={contactInfo.instagramUrl}
                target="_blank"
                rel="noopener"
              >
                {contactInfo.instagram}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
