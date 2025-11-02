'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react'; // Added useRef, useMemo
import { useScrollAnimation } from "@/hooks/useScrollAnimation"; // Assuming this custom hook is correctly implemented

const BrandShowcase = () => {
  // Using your custom hook for scroll-triggered animations
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>();
  const { elementRef: cardsContainerRef, isVisible: cardsVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: textRef, isVisible: textVisible } = useScrollAnimation<HTMLDivElement>();

  // State for horizontal scroll position of the image row
  const [scrollX, setScrollX] = useState(0);
  const animationFrameIdRef = useRef<number | null>(null); // Ref to store animation frame ID

  // Array of image URLs for the showcase
  const themeImages = useMemo(() => [ // useMemo to prevent re-creation on every render unless dependencies change
    "https://images.ctfassets.net/2d5q1td6cyxq/2LDEJgaJ5mlkuwvgiqJDIz/b96f65d50aea11c20b23f813f223bc8b/PD07131_-_USEN_studio_cotilde.png",
    "https://images.ctfassets.net/2d5q1td6cyxq/5XLBY2b4xMbsEIUrUa58ef/28f554fc395c5433c3c127de27ecb4dc/PD07131_-_USEN_stem_and_water.png",
    "https://images.ctfassets.net/2d5q1td6cyxq/6aOCzF3tkAAuFaXk3663R/ecc3907fcae82604b07852bb282a79d8/PD07131_-_USEN_alluring_decor.png",
    "https://images.ctfassets.net/2d5q1td6cyxq/1McOttRcCJCvhAkmOpJqm3/621ef3b79e164957ccbd9d6e8640f72e/PD07131_-_USEN_iris_and_onyx.png",
    "https://images.ctfassets.net/2d5q1td6cyxq/3WR3OMEYBb5sGZXtOHuLFr/f92e3d9127c67a3f2e492674b37e2bbf/PD07131_-_USEN_grocer.png",
  ], []);

  // Duplicate images for seamless looping
  const duplicatedImages = useMemo(() => [...themeImages, ...themeImages], [themeImages]);

  // Define card dimensions and scroll parameters
  const cardHeight = 420; // in pixels
  const aspectRatioValue = 9 / 19.5;
  const cardWidth = cardHeight * aspectRatioValue;
  const gap = 24; // from Tailwind's gap-6 (1.5rem * 16px/rem)

  // Calculate the width of one full set of original images including gaps
  // This is the point at which the scroll should reset
  const scrollResetThreshold = useMemo(() => {
    if (themeImages.length === 0) return 0;
    // Total width of cards + total width of gaps between them
    return (cardWidth * themeImages.length) + (gap * themeImages.length);
  }, [themeImages.length, cardWidth, gap]);

  // Effect for automatic horizontal scrolling
  useEffect(() => {
    const scrollSpeed = 0.5; // Adjust for desired speed (pixels per frame)

    if (cardsVisible && scrollResetThreshold > 0) { // Only scroll if visible and content exists
      const animateScroll = () => {
        setScrollX(prevScrollX => {
          let newScrollX = prevScrollX - scrollSpeed;
          // If the first set of images has scrolled completely out of view
          if (Math.abs(newScrollX) >= scrollResetThreshold) {
            // Reset scroll position to create the loop
            // Add the threshold to effectively bring the second set (which looks like the first) to the start
            newScrollX += scrollResetThreshold;
          }
          return newScrollX;
        });
        animationFrameIdRef.current = requestAnimationFrame(animateScroll);
      };
      animationFrameIdRef.current = requestAnimationFrame(animateScroll);
    } else {
      // If not visible, cancel any ongoing animation
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
        animationFrameIdRef.current = null;
      }
    }

    // Cleanup function to cancel animation frame when component unmounts or visibility changes
    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
        animationFrameIdRef.current = null;
      }
    };
  }, [cardsVisible, scrollResetThreshold, themeImages.length]); // Rerun effect if visibility or content changes

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Animated Title */}
          <h2
            ref={titleRef}
            className={`text-4xl md:text-5xl font-bold text-gray-900 mb-8 transition-all duration-1000 ${
              titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Go big with your brand
          </h2>

          {/* Horizontally Scrolling Card Showcase Section */}
          <div
            ref={cardsContainerRef}
            // Added 'relative' for positioning gradient overlays
            className={`relative w-full overflow-hidden my-20 transition-all duration-1000 delay-300 ${
              cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            {/* Inner container that actually scrolls horizontally */}
            <div
              className="flex py-4" // Removed gap-6, will be applied as margin to cards for precise width calculation
              style={{
                transform: `translateX(${scrollX}px)`,
                // Removed CSS transition, animation is now driven by requestAnimationFrame
              }}
            >
              {duplicatedImages.map((imageUrl, index) => (
                <div
                  key={index}
                  className="relative bg-white rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer flex flex-col items-center shadow-lg hover:z-[1]"
                  style={{
                    minHeight: `${cardHeight}px`,
                    width: `${cardWidth}px`,
                    aspectRatio: `${aspectRatioValue}`, // Use the calculated value
                    flexShrink: 0,
                    // Add margin-right for gap, except for the very last item in the duplicated list
                    // This ensures the scrollResetThreshold calculation is more accurate
                    marginRight: `${index === duplicatedImages.length - 1 ? 0 : gap}px`,
                  }}
                >
                  <img
                    src={imageUrl}
                    alt={`Brand showcase ${index % themeImages.length + 1}`} // Alt text cycles with original length
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Left Gradient Overlay */}
            <div
              className="absolute top-0 left-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"
              aria-hidden="true"
            />
            {/* Right Gradient Overlay */}
            <div
              className="absolute top-0 right-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"
              aria-hidden="true"
            />
          </div>

          {/* Animated Text Section */}
          <div
            ref={textRef}
            className={`transition-all duration-1000 delay-600 ${
              textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-gray-600 text-lg mb-6">
              Get a head start on your store design with customizable e-commerce themes crafted for online selling. No coding necessary.
            </p>
            <button className="text-gray-900 font-medium hover:underline flex items-center justify-center mx-auto">
              Explore themes →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;
