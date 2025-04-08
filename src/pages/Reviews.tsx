
import React from 'react';
import { Star } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import ReviewCard from '@/components/ReviewCard';

// Sample reviews data
const reviews = [
  {
    id: 1,
    name: 'Dennis Mungai',
    location: 'Kenya',
    date: 'April 17, 2024',
    rating: 5,
    comment: "This place is like a second home, one I'll fondly miss. We woke up in the morning to a clean car, an amazing breakfast and great company. The rooms feature individually themed decor, plush beddings, an excellent shower and working WiFi. The living room is tastefully decorated with excellent furniture, a splendid collection of whiskeys and a wholesome, calming ambience. We fondly recall being received late in the night and being attended to with a grade of hospitality that I'd rate as 10/10. I'll be back!"
  },
  {
    id: 2,
    name: 'Rose',
    location: 'Kenya',
    date: 'November 13, 2024',
    rating: 5,
    comment: "I loved the breakfast, and the room was beautiful. Naliaka was wonderful and hospitable, making the stay even more enjoyable and homely."
  },
  {
    id: 3,
    name: 'Sara',
    location: 'Pseudo-Accents',
    date: 'November 22, 2023',
    rating: 4,
    comment: "The homey collections, lush flower beds and vibrant wallpaper made the place really cozy. The security arrangements were reassuring. Easily accessible and within reach of shopping and entertainment amenities."
  },
  {
    id: 4,
    name: 'Skyler',
    location: 'South Africa',
    date: 'July 25, 2023',
    rating: 4,
    comment: "The owners were super friendly and welcoming! They really are a lovely couple. The rooms have been decorated with a lot of thought and effort, each one with the theme of a different country. Definitely unique and nothing like we have seen before, we really appreciate all the little thoughtful details. The breakfast was great too."
  },
  {
    id: 5,
    name: 'Aomkwanpirom',
    location: 'Thailand',
    date: 'June 27, 2023',
    rating: 5,
    comment: "The breakfast is simple easy and awesome. The local Kenya tea was great. Also the pancake from the host plus egg and sausages."
  },
  {
    id: 6,
    name: 'Lilian',
    location: 'Kenya',
    date: 'August 22, 2022',
    rating: 5,
    comment: "Breakfast was great. I enjoyed it. Sasana Motel it is, every time I will be in Bungoma."
  },
  {
    id: 7,
    name: 'Marlin',
    location: 'Kenya',
    date: 'August 4, 2022',
    rating: 4,
    comment: "Breakfast was very good! The host was very friendly and accommodating!"
  },
  {
    id: 8,
    name: 'K',
    location: 'Kenya',
    date: 'April 2, 2022',
    rating: 4,
    comment: "The comfy bed and quiet was perfect after a long day!! Clean, fresh linen, the gardens, the homely breakfast made by Naliaka!! Everything is thought. My list is endless but for sure I'd recommend. Friendly husky came to say good morning. Will be back."
  },
  {
    id: 9,
    name: 'Nelson',
    location: 'Kenya',
    date: 'January 1, 2022',
    rating: 5,
    comment: "The hosts Naliaka and Mike are very welcoming and promptly responds to issues raised. The breakfast was awesome. Thank you Mike and Naliaka will surely visit again."
  },
  {
    id: 10,
    name: 'Tatu',
    location: 'Kenya',
    date: 'June 9, 2021',
    rating: 5,
    comment: "The fact that my room felt like home and not a hotel room!!! The choice of colors and paintings on the walls; the British touch on the finishings and decorative items; the mattress....ooo the scientically proven mattress is all the night therapy I needed, and that is offcourse after the amazing hot shower from the 'island kind' shower head; my bedding also smelt really fresh; the iron box (yes I know; if you are on a work trip, the little things matter); the world cities themed rooms had a sweet touch to it because of the wallpapers. I loved my stay."
  },
];

const Reviews = () => {
  // Calculate average rating
  const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
  const averageRating = (totalRating / reviews.length).toFixed(1);
  
  // Count ratings by star level
  const ratingCounts = {
    5: reviews.filter(r => r.rating === 5).length,
    4: reviews.filter(r => r.rating === 4).length,
    3: reviews.filter(r => r.rating === 3).length,
    2: reviews.filter(r => r.rating === 2).length,
    1: reviews.filter(r => r.rating === 1).length,
  };
  
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-sasana-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Guest Reviews" 
            subtitle="Read what our guests have to say about their experiences at Sasana Guest House."
            centered
          />
        </div>
      </section>

      {/* Rating Summary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm border border-sasana-100 p-8">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="text-center">
                <div className="text-5xl font-bold text-sasana-800 mb-2">{averageRating}</div>
                <div className="flex justify-center mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      size={20} 
                      className={i < Math.round(Number(averageRating)) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} 
                    />
                  ))}
                </div>
                <p className="text-muted-foreground">Based on {reviews.length} reviews</p>
              </div>
              
              <div>
                <h3 className="font-serif text-xl font-semibold text-sasana-800 mb-4">Rating Distribution</h3>
                {[5, 4, 3, 2, 1].map((star) => (
                  <div key={star} className="flex items-center mb-2">
                    <div className="flex items-center w-24">
                      <span className="mr-2">{star}</span>
                      <Star size={16} className="text-yellow-500 fill-yellow-500" />
                    </div>
                    <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-sasana-600 rounded-full"
                        style={{ width: `${(ratingCounts[star as keyof typeof ratingCounts] / reviews.length) * 100}%` }}
                      ></div>
                    </div>
                    <span className="ml-2 w-10 text-right">{ratingCounts[star as keyof typeof ratingCounts]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Categories */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            <div className="bg-sage-50 p-4 rounded-lg">
              <div className="text-xl font-bold text-sasana-800">9.0</div>
              <p className="text-muted-foreground">Cleanliness</p>
            </div>
            <div className="bg-sage-50 p-4 rounded-lg">
              <div className="text-xl font-bold text-sasana-800">9.4</div>
              <p className="text-muted-foreground">Location</p>
            </div>
            <div className="bg-sage-50 p-4 rounded-lg">
              <div className="text-xl font-bold text-sasana-800">9.6</div>
              <p className="text-muted-foreground">Value</p>
            </div>
            <div className="bg-sage-50 p-4 rounded-lg">
              <div className="text-xl font-bold text-sasana-800">9.4</div>
              <p className="text-muted-foreground">Facilities</p>
            </div>
            <div className="bg-sage-50 p-4 rounded-lg">
              <div className="text-xl font-bold text-sasana-800">9.6</div>
              <p className="text-muted-foreground">Staff</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid gap-6">
            {reviews.map((review) => (
              <ReviewCard 
                key={review.id}
                name={review.name}
                location={review.location}
                date={review.date}
                rating={review.rating}
                comment={review.comment}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
