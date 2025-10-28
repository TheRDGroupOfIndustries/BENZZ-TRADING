"use client";

import React from "react";
import {
  RiGraduationCapLine,
  RiBriefcaseLine,
  RiBarChartLine,
  RiCurrencyLine,
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
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 font-montserrat">
            Our Services
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive Trading Solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-20 h-20 bg-[#e8ecf7] rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-10 text-[#1e40af] h-10 flex items-center justify-center">
                  {service.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
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
