"use client";

import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-[#1e40af] font-montserrat">BENZZ</span>
            <span className="text-2xl font-bold text-[#64748b] font-montserrat">TRADING</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#about"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="#courses"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Courses
            </Link>
            <Link
              href="#services"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="#testimonials"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Reviews
            </Link>
            <button className="bg-primary text-white px-6 py-2 rounded-button hover:bg-blue-700 transition-colors whitespace-nowrap">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
