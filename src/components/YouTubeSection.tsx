"use client";

import React from "react";
import Image from "next/image";
import { RiYoutubeFill, RiPlayFill } from "react-icons/ri";

const YouTubeSection: React.FC = () => {
  return (
    <section id="youtube" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 font-montserrat">
            Our YouTube Channel
          </h2>
          <p className="text-xl text-gray-600">
            100K+ Subscribers Learning Trading Daily
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Daily Market Analysis & Trading Tips
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Join our thriving community of traders who rely on our daily market
                insights, technical analysis, and live trading sessions. Our YouTube
                channel has become the go-to resource for both beginners and
                experienced traders.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">100K+</div>
                  <div className="text-sm text-gray-600">Subscribers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-gray-600">Videos</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">Daily</div>
                  <div className="text-sm text-gray-600">Updates</div>
                </div>
              </div>
            </div>

            {/* Button */}
            <button 
            onClick={() => window.open("https://www.youtube.com/@benzztrading", "_blank")}
            className="cursor-pointer bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors whitespace-nowrap flex items-center space-x-2">
              <RiYoutubeFill className="w-6 h-6" />
              <span>Watch Now</span>
            </button>
          </div>

          {/* Right Video Thumbnail */}
          <div className="relative">
            <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl relative">
              <Image
                src="/YouTubeSection/1.jpg"
                alt="YouTube Video Preview"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button  onClick={() => window.open("https://www.youtube.com/@benzztrading", "_blank")}>
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg hover:bg-red-700 transition-colors cursor-pointer">
                  <RiPlayFill className="text-white text-3xl ml-1" />
                </div>
                </button>
              </div>
            </div>

            {/* LIVE Badge */}
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2 text-red-600">
                <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">LIVE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
