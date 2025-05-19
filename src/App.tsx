import { useState, useEffect, Suspense, lazy } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Preloader from './components/Preloader';

// قمنا بتحميل المكونات بشكل Lazy
const Process = lazy(() => import('./components/Process'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const CallToAction = lazy(() => import('./components/CallToAction'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
// const LanguageSwitcher = lazy(() => import('./components/LanguageSwitcher')); // لو حبيت تستخدمها لاحقًا

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 

    return () => clearTimeout(timeout);
  }, []);
  if (isLoading) return <Preloader />;

  return (
    <div className="font-sans text-secondary-900">
      <Header scrollY={scrollY} />

      <main>
        <Hero />
        <Stats />

        <Suspense fallback={<div>Loading Process...</div>}>
          <Process />
        </Suspense>
        <Suspense fallback={<div>Loading Portfolio...</div>}>
          <Portfolio />
        </Suspense>
        <Suspense fallback={<div>Loading Call to Action...</div>}>
          <CallToAction />
        </Suspense>
        <Suspense fallback={<div>Loading Contact...</div>}>
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
