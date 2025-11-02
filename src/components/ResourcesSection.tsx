
const ResourcesSection = () => {
  const resources = [
    {
      title: "How to Start a Free Online Store From Your Square Account",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "How to Increase Orders Through Your eCommerce Website",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: '"Cupcake Wars" Winner Uses Square to Double Online Sales',
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "The Future of Commerce",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
          Learn how to make it happen
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {resources.map((resource, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-square bg-gray-200 rounded-2xl mb-4 overflow-hidden">
                <img 
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium text-lg leading-tight group-hover:text-gray-700 transition-colors">
                {resource.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
