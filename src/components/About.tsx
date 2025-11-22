import { Code, Zap, Users, Lightbulb } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "I'm actively learning and practicing full-stack development, focusing on Python, JavaScript, and modern frameworks to build scalable and efficient AI-powered web applications.",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Experienced in optimizing models for production, reducing inference time and computational costs.",
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-500/10 to-orange-500/10"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Led cross-functional teams to deliver AI solutions that impact millions of users.",
      gradient: "from-green-500 to-teal-500",
      bgGradient: "from-green-500/10 to-teal-500/10"
    },
    {
      icon: Lightbulb,
      title: "Research & Innovation",
      description: "Passionate about exploring cutting-edge AI research and contributing to open-source communities.",
      gradient: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-500/10 to-blue-500/10"
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
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50">
              <p className="text-foreground leading-relaxed text-sm xs:text-base mb-4">
                My journey into the world of <span className="text-primary font-semibold">Artificial Intelligence</span> began during my <span className="text-primary font-semibold">Computer Science</span> studies at <span className="text-primary font-semibold">CBIU</span>, where I was captivated by the power of <span className="text-primary font-semibold">machine learning</span> to address real-world challenges. Since then, I have been deeply engaged in exploring and developing AI systems—ranging from intelligent recommendation engines to computer vision applications.
              </p>

              <p className="text-foreground leading-relaxed text-sm xs:text-base mb-4">
                I specialize in <span className="text-primary font-semibold">deep learning</span>, <span className="text-primary font-semibold">natural language processing</span>, and <span className="text-primary font-semibold">computer vision</span>. My projects have focused on solving practical problems with AI, from improving <span className="text-primary font-semibold">search algorithms</span> to experimenting with <span className="text-primary font-semibold">autonomous technologies</span>. I'm particularly interested in the intersection of <span className="text-primary font-semibold">AI ethics</span> and real-world impact, striving to ensure that AI is developed and used responsibly.
              </p>

              <p className="text-foreground leading-relaxed text-sm xs:text-base">
                Outside of research and development, I contribute to <span className="text-primary font-semibold">open-source communities</span>, write <span className="text-primary font-semibold">technical blogs</span>. I'm also passionate about <span className="text-primary font-semibold">competitive programming</span>, which helps me enhance my algorithmic thinking and build efficient, optimized AI solutions. I strongly believe in democratizing AI by making its tools and knowledge accessible to all.
              </p>
            </div>
          </div>

          {/* Right Column - Enhanced Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mt-8 lg:mt-0">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="relative overflow-hidden bg-card border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 group"
              >
                {/* Gradient background overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${highlight.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                {/* Top gradient border */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${highlight.gradient}`}></div>

                <CardContent className="relative p-4 sm:p-5 text-center">
                  {/* Enhanced Icon Container */}
                  <div className="relative mb-3 sm:mb-4">
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-gradient-to-r ${highlight.gradient} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-full h-full bg-card rounded-full flex items-center justify-center">
                        <highlight.icon className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
                      </div>
                    </div>

                    {/* Animated ring on hover */}
                    <div className={`absolute inset-0 w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-gradient-to-r ${highlight.gradient} opacity-0 group-hover:opacity-25 group-hover:scale-125 transition-all duration-500 blur-sm`}></div>
                  </div>

                  <h3 className="text-sm sm:text-base font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors duration-300">
                    {highlight.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>

                  {/* Bottom decoration */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-full transition-all duration-500"></div>
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