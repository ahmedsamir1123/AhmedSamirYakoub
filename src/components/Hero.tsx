import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import heroImg from "../assets/Images/Hero.webp"

import cv from "../assets/CV/AhmedSamir-resume.pdf"
const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="pt-20 pb-16 md:py-32 bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl text-secondary-600 mb-2">
              {t('hero.greeting')}
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-4">
              {t('hero.name')}
            </h1>
            <div className="flex items-center justify-center md:justify-start mb-6">
              <div className="h-1 w-12 bg-primary-500 mr-4"></div>
              <p className="text-lg md:text-xl text-primary-500">
                {t('hero.profession')}
              </p>
            </div>
            <p className="text-secondary-600 mb-8 max-w-md mx-auto md:mx-0">
              {t('about.description')}
            </p>
            <div className='flex gap-2'>
              <motion.a
                href="#contact"
                className="inline-block bg-primary-500 text-white px-8 py-3 rounded-md hover:bg-primary-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('hero.cta')}
              </motion.a>
              <motion.a
                href={cv}
                download
                className="inline-block bg-primary-500 text-white px-8 py-3 rounded-md hover:bg-primary-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('about.button')}
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div
              className="relative w-full max-w-3xl mx-auto rounded-lg shadow-xl overflow-hidden"
              style={{ aspectRatio: '4 / 3' }} 
            >
              <img
                src={heroImg}
                alt="Professional Portrait"
                width={800}
                height={600}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="object-cover w-full h-full block"
              />
            </div>



          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;