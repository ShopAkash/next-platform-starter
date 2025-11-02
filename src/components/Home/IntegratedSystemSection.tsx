
import { BarChart3, Users, Package } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const IntegratedSystemSection = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>();
  const { elementRef: section1Ref, isVisible: section1Visible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: section2Ref, isVisible: section2Visible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: section3Ref, isVisible: section3Visible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className={`text-4xl md:text-5xl text-left md:text-center font-bold text-white mb-6 transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            Everything You Need<br />
            All in One Place
          </h2>
        </div>

        <div
          ref={section1Ref}
          className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center transition-all duration-1000 ${section1Visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
        >
          {/* Connect sales section */}
          <div className="relative">
            <img
              src="/assets/Keep-everything-in-one-place.webp"
              alt="Keep everything in one place"
              className="rounded-2xl w-full"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Keep everything in one place
            </h3>
            <p className="text-white/80 text-lg mb-8">
              Connect your gym’s in-person activities with digital records to stay fully organized—without juggling multiple systems.
            </p>
          </div>
        </div>

        <div
          ref={section2Ref}
          className={`grid lg:grid-cols-2 gap-16 items-center mt-20 transition-all duration-1000 delay-200 ${section2Visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
        >
          <div className="lg:order-2">
            <img
              src="/assets/Run-Your-Gym-the-Smart-Way.webp"
              alt="Run Your Gym the Smart Way"
              className="rounded-2xl w-full"
            />
          </div>

          <div className="lg:order-1">
            <h3 className="text-2xl font-bold text-white mb-4">
              Run Your Gym the Smart Way
            </h3>
            <p className="text-white/80 text-lg mb-8">
              Everything you need to manage equipment, staff, client memberships, and gym check-ins—right from your phone. No tech skills or complex setup needed.
            </p>
          </div>
        </div>

        <div
          ref={section3Ref}
          className={`grid lg:grid-cols-2 gap-16 items-center mt-20 transition-all duration-1000 delay-400 ${section3Visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
        >
          <div className="relative">
            <img
              src="/assets/Grow-your-gym-with-smarter-packages.webp"
              className="rounded-2xl w-full"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
            Grow your gym with smarter packages
            </h3>
            <p className="text-white/80 text-lg mb-8">
            Create flexible membership packages—monthly, quarterly, annual—designed to attract new clients and reward loyalty.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegratedSystemSection;
