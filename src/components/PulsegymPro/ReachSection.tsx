'use client';

import React, { useState, useEffect } from "react";
import { brockman } from "@/lib/fonts";

interface AccordionItem {
  title: string;
  description: string;
  link?: {
    url: string;
    text: string;
  } | null;
  imageUrl: string;
  imageAlt?: string;
}

const accordionData: AccordionItem[] = [
  {
    title: "Centralized Control",
    description: "Everything you need to manage your gym in one place—no more juggling tools or messy spreadsheets.",
    link: null,
    imageUrl: "/assets/Centralized-Control.webp", // Placeholder for "Show up everywhere"
    imageAlt: "Centralized Control"
  },
  {
    title: "Easy to Use",
    description:
      "Run email and text message marketing campaigns anytime. Intuitive design for gym owners, staff, and clients. Start immediately, no technical skills required.",
    link: null,
    imageUrl: "/assets/Easy-to-Use.webp", // Placeholder for "Send personalized promotions"
    imageAlt: "Easy to Use"
  },
  {
    title: "Customizable",
    description:
      "Flexible features to fit gyms of all sizes, from boutique studios to large fitness chains.",
    link: null,
    imageUrl: "/assets/Customizable.png", // Placeholder for "Reward loyal customers"
    imageAlt: "Customizable"
  },
  {
    title: "Smart Insights",
    description:
      "Make informed decisions with real-time analytics and AI suggestions.",
    link: null,
    imageUrl: "/assets/Smart-Insights.webp", // Placeholder for "Sell eGift cards"
    imageAlt: "Smart Insights"
  },
  {
    title: "Seamless Experience",
    description:
      "From onboarding new client to tracking lifelong progress, create a professional, engaging journey.",
    link: null,
    imageUrl: "/assets/Seamless-Experience.webp",
    imageAlt: "Seamless Experience"
  },
];


import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ReachSection = () => {
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.08 });
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Open the first item by default
  const [currentImage, setCurrentImage] = useState<string>(accordionData[0].imageUrl);
  const [currentImageAlt, setCurrentImageAlt] = useState<string>(accordionData[0].imageAlt || '');

  useEffect(() => {
    if (openIndex !== null) {
      setCurrentImage(accordionData[openIndex].imageUrl);
      setCurrentImageAlt(accordionData[openIndex].imageAlt || '');
    }
  }, [openIndex]);

  return (
    <section
      ref={sectionRef}
      className={`bg-white py-10 ${brockman.className} transition-all duration-1000 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16"> {/* Changed text-center to text-left based on image */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 lg:mb-[4rem]">
            Why Brocan Gym Management?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start"> {/* Changed items-center to items-start for top alignment */}
          <div className="my-2 lg:my-10">
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
                    {item.link && (
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