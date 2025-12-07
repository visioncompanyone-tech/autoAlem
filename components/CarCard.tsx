import React, { useState } from 'react';
import { Calendar, Gauge, Fuel } from 'lucide-react';
import { Car } from '../types';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const [imgSrc, setImgSrc] = useState(car.image);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(value);
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-56 overflow-hidden bg-gray-200">
        <img 
          src={imgSrc} 
          alt={`${car.make} ${car.model}`} 
          onError={() => setImgSrc('https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800')}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-brand-dark/80 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          {car.category}
        </div>
        <div className="absolute top-4 right-4 bg-white/90 text-brand-dark text-xs font-bold px-2 py-1 rounded-md shadow-sm">
           {car.year}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-sm font-semibold text-brand-red mb-1">{car.make}</h3>
        <h2 className="text-xl font-bold text-gray-900 mb-3 truncate" title={car.model}>{car.model}</h2>
        
        <div className="flex items-center justify-between text-gray-500 text-sm mb-6 border-b border-gray-100 pb-4">
          <div className="flex items-center gap-1">
             <Gauge size={14} />
             <span>{car.mileage.toLocaleString()} km</span>
          </div>
          <div className="flex items-center gap-1">
             <Fuel size={14} />
             <span>{car.fuel}</span>
          </div>
          <div className="flex items-center gap-1">
             <div className="text-xs border px-1 rounded">{car.transmission.substring(0,4)}</div>
          </div>
        </div>
        
        <div className="flex items-end justify-between">
          <div>
            <span className="text-xs text-gray-400 block mb-1">Precio Contado</span>
            <span className="text-xl font-bold text-gray-900">{formatCurrency(car.price)}</span>
          </div>
          <button className="bg-brand-dark text-white p-3 rounded-xl hover:bg-brand-red transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;