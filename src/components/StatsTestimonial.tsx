'use client';

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
const testimonials = [ 
  // {
  //   quote: "Thanks to Brocan, my local shop is now a 24/7 business. Customers shop from anywhere, anytime—it’s boosted my repeat sales and built stronger relationships!",
  //   name: " Ravi Sharma",
  //   company: "Sharma General Store",
  //   location: "Nainital, Uttarakhand",
  //   image: "https://i.postimg.cc/WpZJWdPX/user-1.png"
  // },
  {
    quote: "Brocan completely transformed my kirana store. Online orders started pouring in, and the loyalty program keeps my regulars excited for more. I can finally compete with big supermarkets!",
    name: "Sunita Agarwal",
    company: "Agarwal Kirana",
    location: "Lucknow, Uttar Pradesh",
    image: "/assets/Sunita Agarwal.webp"
  },
  {
    quote: "My clothing boutique doubled its weekend sales since I launched the smart promotions. Now shoppers buy at midnight, and stock never runs out. Brocan is a real game changer.",
    name: "Deepak Saini",
    company: "VogueNest Boutique",
    location: "Jaipur, Rajasthan",
    image: "/assets/Deepak Saini.webp"
  },
  {
    quote: "As soon as I enabled eGift cards, we saw new customers coming in every week. The automated reminders brought back old shoppers—and now our ‘slow’ days are busy too.",
    name: "Meena Deshmukh",
    company: "UrbanMart",
    location: "Nashik, Maharashtra",
    image: "/assets/Meena Deshmukh.webp"
  },
  {
    quote: "Managing inventory used to be a headache. With Brocan, I get restock alerts before I run low, and tracking expiry is so easy. It’s peace of mind—and more profit.",
    name: "Anil Menon",
    company: "FreshGro Supermarket",
    location: "Bengaluru, Karnataka",
    image: "/assets/Anil Menon.webp"
  },
  {
    quote: "Our sweets shop runs daily flash sales thanks to Brocan. Sales spike in minutes, and we get direct feedback via WhatsApp after every promo. I finally feel in control of marketing.",
    name: "Priya Iyer",
    company: "Delight Sweets",
    location: "Chennai, Tamil Nadu",
    image: "/assets/Priya Iyer.webp"
  }
];


const StatsTestimonial = () => {
  const { elementRef: statsRef, isVisible: statsVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: testimonialRef, isVisible: testimonialVisible } = useScrollAnimation<HTMLDivElement>();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={statsRef}
          className={`flex flex-row items-center text-left mb-16 transition-all md:flex-row flex-col duration-1000 ${statsVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
        >
          <div className="text-8xl md:text-9xl font-bold text-gray-900 mb-4 mx-10 tracking-[-0.07em]">38%</div>
          <div>
            <div className="text-xl text-gray-600 max-w-[20rem] mx-auto">
              Average Revenue Growth
              <div className="text-sm text-gray-400 mt-4">
                Stores who switched to PocketRetail grew, on average, by 38% in just 6 months!
              </div>
            </div>
          </div>
        </div>

        <div
          ref={testimonialRef}
          className={`bg-green-100 rounded-3xl p-8 lg:p-12 relative overflow-hidden transition-all duration-1000 delay-300 ${testimonialVisible
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-20 scale-95'
            }`}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <img
                src={testimonials[currentSlide].image}
                alt="Business owner"
                className="rounded-2xl w-80 h-full object-cover mx-auto lg:mx-0 transition-all duration-500"
              />
            </div>

            <div className="h-full flex flex-col justify-between items-start py-10">
              <div>
                <blockquote className="text-xl lg:text-2xl text-gray-900 mb-8 leading-relaxed transition-all duration-500">
                  "{testimonials[currentSlide].quote}"
                </blockquote>

                <div className="flex items-center space-x-4">
                  <div>
                    <div className="font-semibold text-lg">{testimonials[currentSlide].name}</div>
                    <div className="text-gray-600">{testimonials[currentSlide].company}</div>
                    <div className="text-gray-600">{testimonials[currentSlide].location}</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-8 space-x-4">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                >
                  ←
                </button>
                <button
                  onClick={nextSlide}
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                >
                  →
                </button>
                {/* <button className="text-gray-600 hover:text-gray-800 transition-colors font-medium">
                  Read more →
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsTestimonial;
