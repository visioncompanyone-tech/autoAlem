import React from 'react';
import CarCard from './CarCard';
import { Car } from '../types';

interface FeaturedSectionProps {
  cars: Car[];
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({ cars }) => {
  return (
    <section id="vehicles" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-red font-bold text-sm tracking-widest uppercase mb-3">Inventario Exclusivo</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-brand-dark mb-6">Nuestros Destacados</h3>
          <div className="w-24 h-1.5 bg-brand-red mx-auto rounded-full"></div>
        </div>

        {cars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cars.map(car => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100">
            <p className="text-gray-500 text-xl">No se encontraron vehículos con esos criterios.</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-4 text-brand-red font-bold hover:underline"
            >
              Ver todos los vehículos
            </button>
          </div>
        )}
        
        <div className="mt-16 text-center">
          <button className="px-8 py-3 border-2 border-brand-dark text-brand-dark font-bold rounded-xl hover:bg-brand-dark hover:text-white transition-all">
            Ver Inventario Completo
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;