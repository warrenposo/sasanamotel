
import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import BookingForm from '@/components/BookingForm';

const Book = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-sasana-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Book Your Stay" 
            subtitle="Reserve your room at Sasana Guest House and experience our warm hospitality."
            centered
          />
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-2xl font-bold text-sasana-800 mb-6">
                Booking Information
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-sasana-800 mb-3">
                    Why Book Directly With Us?
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-sasana-600 mr-2"></div>
                      <span>Best rate guarantee</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-sasana-600 mr-2"></div>
                      <span>Flexible cancellation policy</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-sasana-600 mr-2"></div>
                      <span>No booking fees</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-sasana-600 mr-2"></div>
                      <span>Special requests handled personally</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-serif text-xl font-semibold text-sasana-800 mb-3">
                    Room Rates
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Our room rates start from $21 per night, depending on the room type and season.
                  </p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b border-sasana-100">
                      <span className="font-medium">Double Room</span>
                      <span className="font-medium text-sasana-800">$45/night</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-sasana-100">
                      <span className="font-medium">Twin Room</span>
                      <span className="font-medium text-sasana-800">$55/night</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-sasana-100">
                      <span className="font-medium">Family Room</span>
                      <span className="font-medium text-sasana-800">$75/night</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-serif text-xl font-semibold text-sasana-800 mb-3">
                    Policies
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-sasana-600 mr-2 mt-2"></div>
                      <span>
                        <span className="font-medium">Check-in:</span> From 12:00 PM
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-sasana-600 mr-2 mt-2"></div>
                      <span>
                        <span className="font-medium">Check-out:</span> Until 11:00 AM
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-sasana-600 mr-2 mt-2"></div>
                      <span>
                        <span className="font-medium">Children:</span> Children of any age are allowed. Children up to and including 6 years old stay for free when using an existing bed.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-sasana-600 mr-2 mt-2"></div>
                      <span>
                        <span className="font-medium">Pets:</span> Pets are not allowed.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-sasana-600 mr-2 mt-2"></div>
                      <span>
                        <span className="font-medium">Payments:</span> We accept Visa, Mastercard, and UnionPay credit cards.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <BookingForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Book;
