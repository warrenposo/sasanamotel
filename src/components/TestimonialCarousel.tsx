
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  comment: string;
  rating: number;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  className?: string;
}

const TestimonialCarousel = ({ testimonials, className }: TestimonialCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  if (testimonials.length === 0) return null;

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className={cn("bg-white rounded-xl shadow-md overflow-hidden", className)}>
      <div className="relative p-8 md:p-12">
        <Quote className="absolute text-sage-200 h-24 w-24 -top-6 -left-6 opacity-30" />
        
        <div className="relative">
          <p className="text-lg md:text-xl text-gray-700 italic mb-6">
            "{currentTestimonial.comment}"
          </p>
          
          <div className="mt-6">
            <p className="font-serif font-semibold text-sasana-800">
              {currentTestimonial.name}
            </p>
            <p className="text-sm text-muted-foreground">
              {currentTestimonial.location}
            </p>
          </div>
          
          <div className="flex justify-between items-center mt-8">
            <div className="flex items-center space-x-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i < currentTestimonial.rating 
                      ? "bg-sasana-500" 
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            
            <div className="flex space-x-2">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"
                aria-label="Next testimonial"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
