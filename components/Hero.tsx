import React from 'react';
import { Search, ChevronRight } from 'lucide-react';
import { MAKES } from '../constants';
import { FilterState } from '../types';

interface HeroProps {
  filter: FilterState;
  setFilter: React.Dispatch<React.SetStateAction<FilterState>>;
  onSearch: () => void;
}

const Hero: React.FC<HeroProps> = ({ filter, setFilter, onSearch }) => {
  
  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilter(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1920" 
          alt="Luxury Car Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center pt-20">
        
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-red/20 text-brand-red border border-brand-red/30 text-xs font-bold tracking-wider mb-4 uppercase">
            Concesionaria Premium
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Encontrá tu auto <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-orange-500">
              Ideal Hoy
            </span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
            Hasta un 100% del valor de la unidad financiado. Los mejores usados seleccionados y 0km del mercado están en AutoAlem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
             <button onClick={() => document.getElementById('vehicles')?.scrollIntoView({behavior: 'smooth'})} className="bg-brand-red text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition-all flex items-center justify-center gap-2 group">
               Ver Catálogo
               <ChevronRight className="group-hover:translate-x-1 transition-transform" />
             </button>
          </div>
        </div>

        {/* Search Card */}
        <div className="w-full md:w-1/2 md:pl-10">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 md:p-8 rounded-3xl shadow-2xl">
            <h3 className="text-xl font-semibold text-white mb-6 border-l-4 border-brand-red pl-3">Buscador Rápido</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-gray-300 text-sm mb-2">Marca</label>
                <select 
                  name="make"
                  value={filter.make}
                  onChange={handleInputChange}
                  className="w-full bg-brand-dark/50 text-white border border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
                >
                  {MAKES.map(make => (
                    <option key={make} value={make === 'Todas' ? '' : make}>{make}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm mb-2">Año Min.</label>
                  <input 
                    type="number" 
                    name="minYear"
                    placeholder="2015"
                    value={filter.minYear}
                    onChange={handleInputChange}
                    className="w-full bg-brand-dark/50 text-white border border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm mb-2">Precio Max ($)</label>
                  <input 
                    type="number" 
                    name="maxPrice"
                    placeholder="50.000.000"
                    value={filter.maxPrice}
                    onChange={handleInputChange}
                    className="w-full bg-brand-dark/50 text-white border border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red"
                  />
                </div>
              </div>

              <button 
                onClick={onSearch}
                className="w-full bg-white text-brand-dark font-bold py-4 rounded-xl hover:bg-gray-100 transition-all mt-4 flex justify-center items-center gap-2 shadow-lg"
              >
                <Search size={20} />
                Buscar Vehículos
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decor/Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-brand-red rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;