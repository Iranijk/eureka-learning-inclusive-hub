
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="inicio" className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-r from-eureka-light to-white opacity-70 z-0"></div>
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10 z-0"
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Eureka!</span> Materiais Pedagógicos Inclusivos
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Seu Aliado Essencial na Educação de Adolescentes e Jovens! 🚀📚
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Olá, educador(a), familiar, profissional da educação! 👋 Descubra materiais pedagógicos inclusivos projetados para potencializar o aprendizado de todos os estudantes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-eureka-blue hover:bg-blue-600">
                Nossos Materiais
              </Button>
              <Button size="lg" variant="outline" className="border-eureka-blue text-eureka-blue hover:bg-eureka-blue/10">
                Contate-nos
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-10">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-eureka-blue via-eureka-purple to-eureka-pink opacity-30 blur-lg"></div>
              <img 
                src="/lovable-uploads/311a44c2-8ece-48d6-ba97-3f2e89f42e08.png" 
                alt="Crianças diversas estudando e brincando juntas" 
                className="relative rounded-lg shadow-lg w-full object-cover h-80 md:h-96"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
