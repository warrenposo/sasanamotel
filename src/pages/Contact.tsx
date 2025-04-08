
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import SectionHeading from '@/components/SectionHeading';
import { MapPin, Phone, Mail, Clock, Calendar } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log('Contact form submitted:', data);
    
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you soon!",
    });
    
    reset();
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-sasana-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Contact Us" 
            subtitle="Get in touch with us for bookings, inquiries, or any information you need."
            centered
          />
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-2xl font-bold text-sasana-800 mb-6">
                Get In Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-sage-100 p-3 rounded-full mr-4">
                    <MapPin className="text-sasana-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sasana-800 mb-1">Our Location</h3>
                    <p className="text-muted-foreground">
                      Off Bungoma - Mumias road<br />
                      Next to King Jesus Faith Church<br />
                      Kanduyi, Bungoma, Kenya
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-sage-100 p-3 rounded-full mr-4">
                    <Phone className="text-sasana-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sasana-800 mb-1">Phone Number</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+254700000000" className="hover:text-sasana-600 transition-colors">
                        +254 700 000 000
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-sage-100 p-3 rounded-full mr-4">
                    <Mail className="text-sasana-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sasana-800 mb-1">Email Address</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:info@sasanaguesthouse.com" className="hover:text-sasana-600 transition-colors">
                        info@sasanaguesthouse.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-sage-100 p-3 rounded-full mr-4">
                    <Clock className="text-sasana-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sasana-800 mb-1">Opening Hours</h3>
                    <p className="text-muted-foreground">
                      Reception: 24/7<br />
                      Check-in: From 12:00 PM<br />
                      Check-out: Until 11:00 AM
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-sage-100 p-3 rounded-full mr-4">
                    <Calendar className="text-sasana-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sasana-800 mb-1">Reservation</h3>
                    <p className="text-muted-foreground">
                      For the best rates and availability, book directly with us.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="font-serif text-2xl font-bold text-sasana-800 mb-6">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input 
                    id="name"
                    placeholder="Enter your name"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject"
                    placeholder="Enter subject"
                    {...register("subject", { required: "Subject is required" })}
                  />
                  {errors.subject && (
                    <p className="text-sm text-red-500">{errors.subject.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <textarea 
                    id="message"
                    placeholder="Type your message here..."
                    className="min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    {...register("message", { required: "Message is required" })}
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>
                
                <Button type="submit" className="w-full bg-sasana-600 hover:bg-sasana-700">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-sage-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Location" 
            subtitle="Find us easily with the map below."
            centered
          />
          
          <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-md">
            {/* Replace with actual embedded map in production */}
            <div className="bg-gray-200 h-96 flex items-center justify-center">
              <p className="text-muted-foreground">Map will be displayed here</p>
              {/* In production, use: */}
              {/* <iframe 
                src="https://www.google.com/maps/embed?pb=..."
                width="100%" 
                height="100%" 
                style={{border: 0}}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
