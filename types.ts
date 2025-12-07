export interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  image: string;
  category: 'SUV' | 'Sedan' | 'Truck' | 'Hatchback';
  mileage: number;
  fuel: string;
  transmission: 'Automatic' | 'Manual' | 'CVT';
}

export interface FilterState {
  make: string;
  minYear: string;
  maxPrice: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}