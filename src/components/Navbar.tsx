
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <img 
                  src="public/lovable-uploads/ff581747-4981-4dc1-8dd4-c904b6649f4b.png" 
                  alt="Eureka! Logo" 
                  className="h-8 mr-2"
                />
                <span className="font-bold text-xl text-eureka-blue">Eureka!</span>
              </div>
            </div>
            <div className="hidden md:block ml-6">
              <div className="flex items-center space-x-4">
                <a href="#inicio" className="text-gray-700 hover:text-eureka-blue px-3 py-2 rounded-md text-md font-medium">Início</a>
                <a href="#sobre-nos" className="text-gray-700 hover:text-eureka-blue px-3 py-2 rounded-md text-md font-medium">Sobre Nós</a>
                <a href="#materiais" className="text-gray-700 hover:text-eureka-blue px-3 py-2 rounded-md text-md font-medium">Materiais</a>
                <a href="#suporte" className="text-gray-700 hover:text-eureka-blue px-3 py-2 rounded-md text-md font-medium">Para Quem</a>
                <a href="#contato" className="text-gray-700 hover:text-eureka-blue px-3 py-2 rounded-md text-md font-medium">Contato</a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <Button className="bg-eureka-blue hover:bg-blue-600">Solicitar Material</Button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-eureka-blue focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menu principal</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#inicio" className="block text-gray-700 hover:text-eureka-blue px-3 py-2 rounded-md text-base font-medium">Início</a>
            <a href="#sobre-nos" className="block text-gray-700 hover:text-eureka-blue px-3 py-2 rounded-md text-base font-medium">Sobre Nós</a>
            <a href="#materiais" className="block text-gray-700 hover:text-eureka-blue px-3 py-2 rounded-md text-base font-medium">Materiais</a>
            <a href="#suporte" className="block text-gray-700 hover:text-eureka-blue px-3 py-2 rounded-md text-base font-medium">Para Quem</a>
            <a href="#contato" className="block text-gray-700 hover:text-eureka-blue px-3 py-2 rounded-md text-base font-medium">Contato</a>
            <div className="pt-2">
              <Button className="w-full bg-eureka-blue hover:bg-blue-600">Solicitar Material</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
