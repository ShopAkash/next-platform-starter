
import { Smartphone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ShoppingExperience = () => {
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.12 });

  return (
    <section
      ref={sectionRef}
      className={`py-20 lg:py-40 bg-gray-950 transition-all duration-1000 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img className="rounded-lg" src="/assets/Smarter-Fitness-with-Artificial-Intelligence.webp" />
          </div>

          <div className="flex flex-col items-center justify-between h-full content-start">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Smarter Fitness with Artificial Intelligence
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-white text-lg mb-3">Personalized Exercise Plans</h3>
                <p className="text-gray-200/80 text-lg">
                  Instantly create tailored workout plans based on each client’s goals, fitness level, and medical history.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white text-lg mb-3">Customized Nutrition Guidance</h3>
                <p className="text-gray-200/80 text-lg">
                  Generate science-based meal plans for clients, factoring in their activity levels and dietary needs.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white text-lg mb-3">Progress Tracking</h3>
                <p className="text-gray-200/80 text-lg">
                  Monitor client progress with automated reports and visualizations. Celebrate milestones and send motivation when needed.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white text-lg mb-3">Health & Safety</h3>
                <p className="text-gray-200/80 text-lg">
                  AI-driven algorithms watch for warning signs in client reports and help prevent injuries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingExperience;
