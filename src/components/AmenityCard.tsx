
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AmenityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const AmenityCard = ({ icon: Icon, title, description, className }: AmenityCardProps) => {
  return (
    <div className={cn(
      "p-4 md:p-6 rounded-lg border border-sasana-100 bg-white shadow-sm hover:shadow-md transition-shadow h-full",
      className
    )}>
      <div className="bg-sage-100 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-3 md:mb-4">
        <Icon className="text-sasana-600" size={20} />
      </div>
      <h3 className="font-serif text-base md:text-lg font-semibold text-sasana-800 mb-2">{title}</h3>
      <p className="text-sm md:text-base text-muted-foreground">{description}</p>
    </div>
  );
};

export default AmenityCard;
