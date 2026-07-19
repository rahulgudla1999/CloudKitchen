import { useState, useRef, useEffect } from 'react';
import { menuData } from '../data/menuData';
import SmokeEffect from './SmokeEffect';

const categories = [
  { key: 'all', label: 'All' },
  { key: 'rice', label: 'Rice & Biryani' },
  { key: 'curry', label: 'Curries & Fry' },
  { key: 'starter', label: 'Starters & Sides' },
];

function DishCard({ dish }) {
  return (
    <div className="dish reveal">
      <div className="dish-img">
        <img src={dish.image} alt={dish.name} loading="lazy" />
        <SmokeEffect />
      </div>
      <div className="dish-info">
        <div className="dish-header">
          <div>
            <div className="dish-name">{dish.name}</div>
            <span className="dish-tag">Spice {dish.spice}</span>
          </div>
          <div className="dish-price">{dish.price}</div>
        </div>
        <p className="dish-desc">{dish.desc}</p>
      </div>
    </div>
  );
}

function MenuGroup({ groupKey, group }) {
  return (
    <div className="menu-group" data-group={groupKey}>
      <div className="menu-group-title reveal">
        <h3>{group.title}</h3>
      </div>
      <div className="dish-grid">
        {group.dishes.map((dish, i) => (
          <DishCard key={`${groupKey}-${i}`} dish={dish} />
        ))}
      </div>
    </div>
  );
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');
  const sectionRef = useRef(null);

  // Re-observe reveal elements whenever category changes
  useEffect(() => {
    const container = sectionRef.current;
    if (!container) return;

    const elements = container.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const siblings = Array.from(entry.target.parentElement.querySelectorAll('.reveal'));
            const delay = siblings.indexOf(entry.target) * 80;
            setTimeout(() => entry.target.classList.add('visible'), delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeCategory]);

  return (
    <section className="section" id="menu" ref={sectionRef}>
      <div className="wrap">
        <div className="section-head reveal">
          <p className="eyebrow">Today's Menu</p>
          <h2>Annam, Kura &amp; more</h2>
          <p>
            Everything is cooked to order and packed fresh. Spice levels noted with{' '}
            <span className="spice">●</span> — ask us to adjust when you call.
          </p>
        </div>

        <div className="menu-cats reveal">
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`cat-pill ${activeCategory === cat.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {Object.entries(menuData).map(([key, group]) => {
          if (activeCategory !== 'all' && activeCategory !== key) return null;
          return <MenuGroup key={key} groupKey={key} group={group} />;
        })}
      </div>
    </section>
  );
}
