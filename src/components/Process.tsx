import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Process: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };


  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            {t('process.title')}
          </h2>
          <div className="h-1 w-24 bg-primary-500 mx-auto"></div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-6  gap-8 md:mx-56 text-center mx-auto"
        >


          <div className="w-16 text-4xl h-16 mx-auto mb-6 flex items-center justify-center hover:bg-primary-500 hover:text-white bg-primary-100 text-primary-500 rounded-full group-hover:bg-white transition-colors duration-300 ">
            <i className="fa-brands fa-html5"></i>
          </div>


          <div className="w-16 text-4xl h-16 mx-auto mb-6 flex items-center justify-center hover:bg-primary-500 hover:text-white bg-primary-100 text-primary-500 rounded-full group-hover:bg-white transition-colors duration-300">
            <i className="fa-brands fa-css3-alt"></i>
          </div>

          <div className="w-16 h-16 text-4xl mx-auto mb-6 flex items-center justify-center hover:bg-primary-500 hover:text-white bg-primary-100 text-primary-500 rounded-full group-hover:bg-white transition-colors duration-300">
            <i className="fa-brands fa-js"></i>
          </div>
          <div className="w-16 h-16 text-4xl mx-auto mb-6 flex items-center justify-center hover:bg-primary-500 hover:text-white bg-primary-100 text-primary-500 rounded-full group-hover:bg-white transition-colors duration-300">
            <i className="fa-brands fa-bootstrap"></i>
          </div>

          <div className="w-16 h-16 text-4xl mx-auto mb-6 flex items-center justify-center hover:bg-primary-500 hover:text-white bg-primary-100 text-primary-500 rounded-full group-hover:bg-white transition-colors duration-300">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.782 5.72a4.773 4.773 0 0 0-4.8 4.173 3.43 3.43 0 0 1 2.741-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.934-2.865 3.137-3.921-.969 1.379-2.44 2.207-4.259 1.231-1.253-.673-2.19-3.438-5.959-3.318ZM6.8 11.979A4.772 4.772 0 0 0 2 16.151a3.431 3.431 0 0 1 2.745-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.933-2.865 3.137-3.921-.97 1.379-2.44 2.208-4.259 1.231-1.253-.673-2.19-3.443-5.963-3.317Z" />
            </svg>

          </div>

          <div className="w-16 h-16 text-4xl mx-auto mb-6 flex items-center justify-center hover:bg-primary-500 hover:text-white bg-primary-100 text-primary-500 rounded-full group-hover:bg-white transition-colors duration-300">
            <i className="fa-brands fa-react  "></i>
          </div>


        </motion.div>
      </div>
    </section>
  );
};

export default Process;