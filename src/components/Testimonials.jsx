import { useRef } from 'react';
import { useScrollRevealAll } from '../hooks/useScrollReveal';
import { testimonials } from '../data/menuData';

export default function Testimonials() {
  const ref = useRef(null);
  useScrollRevealAll(ref);

  return (
    <section className="testimonials" id="reviews" ref={ref}>
      <div className="wrap">
        <div className="section-head reveal">
          <p className="eyebrow">What People Say</p>
          <h2>From Our Customers</h2>
        </div>

        <div className="testimonial-track">
          {testimonials.map((t, i) => (
            <div className="testimonial-card reveal" key={i}>
              <div className="quote-mark">"</div>
              <p>{t.text}</p>
              <div className="stars">★★★★★</div>
              <div className="author">{t.author}</div>
              <div className="location">{t.location}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
