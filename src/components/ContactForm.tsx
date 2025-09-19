import { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    village: '',
    message: '',
    service: 'konsultasi'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateWhatsApp = (number: string) => {
    const cleanNumber = number.replace(/\D/g, '');
    return cleanNumber.startsWith('08') || cleanNumber.startsWith('628');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateWhatsApp(formData.whatsapp)) {
      alert('Nomor WhatsApp harus format Indonesia (08xx atau +628xx)');
      return;
    }

    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <section id="konsultasi" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="text-primary-foreground" size={32} />
            </div>
            <h2 className="font-poppins font-bold text-3xl text-foreground mb-4">
              Pesan Berhasil Dikirim!
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Terima kasih! Tim kami akan menghubungi Anda dalam 2-4 jam kerja 
              untuk jadwalkan konsultasi gratis.
            </p>
            <a
              href="#program"
              className="btn-secondary"
            >
              Pelajari Program Lainnya
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="konsultasi" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-5xl text-foreground mb-6">
            Mari <span className="text-primary">Ngobrol Dulu</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Konsultasi gratis 30 menit untuk membahas kondisi koperasi Anda saat ini 
            dan menemukan solusi yang tepat bersama tim ahli kami.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="font-poppins font-bold text-2xl text-foreground mb-6">
                  Hubungi Kami Langsung
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Tim kami siap membantu Anda 24/7. Pilih cara komunikasi yang paling nyaman 
                  untuk mulai diskusi tentang pengembangan koperasi desa.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary-foreground" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">WhatsApp</h4>
                    <p className="text-muted-foreground mb-2">+62 822-9789-8514</p>
                    <a
                      href="https://wa.me/6282297898514?text=Halo%20Kopdesa%2C%20saya%20ingin%20konsultasi%20gratis"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-dark font-medium"
                    >
                      Chat Sekarang →
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary-foreground" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Email</h4>
                    <p className="text-muted-foreground mb-2">kampusrwid@gmail.com</p>
                    <p className="text-sm text-muted-foreground">Respon dalam 4 jam kerja</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary-foreground" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Alamat</h4>
                    <p className="text-muted-foreground">
                      Kaliurang St KM.5 No.21, Karang Wuni<br />
                      Caturtunggal, Depok, Sleman Regency<br />
                      Special Region of Yogyakarta 55281
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-primary-foreground" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Jam Operasional</h4>
                    <p className="text-muted-foreground">
                      Senin - Jumat: 08:00 - 17:00 WIB<br />
                      Sabtu: 08:00 - 12:00 WIB<br />
                      WhatsApp: 24/7
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-warm p-6 rounded-xl">
                <h4 className="font-poppins font-semibold text-lg text-foreground mb-3">
                  💡 Tips: Sebelum Konsultasi
                </h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Siapkan data anggota koperasi saat ini</li>
                  <li>• Catat tantangan utama yang dihadapi</li>
                  <li>• Tentukan tujuan pengembangan ke depan</li>
                  <li>• Siapkan pertanyaan spesifik untuk koperasi Anda</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="font-poppins font-bold text-xl text-foreground mb-2">
                    Jadwalkan Konsultasi Gratis
                  </h3>
                  <p className="text-muted-foreground">
                    Isi form di bawah dan tim kami akan menghubungi dalam 2-4 jam
                  </p>
                </div>

                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-foreground mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="Nama lengkap Anda"
                  />
                </div>

                <div>
                  <label htmlFor="contact-whatsapp" className="block text-sm font-medium text-foreground mb-2">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="contact-whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="08xxxxxxxxxx"
                  />
                </div>

                <div>
                  <label htmlFor="contact-village" className="block text-sm font-medium text-foreground mb-2">
                    Nama Desa/Koperasi *
                  </label>
                  <input
                    type="text"
                    id="contact-village"
                    name="village"
                    value={formData.village}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="Desa/Koperasi Anda"
                  />
                </div>

                <div>
                  <label htmlFor="contact-service" className="block text-sm font-medium text-foreground mb-2">
                    Layanan yang Diminati
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  >
                    <option value="konsultasi">Konsultasi Umum</option>
                    <option value="bootcamp">Bootcamp Pengurus</option>
                    <option value="mentoring">Mentoring Keuangan & RAT</option>
                    <option value="digitalisasi">Digitalisasi Sederhana</option>
                    <option value="custom">Program Custom</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-foreground mb-2">
                    Ceritakan Kondisi Koperasi Anda
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="Ceritakan tantangan utama, jumlah anggota, omzet bulanan, atau hal lain yang ingin didiskusikan..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn-hero flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground"></div>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Kirim & Jadwalkan Konsultasi</span>
                    </>
                  )}
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  Dengan mengirim form ini, Anda setuju untuk dihubungi tim Kopdesa untuk konsultasi dan informasi program.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;