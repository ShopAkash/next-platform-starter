'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from "@/components/Header";
import { brockman } from "@/lib/fonts";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  TrendingUp,
  Shield,
  Smartphone,
  BarChart3,
  Users,
  Calendar,
  GraduationCap,
  Calculator,
  Heart,
  CheckCircle,
  Star,
  ArrowRight,
  Sparkles
} from "lucide-react";
import FinalCTA from "./FinalCTA";
import ContactForm from "./ContactForm";
import StatsTestimonial from './StatsTestimonial';

export default function HomePage() {
  useEffect(() => {
    // Load Spline viewer script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.10.90/build/spline-viewer.js';
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className={`min-h-screen bg-white ${brockman.className}`}>
      <Header />

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.6 }}
        className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 min-h-[90vh] sm:min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white"
      >
        {/* Spline 3D Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <spline-viewer
            url="https://prod.spline.design/epQ32NRYHx69UZGe/scene.splinecode"
            style={{
              width: '100%',
              height: '100%',
              opacity: '0.8'
            }}
          />
        </div>

        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 w-full h-full z-[1]" 
          style={{
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.9) 100%, rgba(255,255,255,0.95) 50%, rgba(255,255,255,0.98) 25%, rgb(255,255,255) 0%)'
          }}
        />

        {/* Content Overlay */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 w-full max-w-7xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Badge className="mb-4 sm:mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200 text-xs sm:text-sm">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 animate-pulse" />
              AI-Powered Business Solutions
            </Badge>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-2"
          >
            Brocan – Powering Smarter,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient">
              Seamless Businesses
            </span>{" "}
            with AI
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4"
          >
            Stop Just Billing. Start Smart, AI-Driven Selling.
          </motion.p>
{/* 
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 max-w-md sm:max-w-none mx-auto"
          >
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-lg w-full sm:w-auto transition-all duration-300 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-blue-600 text-blue-600 hover:bg-blue-50 shadow-lg w-full sm:w-auto transition-all duration-300 hover:scale-105"
            >
              Watch Demo
            </Button>
          </motion.div> */}
        </motion.div>
      </motion.section>

      {/* One Platform Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 relative"
      >
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 md:mb-16 px-4"
          >
            <div className="mb-2">
              One Powerful Platform.
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Every Feature You Need.
            </div>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
            {/* Sell Smarter */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="p-4 sm:p-6 md:p-8 h-full bg-white border border-gray-200 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300">
                <CardContent className="space-y-4 sm:space-y-6">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto"
                  >
                    <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-green-600" />
                  </motion.div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Sell Smarter, Not Harder</h3>
                  <div className="space-y-3 sm:space-y-4 text-left">
                    <p className="text-sm sm:text-base text-gray-600">Unlock intelligent pricing and dynamic offers to attract bulk buyers, increase basket size, and maximize profit.</p>
                    <p className="text-sm sm:text-base text-gray-600">Show bestsellers, schedule banners, create categories, and trigger FOMO with time-limited sales—all optimized to convert visitors into loyal buyers.</p>
                    <p className="text-sm sm:text-base text-gray-600">Host flash sales and product drops using psychological triggers and persuasive pop-ups, driving urgency and boosting conversions.</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Control & Customize */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-4 sm:p-6 md:p-8 h-full bg-white border border-gray-200 hover:border-purple-500/50 hover:shadow-xl transition-all duration-300">
                <CardContent className="space-y-4 sm:space-y-6">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-purple-500/20 to-purple-500/10 rounded-full flex items-center justify-center mx-auto border border-purple-500/30"
                  >
                    <Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-purple-400" />
                  </motion.div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Control, Customize, and Win</h3>
                  <div className="space-y-3 sm:space-y-4 text-left">
                    <p className="text-sm sm:text-base text-gray-600">Launch premium shopping experiences in minutes—zero coding needed. Choose from customizable e-commerce themes crafted for online selling.</p>
                    <p className="text-sm sm:text-base text-gray-600">Monitor every item—track stock in/out, expiry, and real-time changes. Smart inventory flow means no guessing, no losses.</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Solutions Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-8 sm:mb-12 md:mb-16 px-4 leading-tight">
            Brocan Solutions: Where Technology Meets Real Business Needs
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-16">
            {/* Pocket Retail */}
            <Card className="p-4 sm:p-6 md:p-8 border-2 border-blue-200 hover:border-blue-400 transition-colors">
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Pocket Retail</h3>
                </div>
                <p className="text-base sm:text-lg text-gray-700 font-medium">Supercharge Retail Operations with AI Automations</p>
                <p className="text-sm sm:text-base text-gray-600">Manage inventory, GST billing, customer engagement, and sales analytics from a unified, cloud-based dashboard.</p>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-start text-gray-700">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Adaptive POS for every retail scenario</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Real-Time Analytics: actionable insights for accelerated growth</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Effortlessly connect your shop across devices</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">AI algorithms automate stock updates, suggest bestsellers, and optimize order processes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* PulseGym Pro */}
            <Card className="p-4 sm:p-6 md:p-8 border-2 border-purple-200 hover:border-purple-400 transition-colors">
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">PulseGym Pro</h3>
                </div>
                <p className="text-base sm:text-lg text-gray-700 font-medium">Modern Gym Management, Powered By AI</p>
                <p className="text-sm sm:text-base text-gray-600">Expand with multi-branch club management, automated member engagement, and smart workout planning.</p>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-start text-gray-700">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">All-in-One: class scheduling, memberships, staff & progress tracking</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Personalized fitness plans, nutrition advice, and instant growth analytics</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Smart automation handles daily admin, AI boosts retention</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Coming Soon Solutions */}
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 px-4">New Solutions Arriving Soon</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <Card className="p-4 sm:p-6 bg-gradient-to-br from-orange-50 to-orange-100">
                <CardContent className="text-center space-y-3 sm:space-y-4">
                  <GraduationCap className="w-10 h-10 sm:w-12 sm:h-12 text-orange-600 mx-auto" />
                  <h4 className="text-sm sm:text-base font-bold text-gray-900">School Management System</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Automate admissions, attendance, grading, and communication</p>
                </CardContent>
              </Card>

              <Card className="p-4 sm:p-6 bg-gradient-to-br from-green-50 to-green-100">
                <CardContent className="text-center space-y-3 sm:space-y-4">
                  <Calculator className="w-10 h-10 sm:w-12 sm:h-12 text-green-600 mx-auto" />
                  <h4 className="text-sm sm:text-base font-bold text-gray-900">Accounting System</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Automate bookkeeping, compliance tracking, GST invoicing</p>
                </CardContent>
              </Card>

              <Card className="p-4 sm:p-6 bg-gradient-to-br from-pink-50 to-pink-100">
                <CardContent className="text-center space-y-3 sm:space-y-4">
                  <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-pink-600 mx-auto" />
                  <h4 className="text-sm sm:text-base font-bold text-gray-900">Talking Stage</h4>
                  <p className="text-xs sm:text-sm text-gray-600">The Next-Gen Dating App with AI-matched profiles</p>
                </CardContent>
              </Card>

              <Card className="p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-blue-100">
                <CardContent className="text-center space-y-3 sm:space-y-4">
                  <BarChart3 className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mx-auto" />
                  <h4 className="text-sm sm:text-base font-bold text-gray-900">Custom Systems</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Bespoke business automation solutions</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Brocan Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 px-4">Why Brocan?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="space-y-3 sm:space-y-4 p-4">
              <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400 mx-auto" />
              <h3 className="text-lg sm:text-xl font-bold">Total Control</h3>
              <p className="text-sm sm:text-base text-gray-300">Centralize business operations and data</p>
            </div>
            <div className="space-y-3 sm:space-y-4 p-4">
              <Zap className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400 mx-auto" />
              <h3 className="text-lg sm:text-xl font-bold">AI That Works For You</h3>
              <p className="text-sm sm:text-base text-gray-300">Optimize processes with intelligent automation</p>
            </div>
            <div className="space-y-3 sm:space-y-4 p-4">
              <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-green-400 mx-auto" />
              <h3 className="text-lg sm:text-xl font-bold">Faster, Cheaper, Smarter</h3>
              <p className="text-sm sm:text-base text-gray-300">Reduce costs, accelerate your growth</p>
            </div>
            <div className="space-y-3 sm:space-y-4 p-4">
              <Users className="w-10 h-10 sm:w-12 sm:h-12 text-purple-400 mx-auto" />
              <h3 className="text-lg sm:text-xl font-bold">Dedicated Partnership</h3>
              <p className="text-sm sm:text-base text-gray-300">Ongoing expert support and training</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {/* <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-8 sm:mb-12 md:mb-16 px-4">
            Plans That Grow With You
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <Card className="p-4 sm:p-6 md:p-8 border-2 border-gray-200">
              <CardContent className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Free</h3>
                  <p className="text-sm sm:text-base text-gray-600 mt-2">Perfect for getting started</p>
                  <div className="mt-3 sm:mt-4">
                    <span className="text-2xl sm:text-3xl font-bold">Free</span>
                    <span className="text-sm sm:text-base text-gray-600"> for 3 months</span>
                  </div>
                </div>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Website builder</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base">POS sync</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Local delivery</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Customer accounts</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Social selling</span>
                  </li>
                </ul>
                <Button className="w-full text-sm sm:text-base py-2 sm:py-3">Start Free</Button>
              </CardContent>
            </Card>

            <Card className="p-4 sm:p-6 md:p-8 border-2 border-blue-500 relative">
              <Badge className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs sm:text-sm">
                Most Popular
              </Badge>
              <CardContent className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Plus</h3>
                  <p className="text-sm sm:text-base text-gray-600 mt-2">For growing businesses</p>
                  <div className="mt-3 sm:mt-4">
                    <span className="text-2xl sm:text-3xl font-bold">₹2,499</span>
                    <span className="text-sm sm:text-base text-gray-600">/month</span>
                  </div>
                </div>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Advanced website themes</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Subscriptions</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Expanded customization</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Free domain</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-sm sm:text-base py-2 sm:py-3">Choose Plus</Button>
              </CardContent>
            </Card>

            <Card className="p-4 sm:p-6 md:p-8 border-2 border-gray-200">
              <CardContent className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Premium</h3>
                  <p className="text-sm sm:text-base text-gray-600 mt-2">For enterprise needs</p>
                  <div className="mt-3 sm:mt-4">
                    <span className="text-2xl sm:text-3xl font-bold">₹4,999</span>
                    <span className="text-sm sm:text-base text-gray-600">/month</span>
                  </div>
                </div>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Real-time shipping rates</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Lower processing fees</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Premium support</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Advanced analytics</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full text-sm sm:text-base py-2 sm:py-3">Choose Premium</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Testimonial Section */}
      {/* <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-4 sm:mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-current" />
            ))}
          </div>
          <blockquote className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6 sm:mb-8 italic px-4 leading-relaxed">
            "Brocan completely transformed my kirana store. Online orders started pouring in, and the loyalty program keeps my regulars excited for more. I can finally compete with big supermarkets!"
          </blockquote>
          <div className="space-y-1 sm:space-y-2">
            <p className="text-base sm:text-lg font-bold text-gray-900">Sunita Agarwal</p>
            <p className="text-sm sm:text-base text-gray-600">Agarwal Kirana | Lucknow, Uttar Pradesh</p>
          </div>
        </div>
      </section> */}

      <StatsTestimonial />

      {/* Final CTA */}
      {/* <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4 leading-tight">
            Experience the Future of Business Management
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 px-4">
            With Brocan, AI is not just a buzzword—it's your new advantage.
          </p>
          <p className="text-base sm:text-lg mb-8 sm:mb-12 opacity-80 px-4 leading-relaxed">
            Let us show you how seamless, cost-effective automation transforms business performance. Connect now to build smarter, scalable solutions—faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 max-w-md sm:max-w-none mx-auto">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto">
              Schedule Demo
            </Button>
          </div>
          <p className="mt-6 sm:mt-8 text-base sm:text-lg font-medium px-4">
            Stop Just Billing. Start Smart Selling.
          </p>
        </div>
      </section> */}

      <ContactForm />

      <FinalCTA />

    </div>
  );
}