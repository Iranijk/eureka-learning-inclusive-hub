
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const SupportSection = () => {
  const supportCategories = [
    {
      title: "TDAH",
      fullName: "Transtorno do Déficit de Atenção com Hiperatividade",
      description: "Oferecemos recursos práticos para auxiliar na gestão da atenção, organização, planejamento e no desenvolvimento de estratégias de aprendizagem eficazes.",
      bgColor: "bg-eureka-blue/10",
      borderColor: "border-eureka-blue/30",
      textColor: "text-eureka-blue"
    },
    {
      title: "TEA",
      fullName: "Transtorno do Espectro Autista",
      description: "Nossos materiais são desenvolvidos para promover a comunicação, a interação social, a compreensão de rotinas e o desenvolvimento de habilidades sensoriais, com foco nas necessidades específicas dos adolescentes e jovens com TEA.",
      bgColor: "bg-eureka-purple/10",
      borderColor: "border-eureka-purple/30",
      textColor: "text-eureka-purple"
    },
    {
      title: "Síndrome de Down",
      fullName: "",
      description: "Disponibilizamos recursos adaptados que respeitam os ritmos individuais de aprendizagem, estimulam o desenvolvimento cognitivo, a autonomia e a participação ativa na vida escolar e social.",
      bgColor: "bg-eureka-green/10",
      borderColor: "border-eureka-green/30",
      textColor: "text-eureka-green"
    },
    {
      title: "TOD",
      fullName: "Transtorno Opositor Desafiador",
      description: "Nossos materiais oferecem estratégias e ferramentas para auxiliar na compreensão de regras, no desenvolvimento de habilidades sociais, na resolução de conflitos e no manejo de comportamentos desafiadores.",
      bgColor: "bg-eureka-yellow/10",
      borderColor: "border-eureka-yellow/30",
      textColor: "text-eureka-yellow"
    },
    {
      title: "Deficiência Intelectual",
      fullName: "",
      description: "Apresentamos recursos didáticos acessíveis que facilitam a compreensão de conceitos, o desenvolvimento de habilidades práticas, a autonomia e a inclusão em diferentes contextos.",
      bgColor: "bg-eureka-red/10",
      borderColor: "border-eureka-red/30",
      textColor: "text-eureka-red"
    },
    {
      title: "Outras necessidades educacionais",
      fullName: "",
      description: "Reconhecemos a singularidade de cada estudante e buscamos oferecer materiais versáteis e adaptáveis para atender a uma ampla gama de desafios e potencialidades.",
      bgColor: "bg-eureka-pink/10",
      borderColor: "border-eureka-pink/30",
      textColor: "text-eureka-pink"
    }
  ];

  return (
    <section id="suporte" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Para Quem São Nossos Materiais?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nossos materiais são desenvolvidos para apoiar a educação inclusiva de adolescentes e jovens com diversas necessidades de aprendizagem.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {supportCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`card-hover overflow-hidden border ${category.borderColor} ${category.bgColor}`}
            >
              <CardContent className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${category.textColor}`}>
                  {category.title}
                </h3>
                {category.fullName && (
                  <p className="text-sm text-gray-500 mb-4">{category.fullName}</p>
                )}
                <p className="text-gray-600">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-white border border-eureka-blue/20 rounded-full mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-eureka-blue">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold mb-4">Procurando materiais específicos?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Conte-nos suas necessidades e podemos ajudar a encontrar ou desenvolver materiais adaptados para suas necessidades específicas.
          </p>
          <a href="#contato" className="inline-flex items-center text-eureka-blue hover:text-eureka-purple">
            <span>Entre em contato conosco</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="ml-2 w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
