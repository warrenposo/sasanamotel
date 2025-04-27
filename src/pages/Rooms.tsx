import React from 'react';
import SectionHeading from '../components/SectionHeading';
import RoomCard from '../components/RoomCard';
import { BedDouble, User, Users, Bath, Droplet } from 'lucide-react';
import aberdeen from '../../public/images/Aberdeer/Aberdeer3.png';
import agra from '../../public/images/Agra/Agra2.png';
import bangkok from '../../public/images/Bangkok/Bangkok3.png';
import brae from'../../public/images/Brae/brae4.png';
import london from '../../public/images/London/London4.png';
import lquitos from '../../public/images/Lquitos/Iquitos2.png';
import magog from '../../public/images/Magog/magog3.png';
import mahe from '../../public/images/Mahe/Mahe3.png';
import paris from '../../public/images/Paris/p5.png';
import sandbanks from '../../public/images/Sandbanks/Sandbanks1.png';
import sanfrancisco from '../../public/images/Sanfrancisco/Sanfrancisco2.png';
import stonetown from '../../public/images/Stonetown/Stonetown2.png';
import tokyo from '../../public/images/Tokyo/Tokyo4.png';
import vinson from'../../public/images/Vinson/Vinson4.png';
import zurich from'../../public/images/Zurich/Zurich2.png';
import limpopo from '../../public/images/Limpopo/Limpopo2.png';
import seoul from '../../public/images/Seoul/Seoul3.png';
import { Link } from 'react-router-dom';

const rooms = [
  {
    id: 'aberdeen',
    name: 'Aberdeen',
    type: 'Aberdeen',
    price: 2500,
    image: aberdeen,
    capacity: 2,
    features: ['Garden View', 'Free WiFi', 'Bath'],
    size: '16 m²',
    available: 1
  },
  {
    id: 'agra',
    name: 'Agra',
    type: 'Agra',
    price: 2500,
    image: agra,
    capacity: 2,
    features: ['Garden View', 'Soundproofing', 'Extra Space'],
    size: '16 m²',
    available: 1
  },
  {
    id: 'bangkok',
    name: 'Bangkok',
    type: 'Bangkok',
    price: 2500,
    image: bangkok,
    capacity: 2,
    features: ['Garden View', 'Flat-screen TV', 'Free WiFi'],
    size: '16 m²',
    available: 1
  },
  {
    id: 'brae',
    name: 'Brae',
    type: 'Brae',
    price: 2500,
    image: brae,
    capacity: 2,
    features: ['Garden View', 'Free WiFi', 'Spacious'],
    size: '16 m²',
    available: 1
  },
  {
    id: 'london',
    name: 'London',
    type: 'London',
    price: 2500,
    image: london,
    capacity: 2,
    features: ['Free WiFi', 'Breakfast Included'],
    size: '16 m²',
    available: 1
  },
  {
    id: 'lquitos',
    name: 'Iquitos',
    type: 'Iquitos',
    price: 2500,
    image: lquitos,
    capacity: 1,
    features: ['Garden View', 'Free WiFi', 'Cozy'],
    size: '16 m²',
    available: 1
  },
  {
    id: 'magog',
    name: 'Magog',
    type: 'Magog',
    price: 2500,
    image: magog,
    capacity: 2,
    features: ['Garden View', 'Free WiFi', 'Shower'],
    size: '16 m²',
    available: 1
  },
  {
    id: 'mahe',
    name: 'Mahe',
    type: 'Mahe',
    price: 4000,
    image: mahe,
    capacity: 4,
    features: ['Garden View', 'Free WiFi'],
    size: '24 m²',
    available: 1
  },
  {
    id: 'paris',
    name: 'Paris',
    type: 'Paris',
    price: 2500,
    image: paris,
    capacity: 2,
    features: ['Garden View', 'Free WiFi'],
    size: '16 m²',
    available: 1
  },
  {
    id: 'sandbanks',
    name: 'Sandbanks',
    type: 'Sandbanks',
    price: 2500,
    image: sandbanks,
    capacity: 1,
    features: ['Garden View', 'Free WiFi'],
    size: '10 m²',
    available: 1
  },
  {
    id: 'sanfrancisco',
    name: 'Sanfrancisco',
    type: 'Sanfrancisco',
    price: 2500,
    image: sanfrancisco,
    capacity: 2,
    features: ['Garden View', 'Free WiFi'],
    size: '16 m²',
    available: 1
  },
  {
    id: 'stonetown',
    name: 'Stonetown',
    type: 'Stonetown',
    price: 2500,
    image: stonetown,
    capacity: 2,
    features: ['Garden View', 'Free WiFi'],
    size: '16 m²',
    available: 1
  },
  {
    id: 'tokyo',
    name: 'Tokyo',
    type: 'Tokyo',
    price: 2500,
    image: tokyo,
    capacity: 2,
    features: ['Garden View', 'Free WiFi'],
    size: '16 m²',
    available: 1
  },
  {
    id: 'vinson',
    name: 'Vinson',
    type: 'Vinson',
    price: 2500,
    image: vinson,
    capacity: 2,
    features: ['Garden View', 'Free WiFi'],
    size: '16 m²',
    available: 1
  },
  {
    id: 'limpopo',
    name: 'Limpopo',
    type: 'Limpopo',
    price: 2500,
    image: limpopo,
    capacity: 2,
    features: ['Garden View', 'Free WiFi'],
    size: '16 m²',
    available: 1
  },
  {
    id: 'seoul',
    name: 'Seoul',
    type: 'Seoul',
    price: 2500,
    image: seoul,
    capacity: 2,
    features: ['Garden View', 'Free WiFi'],
    size: '16 m²',
    available: 1
  },
  {
    id: 'zurich',
    name: 'Zurich',
    type: 'Zurich',
    price: 2500,
    image: zurich,
    capacity: 2,
    features: ['Garden View', 'Free WiFi'],
    size: '16 m²',
    available: 1
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
