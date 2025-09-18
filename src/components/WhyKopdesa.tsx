import { BookOpen, Users, Calendar, BarChart3 } from 'lucide-react';

const WhyKopdesa = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Pelatihan Praktis',
      description: 'Modul pembelajaran yang mudah dipahami dan langsung bisa diterapkan untuk mengembangkan koperasi desa Anda.',
    },
    {
      icon: Users,
      title: 'Mentoring Pengurus',
      description: 'Pendampingan personal dari ahli berpengalaman untuk membangun kapasitas pengurus koperasi.',
    },
    {
      icon: Calendar,
      title: 'Pendampingan Bulanan',
      description: 'Program pendampingan berkelanjutan setiap bulan untuk memastikan perkembangan yang konsisten.',
    },
    {
      icon: BarChart3,
      title: 'Rencana Bisnis & Keuangan',
      description: 'Panduan lengkap menyusun rencana bisnis dan mengelola keuangan koperasi dengan baik.',
    },
  ];

  return (
    <section id="layanan" className="py-20 section-warm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-5xl text-foreground mb-6">
            Kenapa Memilih <span className="text-primary">Kopdesa?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Kami memahami tantangan unik koperasi desa dan menyediakan solusi praktis 
            yang sudah terbukti membantu ratusan koperasi berkembang pesat.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="card-feature fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <IconComponent className="text-primary-foreground" size={28} />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="font-poppins font-semibold text-xl text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a
            href="#program"
            className="btn-secondary"
          >
            Pelajari Program Lengkap
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyKopdesa;