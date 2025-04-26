import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Users, Ruler, Bath, Wifi, Coffee, Droplet, User } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { Button } from '../components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel';
import { Card, CardContent } from '../components/ui/card';
import aberdeer1 from '../../public/images/Aberdeer/Aberdeer1.png';
import aberdeer2 from '../../public/images/Aberdeer/Aberdeer2.png';
import aberdeer3 from '../../public/images/Aberdeer/Aberdeer3.png';
import aberdeer4 from '../../public/images/Aberdeer/Aberdeer4.png';
import aberdeer5 from '../../public/images/Aberdeer/Aberdeer5.png';
import aberdeer6 from '../../public/images/Aberdeer/Aberdeer6.png';
import aberdeer7 from '../../public/images/Aberdeer/Aberdeer7.png';
import agra1 from '../../public/images/Agra/Agra1.png';
import agra2 from '../../public/images/Agra/Agra2.png';
import agra3 from '../../public/images/Agra/Agra3.png';
import agra4 from '../../public/images/Agra/Agra4.png';
import agra5 from '../../public/images/Agra/Agra5.png';
import bangkok1 from '../../public/images/Bangkok/Bangkok1.png';
import bangkok3 from '../../public/images/Bangkok/Bangkok3.png';
import bangkok6 from '../../public/images/Bangkok/Bangkok6.png';
import bangkok4 from '../../public/images/Bangkok/Bangkok4.png';
import bangkok5 from'../../public/images/Bangkok/Bangkok5.png';
import brae1 from '../../public/images/Brae/brae1.png';
import brae2 from '../../public/images/Brae/brae2.png';
import brae3 from '../../public/images/Brae/brae3.png';
import brae4 from'../../public/images/Brae/brae4.png';
import brae5 from '../../public/images/Brae/brae5.png';
import brae6 from '../../public/images/Brae/brae6.png';
import london1 from '../../public/images/London/London1.png';
import london2 from '../../public/images/London/London2.png';
import london3 from '../../public/images/London/London3.png';
import london4 from '../../public/images/London/London4.png';
import london5 from '../../public/images/London/London5.png';
import london6 from '../../public/images/London/London6.png';
import lquitos1 from '../../public/images/Lquitos/lquitos1.png';
import lquitos2 from '../../public/images/Lquitos/Iquitos2.png';
import lquitos3 from'../../public/images/Lquitos/Iquitos3.png';
import lquitos4 from '../../public/images/Lquitos/lquitos4.png';
import lquitos5 from '../../public/images/Lquitos/lquitos5.png';
import lquitos6 from '../../public/images/Lquitos/lquitos6.png';
import lquitos7 from '../../public/images/Lquitos/lquitos7.png';
import magog1 from '../../public/images/Magog/magog1.png';
import magog2 from '../../public/images/Magog/magog2.png';
import magog3 from '../../public/images/Magog/magog3.png';
import magog4 from '../../public/images/Magog/magog4.png';
import magog5 from '../../public/images/Magog/magog5.png';
import magog6 from '../../public/images/Magog/magog6.png';
import magog7 from '../../public/images/Magog/magog7.png';
import magog8 from '../../public/images/Magog/magog8.png';
import magog9 from'../../public/images/Magog/magog9.png';
import mahe1 from '../../public/images/Mahe/Mahe1.png';
import mahe2 from '../../public/images/Mahe/Mahe2.png';
import mahe3 from '../../public/images/Mahe/Mahe3.png';
import mahe4 from '../../public/images/Mahe/Mahe4.png';
import mahe5 from '../../public/images/Mahe/Mahe5.png';
import mahe6 from '../../public/images/Mahe/Mahe6.png';
import mahe7 from'../../public/images/Mahe/Mahe7.png';
import mahe8 from '../../public/images/Mahe/Mahe8.png';
import mahe9 from '../../public/images/Mahe/Mahe9.png';
import paris1 from'../../public/images/Paris/p1.png';
import paris2 from '../../public/images/Paris/p2.png';
import paris3 from '../../public/images/Paris/p3.png';
import paris4 from '../../public/images/Paris/p4.png';
import paris5 from '../../public/images/Paris/p5.png';
import paris6 from '../../public/images/Paris/p6.png';
import paris7 from '../../public/images/Paris/p7.png';
import sandbanks1 from '../../public/images/Sandbanks/Sandbanks1.png';
import sandbanks2 from'../../public/images/Sandbanks/Sandbanks2.png';
import sandbanks3 from'../../public/images/Sandbanks/Sandbanks3.png';
import sandbanks4 from '../../public/images/Sandbanks/Sandbanks4.png';
import sandbanks5 from '../../public/images/Sandbanks/Sandbanks5.png';
import sandbanks6 from '../../public/images/Sandbanks/Sandbanks6.png'
import sanfrancisco1 from '../../public/images/Sanfrancisco/Sanfrancisco1.png';
import sanfrancisco2 from '../../public/images/Sanfrancisco/Sanfrancisco2.png';
import sanfrancisco3 from '../../public/images/Sanfrancisco/Sanfrancisco3.png';
import sanfrancisco4 from '../../public/images/Sanfrancisco/Sanfrancisco4.png';
import sanfrancisco5 from '../../public/images/Sanfrancisco/Sanfrancisco5.png';
import sanfrancisco6 from '../../public/images/Sanfrancisco/Sanfrancisco6.png';
import sanfrancisco7 from '../../public/images/Sanfrancisco/Sanfrancisco7.png';
import stonetwon1 from '../../public/images/Stonetown/Stonetown1.png';
import stonetwon2 from '../../public/images/Stonetown/Stonetown2.png';
import stonetwon3 from '../../public/images/Stonetown/Stonetown3.png';
import stonetwon4 from '../../public/images/Stonetown/Stonetown4.png';
import stonetwon5 from '../../public/images/Stonetown/Stonetown5.png';
import stonetwon6 from '../../public/images/Stonetown/Stonetown6.png';
import stonetwon7 from '../../public/images/Stonetown/Stonetown7.png';
import tokyo1 from '../../public/images/Tokyo/Tokyo1.png';
import tokyo2 from'../../public/images/Tokyo/Tokyo2.png';
import tokyo3 from '../../public/images/Tokyo/Tokyo3.png';
import tokyo4 from '../../public/images/Tokyo/Tokyo4.png';
import tokyo5 from '../../public/images/Tokyo/Tokyo5.png';
import tokyo6 from '../../public/images/Tokyo/Tokyo6.png';
import tokyo7 from '../../public/images/Tokyo/Tokyo7.png';
import vinson1 from '../../public/images/Vinson/Vinson1.png';
import vinson2 from '../../public/images/Vinson/Vinson2.png';
import vinson3 from '../../public/images/Vinson/Vinson3.png';
import vinson4 from '../../public/images/Vinson/Vinson4.png';
import vinson5 from '../../public/images/Vinson/Vinson5.png';
import vinson6 from '../../public/images/Vinson/Vinson6.png';
import vinson7 from '../../public/images/Vinson/Vinson7.png';
import zurich1 from '../../public/images/Zurich/Zurich1.png';
import zurich2 from '../../public/images/Zurich/Zurich2.png';
import zurich3 from '../../public/images/Zurich/Zurich3.png';
import zurich5 from '../../public/images/Zurich/Zurich5.png';
import zurich6 from '../../public/images/Zurich/Zurich6.png';
import zurich7 from '../../public/images/Zurich/Zurich7.png';
import zurich8 from '../../public/images/Zurich/Zurich8.png';
import seoul1  from '../../public/images/Seoul/Seoul1.png';
import seoul2  from '../../public/images/Seoul/Seoul2.png';
import seoul3  from '../../public/images/Seoul/Seoul3.png';
import seoul4  from '../../public/images/Seoul/Seoul4.png';
import seoul5  from '../../public/images/Seoul/Seoul5.png';
import seoul6  from '../../public/images/Seoul/Seoul6.png';
import limpopo1 from '../../public/images/Limpopo/Limpopo1.png';
import limpopo2 from '../../public/images/Limpopo/Limpopo2.png';
import limpopo3 from '../../public/images/Limpopo/Limpopo3.png';
import limpopo4 from '../../public/images/Limpopo/Limpopo4.png';
import limpopo5 from '../../public/images/Limpopo/Limpopo5.png';
import limpopo6 from '../../public/images/Limpopo/Limpopo6.png';
import limpopo7 from '../../public/images/Limpopo/Limpopo7.png';




