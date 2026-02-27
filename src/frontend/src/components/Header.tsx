import { Link } from '@tanstack/react-router';

export default function Header() {
  return (
    <header className="bg-navy border-b-4 border-gold sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 md:h-20">
          {/* Logo / Brand */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex flex-col leading-tight">
              <span className="text-gold font-heading font-bold text-lg md:text-xl tracking-wide uppercase">
                Empower
              </span>
              <span className="text-cream font-heading font-semibold text-sm md:text-base tracking-widest uppercase -mt-1">
                Southwest
              </span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
