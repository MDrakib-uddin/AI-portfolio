import { Code, Brain, Zap, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI Expertise",
      description: "Deep knowledge in neural networks, transformer architectures, and cutting-edge ML algorithms."
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Proficient in Python, JavaScript, and modern frameworks for building end-to-end AI applications."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Experienced in optimizing models for production, reducing inference time and computational costs."
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Led cross-functional teams to deliver AI solutions that impact millions of users."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate AI engineer with 5+ years of experience building intelligent systems 
            that transform how businesses operate and how people interact with technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Bio */}
          <div className="space-y-6">
            <p className="text-foreground leading-relaxed">
              My journey in AI began during my Computer Science studies at Stanford, where I became 
              fascinated by the potential of machine learning to solve complex problems. Since then, 
              I've worked at leading tech companies and startups, developing everything from 
              recommendation systems to computer vision applications.
            </p>
            
            <p className="text-foreground leading-relaxed">
              I specialize in deep learning, natural language processing, and computer vision. 
              My work has contributed to products used by millions of users, from improving search 
              algorithms to building autonomous systems. I'm particularly interested in the intersection 
              of AI ethics and practical applications.
            </p>

            <p className="text-foreground leading-relaxed">
              When I'm not coding, you'll find me contributing to open-source projects, 
              writing technical blogs, or mentoring aspiring AI engineers. I believe in making 
              AI accessible and beneficial for everyone.
            </p>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-glow-purple/20 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <highlight.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;