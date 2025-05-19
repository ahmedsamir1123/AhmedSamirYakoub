import React from 'react';
import { useTranslation } from 'react-i18next';
import Logo from "../assets/Images/myLogoBlack.webp"

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-secondary-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
            <img src={Logo} alt="logo" className='h-10 ' />

            </a>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">
              {t('header.home')}
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">
              {t('header.about')}
            </a>
            <a href="#process" className="text-gray-300 hover:text-white transition-colors">
              {t('header.services')}
            </a>
            <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">
              {t('header.portfolio')}
            </a>
            <a href="#blog" className="text-gray-300 hover:text-white transition-colors">
              {t('header.blog')}
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
              {t('header.contact')}
            </a>
          </nav>
        </div>
        
        <div className="border-t border-gray-700 pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              {t('footer.copyright')}
            </p>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {t('footer.links.privacy')}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {t('footer.links.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;