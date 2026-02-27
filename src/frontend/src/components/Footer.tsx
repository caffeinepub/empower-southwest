export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'empower-southwest');

  return (
    <footer className="bg-navy-dark text-cream">
      {/* Disclosure Band */}
      <div className="border-t-4 border-gold">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Legal Disclosure */}
            <div>
              <h3 className="text-gold font-heading font-semibold text-sm uppercase tracking-widest mb-3">
                Legal Disclosure
              </h3>
              <p className="text-cream-muted text-xs leading-relaxed font-sans">
                Paid for by Empower Southwest. A copy of our report is filed with the State Board of Elections is (or
                will be) available on the Board's official website (
                <a
                  href="https://www.elections.il.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-light underline underline-offset-2 transition-colors"
                >
                  www.elections.il.gov
                </a>
                ) or for purchase from the State Board of Elections, Springfield, Illinois. Contributions are not tax
                deductible.
              </p>
            </div>

            {/* Organization Info */}
            <div className="md:text-right">
              <div className="flex md:justify-end items-center gap-2 mb-3">
                <span className="text-gold font-heading font-bold text-sm uppercase tracking-wide">
                  Empower Southwest
                </span>
              </div>
              <p className="text-cream-muted text-xs font-sans">
                Building a people-powered movement in Chicago's Southwest suburbs.
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-6 border-t border-navy-light flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-cream-muted font-sans">
            <p>© {year} Empower Southwest. All rights reserved.</p>
            <a
              href="/privacy-policy"
              className="text-gold hover:text-gold-light underline underline-offset-2 transition-colors"
            >
              Privacy Policy
            </a>
            <p>
              Built with{' '}
              <span className="text-gold" role="img" aria-label="love">
                ♥
              </span>{' '}
              using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light underline underline-offset-2 transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
