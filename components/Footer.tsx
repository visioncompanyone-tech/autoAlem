import React from 'react';
import { Facebook, Instagram, Car } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
               <div className="bg-brand-red p-1.5 rounded-lg">
                   <Car className="h-6 w-6 text-white" />
               </div>
               <span className="text-2xl font-bold tracking-tighter">
                Auto<span className="text-brand-red">Alem</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Transformando la experiencia de comprar tu próximo vehículo. Calidad, confianza y financiación a tu medida.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-red transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="md:ml-auto">
            <h4 className="font-bold text-lg mb-6">Navegación</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#vehicles" className="hover:text-white transition-colors">Vehículos</a></li>
              <li><a href="#sell" className="hover:text-white transition-colors">Vende tu Auto</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Legal/Info */}
          <div>
             <h4 className="font-bold text-lg mb-6">Legal</h4>
             <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Defensa al Consumidor</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} AutoAlem. Todos los derechos reservados.</p>
          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <span>Diseñado con tecnología</span>
            <span className="text-brand-red font-bold">React & Gemini</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;