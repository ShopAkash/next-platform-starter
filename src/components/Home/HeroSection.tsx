import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>();
  const { elementRef: buttonsRef, isVisible: buttonsVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section className="py-20 lg:py-32 bg-[url('https://images.unsplash.com/photo-1623874514711-0f321325f318?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-cover bg-center bg-gray-600/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8 text-gray-900 bg-white inline-block px-4 py-1 rounded-full text-sm font-medium">
            <span>Brocan Empowers Gyms</span>
          </div>
          <h1
            ref={titleRef}
            className={`text-4xl md:text-6xl lg:text-7xl font-bold text-gray-100 mb-8 leading-tight transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            Manage Your Gym<br />
            Boost Gym Visibility
          </h1>
          <div
            ref={buttonsRef}
            className={`flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16 transition-all duration-1000 delay-300 ${buttonsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <Button
              size="lg"
              className="px-8 py-3 text-lg bg-white text-gray-900 hover:bg-gray-100"
              onClick={() => {
                const el = document.getElementById("contact-form");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};


export default HeroSection