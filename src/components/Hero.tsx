import { Button } from '@/components/ui/button';
import { ArrowDown, Download, MessageCircle, Sparkles, Brain, Zap, Code } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';
import { useState, useEffect } from 'react';
import { trackResumeDownload, trackButtonClick } from '../lib/analytics';

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  
  const titles = [
    "AI & Machine Learning Enthusiast",
    "Competitive Programmer", 
    "Deep Learning Researcher",
    "Computer Vision Expert"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

  const handleResumeDownload = () => {
    trackResumeDownload();
    trackButtonClick('download_resume');
  };

  const handleGetInTouch = () => {
    trackButtonClick('get_in_touch');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background/95 to-background/90">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen">
          
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            
            {/* Greeting Badge */}
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">
            Hello, I'm
                </span>
              </div>
            </div>

          {/* Name */}
            <div className="animate-fade-in delay-200">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="text-foreground">Rakib </span>
                <span className="bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent">
                  Uddin
                </span>
              </h1>
            </div>

            {/* Dynamic Title */}
            <div className="animate-fade-in delay-400">
              <div className="h-20 sm:h-24 md:h-28 flex items-center justify-center lg:justify-start">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                  <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent transition-all duration-700 hover:scale-105 transform drop-shadow-2xl hover:drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                    {titles[currentTitle]}
                  </span>
          </h2>
              </div>
            </div>

          {/* Description */}
            <div className="animate-fade-in delay-600">
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Passionate about pushing the boundaries of artificial intelligence. 
                I specialize in <span className="text-primary font-semibold">deep learning</span>, <span className="text-primary font-semibold">computer vision</span>, and building scalable AI systems 
            that solve real-world problems.
          </p>
            </div>

          {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-fade-in delay-800">
            <Button 
              size="lg" 
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              asChild
              >
                <a href="#contact" onClick={handleGetInTouch}>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <MessageCircle className="mr-2 h-5 w-5 relative z-10" />
                  <span className="relative z-10 font-semibold">Get In Touch</span>
              </a>
            </Button>
              
            <Button 
              variant="outline" 
              size="lg"
                className="group relative overflow-hidden border-2 border-primary/40 text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              asChild
            >
                <a href="/Rakib-resume.pdf" download onClick={handleResumeDownload}>
                  <Download className="mr-2 h-5 w-5" />
                  <span className="font-semibold">Download Resume</span>
              </a>
            </Button>
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="relative hidden lg:block animate-fade-in delay-1000">
            <div className="relative w-full h-[600px] flex items-center justify-center">
              
              {/* Main Visual Container */}
              <div className="relative w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl backdrop-blur-sm border border-primary/20 shadow-2xl">
                
                {/* Floating Icons */}
                <div className="absolute top-8 left-8 animate-float">
                  <div className="p-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl backdrop-blur-sm border border-blue-500/30">
                    <Brain className="h-8 w-8 text-blue-400" />
                  </div>
                </div>

                <div className="absolute top-8 right-8 animate-float delay-1000">
                  <div className="p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl backdrop-blur-sm border border-purple-500/30">
                    <Zap className="h-8 w-8 text-purple-400" />
                  </div>
                </div>

                <div className="absolute bottom-8 left-8 animate-float delay-2000">
                  <div className="p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl backdrop-blur-sm border border-green-500/30">
                    <Code className="h-8 w-8 text-green-400" />
                  </div>
                </div>

                <div className="absolute bottom-8 right-8 animate-float delay-3000">
                  <div className="p-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl backdrop-blur-sm border border-orange-500/30">
                    <Sparkles className="h-8 w-8 text-orange-400" />
                  </div>
                </div>

                {/* Center Element */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-2xl shadow-2xl flex items-center justify-center animate-pulse">
                    <div className="w-16 h-16 bg-background/80 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        AI
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Decorative Elements */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
          </div>

          {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in delay-1200">
          <div 
            className="animate-bounce cursor-pointer group hover:scale-110 transition-transform duration-300" 
            onClick={() => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
            }}
          >
            <ArrowDown className="h-6 w-6 sm:h-8 sm:w-8 text-muted-foreground mx-auto group-hover:text-primary transition-colors duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;