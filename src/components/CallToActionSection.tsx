"use client";

import React from "react";
import { RiPhoneLine, RiMailLine, RiYoutubeLine } from "react-icons/ri";

const CallToActionSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-[#244dbd] relative overflow-hidden">
      {/* Decorative pattern background */}
      <div className="absolute inset-0 chart-pattern opacity-10" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white font-montserrat leading-tight">
          Begin Your Trading Journey Today
        </h2>

        {/* Description */}
        <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
          Join thousands of successful traders who have transformed their
          financial future with <span className="font-semibold">BENZZ Trading</span>. 
          Start with expert guidance and proven strategies.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="cursor-pointer bg-white text-[#1e40af] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#f3f4f6] transition-colors whitespace-nowrap">
            Start Free Trial
          </button>
          <button className="cursor-pointer border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#1e40af] hover:text-primary transition-colors whitespace-nowrap">
            Schedule Consultation
          </button>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-blue-100">
          {/* Phone */}
          <div className="flex items-center space-x-2">
            <RiPhoneLine className="w-5 h-5" />
            <span>+91 87267 74263</span>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-2">
            <RiMailLine className="w-5 h-5" />
            <span>info@benzztrading.com</span>
          </div>

          {/* YouTube */}
          <div className="flex items-center space-x-2">
            <RiYoutubeLine className="w-5 h-5" />
            <span>BENZZ Trading</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
