import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from "../assets/Images/MyLogoWhite.webp"
import LanguageSwitcher from './LanguageSwitcher';
interface HeaderProps {
  scrollY: number;
}

const Header: React.FC<HeaderProps> = ({ scrollY }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isScrolled = scrollY > 50;

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center">
            <img src={Logo} alt="logo" className='h-10 ' />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-secondary-900 hover:text-primary-500 transition-colors">{t('header.home')}</a>
            <a href="#process" className="text-secondary-900 hover:text-primary-500 transition-colors">{t('header.services')}</a>
            <a href="#portfolio" className="text-secondary-900 hover:text-primary-500 transition-colors">{t('header.portfolio')}</a>
            <a href="#contact" className="bg-primary-500 text-white px-6 py-2 rounded-md hover:bg-primary-600 transition-colors">
              {t('header.contact')}
            </a>
            <LanguageSwitcher />
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-secondary-900" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-white shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col space-y-4 p-4">
            <a href="#home" className="text-secondary-900 hover:text-primary-500 py-2 transition-colors" onClick={closeMenu}>{t('header.home')}</a>
            <a href="#process" className="text-secondary-900 hover:text-primary-500 py-2 transition-colors" onClick={closeMenu}>{t('header.services')}</a>
            <a href="#portfolio" className="text-secondary-900 hover:text-primary-500 py-2 transition-colors" onClick={closeMenu}>{t('header.portfolio')}</a>
            <a href="#contact" className="bg-primary-500 text-white px-6 py-2 rounded-md hover:bg-primary-600 transition-colors text-center" onClick={closeMenu}>
              {t('header.contact')}
            </a>
            <div className='mx-auto'>
              <LanguageSwitcher />

            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;