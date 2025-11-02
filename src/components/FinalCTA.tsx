
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const socailMediaLink = [
    // {
    //   label: "Facebook",
    //   link: "https://www.facebook.com/"
    // },
    {
      label: "Instagram",
      link: "https://www.instagram.com/we.brocan/"
    },
    {
      label: "Youtube",
      link: "https://www.youtube.com/@brocan_tech"
    }
  ]
  return (
    <section className="bg-gray-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center flex-wrap">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Brocan
               {/* <span className="text-gray-600 text-lg font-semibold">by Brocan</span> */}
            </h2>
            <p className="text-gray-400 mt-2 mb-4">
              Stop Just Billing, Start Smart Selling
            </p>
            <div>
              {socailMediaLink.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white mr-4"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex space-x-4 py-8">
            {/* <a href="https://poketretail.brocan.in/" className="px-4 py-2 text-sm text-white border border-gray-200 rounded-lg">
              Create your site
            </a> */}
            <Button
              onClick={() => {
                const el = document.getElementById("contact-form");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white text-gray-900 hover:bg-gray-100">
              Contact sales
            </Button>
          </div>
        </div>
        <div>
          <p className="text-gray-600 mt-10 text-center text-[14px]">
            © 2025 Brocan Solutions, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
