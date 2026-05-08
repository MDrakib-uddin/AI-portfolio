import { motion } from 'framer-motion';
import { Github, ArrowRight, ArrowLeft } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import ParticleBackground from '../components/ParticleBackground';
import { TerminalProvider } from '../components/TerminalContext';
import TerminalOverlay from '../components/TerminalOverlay';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const AllProjects = () => {
  const navigate = useNavigate();

  return (
    <TerminalProvider>
      <div className="min-h-screen bg-background relative selection:bg-primary/30">
        <ParticleBackground />
        <CustomCursor />
        <TerminalOverlay />
        
        {/* Background decorations */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-primary rounded-full blur-[120px] mix-blend-screen" />
        </div>

        <Header />

        <main className="relative z-10 pt-32 pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="mb-16">
              <button 
                onClick={() => navigate('/')}
                className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 text-sm font-medium"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                Back to Portfolio
              </button>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-bold tracking-tight text-foreground"
              >
                All <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-4 text-lg text-muted-foreground max-w-2xl"
              >
                A complete archive of my machine learning models, applications, and experiments.
              </motion.p>
            </div>

            {/* Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]"
            >
              {projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_60px_rgba(139,92,246,0.15)]
                  ${project.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                  ${project.size === 'wide' ? 'md:col-span-2 lg:col-span-2 lg:row-span-1' : ''}
                  ${project.size === 'small' ? 'col-span-1 row-span-1' : ''}`}
                >
                  {/* Image Background */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 z-10 p-6 md:p-8 flex flex-col justify-end">
                    <div className="transform transition-transform duration-500 group-hover:-translate-y-12 md:group-hover:-translate-y-14">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map((tag, tIdx) => (
                          <Badge key={tIdx} variant="secondary" className="bg-background/80 backdrop-blur-md text-[10px] sm:text-xs border-primary/20 text-foreground">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2 w-11/12 md:w-5/6">
                        {project.description}
                      </p>
                    </div>

                    {/* Built-in Buttons on Hover */}
                    <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8 flex gap-3 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                      <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 flex-1 md:flex-none" asChild>
                        <a href={project.demo} target="_blank" rel="noreferrer">
                          Demo <ArrowRight className="w-3 h-3" />
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" className="bg-background/50 backdrop-blur-md border-border hover:bg-muted gap-2 text-foreground flex-1 md:flex-none" asChild>
                        <a href={project.github} target="_blank" rel="noreferrer">
                          <Github className="w-3 h-3" /> Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </main>

        <Footer />
      </div>
    </TerminalProvider>
  );
};

export default AllProjects;
