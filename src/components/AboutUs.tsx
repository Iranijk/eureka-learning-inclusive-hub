
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <section id="sobre-nos" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre a <span className="gradient-text">Eureka!</span></h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nascemos da paixão por uma educação que realmente acolhe e valoriza a diversidade de adolescentes e jovens.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="card-hover bg-white border-none shadow-md rounded-xl overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-eureka-blue">Nossa Missão</h3>
              <p className="text-gray-600">
                A Eureka! nasceu da paixão por uma educação que realmente acolhe e valoriza a diversidade de adolescentes e jovens. 
                Sabemos do seu compromisso em oferecer as melhores oportunidades de aprendizado e desenvolvimento para cada um deles, 
                e é por isso que criamos materiais de apoio pedagógico pensados para facilitar o seu trabalho e potencializar o 
                crescimento de estudantes com necessidades específicas.
              </p>
            </CardContent>
          </Card>
          
          <div className="relative h-64 md:h-auto rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Crianças e jovens estudando juntos" 
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
              <p className="text-white font-semibold p-6">
                Nosso compromisso é com a inclusão e o desenvolvimento de todo potencial de cada estudante
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-xl font-bold mb-4 text-center">A Eureka! é o seu parceiro dedicado a construir juntos um futuro onde todos os adolescentes e jovens tenham a oportunidade de:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="flex flex-col items-center text-center p-4 rounded-lg bg-eureka-blue/5 border border-eureka-blue/20">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-eureka-blue/20 text-eureka-blue mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Aprender</h4>
              <p className="text-gray-600">Com materiais adaptados às suas necessidades específicas</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 rounded-lg bg-eureka-purple/5 border border-eureka-purple/20">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-eureka-purple/20 text-eureka-purple mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Crescer</h4>
              <p className="text-gray-600">Desenvolvendo habilidades essenciais para a vida</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 rounded-lg bg-eureka-green/5 border border-eureka-green/20">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-eureka-green/20 text-eureka-green mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Alcançar seu potencial</h4>
              <p className="text-gray-600">Com apoio especializado e ferramentas adequadas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
