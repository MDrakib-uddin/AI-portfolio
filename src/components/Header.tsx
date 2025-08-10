import { useState, useEffect } from 'react';
import { Menu, X, Brain, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Competitive Programming', href: '#competitive-programming' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-background/95 backdrop-blur-xl border-b border-border shadow-lg' 
        : 'bg-background/80 backdrop-blur-md border-b border-border'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <a 
            href="#" 
            className="flex items-center space-x-3 group" 
            aria-label="Go to home section"
          >
            <div className="p-2 bg-gradient-to-r from-primary to-accent rounded-lg">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <div>
            <span className="text-lg sm:text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              AI & ML Engineer
            </span>
              <div className="text-xs text-muted-foreground hidden sm:block">
                Rakib Uddin
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Social Links & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/MDrakib-uddin" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/rakib-uddin-4050381b4/" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:rakibuddinraki2003@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
            </a>
            
            <Button
              asChild
              size="sm"
              className="ml-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white"
            >
              <a href="#contact">Contact</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-primary/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <>
            <div 
              className="fixed inset-0 bg-black/50 z-40 animate-fade-in" 
              aria-hidden="true"
              onClick={() => setIsMenuOpen(false)}
            ></div>
            
            <div className="md:hidden absolute left-0 top-full w-full bg-background/95 backdrop-blur-xl border-b border-border shadow-lg animate-fade-in z-50">
              <nav className="flex flex-col py-4 px-4" role="navigation" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                    className="block py-3 px-2 text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
                
                <div className="flex items-center justify-center space-x-6 pt-4 mt-4 border-t border-border">
                <a href="https://github.com/MDrakib-uddin" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/rakib-uddin-4050381b4/" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="mailto:rakibuddinraki2003@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
                
                <div className="pt-4">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-primary to-accent text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <a href="#contact">Contact Me</a>
                  </Button>
                </div>
            </nav>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;