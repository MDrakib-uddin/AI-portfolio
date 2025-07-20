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
    <section id="about" className="py-14 sm:py-20 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-base xs:text-lg text-muted-foreground max-w-xs xs:max-w-md sm:max-w-3xl mx-auto">
            I'm a passionate AI enthusiast with 2+ years of educational experience building intelligent systems 
            that transform how businesses operate and how people interact with technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Column - Bio */}
          <div className="space-y-4 sm:space-y-6">
            <p className="text-foreground leading-relaxed text-sm xs:text-base">
              My journey into the world of <strong>Artificial Intelligence</strong> began during my <strong>Computer Science</strong> studies at <strong>CBIU</strong>, where I was captivated by the power of <strong>machine learning</strong> to address real-world challenges. Since then, I have been deeply engaged in exploring and developing AI systems—ranging from intelligent recommendation engines to computer vision applications.
            </p>
            
            <p className="text-foreground leading-relaxed text-sm xs:text-base">
              I specialize in <strong>deep learning</strong>, <strong>natural language processing</strong>, and <strong>computer vision</strong>. My projects have focused on solving practical problems with AI, from improving <strong>search algorithms</strong> to experimenting with <strong>autonomous technologies</strong>. I'm particularly interested in the intersection of <strong>AI ethics</strong> and real-world impact, striving to ensure that AI is developed and used responsibly.
            </p>

            <p className="text-foreground leading-relaxed text-sm xs:text-base">
              Outside of research and development, I actively contribute to <strong>open-source communities</strong>, write <strong>technical blogs</strong>, and mentor <strong>aspiring AI engineers</strong>. I strongly believe in democratizing AI—making its tools, knowledge, and opportunities accessible to all.
            </p>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8 lg:mt-0">
            {highlights.map((highlight, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-glow-purple/20 transition-all duration-300">
                <CardContent className="p-4 sm:p-6 text-center">
                  <highlight.icon className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-3 sm:mb-4" aria-label={highlight.title} />
                  <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-card-foreground">
                    {highlight.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
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