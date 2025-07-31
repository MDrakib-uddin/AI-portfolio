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
        <span className="sr-only">Background image showing AI/ML theme</span>
        <div className="absolute inset-0 bg-background/60"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 xs:w-40 xs:h-40 sm:w-64 sm:h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 xs:w-56 xs:h-56 sm:w-96 sm:h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <p className="text-base sm:text-lg text-muted-foreground mb-3 sm:mb-4 animate-fade-in">
            <span className="sr-only">Greeting: Hello, I'm Rakib</span>
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 lg:mb-8 animate-fade-in delay-200">
            <span className="text-foreground">Rakib</span>
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Uddin</span>
          </h1>

          {/* Title */}
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-4 sm:mb-6 lg:mb-8 animate-fade-in delay-400 drop-shadow-lg">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,180,255,0.18)]">AI &amp; Machine Learning Enthusiast&nbsp;|&nbsp;</span>
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(120,0,255,0.25)]">Competitive Programmer</span>
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-sm sm:max-w-md lg:max-w-3xl mx-auto mb-6 sm:mb-8 lg:mb-12 leading-relaxed animate-fade-in delay-600">
            Passionate about pushing the boundaries of artificial intelligence. 
            I specialize in deep learning, computer vision, and building scalable AI systems 
            that solve real-world problems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in delay-800 gap-4 sm:gap-6">
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-gradient-primary hover:shadow-glow-purple transition-all duration-300 group"
              asChild
              aria-label="Contact me via form section"
            >
              <a href="#contact" aria-label="Go to contact section">
              <MessageCircle className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Get In Touch
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
              asChild
              aria-label="Download my resume as PDF"
            >
              <a href="/Rakib-resume.pdf" download aria-label="Download Rakib Uddin Resume PDF">
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
            <ArrowDown className="h-6 w-6 sm:h-8 sm:w-8 text-muted-foreground mx-auto" />
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