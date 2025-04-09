
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Users, Ruler, Bath, Wifi, Coffee, Droplet, User } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import deluxeDoubleBath1 from '../assets/deluxedoubleroomwithbath4/1.png';
import deluxeDoubleBath2 from '../assets/deluxedoubleroomwithbath4/2.png';
import deluxeDoubleBath3 from '../assets/deluxedoubleroomwithbath4/3.png';
import deluxeDoubleBath4 from '../Assets/deluxedoubleroomwithbath4/4.png';
import deluxeDoubleTwin1 from '../assets/deluxedoubleortwinroom7/1.png';
import deluxeDoubleTwin2 from '../assets/deluxedoubleortwinroom7/2.png';
import deluxeDoubleTwin3 from '../assets/deluxedoubleortwinroom7/3.png';
import deluxeDoubleTwin4 from '../assets/deluxedoubleortwinroom7/4.png';
import deluxeDoubleTwin5 from '../assets/deluxedoubleortwinroom7/5.png';
import deluxeDoubleTwin6 from '../assets/deluxedoubleortwinroom7/6.png';
import deluxeDoubleTwin7 from '../assets/deluxedoubleortwinroom7/7.png';
import deluxeDoubleStandard1 from '../assets/deluxedoubleroom5/1.png';
import deluxeDoubleStandard2 from '../assets/deluxedoubleroom5/2.png';
import deluxeDoubleStandard3 from '../assets/deluxedoubleroom5/3.png';
import deluxeDoubleStandard4 from '../assets/deluxedoubleroom5/4.png';
import deluxeDoubleStandard5 from '../assets/deluxedoubleroom5/5.png';
import deluxeDoubleLarge1 from '../assets/deluxedoubleroomwithshower6/1.png';
import deluxeDoubleLarge2 from '../assets/deluxedoubleroomwithshower6/2.png';
import deluxeDoubleLarge3 from '../assets/deluxedoubleroomwithshower6/3.png';
import deluxeDoubleLarge4 from '../assets/deluxedoubleroomwithshower6/4.png';
import deluxeDoubleLarge5 from '../assets/deluxedoubleroomwithshower6/5.png';
import deluxeDoubleLarge6 from '../assets/deluxedoubleroomwithshower6/6.png';
import budgetDouble1 from '../assets/budgetdoubleroom9/1.png';
import budgetDouble2 from '../assets/budgetdoubleroom9/2.png';
import budgetDouble3 from '../assets/budgetdoubleroom9/3.png';
import budgetDouble4 from '../assets/budgetdoubleroom9/4.png';
import budgetDouble5 from '../assets/budgetdoubleroom9/5.png';
import budgetDouble6 from '../assets/budgetdoubleroom9/6.png';
import budgetDouble7 from '../assets/budgetdoubleroom9/7.png';
import budgetDouble8 from '../assets/budgetdoubleroom9/8.png';
import budgetDouble9 from '../assets/budgetdoubleroom9/9.png';
import deluxeSingle1 from '../assets/budgetdoubleroom6/1.png';
import deluxeSingle2 from '../assets/budgetdoubleroom6/2.png';
import deluxeSingle3 from '../assets/budgetdoubleroom6/3.png';
import deluxeSingle4 from '../assets/budgetdoubleroom6/4.png';
import deluxeSingle5 from '../assets/budgetdoubleroom6/5.png';
import deluxeSingle6 from '../assets/budgetdoubleroom6/6.png';
import deluxeDoubleShower1 from '../assets/deluxedoubleroom4/1.png';
import deluxeDoubleShower2 from '../assets/deluxedoubleroom4/2.png';
import deluxeDoubleShower3 from '../assets/deluxedoubleroom4/3.png';
import deluxeDoubleShower4 from '../assets/deluxedoubleroom4/4.png';
import premiumBudgetDouble1 from '../assets/deluxedoubleroom7/1.png';
import premiumBudgetDouble2 from '../assets/deluxedoubleroom7/2.png';
import premiumBudgetDouble3 from '../assets/deluxedoubleroom7/3.png';
import premiumBudgetDouble4 from '../assets/deluxedoubleroom7/4.png';
import premiumBudgetDouble5 from '../assets/deluxedoubleroom7/5.png';
import premiumBudgetDouble6 from '../assets/deluxedoubleroom7/6.png';
import premiumBudgetDouble7 from '../assets/deluxedoubleroom7/7.png';

