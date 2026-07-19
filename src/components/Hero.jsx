import SmokeEffect from './SmokeEffect';

export default function Hero() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="hero">
      <span className="float-spice" style={{ top: '10%', left: '5%' }}>🌶️</span>
      <span className="float-spice">🍃</span>
      <span className="float-spice">✨</span>
      <span className="float-spice">🌿</span>

      <div className="hero-grid">
        <div>
          <p className="eyebrow">Sircilla, Telangana</p>
          <h1>
            Kodi kura on the boil,
            <br />
            <em>rice from home.</em>
          </h1>
          <p className="lead">
            Slow-cooked Telangana curries and biryani, made the way it's made in a Sircilla kitchen —
            bagara rice, kodi kura, mutton curry and more, packed hot and sent straight to your door.
          </p>
          <div className="hero-ctas">
            <a className="btn-primary" href="#menu" onClick={(e) => scrollTo(e, '#menu')}>
              🍛 See Today's Menu
            </a>
            <a className="btn-secondary" href="https://wa.me/918374964740" target="_blank" rel="noopener">
              💬 Order on WhatsApp
            </a>
          </div>
        </div>
        <div className="hero-art">
          <div className="steam">〰️</div>
          <div className="hero-image-container">
            <img src="/assets/hero_spread.jpg" alt="A festive spread of Telangana home-style dishes" fetchPriority="high" width="600" height="600" />
            <SmokeEffect />
          </div>
        </div>
      </div>
    </section>
  );
}
