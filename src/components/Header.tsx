import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Layanan', href: '#layanan' },
    { label: 'Program', href: '#program' },
    { label: 'Testimoni', href: '#testimoni' },
    { label: 'Artikel', href: '#artikel' },
    { label: 'Kontak', href: '#kontak' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-soft' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">K</span>
            </div>
            <span className={`font-poppins font-bold text-xl transition-colors duration-300 ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}>kopdesa.id</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`hover:text-primary transition-colors duration-300 font-medium ${
                  isScrolled ? 'text-foreground' : 'text-white hover:text-white/80'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#konsultasi"
              className={`transition-all duration-300 px-6 py-3 rounded-lg font-medium ${
                isScrolled 
                  ? 'btn-hero' 
                  : 'bg-white text-primary hover:bg-white/90 hover:scale-105'
              }`}
            >
              Jadwalkan Konsultasi Gratis
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 hover:text-primary transition-colors ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden mt-4 pb-4 space-y-4 rounded-lg p-4 ${
            isScrolled ? 'bg-background/95 backdrop-blur-md' : 'bg-black/20 backdrop-blur-md'
          }`}>
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`block hover:text-primary transition-colors duration-300 font-medium ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#konsultasi"
              className={`block w-full text-center transition-all duration-300 px-6 py-3 rounded-lg font-medium ${
                isScrolled 
                  ? 'btn-hero' 
                  : 'bg-white text-primary hover:bg-white/90'
              } mt-4`}
              onClick={() => setIsMenuOpen(false)}
            >
              Jadwalkan Konsultasi Gratis
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;