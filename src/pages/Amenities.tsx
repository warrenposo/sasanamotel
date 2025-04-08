
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/SectionHeading';
import AmenityCard from '@/components/AmenityCard';
import { 
  Wifi, Coffee, Utensils, Car, Calendar, PhoneCall, 
  Tv, Salad, ShowerHead, Flame, Truck, Lock, 
  Scissors, Heart, Clock, Users
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Amenities = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-sasana-100 py-10 md:py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Amenities" 
            subtitle="We offer a range of services and amenities to make your stay comfortable and convenient."
            centered
          />
        </div>
      </section>

      {/* General Amenities */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="General Amenities" 
            subtitle="Enjoy these facilities during your stay at Sasana Guest House."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            <AmenityCard 
              icon={Wifi}
              title="Free WiFi"
              description="High-speed internet available throughout the property for all guests."
            />
            <AmenityCard 
              icon={Car}
              title="Free Parking"
              description="Secure on-site parking available for all guests at no additional cost."
            />
            <AmenityCard 
              icon={Calendar}
              title="24-Hour Reception"
              description="Our friendly staff is available around the clock to assist with any needs."
            />
            <AmenityCard 
              icon={Tv}
              title="Shared Lounge/TV Area"
              description="A comfortable common area for relaxation and entertainment."
            />
            <AmenityCard 
              icon={Users}
              title="Garden"
              description="Lush green spaces for relaxation and outdoor dining."
            />
            <AmenityCard 
              icon={Lock}
              title="24-hour Security"
              description="Round-the-clock security measures for your peace of mind."
            />
          </div>
        </div>
      </section>

      {/* Food & Drink */}
      <section className="py-10 md:py-16 bg-sage-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Food & Drink" 
            subtitle="Delight your taste buds with our food and beverage offerings."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            <AmenityCard 
              icon={Coffee}
              title="Delicious Breakfast"
              description="Start your day with our complimentary breakfast featuring local Kenyan tea and fresh ingredients."
            />
            <AmenityCard 
              icon={Utensils}
              title="Special Diets"
              description="We cater to special dietary requirements upon request."
            />
            <AmenityCard 
              icon={Flame}
              title="BBQ Facilities"
              description="Enjoy outdoor cooking and dining with our barbecue facilities."
            />
            <AmenityCard 
              icon={Salad}
              title="Kid-friendly Buffet"
              description="Special meal options designed for our younger guests."
            />
            <AmenityCard 
              icon={Utensils}
              title="Fresh Fruits"
              description="Seasonal fruits are regularly available for our guests."
            />
          </div>
        </div>
      </section>

      {/* Wellness & Spa */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Wellness & Beauty Services" 
            subtitle="Pamper yourself with our range of wellness and beauty treatments."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            <AmenityCard 
              icon={Scissors}
              title="Beauty Services"
              description="Professional waxing, make-up, and facial treatments available on request."
            />
            <AmenityCard 
              icon={Heart}
              title="Body Treatments"
              description="Enjoy body scrubs, wraps, and light therapy for ultimate relaxation."
            />
            <AmenityCard 
              icon={ShowerHead}
              title="Spa Facilities"
              description="Our spa offers a tranquil environment for various treatments."
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-10 md:py-16 bg-sage-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Additional Services" 
            subtitle="We offer a variety of services to enhance your stay."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            <AmenityCard 
              icon={PhoneCall}
              title="Airport Shuttle"
              description="Transportation services to and from nearby airports for an additional fee."
            />
            <AmenityCard 
              icon={Car}
              title="Car Hire"
              description="Arrange car rental services through our reception desk."
            />
            <AmenityCard 
              icon={Truck}
              title="Laundry Service"
              description="Professional cleaning and ironing services available for guests."
            />
            <AmenityCard 
              icon={Calendar}
              title="Concierge Service"
              description="Let our knowledgeable staff assist with planning your activities."
            />
            <AmenityCard 
              icon={Clock}
              title="Daily Housekeeping"
              description="Regular cleaning service to ensure your room remains pristine."
            />
            <AmenityCard 
              icon={Calendar}
              title="Business Facilities"
              description="Fax and photocopying services available for business travelers."
            />
          </div>

          <div className="text-center">
            <Button asChild className={`bg-sasana-600 hover:bg-sasana-700 ${isMobile ? 'w-full' : ''}`}>
              <Link to="/book">Book Your Stay Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Amenities;
