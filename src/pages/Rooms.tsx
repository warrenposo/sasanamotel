import React from 'react';
import SectionHeading from '../components/SectionHeading';
import RoomCard from '../components/RoomCard';
import { BedDouble, User, Users, Bath, Droplet } from 'lucide-react';
import aberdeer from '@/assets/Images/Aberdeer/Aberdeer3.jpg';
import agra from '@/assets/Images/Agra/Agra4.jpg';
import bangkok from '@/assets/Images/Bangkok/Bangkok3.jpg';
import brae from '@/assets/Images/Brae/brae7.jpg';
import london from '@/assets/Images/London/London5.jpg';
import lquitos from '@/assets/Images/Lquitos/Iquitos2.jpg';
import magog from '@/assets/Images/Magog/magog9.jpg';
import mahe from '@/assets/Images/Mahe/Mahe3.jpg';
import paris from '@/assets/Images/Paris/p11.jpg';
import sandbanks from '@/assets/Images/Sandbanks/Sandbanks1.jpg';
import sanfrancisco from '@/assets/Images/Sanfrancisco/Sanfrancisco4.jpg';
import stonetown from '@/assets/Images/Stonetown/Stonetown9.jpg';
import tokyo from '@/assets/Images/Tokyo/Tokyo4.jpg';
import vinson from '@/assets/Images/Vinson/Vinson4.jpg';
import zurich from '@/assets/Images/Zurich/Zurich2.jpg';
import { Link } from 'react-router-dom';

const rooms = [
  {
    id: 'aberdeer',
    name: 'Aberdeer',
    type: 'Aberdeer',
    price: 2500,
    image: aberdeer,  // Using local image instead of URL
    capacity: 2,
    features: ['Garden View', 'Free WiFi', 'Bath'],
    size: '16 m²',
    available: 4
  },
  {
    id: 'agra',
    name: 'Agra',
    type: 'Agra',
    price: 2500,
    image: agra,  // Using local image instead of URL
    capacity: 4,
    features: ['Garden View', 'Soundproofing', 'Extra Space'],
    size: '24 m²',
    available: 7
  },
  {
    id: 'bangkok',
    name: 'Bangkok',
    type: 'Bangkok',
    price: 2500,
    image: bangkok,  // Using local image instead of URL
    capacity: 2,
    features: ['Garden View', 'Flat-screen TV', 'Free WiFi'],
    size: '16 m²',
    available: 4
  },
  {
    id: 'brae',
    name: 'Brae',
    type: 'Brae',
    price: 2500,
    image: brae,  // Using local image instead of URL
    capacity: 2,
    features: ['Garden View', 'Free WiFi', 'Spacious'],
    size: '25 m²',
    available: 5
  },
  {
    id: 'london',
    name: 'London',
    type: 'London',
    price: 2500,
    image: london,  // Using local image instead of URL
    capacity: 2,
    features: ['Free WiFi', 'Breakfast Included'],
    size: '16 m²',
    available: 6
  },
  {
    id: 'lquitos',
    name: 'Lquitos',
    type: 'Lquitos',
    price: 2500,
    image: lquitos,  // Using local image instead of URL
    capacity: 1,
    features: ['Garden View', 'Free WiFi', 'Cozy'],
    size: '10 m²',
    available: 6
  },
  {
    id: 'magog',
    name: 'Magog',
    type: 'Mahod',
    price: 2500,
    image: magog,  // Using local image
    capacity: 2,
    features: ['Garden View', 'Free WiFi', 'Shower'],
    size: '16 m²',
    available: 6
  },
  {
    id: 'mahe',
    name: 'Mahe',
    type: 'Mahe',
    price: 3500,
    image: mahe,  // Using local image
    capacity: 2,
    features: ['Garden View', 'Free WiFi'],
    size: '16 m²',
    available: 9
  },
  {
    id: 'paris',
    name: 'Paris',
    type: 'Paris',
    price: 2500,
    image: paris,  // Using local image
    capacity: 2,
    features: ['Garden View', 'Free WiFi'],
    size: '16 m²',
    available: 9
  },
  {
    id: 'sandbanks',
    name: 'Sandbanks',
    type: 'Sandbanks',
    price: 2500,
    image: sandbanks,  // Using local image
    capacity: 2,
    features: ['Garden View', 'Free WiFi'],
    size: '16 m²',
    available: 9
  },
  {
    id: 'sanfrancisco',
    name: 'Sanfrancisco',
    type: 'Sanfrancisco',
    price: 2500,
    image: sanfrancisco,  // Using local image
    capacity: 2,
    features: ['Garden View', 'Free WiFi'],
    size: '16 m²',
    available: 9
  },
  {
    id: 'stonetown',
    name: 'Stonetown',
    type: 'Stonetown',
    price: 2500,
    image: stonetown,  // Using local image
    capacity: 2,
    features: ['Garden View', 'Free WiFi'],
    size: '16 m²',
    available: 9
  },
  {
    id: 'tokyo',
    name: 'Tokyo',
    type: 'Tokyo',
    price: 2500,
    image: tokyo,  // Using local image
    capacity: 2,
    features: ['Garden View', 'Free WiFi'],
    size: '16 m²',
    available: 9
  },
  {
    id: 'vinson',
    name: 'Vinson',
    type: 'Vinson',
    price: 2500,
    image: vinson,  // Using local image
    capacity: 2,
    features: ['Garden View', 'Free WiFi'],
    size: '16 m²',
    available: 9
  },
  {
    id: 'zurich',
    name: 'Zurich',
    type: 'Zurich',
    price: 2500,
    image: zurich,  // Using local image
    capacity: 2,
    features: ['Garden View', 'Free WiFi'],
    size: '16 m²',
    available: 9
  },
];

