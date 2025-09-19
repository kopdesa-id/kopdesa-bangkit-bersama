import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Beranda', href: '#hero' },
    { label: 'Layanan', href: '#layanan' },
    { label: 'Program', href: '#program' },
    { label: 'Testimoni', href: '#testimoni' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Kontak', href: '#konsultasi' },
  ];

  const programs = [
    { label: 'Bootcamp Pengurus', href: '#program' },
    { label: 'Mentoring Keuangan', href: '#program' },
    { label: 'Digitalisasi Sederhana', href: '#program' },
    { label: 'Konsultasi Gratis', href: '#konsultasi' },
  ];

  const resources = [
    { label: 'Ebook Gratis', href: '#ebook' },
    { label: 'Template RAT', href: '#konsultasi' },
    { label: 'Panduan Keuangan', href: '#konsultasi' },
    { label: 'Tips Koperasi', href: '#artikel' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                  <span className="text-secondary-foreground font-bold text-xl">K</span>
                </div>
                <span className="font-poppins font-bold text-xl">kopdesa.id</span>
              </div>
              
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Membangun koperasi desa yang mandiri dan berkelanjutan melalui pelatihan, 
                mentoring, dan pendampingan yang praktis dan terarah.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-secondary" />
                  <span className="text-sm">+62 822-9789-8514</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-secondary" />
                  <span className="text-sm">kampusrwid@gmail.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin size={16} className="text-secondary mt-0.5" />
                  <span className="text-sm">
                    Kaliurang St KM.5 No.21, Karang Wuni<br />
                    Caturtunggal, Depok, Sleman Regency<br />
                    Special Region of Yogyakarta 55281
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-poppins font-semibold text-lg mb-6">
                Link Cepat
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h3 className="font-poppins font-semibold text-lg mb-6">
                Program
              </h3>
              <ul className="space-y-3">
                {programs.map((program) => (
                  <li key={program.label}>
                    <a
                      href={program.href}
                      className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300"
                    >
                      {program.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-poppins font-semibold text-lg mb-6">
                Sumber Daya
              </h3>
              <ul className="space-y-3 mb-6">
                {resources.map((resource) => (
                  <li key={resource.label}>
                    <a
                      href={resource.href}
                      className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300"
                    >
                      {resource.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Social Media */}
              <div>
                <h4 className="font-medium mb-3">Ikuti Kami</h4>
                <div className="flex space-x-3">
                  <a
                    href="https://facebook.com/kopdesa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300"
                  >
                    <Facebook size={16} />
                  </a>
                  <a
                    href="https://instagram.com/kopdesa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300"
                  >
                    <Instagram size={16} />
                  </a>
                  <a
                    href="https://linkedin.com/company/kopdesa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300"
                  >
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="text-center">
            <h3 className="font-poppins font-semibold text-xl mb-4">
              Dapatkan Tips Koperasi Terbaru
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Berlangganan newsletter mingguan kami untuk mendapatkan tips praktis, 
              studi kasus, dan update program terbaru untuk mengembangkan koperasi desa.
            </p>
            
            <div className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="Email Anda"
                className="flex-1 px-4 py-3 rounded-lg text-foreground bg-background border border-border focus:ring-2 focus:ring-secondary focus:border-secondary"
              />
              <button className="btn-secondary bg-secondary text-secondary-foreground hover:bg-secondary-light px-6">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-primary-foreground/80 text-sm">
                © {currentYear} Kopdesa.id. Semua hak cipta dilindungi.
              </p>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a
                href="/privacy-policy"
                className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300"
              >
                Kebijakan Privasi
              </a>
              <a
                href="/terms-of-service"
                className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300"
              >
                Syarat & Ketentuan
              </a>
              <a
                href="/sitemap"
                className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;