'use client';

import Header from '@/components/Header';
import FinalCTA from '@/components/FinalCTA';

export default function AboutPageContent() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8">About Brocan</h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Empowering businesses with innovative retail solutions since 2020.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-600 mb-6">
                Founded with a vision to revolutionize retail technology, Brocan has grown from a small startup to a leading provider of integrated retail solutions. Our journey began with a simple mission: to make retail operations seamless and efficient for businesses of all sizes.
              </p>
              <p className="text-gray-600">
                Today, we serve hundreds of retailers worldwide, helping them streamline their operations and deliver exceptional shopping experiences to their customers.
              </p>
            </div>
            <div className="relative h-64 md:h-auto">
              {/* Add an appropriate image here */}
              <div className="absolute inset-0 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously push the boundaries of what's possible in retail technology.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p className="text-gray-600">
                We are committed to delivering the highest quality solutions to our clients.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-bold mb-4">Customer Focus</h3>
              <p className="text-gray-600">
                Our clients' success is our success. We put their needs first in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Add team member components here */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="font-bold">John Doe</h3>
              <p className="text-gray-600">CEO</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}