
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Users, Wifi, Tv, CoffeeIcon, BedDouble, Ruler, User } from 'lucide-react';

interface RoomCardProps {
  id: string;
  name: string;
  type: string;
  price: number;
  image: string;
  capacity: number;
  features: string[];
  size?: string;
  available?: number;
}

const RoomCard = ({ id, name, type, price, image, capacity, features, size, available }: RoomCardProps) => {
  return (
    <div className="border border-sasana-100 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-all">
      <div className="relative h-60 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/90 text-sasana-800 px-3 py-1 rounded-full text-sm font-semibold">
          ${price}/night
        </div>
        {available && available < 5 && (
          <div className="absolute top-3 left-3 bg-red-500/90 text-white px-3 py-1 rounded-full text-xs font-semibold">
            Only {available} rooms left!
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold text-sasana-800">{name}</h3>
        <p className="text-sm text-muted-foreground mb-2">{type}</p>
        
        <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-sasana-700">
          <div className="flex items-center">
            {capacity === 1 ? (
              <User size={16} className="mr-1" />
            ) : (
              <Users size={16} className="mr-1" />
            )}
            <span>{capacity} {capacity === 1 ? 'Guest' : 'Guests'}</span>
          </div>
          
          {size && (
            <div className="flex items-center">
              <Ruler size={16} className="mr-1" />
              <span>{size}</span>
            </div>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-sage-50 text-sage-800 text-xs px-3 py-1 rounded-full">
              {feature}
            </div>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <Link to={`/rooms/${id}`} className="text-sasana-600 hover:text-sasana-800 font-medium text-sm">
            View Details
          </Link>
          <Button asChild className="bg-sasana-600 hover:bg-sasana-700">
            <Link to={`/book?room=${id}`}>Book Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
