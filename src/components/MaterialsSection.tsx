
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const MaterialsSection = () => {
  const materials = [
    {
      title: "Fichas Adaptativas",
      description: "Fichas para preenchimento com comando de voz, gerando arquivos salvos na nuvem ou PDFs que podem ser impressos.",
      badge: "Tecnologia Assistiva",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Jogos Educativos",
      description: "Materiais lúdicos para o desenvolvimento de habilidades específicas de forma engajadora e divertida.",
      badge: "Aprendizado Lúdico",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Guias Práticos",
      description: "Materiais de orientação para educadores e familiares com estratégias e atividades práticas.",
      badge: "Suporte Pedagógico",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Organizadores Visuais",
      description: "Recursos visuais para auxiliar na organização de rotinas, informações e tarefas.",
      badge: "Apoio Visual",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      )
    }
  ];

  return (
    <section id="materiais" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Materiais Pedagógicos</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Recursos desenvolvidos para garantir que todos os alunos, independentemente de suas habilidades, 
            necessidades ou diferenças, tenham acesso ao conteúdo educacional.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {materials.map((material, index) => (
            <Card key={index} className="card-hover overflow-hidden border-none shadow-md">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-eureka-blue/10 text-eureka-blue mb-4">
                  {material.icon}
                </div>
                <CardTitle>{material.title}</CardTitle>
                <Badge className="bg-eureka-purple/20 text-eureka-purple hover:bg-eureka-purple/30 mt-2">
                  {material.badge}
                </Badge>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {material.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-eureka-blue/10 via-eureka-purple/10 to-eureka-pink/10 p-8 rounded-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-eureka-blue/20 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-eureka-purple/20 rounded-full -ml-12 -mb-12"></div>
          
          <div className="relative text-center">
            <h3 className="text-2xl font-bold mb-4">O que são materiais pedagógicos inclusivos?</h3>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Materiais pedagógicos inclusivos são recursos desenvolvidos para garantir que todos os alunos, 
              independentemente de suas habilidades, necessidades ou diferenças, tenham acesso ao conteúdo educacional. 
              Esses materiais promovem a equidade no aprendizado e ajudam a criar um ambiente de sala de aula acessível e acolhedor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialsSection;
