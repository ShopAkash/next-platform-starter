'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Textarea } from "@/components/ui/textarea";
import { db } from "@/config/firebase"; // <-- Import Firestore db
import { collection, addDoc } from "firebase/firestore"; // <-- Import Firestore methods

const ContactForm = () => {
  const { elementRef: formRef, isVisible: formVisible } = useScrollAnimation<HTMLDivElement>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "", // <-- Add message field
    agreeToTexts: false
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "contacts"), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        agreeToTexts: formData.agreeToTexts,
        createdAt: new Date()
      });
      alert("Form submitted!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        agreeToTexts: false
      });
    } catch (error) {
      alert("Error submitting form");
      console.error(error);
    }
    setLoading(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      agreeToTexts: checked
    }));
  };

  return (
    <section id="contact-form" className="bg-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Information */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's get you set up.
            </h2>
            <p className="text-gray-600 mb-8">
              Answer a few questions to connect with our team right away and find out if your business qualifies.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Managing your fitness club is easy with Brocan Gym Management. We help you improve member results, optimize staff productivity, and join the digital fitness revolution.
              </h3>
              {/* <div className="flex items-center space-x-6 opacity-60">
                <span className="text-lg font-bold">Rawlings</span>
                <span className="text-lg font-bold">crudo</span>
                <span className="text-lg font-bold">Milwaukee</span>
                <span className="text-lg font-bold">H MART</span>
              </div> */}
            </div>

            <div className="text-sm text-gray-600">
              <p className="mb-2"><strong>Are you an existing customer?</strong></p>
              <p>
                Visit the <a href="#" className="text-blue-600 underline">Support Center</a> to view articles, guides and video tutorials.
              </p>
            </div>
          </div>

          {/* Right side - Form */}
          <div 
            ref={formRef}
            className={`bg-white rounded-lg hover:shadow-lg p-8 transition-all duration-1000 ${
              formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Information</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="hi@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  Phone *
                </Label>
                <div className="mt-1 flex">
                  <select className="px-3 py-2 border border-r-0 border-gray-300 bg-gray-50 text-sm rounded-l-md">
                    <option>+ 91</option>
                  </select>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="9999 999 999"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="rounded-l-none flex-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Full Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-1"
                />
              </div>

              <div className="flex items-center space-x-3">
                <Checkbox 
                  id="agreeToTexts"
                  checked={formData.agreeToTexts}
                  onCheckedChange={handleCheckboxChange}
                  className="mt-1"
                />
                <Label htmlFor="agreeToTexts" className="text-xs text-gray-600 leading-tight">
                  Click Continue to confirm
                </Label>
              </div>

              <Button 
                type="submit" 
                className={`w-full bg-black text-white hover:bg-gray-800 py-3 ${!formData.agreeToTexts || loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={!formData.agreeToTexts || loading}
              >
                {loading ? "Submitting..." : "Continue"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;