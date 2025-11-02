'use client';

import React, { useState, useEffect } from "react";
import { brockman } from "@/lib/fonts";

interface AccordionItem {
  title: string;
  description: string;
  link: { url: string; text: string } | null;
  imageUrl: string;
  imageAlt: string;
}

const accordionData: AccordionItem[] = [
  {
    title: "Show up everywhere",
    description: "Dominate every search and social feed. Brocan auto-optimizes your store for Google, Facebook, WhatsApp, and Instagram. Your products find shoppers wherever they are, becoming the easy choice.",
    link: null,
    imageUrl: "/assets/Show up everywhere.png", // Placeholder for "Show up everywhere"
    imageAlt: "Show retailer’s product advertisements live across Google, Instagram, WhatsApp, and Facebook feeds, with highlighted “Shop Now,” “Buy on WhatsApp,” and “Order via Insta” overlays."
  },
  {
    title: "Send personalized promotions",
    description:
      "AI-powered offers delivered straight to your customers. Boost open rates and conversions with smart emails, SMS, and WhatsApp offers tailored to buying history and customer behavior.",
    link: null,
    imageUrl: "/assets/Send Personalized Promotions.webp", // Placeholder for "Send personalized promotions"
    imageAlt: "Mobile screen displaying rich, dynamic WhatsApp and SMS product deals with personalized customer names and “Recommended for You” badges."
  },
  {
    title: "Reward loyal customers",
    description:
      "Turn every purchase into repeat business. Effortless loyalty programs automatically track points, offer rewards, and send instant “Thank You!” pop-ups, keeping customers engaged and coming back.",
    link: null,
    imageUrl: "/assets/Reward loyal customers.webp", // Placeholder for "Reward loyal customers"
    imageAlt: "Dashboard UI showing a customer earning points for every purchase, with celebratory animation, star icons, and “Unlock your next reward” prompt."
  },
  {
    title: "Sell eGift cards",
    description:
      "Make gifting frictionless. From birthdays to festivals, let shoppers send eGift cards instantly. Drive new sales, delight your existing customers, and win new fans with every special occasion.",
    link: null,
    imageUrl: "/assets/sell eGift Cards.webp", // Placeholder for "Sell eGift cards"
    imageAlt: "Beautiful, digital eGift card selection UI with occasion-based cards (Birthday, Anniversary, Festive), recipient selection, and animated “Send Gift Now” button."
  },
];


const ReachSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Open the first item by default
  const [currentImage, setCurrentImage] = useState<string>(accordionData[0].imageUrl);
  const [currentImageAlt, setCurrentImageAlt] = useState<string>(accordionData[0].imageAlt);

  useEffect(() => {
    if (openIndex !== null) {
      setCurrentImage(accordionData[openIndex].imageUrl);
      setCurrentImageAlt(accordionData[openIndex].imageAlt);
    }
  }, [openIndex]);

  return (
    <section className="bg-white py-10"> {/* Changed bg-gray-50 to bg-white based on image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16"> {/* Changed text-center to text-left based on image */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-[4rem]">
            Expand Everywhere. Sell Smarter.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start"> {/* Changed items-center to items-start for top alignment */}
          <div className="my-10">
            {accordionData.map((item, idx) => (
              <div key={item.title} className="border-b border-gray-200 last:border-b-0"> {/* Added border-b for separators */}
                <button
                  className="w-full text-left py-6 focus:outline-none flex items-center justify-between"
                  onClick={() => setOpenIndex(idx === openIndex ? null : idx)}
                  aria-expanded={openIndex === idx}
                >
                  <span className={`font-medium text-medium ${openIndex === idx ? "text-gray-900" : "text-gray-900"}`}>{item.title}</span> {/* Increased font size */}
                  <span className="text-2xl ml-4 transition-transform duration-300 transform"> {/* Added transition for smooth +/- animation */}
                    {openIndex === idx ? "−" : "+"}
                  </span>
                </button>
                {openIndex === idx && (
                  <div className="pl-0 pb-6 text-gray-700 animate-fadeIn"> {/* Removed pl-1 and used a simple fade-in for description */}
                    <img
                      src={currentImage}
                      alt={currentImageAlt}
                      className="block lg:hidden w-full h-auto object-cover rounded-lg transition-opacity duration-500 ease-in-out opacity-100 mb-8" // Added transition for image change
                    />
                    <div className="mb-4 text-sm leading-relaxed">{item.description}</div> {/* Adjusted line height */}
                    {item.link && item.link.url && (
                      <a
                        href={item.link.url}
                        className="font-semibold text-sm-600 hover:underline flex items-center gap-1" // Changed link color to blue for emphasis
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.link.text}
                        <span aria-hidden="true" className="ml-1">↗</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:block relative overflow-hidden rounded-lg"> {/* Added shadow and overflow-hidden for image container */}
            <img
              src={currentImage}
              alt={currentImageAlt}
              className="w-full h-auto object-cover rounded-lg transition-opacity duration-500 ease-in-out opacity-100" // Added transition for image change
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReachSection;