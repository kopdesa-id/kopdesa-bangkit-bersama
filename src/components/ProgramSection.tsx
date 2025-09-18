import { ArrowRight, Clock, Users, TrendingUp } from 'lucide-react';
import trainingImage from '@/assets/training-discussion.jpg';
import financialImage from '@/assets/financial-management.jpg';
import digitalImage from '@/assets/digital-training.jpg';

const ProgramSection = () => {
  const programs = [
    {
      title: 'Bootcamp Pengurus Koperasi',
      description: 'Program intensif 3 hari untuk membangun fondasi yang kuat dalam mengelola koperasi desa dengan modul praktis dan studi kasus nyata.',
      image: trainingImage,
      features: ['Fundamental Bisnis', 'Kepemimpinan', 'Strategi Pengembangan'],
      duration: '3 Hari',
      participants: 'Max 25 Orang',
      price: 'Mulai Rp 2.5 Juta',
      cta: 'Daftar Bootcamp',
    },
    {
      title: 'Mentoring Keuangan & RAT',
      description: 'Pendampingan khusus untuk mengelola keuangan koperasi, menyusun laporan keuangan, dan mempersiapkan Rapat Anggota Tahunan (RAT).',
      image: financialImage,
      features: ['Laporan Keuangan', 'Persiapan RAT', 'Analisis Bisnis'],
      duration: '6 Bulan',
      participants: 'Personal/Tim',
      price: 'Mulai Rp 5 Juta',
      cta: 'Mulai Mentoring',
    },
    {
      title: 'Digitalisasi Sederhana',
      description: 'Pelatihan menggunakan teknologi sederhana untuk meningkatkan efisiensi operasional koperasi dan memperluas jangkauan pemasaran.',
      image: digitalImage,
      features: ['Aplikasi Keuangan', 'Media Sosial', 'E-Commerce Dasar'],
      duration: '2 Hari',
      participants: 'Max 15 Orang',
      price: 'Mulai Rp 1.8 Juta',
      cta: 'Ikut Pelatihan',
    },
  ];

  return (
    <section id="program" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-5xl text-foreground mb-6">
            Program <span className="text-primary">Unggulan</span> Kami
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Pilih program yang sesuai dengan kebutuhan koperasi desa Anda. 
            Semua program dirancang khusus untuk kondisi dan tantangan di desa.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className="card-program fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image */}
              <div className="relative mb-6 rounded-lg overflow-hidden">
                <img
                  src={program.image}
                  alt={`Program ${program.title} - pelatihan koperasi desa`}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-primary-foreground">
                  <span className="bg-secondary px-3 py-1 rounded-full text-sm font-semibold">
                    {program.price}
                  </span>
                </div>
              </div>

              {/* Content */}
              <h3 className="font-poppins font-bold text-2xl text-foreground mb-4">
                {program.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {program.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {program.features.map((feature) => (
                    <span
                      key={feature}
                      className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Program Details */}
              <div className="flex justify-between items-center mb-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Clock size={16} />
                  <span>{program.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users size={16} />
                  <span>{program.participants}</span>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="#konsultasi"
                className="w-full btn-secondary flex items-center justify-center space-x-2"
              >
                <span>{program.cta}</span>
                <ArrowRight size={18} />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-warm rounded-2xl">
          <h3 className="font-poppins font-bold text-2xl text-foreground mb-4">
            Tidak yakin program mana yang cocok?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Mari ngobrol dulu! Konsultasi gratis 30 menit untuk membahas kebutuhan koperasi Anda 
            dan menemukan program yang paling tepat.
          </p>
          <a
            href="#konsultasi"
            className="btn-hero"
          >
            Konsultasi Gratis Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;