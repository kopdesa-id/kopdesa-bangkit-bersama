import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Bagaimana cara mendaftar program Kopdesa?',
      answer: 'Sangat mudah! Mulai dengan konsultasi gratis 30 menit melalui WhatsApp atau form konsultasi di website. Tim kami akan membantu menentukan program yang paling sesuai dengan kebutuhan koperasi Anda. Setelah itu, Anda bisa langsung mendaftar dan memulai program.'
    },
    {
      question: 'Berapa biaya program pelatihan dan mentoring?',
      answer: 'Biaya bervariasi tergantung program yang dipilih. Bootcamp Pengurus mulai dari Rp 2,5 juta, Mentoring Keuangan & RAT mulai dari Rp 5 juta, dan Digitalisasi Sederhana mulai dari Rp 1,8 juta. Kami juga menyediakan paket bundling dengan harga yang lebih hemat. Konsultasi awal 100% gratis!'
    },
    {
      question: 'Apa saja syarat untuk mengikuti program?',
      answer: 'Syarat utama adalah komitmen untuk belajar dan mengembangkan koperasi. Peserta sebaiknya adalah pengurus aktif koperasi (ketua, sekretaris, bendahara) atau anggota yang berperan penting. Tidak ada syarat pendidikan khusus - yang penting semangat untuk maju bersama!'
    },
    {
      question: 'Berapa lama durasi setiap program?',
      answer: 'Bootcamp Pengurus berlangsung 3 hari intensif, Digitalisasi Sederhana 2 hari, sedangkan Mentoring Keuangan & RAT berlangsung 6 bulan dengan sesi rutin bulanan. Semua program sudah termasuk pendampingan lanjutan via WhatsApp group.'
    },
    {
      question: 'Apakah ada garansi hasil setelah mengikuti program?',
      answer: 'Kami berkomitmen pada kepuasan peserta. Jika dalam 30 hari pertama Anda merasa program tidak sesuai ekspektasi, kami akan memberikan sesi tambahan gratis atau refund sesuai kebijakan. Yang terpenting, kami akan mendampingi sampai Anda benar-benar paham dan bisa menerapkannya.'
    },
    {
      question: 'Bagaimana jika lokasi koperasi jauh dari kota?',
      answer: 'Tidak masalah! Kami melayani ke seluruh Indonesia. Untuk daerah terpencil, kami bisa mengatur program hybrid (online + offline) atau full online via Zoom. Tim kami juga bisa datang langsung ke lokasi untuk program group dengan minimal 15 peserta.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 section-warm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-5xl text-foreground mb-6">
            Pertanyaan <span className="text-primary">yang Sering Ditanyakan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Masih ada pertanyaan? Kami siap membantu! Hubungi tim kami di WhatsApp 
            untuk informasi lebih detail.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 bg-card rounded-xl shadow-soft overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors duration-300"
              >
                <h3 className="font-poppins font-semibold text-lg text-foreground pr-8">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <ChevronUp className="text-primary" size={24} />
                  ) : (
                    <ChevronDown className="text-primary" size={24} />
                  )}
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-8 pb-6">
                  <div className="border-t border-border pt-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-hero rounded-2xl">
          <h3 className="font-poppins font-bold text-2xl text-primary-foreground mb-4">
            Masih ada pertanyaan lain?
          </h3>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Tim kami siap membantu menjawab semua pertanyaan Anda. Mari ngobrol langsung 
            via WhatsApp untuk informasi yang lebih detail dan personal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6281234567890?text=Halo%20Kopdesa%2C%20saya%20ingin%20bertanya%20tentang%20program%20pelatihan"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Chat WhatsApp
            </a>
            <a
              href="#konsultasi"
              className="btn-secondary bg-secondary text-secondary-foreground hover:bg-secondary-light"
            >
              Konsultasi Gratis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;