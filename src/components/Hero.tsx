import { Button } from './ui/button';
import { ArrowDown, Download, MessageCircle, Sparkles, Brain, Zap, Code } from 'lucide-react';
import DotWaveBackground from './DotWaveBackground';
import { useParallaxMouse } from '../hooks/useParallaxMouse';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

// Inline analytics functions to avoid import issues
const trackResumeDownload = () => {
  console.log('📊 Resume download tracked');
  // Add analytics tracking logic here if needed
};

const trackButtonClick = (buttonName: string) => {
  console.log('📊 Button click tracked:', buttonName);
  // Add analytics tracking logic here if needed
};

const Hero = () => {
  const { onMouseMove, onMouseLeave, bind } = useParallaxMouse();

  const titles = [
    "Competitive Programmer",
    1500,
    "AI & Machine Learning Enthusiast",
    1500,
    "Deep Learning Enthusiast",
    1500,
    "Computer Vision Expert",
    1500,
    "Natural Language Processing Expert",
    1500,
    "Backend Developer",
    1500,
    "Open Source Contributor",
    1500,
  ];

  const handleResumeDownload = () => {
    trackResumeDownload();
    trackButtonClick('download_resume');
  };

  const handleGetInTouch = () => {
    trackButtonClick('get_in_touch');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <DotWaveBackground />
      {/* Dark overlay to improve text readability */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/80 via-black/70 to-black/85" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen">

          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">

            {/* Greeting Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">Hello, I'm</span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight drop-shadow-2xl text-white"
            >
              <span className="text-white">Rakib </span>
              <span className="bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent drop-shadow-2xl">
                Uddin
              </span>
            </motion.h1>

            {/* Dynamic Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="h-20 sm:h-24 md:h-28 flex items-center justify-center lg:justify-start"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-2xl">
                <TypeAnimation
                  sequence={titles}
                  wrapper="span"
                  speed={50}
                  className="bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent"
                  repeat={Infinity}
                />
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="text-base sm:text-lg md:text-xl text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed drop-shadow"
            >
              Passionate about pushing the boundaries of artificial intelligence.
              I specialize in <span className="text-primary font-semibold">deep learning</span>, <span className="text-primary font-semibold">computer vision</span>, and building scalable AI systems
              that solve real-world problems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            >
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
            </motion.div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="relative hidden lg:block animate-fade-in delay-1000">
            <div
              className="relative w-full h-[600px] flex items-center justify-center"
              onMouseMove={onMouseMove}
              onMouseLeave={onMouseLeave}
            >

              {/* Main Visual Container */}
              <div className="relative w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl backdrop-blur-sm border border-primary/20 shadow-2xl">

                {/* Floating Icons */}
                <div className="absolute top-8 left-8 animate-float">
                  <div ref={bind(2).ref} style={bind(2).style} className="p-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl backdrop-blur-sm border border-blue-500/30">
                    <Brain className="h-8 w-8 text-blue-400" />
                  </div>
                </div>

                <div className="absolute top-8 right-8 animate-float delay-1000">
                  <div ref={bind(3).ref} style={bind(3).style} className="p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl backdrop-blur-sm border border-purple-500/30">
                    <Zap className="h-8 w-8 text-purple-400" />
                  </div>
                </div>

                <div className="absolute bottom-8 left-8 animate-float delay-2000">
                  <div ref={bind(2).ref} style={bind(2).style} className="p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl backdrop-blur-sm border border-green-500/30">
                    <Code className="h-8 w-8 text-green-400" />
                  </div>
                </div>

                <div className="absolute bottom-8 right-8 animate-float delay-3000">
                  <div ref={bind(3).ref} style={bind(3).style} className="p-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl backdrop-blur-sm border border-orange-500/30">
                    <Sparkles className="h-8 w-8 text-orange-400" />
                  </div>
                </div>

                {/* Center Element */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div ref={bind(1).ref} style={bind(1).style} className="w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-2xl shadow-2xl flex items-center justify-center animate-pulse">
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