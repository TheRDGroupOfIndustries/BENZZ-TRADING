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

        {/* Services Grid - card style similar to reference (left aligned, pale background, square icon) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-md transition-shadow flex flex-col h-full"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white rounded-md flex items-center justify-center shadow-sm">
                  <div className="text-[#1e40af] text-2xl">
                    {service.icon}
                  </div>
                </div>

                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                </div>
              </div>

              <div className="mt-6 text-left text-gray-600 leading-relaxed flex-1">
                {service.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
