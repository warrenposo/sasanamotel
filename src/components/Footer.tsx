
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sage-50 border-t border-sage-200">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="inline-block">
              <span className="font-serif text-2xl font-bold text-sasana-800">Sasana</span>
              <span className="font-serif text-lg ml-1 text-sage-700">Guest House</span>
            </Link>
            <p className="mt-4 text-sage-800 max-w-xs">
              A tranquil retreat in Bungoma offering comfort, hospitality, and a touch of home away from home.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-sage-600 hover:text-sasana-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-sage-600 hover:text-sasana-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-sage-600 hover:text-sasana-600 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-sasana-800 mb-4">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sage-800 hover:text-sasana-600 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/rooms" className="text-sage-800 hover:text-sasana-600 transition-colors">Our Rooms</Link>
              </li>
              <li>
                <Link to="/amenities" className="text-sage-800 hover:text-sasana-600 transition-colors">Amenities</Link>
              </li>
              <li>
                <Link to="/reviews" className="text-sage-800 hover:text-sasana-600 transition-colors">Guest Reviews</Link>
              </li>
              <li>
                <Link to="/book" className="text-sage-800 hover:text-sasana-600 transition-colors">Book Now</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-sasana-800 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-sasana-600 mt-1 flex-shrink-0" />
                <span className="text-sage-800">
                  Off Bungoma - Mumias road<br />
                  Next to King Jesus Faith Church<br />
                  Kanduyi, Bungoma, Kenya
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-sasana-600 flex-shrink-0" />
                <a href="tel:+254700000000" className="text-sage-800 hover:text-sasana-600 transition-colors">
                  +254 700 000 000
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-sasana-600 flex-shrink-0" />
                <a href="mailto:info@sasanaguesthouse.com" className="text-sage-800 hover:text-sasana-600 transition-colors">
                  info@sasanaguesthouse.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-sasana-800 mb-4">Opening Hours</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Clock size={18} className="mr-2 text-sasana-600 flex-shrink-0" />
                <div>
                  <p className="text-sage-800">Check-in:</p>
                  <p className="font-medium text-sage-900">From 12:00 PM</p>
                </div>
              </li>
              <li className="flex items-center">
                <Clock size={18} className="mr-2 text-sasana-600 flex-shrink-0" />
                <div>
                  <p className="text-sage-800">Check-out:</p>
                  <p className="font-medium text-sage-900">Until 11:00 AM</p>
                </div>
              </li>
              <li className="flex items-center">
                <Clock size={18} className="mr-2 text-sasana-600 flex-shrink-0" />
                <div>
                  <p className="text-sage-800">Reception:</p>
                  <p className="font-medium text-sage-900">24/7 Service</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sage-200 mt-12 pt-6 text-center text-sage-600">
          <p>&copy; {new Date().getFullYear()} Sasana Guest House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
