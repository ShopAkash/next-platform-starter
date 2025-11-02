import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Plans That Grow With You
          </h2>
          {/* The "Learn more" button is not explicitly in the new design's header, 
              but keeping it here for consistency if needed elsewhere. 
              If it should be removed, delete this button. */}
          <Button variant="outline" className="hidden lg:inline-flex">
            Learn more
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 flex flex-col">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Free</h3>
              <p className="text-gray-600 mb-6">
                Launch online in minutes
              </p>
              <div className="text-5xl font-bold mb-2">₹0</div>
              <div className="text-gray-600 mb-2">Free for 3 months</div>
            </div>
            <Button variant="outline" className="w-full mt-auto">
              Start for free
            </Button>
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Includes:</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" /> Website builder with SEO tools
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" /> Sync with PocketRetail POS and more
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" /> Pickup, local delivery & shipping
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" /> Customer accounts
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" /> Sell on social
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" /> Accept multiple payment types
                </li>
              </ul>
            </div>
          </div>

          {/* Plus Plan */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 relative flex flex-col">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
              Recommended
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Plus</h3>
              <p className="text-gray-600 mb-6">
                Accelerate growth
              </p>
              <div className="text-5xl font-bold mb-2">₹2499<span className="text-xl">/mo</span></div>
              <div className="text-gray-600 mb-2">1 monthly fees</div>
            </div>
            <Button variant="default" className="w-full bg-black text-white hover:bg-gray-800 mt-auto">
              Get started
            </Button>
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Includes:</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" /> All Free plan features
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" /> Website themes
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" /> Expanded site customization
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" /> Advanced item settings
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" /> Subscriptions
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" /> Free domain for 1 year
                </li>
              </ul>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 flex flex-col">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Premium</h3>
              <p className="text-gray-600 mb-6">
                Start Your Smart Selling Journey Now
              </p>
              <div className="text-5xl font-bold mb-2">₹4999<span className="text-xl">/mo</span></div>
              <div className="text-gray-600 mb-2">1 monthly fees</div>
            </div>
            <Button variant="default" className="w-full bg-black text-white hover:bg-gray-800 mt-auto">
              Get started
            </Button>
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Includes:</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" /> All Plus plan features
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" /> Lower processing rate
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" /> Real-time shipping rates
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" /> Premium customer support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;