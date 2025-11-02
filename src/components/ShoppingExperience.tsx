
import { Smartphone } from "lucide-react";

const ShoppingExperience = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src="/assets/Unlock-Premium-Shopping-Experiences-That-Convert.png" />
          </div>

          <div className="flex flex-col items-center justify-between h-full content-start">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Unlock Premium Shopping Experiences That Convert
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-3">Instant Store Customization</h3>
                <p className="text-gray-600">
                  Put your bestselling products front-and-center. Add banners and create irresistible categories in seconds.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">Trigger Urgency - Drive More Sales</h3>
                <p className="text-gray-600">
                  Launch limited-time deals with persuasive pop-ups and banners, maximizing buying intent when it matters most.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">Smart Inventory – No Guesswork</h3>
                <p className="text-gray-600">
                  Track every stock movement, expiry, and adjustment in real time. Stay ahead with auto-restock alerts.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">Schedule Hype, Sell Out Fast</h3>
                <p className="text-gray-600">
                  Plan dramatic product drops and flash sales. Turbo-charge engagement through eye-catching notifications.
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
