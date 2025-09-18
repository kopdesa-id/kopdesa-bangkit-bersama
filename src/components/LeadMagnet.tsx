import { useState } from 'react';
import { Download, CheckCircle, Phone, MapPin } from 'lucide-react';

const LeadMagnet = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    village: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateWhatsApp = (number: string) => {
    // Indonesian WhatsApp number validation
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
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center text-primary-foreground">
            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} />
            </div>
            <h2 className="font-poppins font-bold text-3xl mb-4">
              Terima Kasih!
            </h2>
            <p className="text-xl mb-8">
              Ebook "Panduan Dasar Pengurus Koperasi" sudah dikirim ke WhatsApp Anda. 
              Tim kami juga akan menghubungi dalam 24 jam untuk konsultasi gratis.
            </p>
            <a
              href="#program"
              className="btn-outline bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Lihat Program Lainnya
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-primary-foreground">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
                Gratis! Ebook <span className="text-secondary">Panduan Dasar Pengurus Koperasi</span>
              </h2>
              
              <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
                Dapatkan panduan lengkap 50+ halaman yang berisi tips praktis mengelola koperasi desa, 
                template laporan keuangan, dan checklist persiapan RAT.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-secondary flex-shrink-0" size={20} />
                  <span>Fundamental pengelolaan koperasi</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-secondary flex-shrink-0" size={20} />
                  <span>Template laporan keuangan siap pakai</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-secondary flex-shrink-0" size={20} />
                  <span>Checklist persiapan RAT</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-secondary flex-shrink-0" size={20} />
                  <span>Tips meningkatkan partisipasi anggota</span>
                </div>
              </div>

              <div className="bg-primary-foreground/10 rounded-lg p-4">
                <p className="text-sm text-primary-foreground/80">
                  <strong>Bonus:</strong> Konsultasi gratis 30 menit via WhatsApp untuk membahas 
                  tantangan spesifik koperasi Anda!
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center mb-6">
                  <Download className="text-primary mx-auto mb-3" size={32} />
                  <h3 className="font-poppins font-bold text-xl text-foreground">
                    Download Sekarang
                  </h3>
                  <p className="text-muted-foreground">
                    Isi data di bawah dan dapatkan ebooknya gratis
                  </p>
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>

                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-foreground mb-2">
                    <Phone size={16} className="inline mr-1" />
                    Nomor WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="08xxxxxxxxxx"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Format: 08xx atau +628xx
                  </p>
                </div>

                <div>
                  <label htmlFor="village" className="block text-sm font-medium text-foreground mb-2">
                    <MapPin size={16} className="inline mr-1" />
                    Nama Desa/Koperasi
                  </label>
                  <input
                    type="text"
                    id="village"
                    name="village"
                    value={formData.village}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="Desa/Koperasi Anda"
                  />
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
                      <Download size={20} />
                      <span>Download Ebook Gratis</span>
                    </>
                  )}
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  Dengan mengisi form ini, Anda setuju untuk menerima komunikasi dari Kopdesa 
                  terkait program dan layanan kami.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;