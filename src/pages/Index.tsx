
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import MaterialsSection from '@/components/MaterialsSection';
import SupportSection from '@/components/SupportSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <MaterialsSection />
        <SupportSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
