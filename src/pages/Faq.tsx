
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeading from '@/components/SectionHeading';

const Faq = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-sasana-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Frequently Asked Questions" 
            subtitle="Find answers to common questions about Sasana Guest House."
            centered
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-sasana-800 font-medium">
                  What are the check-in and check-out times?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Check-in is available from 12:00 PM, and check-out is until 11:00 AM. If you need an early check-in or late check-out, please contact us in advance, and we'll do our best to accommodate your request, subject to availability.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-sasana-800 font-medium">
                  Do you offer airport transfer services?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, we offer airport shuttle services to and from nearby airports for an additional charge. Please inform us of your flight details in advance so we can arrange transportation for you.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-sasana-800 font-medium">
                  Is breakfast included in the room rate?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, breakfast is included in all our room rates. We serve a delicious breakfast featuring local Kenyan tea, eggs, sausages, pancakes, and seasonal fruits.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-sasana-800 font-medium">
                  Do you have parking facilities?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, we offer free private parking on-site. No reservation is needed for parking.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-sasana-800 font-medium">
                  Is WiFi available at the guest house?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, free WiFi is available in all areas of the guest house.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-sasana-800 font-medium">
                  Can I bring my pet with me?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We're sorry, but pets are not allowed at Sasana Guest House.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-7">
                <AccordionTrigger className="text-sasana-800 font-medium">
                  What types of rooms do you offer?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We offer double rooms, twin rooms, and family rooms. Each room is uniquely decorated with themes inspired by different cities around the world.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-8">
                <AccordionTrigger className="text-sasana-800 font-medium">
                  Do you offer special rates for long-term stays?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, we offer discounted rates for long-term stays. Please contact us directly for more information about our long-term stay packages.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-9">
                <AccordionTrigger className="text-sasana-800 font-medium">
                  What payment methods do you accept?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We accept Visa, Mastercard, and UnionPay credit cards. Cash payments are also accepted.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-10">
                <AccordionTrigger className="text-sasana-800 font-medium">
                  How far is the guest house from Bungoma town center?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sasana Guest House is located approximately 3 km from Bungoma town center.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-11">
                <AccordionTrigger className="text-sasana-800 font-medium">
                  Can I request a specific room?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, you can request a specific room when making your reservation. We'll do our best to accommodate your preference, subject to availability.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-12">
                <AccordionTrigger className="text-sasana-800 font-medium">
                  What is your cancellation policy?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Our standard cancellation policy allows free cancellation up to 24 hours before the check-in date. For cancellations made less than 24 hours before check-in, a one-night charge may apply. Please check your booking confirmation for the specific terms of your reservation.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6">
                Didn't find the answer you were looking for? Feel free to contact us directly.
              </p>
              <Button asChild className="bg-sasana-600 hover:bg-sasana-700">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
