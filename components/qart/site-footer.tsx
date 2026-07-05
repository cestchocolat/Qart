export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-shell">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="footer-logo" href="#">Qart</a>
            <p>
              Curated luxury residences and personalized property consultation
              in Bangkok.
            </p>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="#">Home</a>
            <a href="#areas">Areas</a>
            <a href="#areas">Properties</a>
            <a href="#consultation">Consultation</a>
            <a href="#contact">Contact</a>
          </nav>
          <address className="footer-contact">
            <span>WHATSAPP</span>
            <a href="tel:+66612901977">+66 61 290 1977</a>
          </address>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Qart. All rights reserved.</p>
          <p>Designed for modern luxury living</p>
        </div>
      </div>
    </footer>
  );
}
