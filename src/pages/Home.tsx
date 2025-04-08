import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Wifi, Coffee, Utensils, Car, Calendar, Star, PhoneCall, Users, Ruler } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import AmenityCard from '@/components/AmenityCard';
import RoomCard from '@/components/RoomCard';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import homeImage from '@/Assets/home.png'; // Import the local image
import deluxeDoubleBathImage from '../Assets/Deluxe Double Room with Bath (4)/1.png';
import deluxeDoubleTwinImage from '../Assets/Deluxe double or twin room (7)/4.png';
import deluxeDoubleRoomImage from '../Assets/Deluxe Double Room (7)/3.png';
import deluxeDoubleShowerImage from '../Assets/Deluxe Double Room with shower(6)/3.png';
import budgetDoubleRoomImage from '../Assets/Budget Double Room (9)/8.png';



// Sample room data - updated featured rooms
const featuredRooms = [
  {
    id: 'deluxe-double-bath',
    name: 'Deluxe Double Room with Bath',
    type: 'Double Room',
    price: 45,
    image: deluxeDoubleBathImage,
    capacity: 2,
    features: ['Garden View', 'Free WiFi', 'Bath'],
    size: '16 m²',
    available: 4
  },
  {
    id: 'deluxe-double-twin',
    name: 'Deluxe Double or Twin Room',
    type: 'Double/Twin Room',
    price: 55,
    image: deluxeDoubleTwinImage,
    capacity: 4,
    features: ['Garden View', 'Soundproofing', 'Extra Space'],
    size: '24 m²',
    available: 7
  },
];

// Sample testimonials
const testimonials = [
  {
    id: 1,
    name: 'Dennis Mungai',
    location: 'Kenya',
    comment: "This place is like a second home, one I'll fondly miss. We woke up in the morning to a clean car, an amazing breakfast and great company. The rooms feature individually themed decor, plush beddings, an excellent shower and working WiFi.",
    rating: 5
  },
  {
    id: 2,
    name: 'Rose',
    location: 'Kenya',
    comment: "I loved the breakfast, and the room was beautiful. Naliaka was wonderful and hospitable, making the stay even more enjoyable and homely.",
    rating: 5
  },
  {
    id: 3,
    name: 'Skyler',
    location: 'South Africa',
    comment: "The owners were super friendly and welcoming! They really are a lovely couple. The rooms have been decorated with a lot of thought and effort, each one with the theme of a different country. Definitely unique.",
    rating: 4
  },
  {
    id: 4,
    name: 'Sara',
    location: 'Pseudo-Accents',
    comment: "The homey collections, lush flower beds and vibrant wallpaper made the place really cozy. The security arrangements were reassuring. Easily accessible and within reach of shopping and entertainment amenities.",
    rating: 4
  },
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-pattern relative py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-sasana-900 mb-4">
              Welcome to <span className="gradient-text">Sasana</span> Guest House
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              A tranquil retreat in Bungoma offering comfort, hospitality, and a touch of home away from home.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-sasana-600 hover:bg-sasana-700">
                <Link to="/book">Book Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/rooms">Explore Rooms</Link>
              </Button>
            </div>
            
            <div className="flex items-center mt-8">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-sage-300 flex items-center justify-center">
                    <Star className="h-5 w-5 text-yellow-600" />
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <p className="font-semibold text-sasana-800">9.3/10 Rating</p>
                <p className="text-sm text-muted-foreground">From our happy guests</p>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <img 
              src={homeImage} // Updated to use local image
              alt="Sasana Guest House" 
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 p-4 rounded-lg backdrop-blur-sm">
              <p className="font-serif font-semibold text-sasana-800">
                Located in Kanduyi, just 3km from Bungoma town center
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the component remains the same */}
      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="About Sasana Guest House" 
            subtitle="Experience the warm hospitality and comfort that Sasana Guest House has to offer in the beautiful town of Bungoma."
            centered
          />
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-muted-foreground mb-6">
                Sasana Guest House is situated off Bungoma - Mumias road, next to King Jesus Faith Church in Kanduyi, Bungoma, just 3km from the town center. Our guest house offers a peaceful retreat with beautifully decorated rooms, each featuring unique themes inspired by different cities around the world.
              </p>
              <p className="text-muted-foreground mb-6">
                The property is well-maintained with lush gardens and a tranquil atmosphere, perfect for both leisure and business travelers. We pride ourselves on providing exceptional service, delicious breakfast, and all the comforts of home.
              </p>
              <p className="text-muted-foreground">
                With soundproofed rooms, garden views, and thoughtful amenities, we ensure a comfortable and memorable stay for all our guests.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
            <img 
  src={deluxeDoubleBathImage}
  alt="Deluxe Double Room with Bath"
  className="rounded-lg h-48 w-full object-cover"
/>
<img 
  src={deluxeDoubleRoomImage} 
  alt="Deluxe Double Room" 
  className="rounded-lg h-48 w-full object-cover"
/>
<img 
  src={budgetDoubleRoomImage}
  alt="Budget Double Room" 
  className="rounded-lg h-48 w-full object-cover"
/>
<img 
  src={deluxeDoubleShowerImage}
  alt="Deluxe Double Room with Shower" 
  className="rounded-lg h-48 w-full object-cover"
/>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 bg-sage-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Amenities" 
            subtitle="We offer a range of services and amenities to make your stay comfortable and convenient."
            centered
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AmenityCard 
              icon={Wifi}
              title="Free WiFi"
              description="High-speed internet available throughout the property for all guests."
            />
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
              icon={PhoneCall}
              title="Airport Shuttle"
              description="Transportation services to and from nearby airports for an additional fee."
            />
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link to="/amenities">View All Amenities</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Featured Rooms" 
            subtitle="Experience comfort and style in our thoughtfully decorated rooms, each with its own unique character."
            centered
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRooms.map((room) => (
              <RoomCard key={room.id} {...room} />
            ))}
            
            <div className="flex flex-col items-center justify-center p-8 border border-dashed border-sasana-200 rounded-lg bg-sage-50/50">
              <h3 className="font-serif text-xl font-semibold text-sasana-800 mb-3">Discover More Rooms</h3>
              <p className="text-center text-muted-foreground mb-6">
                Explore all our uniquely themed rooms and find your perfect stay.
              </p>
              <Button asChild className="bg-sasana-600 hover:bg-sasana-700">
                <Link to="/rooms">View All Rooms</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-sage-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="What Our Guests Say" 
            subtitle="Don't just take our word for it - hear from our satisfied guests."
            centered
          />
          
          <div className="max-w-4xl mx-auto">
            <TestimonialCarousel testimonials={testimonials} />
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link to="/reviews">Read All Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sasana-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Sasana Guest House?
          </h2>
          <p className="text-lg text-sasana-100 max-w-2xl mx-auto mb-8">
            Book your stay now and enjoy our warm hospitality, comfortable accommodations, and delightful breakfast.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-sasana-900 hover:bg-sasana-100">
              <Link to="/book">Book Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;