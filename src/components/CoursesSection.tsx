"use client";

import React from "react";
import { RiCalendarLine, RiUser3Line } from "react-icons/ri";

interface Course {
  title: string;
  description: string | string[];
  icon: React.ReactNode;
}

const courses: Course[] = [
  {
    title: "Monthly Subscription",
    description: [
      "Monthly access to course materials and recordings.",
      "Includes priority support and weekly Q&A sessions.",
    ],
    icon: <RiCalendarLine className="text-primary text-2xl" />,
  },
  {
    title: "Hand-hold Mentorship",
    description: [
      "One-on-one mentorship with live guidance and trade reviews.",
      "Includes personalized plans and ongoing support.",
    ],
    icon: <RiUser3Line className="text-primary text-2xl" />,
  },
];

const CoursesSection: React.FC = () => {
  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 font-montserrat">
            Trading Courses
          </h2>
          <p className="text-xl text-gray-600">
            Monthly subscription and hand-hold mentorship available
          </p>
        </div>

        {/* Courses Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-2">
          {courses.map((course, index) => (
            <div
              key={index}
              className="mx-auto max-w-xs min-h-[420px] bg-white rounded-xl p-8 hover:shadow-lg transition-shadow flex flex-col justify-between"
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
                {Array.isArray(course.description) ? (
                  <>
                    {course.description[0]}<br />{course.description[1]}
                  </>
                ) : (
                  course.description
                )}
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
