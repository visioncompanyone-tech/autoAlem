import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Info Side */}
          <div className="space-y-10">
            <div>
              <h2 className="text-4xl font-bold text-brand-dark mb-4">Visitanos</h2>
              <p className="text-gray-600 text-lg">
                Estamos ubicados en el corazón de Córdoba Capital. Vení a conocer tu próximo auto y tomamos un café.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-brand-red/10 p-3 rounded-lg text-brand-red">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-lg">Dirección</h4>
                  <p className="text-gray-600">Av. Alem Nº 351, B° Gral Bustos<br/>Córdoba Capital, Argentina</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-red/10 p-3 rounded-lg text-brand-red">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-lg">Teléfonos</h4>
                  <p className="text-gray-600 hover:text-brand-red transition-colors cursor-pointer">+54 9 (351) 802-5427</p>
                  <p className="text-gray-600 hover:text-brand-red transition-colors cursor-pointer">+54 9 (351) 631-3195</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-red/10 p-3 rounded-lg text-brand-red">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-lg">Email</h4>
                  <p className="text-gray-600">comercialautoalem@gmail.com</p>
                </div>
              </div>
              
               <div className="flex items-start gap-4">
                <div className="bg-brand-red/10 p-3 rounded-lg text-brand-red">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-lg">Horarios</h4>
                  <p className="text-gray-600">Lunes a Viernes: 9:00 - 19:00 hs</p>
                  <p className="text-gray-600">Sábados: 9:00 - 13:00 hs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder Side */}
          <div className="relative h-[500px] bg-gray-200 rounded-3xl overflow-hidden shadow-2xl">
            {/* Artistic Map Representation since we don't have an API key */}
            <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-64.18, -31.40,14,0/800x600?access_token=pk.placeholder')] bg-cover bg-center opacity-50 grayscale hover:grayscale-0 transition-all duration-700"></div>
            
            {/* Fallback pattern if image fails */}
            <div className="absolute inset-0 bg-slate-100 opacity-20 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center animate-pulse hover:animate-none">
                    <MapPin className="text-brand-red w-10 h-10 mb-2" />
                    <span className="font-bold text-brand-dark">AutoAlem Showroom</span>
                    <a href="https://maps.google.com/?q=Av.+Alem+351,+Córdoba" target="_blank" rel="noreferrer" className="mt-2 text-xs text-blue-500 hover:underline">Ver en Google Maps</a>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;