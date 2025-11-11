import About from "@/components/About";
import CallToActionSection from "@/components/CallToActionSection";
import CoursesSection from "@/components/CoursesSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import YouTubeSection from "@/components/YouTubeSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
  <About />
  <YouTubeSection />
  <ServicesSection />
  <CoursesSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}
