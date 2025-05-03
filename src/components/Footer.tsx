
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          <div>
            <img 
              src="https://drive.google.com/uc?export=view&id=1wETgGwMiCn10AmFy1GDvx0QCwabVjzsI" 
              alt="Eureka! Logo" 
              className="h-12 mb-4 bg-white p-2 rounded"
            />
            <p className="text-gray-300 mb-4">
              Seu Aliado Essencial na Educação de Adolescentes e Jovens!
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61574854207420" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"></path>
                </svg>
              </a>
              {/* Additional social links can be added here */}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-300 hover:text-white">Início</a>
              </li>
              <li>
                <a href="#sobre-nos" className="text-gray-300 hover:text-white">Sobre Nós</a>
              </li>
              <li>
                <a href="#materiais" className="text-gray-300 hover:text-white">Materiais</a>
              </li>
              <li>
                <a href="#suporte" className="text-gray-300 hover:text-white">Para Quem</a>
              </li>
              <li>
                <a href="#contato" className="text-gray-300 hover:text-white">Contato</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-2 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300">eurekamateriais@mail.com</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-2 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-300">(67) 9 8116-2674</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400">
            &copy; {currentYear} Eureka! Materiais Pedagógicos Inclusivos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
