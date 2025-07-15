import { Button } from '@/components/ui/button';
import { ArrowDown, Download, MessageCircle } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-2 sm:px-4">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-background/60"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 xs:w-40 xs:h-40 sm:w-64 sm:h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 xs:w-56 xs:h-56 sm:w-96 sm:h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <p className="text-sm xs:text-base sm:text-lg text-muted-foreground mb-2 sm:mb-4 animate-fade-in">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-7xl font-bold mb-3 sm:mb-6 animate-fade-in delay-200">
            <span className="text-foreground">Rakib</span>
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Uddin</span>
          </h1>

          {/* Title */}
          <h2 className="text-base xs:text-lg sm:text-2xl md:text-4xl font-semibold mb-3 sm:mb-8 animate-fade-in delay-400">
            <span className="text-muted-foreground">AI & Machine Learning Enthusiast |</span>
            <span className="text-primary">Competitive Programmer</span>
          </h2>

          {/* Description */}
          <p className="text-sm xs:text-base sm:text-xl text-muted-foreground max-w-xs xs:max-w-md sm:max-w-3xl mx-auto mb-6 sm:mb-12 leading-relaxed animate-fade-in delay-600">
            Passionate about pushing the boundaries of artificial intelligence. 
            I specialize in deep learning, computer vision, and building scalable AI systems 
            that solve real-world problems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-row w-full justify-center items-center mb-8 sm:mb-16 animate-fade-in delay-800 gap-x-8">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-primary hover:shadow-glow-purple transition-all duration-300 group"
              asChild
            >
              <a href="#contact">
              <MessageCircle className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Get In Touch
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group mt-2 sm:mt-0"
              asChild
            >
              <a href="/Rakib-Uddin-FlowCV-Resume-20250707.pdf" download>
              <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              Download Resume
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce cursor-pointer" onClick={() => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}>
            <ArrowDown className="h-6 w-6 text-muted-foreground mx-auto" />
          </div>
        </div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
    </section>
  );
};

export default Hero;