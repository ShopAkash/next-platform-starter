
import { Bell, Calendar, Package, Store, Trophy, Truck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ShippingSection = () => {
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.12 });

  return (
    <section
      ref={sectionRef}
      className={`bg-white py-20 my-20 left transition-all duration-1000 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Stay Connected. <br/>
          Keep Clients Engaged.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-gray-600" />
            </div>
            <h3 className="text-xl font-medium mb-4">Automatically notify clients of upcoming renewals, expiring plans, or account changes.</h3>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Bell className="w-8 h-8 text-gray-600" />
            </div>
            <h3 className="text-xl font-medium mb-4">Send real-time notifications for upcoming events, announcements, or special promotions right to your clients’ phones.</h3>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
            <Trophy className="w-8 h-8 text-gray-600" />
            </div>
            <h3 className="text-xl font-medium mb-4">Congratulate members on achievements, birthdays, or fitness milestones to drive loyalty and retention.</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShippingSection;
