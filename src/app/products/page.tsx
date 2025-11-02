"use client";

import React from 'react';
import Header from '@/components/Header';
import FinalCTA from '@/components/FinalCTA';
import { Button } from '@/components/ui/button';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8">Our Products</h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Discover our comprehensive suite of retail management solutions.
        </p>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">POS System</h3>
                <p className="text-gray-600 mb-4">
                  A modern point-of-sale system designed for seamless transactions and inventory management.
                </p>
                <Button className="w-full">Learn More</Button>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Inventory Management</h3>
                <p className="text-gray-600 mb-4">
                  Real-time inventory tracking and management system for optimal stock control.
                </p>
                <Button className="w-full">Learn More</Button>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">E-commerce Integration</h3>
                <p className="text-gray-600 mb-4">
                  Seamlessly connect your physical store with your online presence.
                </p>
                <Button className="w-full">Learn More</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <h3 className="text-xl font-bold mb-4">Cloud-Based</h3>
              <p className="text-gray-600">Access your data anywhere, anytime</p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-bold mb-4">Scalable</h3>
              <p className="text-gray-600">Grows with your business</p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-bold mb-4">Secure</h3>
              <p className="text-gray-600">Enterprise-grade security</p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-bold mb-4">Integrated</h3>
              <p className="text-gray-600">Works with your existing tools</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Starter</h3>
              <p className="text-4xl font-bold mb-6">$99<span className="text-lg text-gray-600">/mo</span></p>
              <ul className="mb-8 space-y-4">
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Basic POS features
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Inventory management
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  24/7 support
                </li>
              </ul>
              <Button className="w-full">Get Started</Button>
            </div>

            {/* Professional Plan */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-blue-500">
              <h3 className="text-2xl font-bold mb-4">Professional</h3>
              <p className="text-4xl font-bold mb-6">$199<span className="text-lg text-gray-600">/mo</span></p>
              <ul className="mb-8 space-y-4">
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  All Starter features
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Advanced analytics
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Multi-location support
                </li>
              </ul>
              <Button className="w-full">Get Started</Button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <p className="text-4xl font-bold mb-6">Custom</p>
              <ul className="mb-8 space-y-4">
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  All Professional features
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Custom integrations
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Dedicated support
                </li>
              </ul>
              <Button className="w-full">Contact Sales</Button>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}