"use client";

import React from "react";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900 font-montserrat">
                Meet Shubham Gupta
              </h2>
              <p className="text-xl text-gray-600">Your Trusted Trading Mentor</p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                With over 13 years of hands-on experience in the financial
                markets, Shubham Gupta has established himself as a leading
                authority in trading education. His expertise spans across
                Indian equity markets, global forex, commodities, and
                cryptocurrency trading.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Having successfully trained 400+ individuals, Shubham&apos;s
                teaching methodology focuses on practical application, risk
                management, and building sustainable trading strategies that
                work in real market conditions.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-[#1e40af] font-montserrat">
                  13+
                </div>
                <div className="text-gray-600 font-medium">Years Trading</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-[#1e40af] font-montserrat">
                  400+
                </div>
                <div className="text-gray-600 font-medium">Trained Learners</div>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <Image
              src="/self.png"
              alt="Shubham Gupta"
              width={600}
              height={700}
              className="w-full h-auto rounded-2xl shadow-2xl object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#1e40af] text-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold ">Market Expert</div>
              <div className="text-sm opacity-90">Since 2010</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
