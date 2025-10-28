"use client";

import React from "react";
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiTwitterFill,
} from "react-icons/ri";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Footer Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-[#1e40af] text-primary font-montserrat">
                BENZZ
              </div>
              <div className="text-2xl font-bold text-gray-300 font-montserrat">
                TRADING
              </div>
            </div>
            <p className="text-gray-400">
              Empowering traders with knowledge, strategies, and confidence to
              succeed in financial markets.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <a
                href="#about"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                About Us
              </a>
              <a
                href="#courses"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Courses
              </a>
              <a
                href="#services"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Services
              </a>
              <a
                href="#testimonials"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Reviews
              </a>
            </div>
          </div>

          {/* Courses Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Courses</h4>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Intraday Trading
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Swing Trading
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Options Trading
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Global Markets
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <RiYoutubeFill className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <RiLinkedinFill className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <RiTwitterFill className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>
            © 2025 BENZZ Trading. All rights reserved. |{" "}
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