// Room data with multiple images
const roomsData = [
  {
    id: 'deluxe-double-bath',
    name: 'Deluxe Double Room with Bath',
    type: 'Double Room',
    price: 45,
    images: [
      deluxeDoubleBath1,
      deluxeDoubleBath2,
      deluxeDoubleBath3,
      deluxeDoubleBath4,
    ],
    capacity: 2,
    features: ['Garden View', 'Free WiFi', 'Bath'],
    size: '16 m²',
    available: 4,
    description: 'Our Deluxe Double Room with Bath offers a comfortable and elegant space featuring a private bathroom with a bathtub. Perfect for couples or single travelers looking for extra comfort.',
    amenities: ['Free WiFi', 'Flat-screen TV', 'Air conditioning', 'Private bathroom', 'Bath', 'Hairdryer', 'Toiletries', 'Desk', 'Wardrobe']
  },
  {
    id: 'deluxe-double-twin',
    name: 'Deluxe Double or Twin Room',
    type: 'Double/Twin Room',
    price: 55,
    images: [
      deluxeDoubleTwin1,
      deluxeDoubleTwin2,
      deluxeDoubleTwin3,
      deluxeDoubleTwin4,
      deluxeDoubleTwin5,
      deluxeDoubleTwin6,
      deluxeDoubleTwin7,
    ],
    capacity: 4,
    features: ['Garden View', 'Soundproofing', 'Extra Space'],
    size: '24 m²',
    available: 7,
    description: 'Spacious and versatile, our Deluxe Double or Twin Room can be arranged with either a double bed or two separate twin beds to accommodate your preferences. Perfect for couples or friends traveling together.',
    amenities: ['Free WiFi', 'Flat-screen TV', 'Air conditioning', 'Private bathroom', 'Shower', 'Hairdryer', 'Toiletries', 'Desk', 'Wardrobe', 'Extra pillows']
  },
  {
    id: 'deluxe-double-standard',
    name: 'Deluxe Double Room',
    type: 'Double Room',
    price: 50,
    images: [
      deluxeDoubleStandard1,
      deluxeDoubleStandard2,
      deluxeDoubleStandard3,
      deluxeDoubleStandard4,
      deluxeDoubleStandard5,
    ],
    capacity: 2,
    features: ['Garden View', 'Flat-screen TV', 'Free WiFi'],
    size: '16 m²',
    available: 4,
    description: 'Our Deluxe Double Room offers a comfortable queen-sized bed, modern amenities, and a cozy atmosphere. Ideal for couples seeking a relaxing retreat in Bungoma.',
    amenities: ['Free WiFi', 'Flat-screen TV', 'Air conditioning', 'Private bathroom', 'Shower', 'Hairdryer', 'Toiletries', 'Desk', 'Wardrobe']
  },
  {
    id: 'deluxe-double-large',
    name: 'Deluxe Double Room (Large)',
    type: 'Double Room',
    price: 55,
    images: [
      deluxeDoubleLarge1,
      deluxeDoubleLarge2,
      deluxeDoubleLarge3,
      deluxeDoubleLarge4,
      deluxeDoubleLarge5,
      deluxeDoubleLarge6,
    ],
    capacity: 2,
    features: ['Garden View', 'Free WiFi', 'Spacious'],
    size: '25 m²',
    available: 5,
    description: 'Indulge in extra space with our Large Deluxe Double Room. Featuring a spacious layout, this room provides ample room to relax and unwind after a day of exploring Bungoma.',
    amenities: ['Free WiFi', 'Flat-screen TV', 'Air conditioning', 'Private bathroom', 'Shower', 'Hairdryer', 'Toiletries', 'Desk', 'Wardrobe', 'Seating area']
  },
  {
    id: 'budget-double',
    name: 'Budget Double Room',
    type: 'Double Room',
    price: 40,
    images: [
      budgetDouble1,
      budgetDouble2,
      budgetDouble3,
      budgetDouble4,
      budgetDouble5,
      budgetDouble6,
      budgetDouble7,
      budgetDouble8,
      budgetDouble9,
    ],
    capacity: 2,
    features: ['Free WiFi', 'Breakfast Included'],
    size: '16 m²',
    available: 6,
    description: 'Our Budget Double Room offers great value without compromising on comfort. Perfect for travelers looking for affordable accommodation without sacrificing essential amenities.',
    amenities: ['Free WiFi', 'Flat-screen TV', 'Private bathroom', 'Shower', 'Toiletries', 'Desk', 'Wardrobe']
  },
  {
    id: 'deluxe-single',
    name: 'Deluxe Single Room',
    type: 'Single Room',
    price: 35,
    images: [
      deluxeSingle1,
      deluxeSingle2,
      deluxeSingle3,
      deluxeSingle4,
      deluxeSingle5,
      deluxeSingle6,
    ],
    capacity: 1,
    features: ['Garden View', 'Free WiFi', 'Cozy'],
    size: '10 m²',
    available: 6,
    description: 'Designed for solo travelers, our Deluxe Single Room offers a comfortable single bed and all the essential amenities for a pleasant stay. Compact yet cozy, it\'s ideal for business travelers or solo adventurers.',
    amenities: ['Free WiFi', 'Flat-screen TV', 'Air conditioning', 'Private bathroom', 'Shower', 'Hairdryer', 'Toiletries', 'Desk', 'Wardrobe']
  },
  {
    id: 'deluxe-double-shower',
    name: 'Deluxe Double Room with Shower',
    type: 'Double Room',
    price: 45,
    images: [
      deluxeDoubleShower1,
      deluxeDoubleShower2,
      deluxeDoubleShower3,
      deluxeDoubleShower4,
    ],
    capacity: 2,
    features: ['Garden View', 'Free WiFi', 'Shower'],
    size: '16 m²',
    available: 6,
    description: 'Our Deluxe Double Room with Shower features a comfortable double bed and a modern private bathroom with a shower. Enjoy a restful night\'s sleep and all the amenities you need for a pleasant stay.',
    amenities: ['Free WiFi', 'Flat-screen TV', 'Air conditioning', 'Private bathroom', 'Shower', 'Hairdryer', 'Toiletries', 'Desk', 'Wardrobe']
  },
  {
    id: 'budget-double-premium',
    name: 'Premium Budget Double Room',
    type: 'Double Room',
    price: 42,
    images: [
      premiumBudgetDouble1,
      premiumBudgetDouble2,
      premiumBudgetDouble3,
      premiumBudgetDouble4,
      premiumBudgetDouble5,
      premiumBudgetDouble6,
      premiumBudgetDouble7,
    ],
    capacity: 2,
    features: ['Garden View', 'Free WiFi'],
    size: '16 m²',
    available: 9,
    description: 'Enjoy premium comfort at budget-friendly prices with our Premium Budget Double Room. This room offers slightly upgraded amenities compared to our standard budget option while remaining affordable.',
    amenities: ['Free WiFi', 'Flat-screen TV', 'Private bathroom', 'Shower', 'Toiletries', 'Desk', 'Wardrobe', 'Telephone']
  },
];

