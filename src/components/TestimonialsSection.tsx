import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Ibu Siti Nurhaliza',
      role: 'Ketua Koperasi Tani Makmur',
      location: 'Desa Sukamaju, Jawa Barat',
      content: 'Alhamdulillah, setelah ikut program bootcamp Kopdesa, koperasi kami jadi lebih teratur dalam mengelola keuangan. Sekarang anggota juga lebih percaya dan aktif berpartisipasi.',
      rating: 5,
      image: '/api/placeholder/80/80',
    },
    {
      name: 'Pak Ahmad Fauzi',
      role: 'Bendahara Koperasi',
      location: 'Desa Maju Bersama, Jawa Tengah',
      content: 'Program mentoring keuangan sangat membantu kami dalam menyiapkan RAT. Laporan keuangan jadi rapi dan mudah dipahami oleh semua anggota koperasi.',
      rating: 5,
      image: '/api/placeholder/80/80',
    },
    {
      name: 'Ibu Maria Dewi',
      role: 'Sekretaris Koperasi Wanita',
      location: 'Desa Harapan, Lampung',
      content: 'Pelatihan digitalisasi sederhana membuka mata kami. Sekarang produk kerajinan dari anggota bisa dijual online dan pesanan meningkat drastis!',
      rating: 5,
      image: '/api/placeholder/80/80',
    },
  ];

  const caseStudy = {
    title: 'Koperasi Tani Sejahtera',
    location: 'Desa Subur, Jawa Timur',
    before: {
      title: 'Sebelum Program',
      points: [
        'Anggota hanya 45 orang',
        'Omzet bulanan Rp 15 juta',
        'Laporan keuangan manual & rumit',
        'Pemasaran hanya lokal'
      ]
    },
    after: {
      title: 'Setelah 6 Bulan',
      points: [
        'Anggota bertambah jadi 120 orang',
        'Omzet meningkat ke Rp 45 juta',
        'Laporan digital & transparan',
        'Pemasaran online ke 3 provinsi'
      ]
    },
    quote: '"Program Kopdesa benar-benar mengubah cara kami mengelola koperasi. Dari yang awalnya tradisional menjadi modern tapi tetap sesuai nilai-nilai gotong royong."',
    name: 'Pak Bambang Suryanto',
    role: 'Ketua Koperasi Tani Sejahtera'
  };

  return (
    <section id="testimoni" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-5xl text-foreground mb-6">
            Apa Kata <span className="text-primary">Mereka?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Dengarkan langsung pengalaman pengurus koperasi desa yang sudah 
            merasakan manfaat program pendampingan kami.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="card-feature fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="text-primary/20 mb-4">
                <Quote size={40} />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground italic mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold">
                    {testimonial.name.split(' ')[1]?.[0] || testimonial.name[0]}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study */}
        <div className="bg-gradient-warm rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="font-poppins font-bold text-2xl md:text-3xl text-foreground mb-4">
              Studi Kasus: <span className="text-primary">{caseStudy.title}</span>
            </h3>
            <p className="text-muted-foreground">{caseStudy.location}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Before */}
            <div className="bg-card rounded-xl p-6 shadow-soft">
              <h4 className="font-poppins font-semibold text-xl text-foreground mb-6 text-center">
                {caseStudy.before.title}
              </h4>
              <ul className="space-y-3">
                {caseStudy.before.points.map((point, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-muted rounded-full"></div>
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="bg-gradient-hero rounded-xl p-6 text-primary-foreground shadow-card">
              <h4 className="font-poppins font-semibold text-xl mb-6 text-center">
                {caseStudy.after.title}
              </h4>
              <ul className="space-y-3">
                {caseStudy.after.points.map((point, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quote */}
          <div className="text-center">
            <p className="text-lg italic text-muted-foreground mb-4 max-w-4xl mx-auto leading-relaxed">
              {caseStudy.quote}
            </p>
            <div>
              <h5 className="font-semibold text-foreground">{caseStudy.name}</h5>
              <p className="text-muted-foreground">{caseStudy.role}</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="font-poppins font-semibold text-xl text-foreground mb-4">
            Ingin hasil seperti mereka?
          </h3>
          <a
            href="#konsultasi"
            className="btn-hero"
          >
            Mulai Konsultasi Gratis
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;