import { Building, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: "Senior AI Engineer",
      company: "TechCorp AI",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Leading development of next-generation recommendation systems using transformer architectures. Improved user engagement by 40% and reduced computational costs by 25%.",
      technologies: ["PyTorch", "Transformers", "AWS", "Docker", "Kubernetes", "Python"]
    },
    {
      title: "Machine Learning Engineer",
      company: "InnovateLab",
      location: "Seattle, WA",
      period: "2020 - 2022",
      description: "Built and deployed computer vision models for autonomous vehicle perception. Developed real-time object detection systems with 99.2% accuracy.",
      technologies: ["TensorFlow", "OpenCV", "C++", "ROS", "CUDA", "MLOps"]
    },
    {
      title: "AI Research Intern",
      company: "Stanford AI Lab",
      location: "Stanford, CA",
      period: "2019 - 2020",
      description: "Researched novel approaches to few-shot learning and meta-learning. Published 2 papers in top-tier conferences (ICML, NeurIPS).",
      technologies: ["Python", "JAX", "Research", "Academic Writing", "Experimentation"]
    },
    {
      title: "Data Science Intern",
      company: "StartupVenture",
      location: "Austin, TX",
      period: "2018 - 2019",
      description: "Developed predictive analytics models for customer behavior analysis. Built data pipelines processing 10M+ daily events.",
      technologies: ["Python", "Scikit-learn", "Apache Spark", "SQL", "Tableau"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A journey through cutting-edge AI projects and innovative solutions
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-glow-purple/20 transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-card-foreground mb-2">
                      {exp.title}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-primary">
                    <Calendar className="h-4 w-4" />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-secondary/50">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;