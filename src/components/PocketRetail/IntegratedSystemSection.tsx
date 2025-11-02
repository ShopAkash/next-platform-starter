
import { BarChart3, Users, Package } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const IntegratedSystemSection = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>();
  const { elementRef: section1Ref, isVisible: section1Visible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: section2Ref, isVisible: section2Visible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: section3Ref, isVisible: section3Visible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: section4Ref, isVisible: section4Visible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: section5Ref, isVisible: section5Visible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            One Powerful Platform.<br />Every Feature You Need.
          </h2>
        </div>

        <div
          ref={section1Ref}
          className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${section1Visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
        >
          {/* Connect sales section */}
          <div className="relative">
            <img
              src="/assets/Sell-Smarter-Not-Harder.png"
              alt="Sell Smarter, Not Harder"
              className="rounded-2xl w-full"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Sell Smarter, Not Harder
            </h3>
            <p className="text-gray-600 text-lg mb-8">
              Unlock intelligent pricing—like “1 for ₹10, 12 for ₹100”—to attract bulk buyers, increase basket size, and maximize profit on every order.<br />
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
              src="/assets/Your-Store-Your-Design-Zero-Coding.png"
              alt="Your Store, Your Design, Zero Coding"
              className="rounded-2xl w-full"
            />
          </div>

          <div className="lg:order-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Your Store, Your Design, Zero Coding
            </h3>
            <p className="text-gray-600 text-lg mb-8">
              Choose from stunning, customizable e-commerce themes designed to sell more. Launch a premium shopping experience in minutes—zero tech skills required. <br />
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
              src="/assets/Control-Customize-and-Win.png"
              alt="Control, Customize, and Win"
              className="rounded-2xl w-full"
            />
          </div>

          <div className="lg:order-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Control, Customize, and Win
            </h3>
            <p className="text-gray-600 text-lg mb-8">
              Showcase bestsellers, schedule eye-catching banners, create new categories, and time limited sales events—every click designed to convert more visitors into loyal buyers.<br />
            </p>
          </div>
        </div>

        <div
          ref={section4Ref}
          className={`grid lg:grid-cols-2 gap-16 items-center mt-20 transition-all duration-1000 delay-200 ${section4Visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
        >
          <div className="lg:order-2">
            <img
              src="/assets/Drive-Urgency-Trigger-FOMO-Sell-More.png"
              alt="Drive Urgency. Trigger FOMO. Sell More."
              className="rounded-2xl w-full"
            />
          </div>

          <div className="lg:order-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Drive Urgency. Trigger FOMO. Sell More.
            </h3>
            <p className="text-gray-600 text-lg mb-8">
              Plan flash sales and product drops. Run time-sensitive offers and countdowns to ignite urgency.
              Boost conversions effortlessly with psychology-backed prompts and dynamic pop-ups.<br />
            </p>
          </div>
        </div>

        <div
          ref={section5Ref}
          className={`grid lg:grid-cols-2 gap-16 items-center mt-20 transition-all duration-1000 delay-400 ${section5Visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
        >
          <div className="relative">
            <img
              src="/assets/Total-Inventory-Control-Peace-of-Mind.png"
              alt="Total Inventory Control = Peace of Mind"
              className="rounded-2xl w-full"
            />
          </div>

          <div className="lg:order-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Total Inventory Control = Peace of Mind
            </h3>
            <p className="text-gray-600 text-lg mb-8">
              Monitor every item—track stock in/out, expiry dates, and all changes in real time.
              No more guessing, no more losses, just smart inventory flow.<br />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegratedSystemSection;
