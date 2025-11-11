"use client";

import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <div className="flex px-8 items-center">
            <img src="/logo.png" alt="BENZZ TRADING" className="h-10 sm:h-12" />
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
            <button
              onClick={() => {
                const section = document.getElementById("contact");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-[#1e40af] text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-[#1d4ed8] transition-colors whitespace-nowrap"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
