
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  centered = false,
  className
}: SectionHeadingProps) => {
  return (
    <div className={cn(
      "mb-10",
      centered && "text-center",
      className
    )}>
      <h2 className="font-serif text-3xl md:text-4xl font-bold gradient-text mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-3xl mt-3">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
