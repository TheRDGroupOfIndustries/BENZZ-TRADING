"use client";

import React from "react";
import { 
  RiLineChartLine, 
  RiStockLine, 
  RiFundsLine, 
  RiPieChartLine, 
  RiGlobalLine 
} from "react-icons/ri";

interface Course {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const courses: Course[] = [
  {
    title: "Intraday Trading",
    description:
      "Master the art of day trading with proven strategies, technical analysis, and risk management techniques for consistent profits.",
    icon: <RiLineChartLine className="text-primary text-2xl" />,
  },
  {
    title: "Swing Trading",
    description:
      "Learn to capture medium-term price movements with strategic position sizing and trend analysis for sustainable growthand Gain the skills.",
    icon: <RiStockLine className="text-primary text-2xl" />,
  },
  {
    title: "Futures Trading",
    description:
      "Understand derivatives markets, leverage management, and advanced strategies for futures and commodities trading Master the art of analyzing market trends.",
    icon: <RiFundsLine className="text-primary text-2xl" />,
  },
  {
    title: "Options Trading",
    description:
      "Master complex options strategies, Greeks analysis, and volatility trading for advanced portfolio management.",
    icon: <RiPieChartLine className="text-primary text-2xl" />,
  },
  {
    title: "Global Markets",
    description:
      "Explore international markets, forex trading, and global investment opportunities for portfolio diversification.",
    icon: <RiGlobalLine className="text-primary text-2xl" />,
  },
];

const CoursesSection: React.FC = () => {
  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 font-montserrat">
            Trading Courses
          </h2>
          <p className="text-xl text-gray-600">
            Master Every Aspect of Financial Markets
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-[#e8ecf7] rounded-xl flex items-center justify-center mb-6">
                <div className="w-8 h-8 flex text-[#1e40b6] items-center justify-center">
                  {course.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {course.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {course.description}
              </p>
              <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold  bg-[#1E40AF] hover:bg-[#1d4ed8] transition-colors whitespace-nowrap">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
