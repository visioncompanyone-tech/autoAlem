import { Car } from './types';

export const CAR_DATA: Car[] = [
  {
    id: 1,
    make: 'Nissan',
    model: 'Kicks Sense 1.6',
    year: 2021,
    price: 26000000,
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2eb203?auto=format&fit=crop&q=80&w=800', // Red SUV
    category: 'SUV',
    mileage: 45000,
    fuel: 'Nafta',
    transmission: 'Manual'
  },
  {
    id: 2,
    make: 'Fiat',
    model: 'Toro 2.0 TDI Volcano',
    year: 2019,
    price: 29700000,
    image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&q=80&w=800', // Pickup Truck
    category: 'Truck',
    mileage: 62000,
    fuel: 'Diesel',
    transmission: 'Automatic'
  },
  {
    id: 3,
    make: 'Ford',
    model: 'Maverick Lariat Hybrid',
    year: 2024,
    price: 50000000,
    image: 'https://images.unsplash.com/photo-1566008885218-90abf9200ddb?auto=format&fit=crop&q=80&w=800', // Modern Truck
    category: 'Truck',
    mileage: 0,
    fuel: 'Hybrid',
    transmission: 'Automatic'
  },
  {
    id: 4,
    make: 'Toyota',
    model: 'Corolla Xei 1.8 CVT',
    year: 2018,
    price: 21900000,
    image: 'https://images.unsplash.com/photo-1623869675781-80aa31012a5a?auto=format&fit=crop&q=80&w=800', // Sedan
    category: 'Sedan',
    mileage: 85000,
    fuel: 'Nafta',
    transmission: 'CVT'
  },
  {
    id: 5,
    make: 'Ford',
    model: 'Ka 1.0 Fly Viral',
    year: 2013,
    price: 10500000,
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=800', // Hatchback
    category: 'Hatchback',
    mileage: 110000,
    fuel: 'Nafta',
    transmission: 'Manual'
  },
  {
    id: 6,
    make: 'Jeep',
    model: 'Compass Longitude',
    year: 2017,
    price: 29000000,
    image: 'https://images.unsplash.com/photo-1612822188613-26bc7d5272b2?auto=format&fit=crop&q=80&w=800', // Jeep SUV
    category: 'SUV',
    mileage: 78000,
    fuel: 'Nafta',
    transmission: 'Automatic'
  },
    {
    id: 7,
    make: 'Volkswagen',
    model: 'Polo Comfortline',
    year: 2019,
    price: 22000000,
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800', // VW Hatch
    category: 'Hatchback',
    mileage: 55000,
    fuel: 'Nafta',
    transmission: 'Manual'
  },
  {
    id: 8,
    make: 'Fiat',
    model: 'Strada Adventure',
    year: 2013,
    price: 13800000,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800', // Adventure/Utility
    category: 'Truck',
    mileage: 125000,
    fuel: 'GNC',
    transmission: 'Manual'
  },
  {
    id: 9,
    make: 'Chevrolet',
    model: 'Cruze LTZ',
    year: 2020,
    price: 24500000,
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800', // Sedan
    category: 'Sedan',
    mileage: 42000,
    fuel: 'Nafta',
    transmission: 'Automatic'
  },
  {
    id: 10,
    make: 'Ford',
    model: 'Ranger Raptor',
    year: 2023,
    price: 65000000,
    image: 'https://images.unsplash.com/photo-1605893477799-b99e3b8b93fe?auto=format&fit=crop&q=80&w=800', // Big Truck
    category: 'Truck',
    mileage: 15000,
    fuel: 'Diesel',
    transmission: 'Automatic'
  }
];

export const NAV_LINKS = [
  { label: 'Vehículos', href: '#vehicles' },
  { label: 'Vende tu Auto', href: '#sell' },
  { label: 'Financiación', href: '#finance' },
  { label: 'Contacto', href: '#contact' },
];

export const MAKES = ['Todas', ...Array.from(new Set(CAR_DATA.map(c => c.make)))];