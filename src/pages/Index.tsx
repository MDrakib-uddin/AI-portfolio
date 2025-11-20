import { useState, useEffect, Suspense, lazy } from 'react';
const Header = lazy(() => import('../components/Header'));
const Hero = lazy(() => import('../components/Hero'));
const About = lazy(() => import('../components/About'));
const CompetitiveProgramming = lazy(() => import('../components/CompetitiveProgramming'));
const Education = lazy(() => import('../components/Education'));
const Projects = lazy(() => import('../components/Projects'));
const Skills = lazy(() => import('../components/Skills'));
const Contact = lazy(() => import('../components/Contact'));
const Footer = lazy(() => import('../components/Footer'));
import ParticleBackground from '../components/ParticleBackground';
import CustomCursor from '../components/CustomCursor';
import GradientMesh from '../components/GradientMesh';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-foreground">Loading Portfolio...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <GradientMesh />
      <ParticleBackground />
      <CustomCursor />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>}>
        <Header />
        <main>
          <Hero />
          <About />
          <CompetitiveProgramming />
          <Education />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
