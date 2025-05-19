import React from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ecommerce from "../assets/Images/Projects/freshcart-logo.svg";
import Weather from "../assets/Images/Projects/Apple-Weather-app.webp";
import Games from "../assets/Images/Projects/gamesApp.webp";
import login from "../assets/Images/Projects/smartLogin.webp";
import bookmarker from "../assets/Images/Projects/BookMarker.webp";
import ToDo from "../assets/Images/Projects/todo_app_icon.webp";

// Project type definition
interface Project {
  id: number;
  title: string;
  image: string;
  link: string;
}

const Portfolio: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Sample project data
  const projects: Project[] = [
    {
      id: 1,
      title: 'Fresh cart E-Commerce',
      image: ecommerce,
      link: 'https://e-commerce-alpha-green-53.vercel.app/',
    },
    {
      id: 2,
      title: 'Weather App',
      image: Weather,
      link: 'https://whether-app-tau.vercel.app/',
    },
    {
      id: 3,
      title: 'Games App',
      image: Games,
      link: 'https://games-app-brown.vercel.app/',
    },
    {
      id: 4,
      title: 'Smart login sample',
      image: login,
      link: 'https://smart-login-navy.vercel.app/',
    },
    {
      id: 5,
      title: 'BookMarker',
      image: bookmarker,
      link: 'https://book-marker-one.vercel.app/',
    },
    {
      id: 6,
      title: 'To-Do app',
      image: ToDo,
      link: 'https://to-do-list-nine-chi-78.vercel.app/',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            {t('portfolio.title')}
          </h2>
          <div className="h-1 w-24 bg-primary-500 mx-auto mb-8"></div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-white rounded-lg overflow-hidden shadow-md group"
            >
              <div className="relative overflow-hidden">
                <div className="aspect-video overflow-hidden rounded-xl flex justify-center items-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-1/2 h-fit object-cover mx-auto  transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    srcSet={`${project.image}?w=300 300w, ${project.image}?w=600 600w, ${project.image}?w=1200 1200w`}
                    sizes="(max-width: 600px) 300px, (max-width: 1200px) 600px, 1200px"
                  />
                </div>


                <div className="absolute inset-0 bg-primary-500 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="bg-white text-primary-500 p-3 rounded-full hover:bg-primary-100 transition-colors"
                    target='_blank'
                  >
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary-900 mb-2">{project.title}</h3>
                <p className="text-primary-500"></p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
