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
import { TerminalProvider } from '../components/TerminalContext';
import TerminalOverlay from '../components/TerminalOverlay';

import { useKonamiCode } from '../hooks/useKonamiCode';
import confetti from 'canvas-confetti';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useKonamiCode(() => {
    confetti({
      particleCount: 150,
      spread: 180,
      origin: { y: 0.6 },
      colors: ['#10b981', '#3b82f6', '#8b5cf6', '#f59e0b', '#ec4899']
    });
    alert("Achievement Unlocked: Developer Mode!");
  });

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
    <TerminalProvider>
      <div className="min-h-screen bg-background">
        <GradientMesh />
        <ParticleBackground />
        <CustomCursor />
        <TerminalOverlay />
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
    </TerminalProvider>
  );
};

export default Index;
