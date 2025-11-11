"use client";

import React from "react";
import {
  RiGraduationCapLine,
  RiBriefcaseLine,
  RiBarChartLine,
  RiCurrencyLine,
  RiFundsLine,
} from "react-icons/ri";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: "Professional Training",
    description:
      "Comprehensive courses designed for beginners to advanced traders with hands-on practice and real market scenarios.",
    icon: <RiGraduationCapLine className="text-primary text-3xl" />,
  },
  {
    title: "Portfolio Management",
    description:
      "Professional portfolio management services with personalized strategies based on your risk profile and financial goals.",
    icon: <RiBriefcaseLine className="text-primary text-3xl" />,
  },
  {
    title: "Market Insights",
    description:
      "Daily market analysis, technical research reports, and trading recommendations to keep you ahead of market movements.",
    icon: <RiBarChartLine className="text-primary text-3xl" />,
  },
  {
    title: "Crypto Guidance",
    description:
      "Navigate the cryptocurrency markets with expert guidance on blockchain technology, DeFi, and digital asset trading.",
    icon: <RiCurrencyLine className="text-primary text-3xl" />,
  },
  {
    title: "360 Financial Solutions",
    description:
      "Holistic financial planning, advisory, risk management and portfolio solutions.",
    icon: <RiFundsLine className="text-primary text-3xl" />,
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-10 bg-white">
      <div className="max-w-screen-2xl mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 font-montserrat">
            Our Services
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive Trading Solutions
          </p>
        </div>

        {/* Services Row - all cards in a single row without scrolling */}
        <div className="flex gap-10 flex-nowrap items-stretch">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1 min-w-0 md:flex-[0_0_18%] bg-white border border-gray-200 rounded-xl p-15 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-26 h-26 bg-[#e8ecf7] rounded-full flex items-center justify-center mx-auto mb-8">
                <div className="w-20 text-[#1e40af] h-12 flex items-center justify-center text-4xl">
                  {service.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
