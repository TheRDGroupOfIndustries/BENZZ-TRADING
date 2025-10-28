"use client";

import React, { useState, useEffect } from "react";
import { RiStarFill } from "react-icons/ri";
import Image from "next/image";

interface Testimonial {
  name: string;
  role: string;
  image: string;
  feedback: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Rajesh Kumar",
    role: "Software Engineer",
    image: "/testimonials/1.jpg",
    feedback:
      "Shubham's teaching methodology is exceptional. Within 6 months, I went from being a complete beginner to making consistent profits in intraday trading. His practical approach and risk management techniques have been game-changing for me.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Financial Analyst",
    image: "/testimonials/2.jpg",
    feedback:
      "The options trading course completely transformed my understanding of derivatives. Shubham's expertise in explaining complex Greeks and volatility strategies is unmatched. I now manage a profitable options portfolio with confidence.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "Business Owner",
    image: "/testimonials/3.jpg",
    feedback:
      "As a business owner, I needed to diversify my investments. Shubham's swing trading strategies have helped me build a substantial secondary income stream. His market insights are incredibly accurate and actionable.",
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Header */}
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl font-bold text-gray-900 font-montserrat">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600">
            Success Stories from Our Trading Community
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="min-w-full flex justify-center px-4"
              >
                <div className="bg-white rounded-2xl shadow-lg p-8 max-w-full text-left">
                  <div className="flex items-center space-x-4 mb-6">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={64}
                      height={64}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-bold text-gray-900">{t.name}</div>
                      <div className="text-sm text-gray-600">{t.role}</div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4 text-base italic">
                    “{t.feedback}”
                  </p>
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <RiStarFill key={i} className="text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "bg-[#2255d3] scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
