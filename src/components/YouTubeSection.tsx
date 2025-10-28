"use client";

import React from "react";
import { RiYoutubeFill } from "react-icons/ri";

const YouTubeSection: React.FC = () => {
  return (
    <section id="youtube" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <div className="space-y-4 mb-8">
          <h2 className="text-4xl font-bold text-gray-900 font-montserrat">
            Our YouTube Channel
          </h2>
          <p className="text-lg text-gray-600">
            100K+ Subscribers Learning Trading Daily
          </p>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              Daily Market Analysis & Trading Tips
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Join our thriving community of traders who rely on our daily
              market insights, technical analysis, and live trading sessions.
              Our YouTube channel has become the go-to resource for both
              beginners and experienced traders.
            </p>

            {/* Stats */}
            <div className="border-t border-gray-200 pt-8 grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-[#1e60ca]">100K+</div>
                <div className="text-sm text-gray-600 mt-1">Subscribers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#1e60ca]">500+</div>
                <div className="text-sm text-gray-600 mt-1">Videos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#1e60ca]">Daily</div>
                <div className="text-sm text-gray-600 mt-1">Updates</div>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="pt-8">
            <button
              onClick={() =>
                window.open("https://www.youtube.com/@benzztrading", "_blank")
              }
              className="cursor-pointer inline-flex items-center space-x-3 bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-all shadow-md hover:shadow-lg"
            >
              <RiYoutubeFill className="w-6 h-6" />
              <span>Watch Now</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
