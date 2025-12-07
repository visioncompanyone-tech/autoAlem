import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedSection from './components/FeaturedSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import { CAR_DATA } from './constants';
import { FilterState } from './types';

const App: React.FC = () => {
  const [filter, setFilter] = useState<FilterState>({
    make: '',
    minYear: '',
    maxPrice: ''
  });

  const [activeFilter, setActiveFilter] = useState<FilterState>({
    make: '',
    minYear: '',
    maxPrice: ''
  });

  const handleSearch = () => {
    setActiveFilter({ ...filter });
    const section = document.getElementById('vehicles');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredCars = useMemo(() => {
    return CAR_DATA.filter(car => {
      const matchMake = activeFilter.make ? car.make === activeFilter.make : true;
      const matchYear = activeFilter.minYear ? car.year >= parseInt(activeFilter.minYear) : true;
      const matchPrice = activeFilter.maxPrice ? car.price <= parseInt(activeFilter.maxPrice) : true;
      return matchMake && matchYear && matchPrice;
    });
  }, [activeFilter]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero 
          filter={filter} 
          setFilter={setFilter} 
          onSearch={handleSearch} 
        />
        <FeaturedSection cars={filteredCars} />
        <div id="sell" className="bg-brand-red py-16 px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
             <h2 className="text-3xl font-bold mb-4">¿Querés vender tu auto?</h2>
             <p className="text-lg mb-8 opacity-90">Compramos tu unidad al mejor precio del mercado. Cotización inmediata.</p>
             <button className="bg-white text-brand-red px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">
               Solicitar Cotización
             </button>
          </div>
        </div>
        <ContactSection />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;