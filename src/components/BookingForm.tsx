
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const BookingForm = () => {
  const [searchParams] = useSearchParams();
  const initialRoomId = searchParams.get('room') || '';

  const [formData, setFormData] = useState({
    checkIn: undefined as Date | undefined,
    checkOut: undefined as Date | undefined,
    roomType: initialRoomId || '',
    adults: '1',
    children: '0',
    name: '',
    email: '',
    phone: '',
    specialRequests: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.checkIn || !formData.checkOut) {
      toast({
        title: "Error",
        description: "Please select check-in and check-out dates",
        variant: "destructive",
      });
      return;
    }

    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Error",
        description: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }
    
    // Submit form logic would go here
    console.log('Booking form submitted:', formData);
    
    toast({
      title: "Booking Request Submitted",
      description: "We'll contact you shortly to confirm your reservation.",
    });
    
    // Reset form (in a real app, you might redirect after successful submission)
    setFormData({
      checkIn: undefined,
      checkOut: undefined,
      roomType: '',
      adults: '1',
      children: '0',
      name: '',
      email: '',
      phone: '',
      specialRequests: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-sasana-100 p-6 shadow-sm">
      <h3 className="font-serif text-xl font-semibold text-sasana-800 mb-6">Make a Reservation</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Check-in Date */}
        <div className="space-y-2">
          <Label htmlFor="checkIn">Check-in Date *</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {formData.checkIn ? (
                  format(formData.checkIn, "PPP")
                ) : (
                  <span>Select date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={formData.checkIn}
                onSelect={(date) => setFormData({ ...formData, checkIn: date })}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Check-out Date */}
        <div className="space-y-2">
          <Label htmlFor="checkOut">Check-out Date *</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {formData.checkOut ? (
                  format(formData.checkOut, "PPP")
                ) : (
                  <span>Select date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={formData.checkOut}
                onSelect={(date) => setFormData({ ...formData, checkOut: date })}
                initialFocus
                disabled={(date) => 
                  (formData.checkIn ? date < formData.checkIn : false)
                }
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Room Type */}
        <div className="space-y-2">
          <Label htmlFor="roomType">Room Type *</Label>
          <Select 
            value={formData.roomType} 
            onValueChange={(value) => setFormData({ ...formData, roomType: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select room type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="double">Double Room</SelectItem>
              <SelectItem value="twin">Twin Room</SelectItem>
              <SelectItem value="family">Family Room</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Number of Guests */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="adults">Adults *</Label>
            <Select 
              value={formData.adults} 
              onValueChange={(value) => setFormData({ ...formData, adults: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Adults" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="children">Children</Label>
            <Select 
              value={formData.children} 
              onValueChange={(value) => setFormData({ ...formData, children: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Children" />
              </SelectTrigger>
              <SelectContent>
                {[0, 1, 2, 3].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your full name"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="your.email@example.com"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="+254 XXX XXX XXX"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="specialRequests">Special Requests</Label>
          <textarea
            id="specialRequests"
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleInputChange}
            placeholder="Any special requirements or requests..."
            className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
      </div>
      
      <Button type="submit" className="w-full bg-sasana-600 hover:bg-sasana-700">
        Request Booking
      </Button>
      
      <p className="text-xs text-muted-foreground text-center mt-4">
        By clicking 'Request Booking', you agree to our terms and conditions.
      </p>
    </form>
  );
};

export default BookingForm;
