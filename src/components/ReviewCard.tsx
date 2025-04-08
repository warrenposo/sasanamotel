
import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ReviewCardProps {
  name: string;
  location: string;
  date: string;
  rating: number;
  comment: string;
  className?: string;
}

const ReviewCard = ({ name, location, date, rating, comment, className }: ReviewCardProps) => {
  return (
    <div className={cn(
      "bg-white border border-sasana-100 p-6 rounded-lg shadow-sm",
      className
    )}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="font-semibold text-sasana-800">{name}</h4>
          <p className="text-sm text-muted-foreground">{location} • {date}</p>
        </div>
        <div className="flex items-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className={i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} 
            />
          ))}
        </div>
      </div>
      <p className="text-muted-foreground">{comment}</p>
    </div>
  );
};

export default ReviewCard;
