import { useRef } from 'react';
import { useScrollRevealAll } from '../hooks/useScrollReveal';
import { galleryItems } from '../data/menuData';
import SmokeEffect from './SmokeEffect';

export default function Gallery() {
  const ref = useRef(null);
  useScrollRevealAll(ref);

  return (
    <section className="gallery" id="gallery" ref={ref}>
      <div className="wrap">
        <div className="section-head reveal">
          <p className="eyebrow">From Our Kitchen</p>
          <h2>Made Fresh, Served Hot</h2>
          <p>
            Every dish is cooked to order in small batches — no warmers, no waiting pans. Here's a peek
            at what comes out of our kitchen daily.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, i) => (
            <div className="gallery-card reveal" key={i}>
              <img src={item.image} alt={item.alt} loading="lazy" />
              <SmokeEffect />
              <div className="overlay">
                <h3>{item.name}</h3>
                <span className="price">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