// Room data with multiple images
export const roomsData = [
  {
    id: 'aberdeen',
    name: 'Aberdeen',
    type: 'Aberdeen',
    price: 2500,
    images: [
      aberdeer1,
      aberdeer2,
      aberdeer3,
      aberdeer4,
      aberdeer5,
      aberdeer6,
      aberdeer7,
    ],
    capacity: 2,
    features: ['Garden View', 'Free WiFi', 'Bath'],
    size: '16 m²',
    available: 4,
    description: 'Our Room  offers a comfortable and elegant space featuring a private bathroom with a bathtub. Perfect for couples or single travelers looking for extra comfort.',
    amenities: ['Free WiFi', 'Flat-screen TV', 'Air conditioning', 'Private bathroom', 'Bath', 'Hairdryer', 'Toiletries', 'Desk', 'Wardrobe']
  },
  {
    id: 'agra',
    name: 'Agra',
    type: 'Agra',
    price: 2500,
    images: [
      agra1,
      agra2,
      agra3,
      agra4,
      agra5,

    ],
    capacity: 4,
    features: ['Garden View', 'Soundproofing', 'Extra Space'],
    size: '24 m²',
    available: 7,
    description: 'Spacious and versatile, our Room can be arranged with either a double bed or two separate twin beds to accommodate your preferences. Perfect for couples or friends traveling together.',
    amenities: ['Free WiFi', 'Flat-screen TV', 'Air conditioning', 'Private bathroom', 'Shower', 'Hairdryer', 'Toiletries', 'Desk', 'Wardrobe', 'Extra pillows']
  },
  {
    id: 'bangkok',
    name: 'Bangkok',
    type: 'Bangkok',
    price: 2500,
    images: [
      bangkok1,
      bangkok3,
      bangkok4,
      bangkok5,
      bangkok6,
    ],
    capacity: 2,
    features: ['Garden View', 'Flat-screen TV', 'Free WiFi'],
    size: '16 m²',
    available: 4,
    description: 'OurRoom offers a comfortable queen-sized bed, modern amenities, and a cozy atmosphere. Ideal for couples seeking a relaxing retreat in Bungoma.',
    amenities: ['Free WiFi', 'Flat-screen TV', 'Air conditioning', 'Private bathroom', 'Shower', 'Hairdryer', 'Toiletries', 'Desk', 'Wardrobe']
  },
  {
    id: 'brae',
    name: 'Brae',
    type: 'Brae',
    price: 2500,
    images: [
      brae1,
      brae2,
      brae3,
      brae4,
      brae5,
      brae6,

    ],
    capacity: 2,
    features: ['Garden View', 'Free WiFi', 'Spacious'],
    size: '25 m²',
    available: 5,
    description: 'Indulge in extra space with our Room. Featuring a spacious layout, this room provides ample room to relax and unwind after a day of exploring Bungoma.',
    amenities: ['Free WiFi', 'Flat-screen TV', 'Air conditioning', 'Private bathroom', 'Shower', 'Hairdryer', 'Toiletries', 'Desk', 'Wardrobe', 'Seating area']
  },
  {
    id: 'london',
    name: 'London',
    type: 'London',
    price: 2500,
    images: [
      london1,
      london2,
      london3,
      london4,
      london5,
      london6,
      
    ],
    capacity: 2,
    features: ['Free WiFi', 'Breakfast Included'],
    size: '16 m²',
    available: 6,
    description: 'Our  Room offers great value without compromising on comfort. Perfect for travelers looking for affordable accommodation without sacrificing essential amenities.',
    amenities: ['Free WiFi', 'Flat-screen TV', 'Private bathroom', 'Shower', 'Toiletries', 'Desk', 'Wardrobe']
  },
  {
    id: 'lquitos',
    name: 'Lquitos',
    type: 'Lquitos',
    price: 2500,
    images: [
      lquitos1,
      lquitos2,
      lquitos3,
      lquitos4,
      lquitos5,
      lquitos6,
      lquitos7,
    ],
    capacity: 1,
    features: ['Garden View', 'Free WiFi', 'Cozy'],
    size: '10 m²',
    available: 6,
    description: 'Designed for solo travelers, our Room offers a comfortable single bed and all the essential amenities for a pleasant stay. Compact yet cozy, it\'s ideal for business travelers or solo adventurers.',
    amenities: ['Free WiFi', 'Flat-screen TV', 'Air conditioning', 'Private bathroom', 'Shower', 'Hairdryer', 'Toiletries', 'Desk', 'Wardrobe']
  },
  {
    id: 'magog',
    name: 'Magog',
    type: 'Magog',
    price: 2500,
    images: [
      magog1,
      magog2,
      magog3,
      magog4,
      magog5,
      magog6,
      magog7,
      magog8,
      magog9,
    ],
    capacity: 2,
    features: ['Garden View', 'Free WiFi', 'Shower'],
    size: '16 m²',
    available: 6,
    description: 'Our Room features a comfortable  bed and a modern private bathroom with a shower. Enjoy a restful night\'s sleep and all the amenities you need for a pleasant stay.',
    amenities: ['Free WiFi', 'Flat-screen TV', 'Air conditioning', 'Private bathroom', 'Shower', 'Hairdryer', 'Toiletries', 'Desk', 'Wardrobe']
  },
  {
    id: 'mahe',
    name: 'Mahe',
    type: 'Mahe',
    price: 3500,
    images: [
      mahe1,
      mahe2,
      mahe3,
      mahe4,
      mahe5,
      mahe6,
      mahe7,
      mahe8,
      mahe9,
    ],
    capacity: 2,
    features: ['Garden View', 'Free WiFi'],
    size: '16 m²',
    available: 9,
    description: 'Enjoy premium comfort at budget-friendly prices with our Premium  Room. This room offers slightly upgraded amenities compared to our standard budget option while remaining affordable.',
    amenities: ['Free WiFi', 'Flat-screen TV', 'Private bathroom', 'Shower', 'Toiletries', 'Desk', 'Wardrobe', 'Telephone']
  },
  {
    id: 'paris',
    name: 'Paris',
    type: 'Paris',
    price: 2500,
    images: [
      paris1,
      paris2,
      paris3,
      paris4,
      paris5,
      paris6,
      paris7,
    
    ],
    capacity: 2,
    features: ['Garden View', 'Free WiFi'],
    size: '16 m²',
    available: 9,
    description: 'Enjoy premium comfort at budget-friendly prices with our  Room. This room offers slightly upgraded amenities compared to our standard budget option while remaining affordable.',
    amenities: ['Free WiFi', 'Flat-screen TV', 'Private bathroom', 'Shower', 'Toiletries', 'Desk', 'Wardrobe', 'Telephone']
  },
  {
    id: 'sandbanks',
    name: 'Sandbanks',
    type: 'Sandbanks',
    price: 2500,
    images: [
      sandbanks1,
      sandbanks2,
      sandbanks3,
      sandbanks4,
      sandbanks5,
      sandbanks6,
    ],
    capacity: 2,
    features: ['Garden View', 'Free WiFi'],
    size: '16 m²',
    available: 9,
    description: 'Enjoy premium comfort at budget-friendly prices with our  Room. This room offers slightly upgraded amenities compared to our standard budget option while remaining affordable.',
    amenities: ['Free WiFi', 'Flat-screen TV', 'Private bathroom', 'Shower', 'Toiletries', 'Desk', 'Wardrobe', 'Telephone']
  },
  {
    id: 'sanfrancisco',
    name: 'Sanfrancisco',
    type: 'Sanfrancisco',
    price: 2500,
    images: [
      sanfrancisco1,
      sanfrancisco2,
      sanfrancisco3,
      sanfrancisco4,
      sanfrancisco5,
      sanfrancisco6,
      sanfrancisco6,
      sanfrancisco7,
  
    ],
    capacity: 2,
    features: ['Garden View', 'Free WiFi'],
    size: '16 m²',
    available: 9,
    description: 'Enjoy premium comfort at budget-friendly prices with our Room. This room offers slightly upgraded amenities compared to our standard budget option while remaining affordable.',
    amenities: ['Free WiFi', 'Flat-screen TV', 'Private bathroom', 'Shower', 'Toiletries', 'Desk', 'Wardrobe', 'Telephone']
  },
  {
    id: 'stonetown',
    name: 'Stonetown',
    type: 'Stonetown',
    price: 2500,
    images: [
      stonetwon1,
      stonetwon2,
      stonetwon3,
      stonetwon4,
      stonetwon5,
      stonetwon6,
      stonetwon7,

    ],
    capacity: 2,
    features: ['Garden View', 'Free WiFi'],
    size: '16 m²',
    available: 9,
    description: 'Enjoy premium comfort at budget-friendly prices with our  Budget  Room. This room offers slightly upgraded amenities compared to our standard budget option while remaining affordable.',
    amenities: ['Free WiFi', 'Flat-screen TV', 'Private bathroom', 'Shower', 'Toiletries', 'Desk', 'Wardrobe', 'Telephone']
  },
  {
    id: 'tokyo',
    name: 'Tokyo',
    type: 'Tokyo',
    price: 2500,
    images: [
      tokyo1,
      tokyo2,
      tokyo3,
      tokyo4,
      tokyo5,
      tokyo6,
      tokyo7,
  
    ],
    capacity: 2,
    features: ['Garden View', 'Free WiFi'],
    size: '16 m²',
    available: 9,
    description: 'Enjoy premium comfort at budget-friendly prices with our  Room. This room offers slightly upgraded amenities compared to our standard budget option while remaining affordable.',
    amenities: ['Free WiFi', 'Flat-screen TV', 'Private bathroom', 'Shower', 'Toiletries', 'Desk', 'Wardrobe', 'Telephone']
  },
  {
    id: 'limpopo',
    name: 'Limpopo',
    type: 'Limpopo',
    price: 2500,
    images: [
      limpopo1,
      limpopo2,
      limpopo3,
      limpopo4,
      limpopo5,
      limpopo6,
      limpopo7,
  
    ],
    capacity: 2,
    features: ['Garden View', 'Free WiFi'],
    size: '16 m²',
    available: 9,
    description: 'Enjoy premium comfort at budget-friendly prices with our  Room. This room offers slightly upgraded amenities compared to our standard budget option while remaining affordable.',
    amenities: ['Free WiFi', 'Flat-screen TV', 'Private bathroom', 'Shower', 'Toiletries', 'Desk', 'Wardrobe', 'Telephone']
  },
  {
    id: 'seoul',
    name: 'Seoul',
    type: 'Seoul',
    price: 2500,
    images: [
      seoul1,
      seoul2,
      seoul3,
      seoul4,
      seoul4,
      seoul5,
      seoul6,
  
    ],
    capacity: 2,
    features: ['Garden View', 'Free WiFi'],
    size: '16 m²',
    available: 9,
    description: 'Enjoy premium comfort at budget-friendly prices with our  Room. This room offers slightly upgraded amenities compared to our standard budget option while remaining affordable.',
    amenities: ['Free WiFi', 'Flat-screen TV', 'Private bathroom', 'Shower', 'Toiletries', 'Desk', 'Wardrobe', 'Telephone']
  },
  {
    id: 'vinson',
    name: 'Vinson',
    type: 'Vinson',
    price: 2500,
    images: [
      vinson1,
      vinson2,
      vinson3,
      vinson4,
      vinson5,
      vinson6,
      vinson7,
    ],
    capacity: 2,
    features: ['Garden View', 'Free WiFi'],
    size: '16 m²',
    available: 9,
    description: 'Enjoy premium comfort at budget-friendly prices with our  Room. This room offers slightly upgraded amenities compared to our standard budget option while remaining affordable.',
    amenities: ['Free WiFi', 'Flat-screen TV', 'Private bathroom', 'Shower', 'Toiletries', 'Desk', 'Wardrobe', 'Telephone']
  },
  {
    id: 'zurich',
    name: 'Zurich',
    type: 'Zurich',
    price: 2500,
    images: [
      zurich1,
      zurich2,
      zurich3,
      zurich5,
      zurich6,
      zurich7,
      zurich8,
      // zurich9,
    ],
    capacity: 2,
    features: ['Garden View', 'Free WiFi'],
    size: '16 m²',
    available: 9,
    description: 'Enjoy premium comfort at budget-friendly prices with our  Room. This room offers slightly upgraded amenities compared to our standard budget option while remaining affordable.',
    amenities: ['Free WiFi', 'Flat-screen TV', 'Private bathroom', 'Shower', 'Toiletries', 'Desk', 'Wardrobe', 'Telephone']
  },
];

const RoomDetail = () => {
  const { id } = useParams();
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
              <span className="font-semibold">${room.price / 130}</span>
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
