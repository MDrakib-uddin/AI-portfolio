import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import CompetitiveProgramming from '../components/CompetitiveProgramming';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import AnalyticsDashboard from '../components/AnalyticsDashboard';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <CompetitiveProgramming />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <AnalyticsDashboard />
    </div>
  );
};

export default Index;
