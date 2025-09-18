import { MessageCircle, ClipboardList, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageCircle,
      step: '01',
      title: 'Konsultasi Gratis',
      description: 'Ceritakan kondisi koperasi Anda saat ini. Kami akan memahami tantangan dan tujuan yang ingin dicapai.',
      highlight: 'Gratis 30 menit',
    },
    {
      icon: ClipboardList,
      step: '02',
      title: 'Rencana & Pelatihan',
      description: 'Kami susun rencana pembelajaran yang sesuai dengan kebutuhan dan ikuti program pelatihan yang dipilih.',
      highlight: 'Disesuaikan kebutuhan',
    },
    {
      icon: TrendingUp,
      step: '03',
      title: 'Pendampingan & Evaluasi',
      description: 'Dapatkan pendampingan berkelanjutan dan evaluasi rutin untuk memastikan koperasi terus berkembang.',
      highlight: 'Dukungan berkelanjutan',
    },
  ];

  return (
    <section className="py-20 section-warm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-5xl text-foreground mb-6">
            Bagaimana <span className="text-primary">Cara Kerjanya?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Proses yang simple dan terarah untuk membantu koperasi desa Anda 
            berkembang dengan pendampingan yang personal dan berkelanjutan.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Hidden on mobile */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary to-primary transform -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 relative z-10">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.step}
                  className="text-center fade-in"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {/* Step Number & Icon */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto shadow-card border-4 border-background">
                      <IconComponent className="text-primary-foreground" size={32} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                      <span className="text-secondary-foreground font-bold text-sm">
                        {step.step}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="max-w-sm mx-auto">
                    <h3 className="font-poppins font-bold text-xl text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <span className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold">
                      {step.highlight}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="font-poppins font-semibold text-xl text-foreground mb-4">
            Siap untuk memulai perjalanan mengembangkan koperasi desa?
          </h3>
          <a
            href="#konsultasi"
            className="btn-hero"
          >
            Mari Ngobrol Dulu
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;