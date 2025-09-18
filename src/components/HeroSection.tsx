import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-village-cooperative.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Pelatihan koperasi desa dengan suasana hangat dan ramah" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl text-center text-primary-foreground">
          {/* Main Headline */}
          <h1 className="font-poppins font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            Kopdesa — Pelatihan & Pendampingan Bisnis untuk{' '}
            <span className="text-secondary">Koperasi Desa</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Modul praktis dan mentoring personal untuk membangun kapasitas pengurus koperasi desa. 
            Belajar fundamental bisnis, manajemen keuangan, dan digitalisasi sederhana bersama ahli yang berpengalaman.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#konsultasi"
              className="btn-hero flex items-center space-x-2 shadow-button"
            >
              <span>Jadwalkan Konsultasi Gratis</span>
              <ArrowRight size={20} />
            </a>
            
            <a
              href="#program"
              className="btn-outline bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary flex items-center space-x-2"
            >
              <Play size={18} />
              <span>Lihat Program</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-primary-foreground/80">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span className="text-sm font-medium">Pelatihan Praktis</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span className="text-sm font-medium">Mentoring Personal</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span className="text-sm font-medium">Pendampingan Berkelanjutan</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-foreground/60">
        <div className="animate-bounce">
          <ArrowRight className="rotate-90" size={24} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;