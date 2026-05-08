import { motion } from 'framer-motion';
import { Github, ArrowRight } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const featuredProjects = projects.slice(0, 2);

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-background">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-primary rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium">Selected Works</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-foreground"
          >
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Innovations</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl"
          >
            A curated collection of advanced AI implementations, architectural designs, and intelligent systems.
          </motion.p>
        </div>

        {/* 2 Featured Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[420px]"
        >
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/5 backdrop-blur-xl transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_60px_rgba(139,92,246,0.2)]"
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
              <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                <div className="transform transition-transform duration-500 group-hover:-translate-y-16">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tIdx) => (
                      <Badge key={tIdx} variant="secondary" className="bg-background/50 backdrop-blur-md text-xs border-primary/20 text-foreground">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base line-clamp-2 w-4/5">
                    {project.description}
                  </p>
                </div>

                {/* Hover Reveal Buttons */}
                <div className="absolute bottom-8 left-8 right-8 flex gap-4 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2" asChild>
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      Live Demo <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="bg-background/50 backdrop-blur-md border-border hover:bg-muted gap-2 text-foreground" asChild>
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Github className="w-4 h-4" /> Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mt-14"
        >
          <button
            onClick={() => navigate('/projects')}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-base overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]"
          >
            {/* Button background */}
            <span className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 opacity-90 group-hover:opacity-100 transition-opacity" />
            <span className="absolute inset-0 rounded-2xl border border-primary/40" />
            {/* Button text */}
            <span className="relative text-white">View All Projects</span>
            <ArrowRight className="relative w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
