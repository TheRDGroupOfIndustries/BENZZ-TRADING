"use client";

import React from "react";
import {
  RiMedalLine,
  RiLightbulbLine,
  RiTrophyLine,
  RiTeamLine,
} from "react-icons/ri";

interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const benefits: Benefit[] = [
  {
    title: "13+ Years Experience",
    description:
      "Proven track record in financial markets with deep understanding of market dynamics and trading psychology.",
    icon: <RiMedalLine className="text-white text-4xl" />,
  },
  {
    title: "Simplified Learning",
    description:
      "Complex trading concepts explained in simple terms with practical examples and step-by-step guidance.",
    icon: <RiLightbulbLine className="text-white text-4xl" />,
  },
  {
    title: "Proven Results",
    description:
      "400+ successful learners who have transformed their trading journey and achieved consistent profitability.",
    icon: <RiTrophyLine className="text-white text-4xl" />,
  },
  {
    title: "Supportive Community",
    description:
      "Join a thriving community of traders with ongoing support, mentorship, and collaborative learning environment.",
    icon: <RiTeamLine className="text-white text-4xl" />,
  },
];

const WhyChooseSection: React.FC = () => {
  return (
    <section id="why-choose" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 font-montserrat">
            Why Choose BENZZ Trading
          </h2>
          <p className="text-xl text-gray-600">Your Success is Our Priority</p>
        </div>

        {/* Benefit Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center space-y-4">
              {/* Icon */}
              <div className="w-24 h-24 bg-[#2255d3] rounded-full flex items-center justify-center mx-auto">
                <div className="w-12 h-12 flex items-center justify-center">
                  {benefit.icon}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-gray-900">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
