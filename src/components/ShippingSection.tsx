
import { Package, Store, Truck } from "lucide-react";

const ShippingSection = () => {
  return (
    <section className="bg-white py-20 my-20 left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Your Store, Your Way
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Home Delivery? Click & Collect? In-Store Pickup? – We’ve Got You Covered
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Truck className="w-8 h-8 text-gray-600" />
            </div>
            <h3 className="text-xl font-medium mb-4">Get orders delivered lightning-fast to the customer’s door</h3>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Package className="w-8 h-8 text-gray-600" />
            </div>
            <h3 className="text-xl font-medium mb-4">Let shoppers order online, pick up in store—no lines, no waiting</h3>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Store className="w-8 h-8 text-gray-600" />
            </div>
            <h3 className="text-xl font-medium mb-4">Cater to classic customers: walk in, browse, and enjoy</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShippingSection;