const Rooms = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-sasana-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Rooms" 
            subtitle="Experience comfort and style in our thoughtfully decorated rooms, each with its own unique character inspired by cities around the world."
            centered
          />
          <p className="text-center text-sasana-700 mt-4 font-medium">
            <span className="bg-sasana-200 px-3 py-1 rounded-full text-sm">
              5 people are viewing this property now
            </span>
          </p>
          <p className="text-center text-sasana-600 mt-6">
            Click on "View Details" to see more images and information about each room.
          </p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <div key={room.id} className="room-card">
                <RoomCard {...room} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Information */}
      <section className="py-16 bg-sage-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeading 
              title="Room Information" 
              subtitle="All our rooms come with the following amenities and services."
            />
            
            <div className="bg-white rounded-lg shadow-sm p-8 border border-sasana-100">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-sasana-800 mb-4">Room Amenities</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-sasana-600 mr-2"></div>
                      <span>Hairdryer</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-sasana-600 mr-2"></div>
                      <span>Free Toiletries</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-sasana-600 mr-2"></div>
                      <span>Flat-screen TV</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-sasana-600 mr-2"></div>
                      <span>Outdoor Furniture</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-sasana-600 mr-2"></div>
                      <span>Outdoor Dining Area</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-sasana-600 mr-2"></div>
                      <span>Clothes Rack</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-sasana-600 mr-2"></div>
                      <span>Soundproofing</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-sasana-600 mr-2"></div>
                      <span>Garden View</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-serif text-xl font-semibold text-sasana-800 mb-4">Services Included</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-sasana-600 mr-2"></div>
                      <span>Daily Housekeeping</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-sasana-600 mr-2"></div>
                      <span>Free WiFi</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-sasana-600 mr-2"></div>
                      <span>Breakfast Included</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-sasana-600 mr-2"></div>
                      <span>24-hour Reception</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-sasana-600 mr-2"></div>
                      <span>Free Parking</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-sasana-600 mr-2"></div>
                      <span>Laundry Service (extra charge)</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-sasana-600 mr-2"></div>
                      <span>Airport Shuttle (extra charge)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rooms;
