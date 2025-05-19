import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const CallToAction: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id='cta' className="py-16 bg-secondary-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="mb-8 md:mb-0 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {t('cta.title')}
            </h2>
            <p className="text-gray-300">
              {t('cta.subtitle')}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.a 
              href="#contact" 
              className="inline-block bg-primary-500 text-white px-8 py-3 rounded-md hover:bg-primary-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('cta.button')}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;