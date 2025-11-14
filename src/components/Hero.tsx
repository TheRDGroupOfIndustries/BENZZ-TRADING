"use client";

import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://readdy.ai/api/search-image?query=Professional%20financial%20trading%20workspace%20with%20modern%20blue%20and%20silver%20color%20scheme%2C%20clean%20minimal%20background%20with%20subtle%20chart%20patterns%2C%20sophisticated%20business%20environment%2C%20high-end%20trading%20floor%20atmosphere%2C%20gradient%20blue%20lighting%20effects%2C%20professional%20photography%20style%2C%20ultra-modern%20design&width=1920&height=1080&seq=hero001&orientation=landscape')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content: logo + text stacked, left-aligned along same vertical axis */}
          <div className="space-y-8">
            <div className="space-y-4">
              {/* Removed duplicate/overlay logo per request */}
              <h1 className="text-4xl font-bold text-gray-900 font-montserrat leading-tight">
                Master the Market with Confidence
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your trading journey with expert guidance from Shubham
                Gupta. 13+ years of experience, 400+ successful learners, and
                proven strategies for Indian &amp; global markets.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="cursor-pointer bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold bg-[#1E40AF] hover:bg-[#1d4ed8] transition-colors whitespace-nowrap">
                Start Learning
              </button>

              <button className="cursor-pointer border-2 border-primary text-primary px-8 py-4 rounded-lg text-blue-700 text-lg font-semibold hover:bg-primary hover:bg-[#1e40af] hover:text-white transition-colors whitespace-nowrap">
                Consult Now
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-user-line text-primary" />
                </div>
                <span>400+ Learners</span>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-time-line text-primary" />
                </div>
                <span>13+ Years Experience</span>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-global-line text-primary" />
                </div>
                <span>Global Markets</span>
              </div>
            </div>
          </div>

          {/* Right side image or extra content could go here if needed */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