const RoomDetail = () => {
  const { id } = useParams<{ id: string }>();
  const room = roomsData.find(room => room.id === id);
  
  if (!room) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Room not found</h2>
          <p className="mb-6">Sorry, the room you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/rooms">Back to Rooms</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      {/* Back button */}
      <Link to="/rooms" className="inline-flex items-center mb-6 text-sasana-600 hover:text-sasana-800">
        <ArrowLeft size={18} className="mr-2" />
        Back to all rooms
      </Link>
      
      {/* Room title */}
      <SectionHeading 
        title={room.name} 
        subtitle={`${room.type} • ${room.size} • ${room.available} rooms available`}
      />
      
      {/* Image Carousel */}
      <div className="my-8">
        <Carousel className="w-full">
          <CarouselContent>
            {room.images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-0">
                      <img 
                        src={image} 
                        alt={`${room.name} - View ${index + 1}`} 
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4">
            <CarouselPrevious className="relative static transform-none translate-y-0 left-0 mr-2" />
            <CarouselNext className="relative static transform-none translate-y-0 right-0" />
          </div>
        </Carousel>
      </div>
      
      {/* Room details */}
      <div className="grid md:grid-cols-3 gap-8 my-8">
        <div className="md:col-span-2 space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Description</h3>
            <p className="text-muted-foreground">{room.description}</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">Room Amenities</h3>
            <div className="grid grid-cols-2 gap-2">
              {room.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-sasana-600 mr-2"></div>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">Room Features</h3>
            <div className="flex flex-wrap gap-2">
              {room.features.map((feature, index) => (
                <div key={index} className="bg-sage-50 text-sage-800 px-3 py-1 rounded-full">
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-sage-50 p-6 rounded-lg h-fit">
          <h3 className="text-xl font-semibold mb-4">Room Summary</h3>
          
          <div className="space-y-4 mb-6">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Price per night</span>
              <span className="font-semibold">${room.price}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-muted-foreground">Capacity</span>
              <span className="flex items-center">
                {room.capacity === 1 ? (
                  <User size={16} className="mr-1" />
                ) : (
                  <Users size={16} className="mr-1" />
                )}
                {room.capacity} {room.capacity === 1 ? 'Guest' : 'Guests'}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-muted-foreground">Room Size</span>
              <span className="flex items-center">
                <Ruler size={16} className="mr-1" />
                {room.size}
              </span>
            </div>
            
            {room.available < 5 && (
              <div className="bg-red-100 text-red-800 p-3 rounded-md text-sm">
                Only {room.available} rooms left at this price!
              </div>
            )}
          </div>
          
          <Button asChild className="w-full bg-sasana-600 hover:bg-sasana-700">
            <Link to={`/book?room=${room.id}`}>Book This Room</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
