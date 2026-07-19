const scrollTo = (e, id) => {
  e.preventDefault();
  const target = document.querySelector(id);
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export default function Footer() {
  const links = [
    { label: 'Menu', href: '#menu' },
    { label: 'Our Food', href: '#gallery' },
    { label: 'Specialty', href: '#specialty' },
    { label: 'Order', href: '#order' },
    { label: 'Call', href: 'tel:+918374964740', external: true },
  ];

  return (
    <footer>
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <img src="/assets/logo.jpg" alt="Sircilla Cloud Kitchen logo" width="48" height="48" />
          <div>
            <div className="footer-brand-name">Sircilla Cloud Kitchen</div>
            <div className="footer-tagline">Local Flavours, Homely Love</div>
          </div>
        </div>
        <div className="footer-links">
          {links.map((l) =>
            l.external ? (
              <a key={l.label} href={l.href}>
                {l.label}
              </a>
            ) : (
              <a key={l.label} href={l.href} onClick={(e) => scrollTo(e, l.href)}>
                {l.label}
              </a>
            )
          )}
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© 2026 Sircilla Cloud Kitchen. Sircilla, Telangana.</span>
        <span>Home-cooked, ordered ahead.</span>
      </div>
    </footer>
  );
}
