import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>();
  const { elementRef: buttonsRef, isVisible: buttonsVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const { elementRef: videoRef, isVisible: videoVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <span className="text-sm font-medium text-gray-600 mb-4 block">Stop Just Billing. Start Smart Selling.</span>
          </div>
          <h1
            ref={titleRef}
            className={`text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
           A New Era for Retailers,<br />
            Powered by Brocan
          </h1>
          <div
            ref={buttonsRef}
            className={`flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16 transition-all duration-1000 delay-300 ${buttonsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <a href="https://poketretail.brocan.in/" className="px-8 py-2 text-lg border border-gray-300 rounded-lg text-gray-900 hover:bg-gray-100 transition-colors">
              Build Store
            </a>
            <Button
              size="lg"
              className="px-8 py-3 text-lg bg-black text-white hover:bg-gray-800"
              onClick={() => {
                const el = document.getElementById("contact-form");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Sales
            </Button>
          </div>
          <div
            ref={videoRef}
            className={`relative max-w-4xl mx-auto transition-all duration-1000 delay-600 ${videoVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
              }`}
          >
            <div className="relative rounded-2xl overflow-hidden">
              {/* <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/20 rounded-full p-6 hover:bg-white/30 transition-colors cursor-pointer">
                  <Play className="w-12 h-12 text-white" fill="white" />
                </div>
              </div> */}
              <img
                src="/assets/A New Era for Retailers.png"
                className="w-full h-full object-cover mix-blend-overlay"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
