import { useState, useEffect, useRef } from 'react';
import { Menu, X, Brain, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const headerRef = useRef<HTMLElement>(null);

  // Handle scroll effects and active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);

      // Calculate scroll progress
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollY / docHeight) * 100;
      setScrollProgress(progress);

      // Determine active section
      const sections = document.querySelectorAll('section[id]');
      let current = '';

      sections.forEach((section) => {
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop - 100;
        const sectionHeight = sectionElement.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute('id') || '';
        }
      });

      setActiveSection(current);
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

  // Smooth scroll to section
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href) as HTMLElement;
    if (element) {
      const headerHeight = headerRef.current?.offsetHeight || 0;
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Competitive Programming', href: '#competitive-programming' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent z-[60]">
        <div
          className="h-full bg-gradient-to-r from-accent to-primary transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        ref={headerRef}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
          ? 'bg-background/95 backdrop-blur-xl border-b border-border shadow-2xl shadow-primary/10'
          : 'bg-background/80 backdrop-blur-md border-b border-border'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center space-x-3 group"
              aria-label="Go to home section"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="p-2 bg-gradient-to-r from-primary to-accent rounded-lg group-hover:scale-110 transition-transform duration-300">
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
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`text-sm font-medium transition-all duration-300 relative group ${activeSection === item.href.slice(1)
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-primary'
                    }`}
                >
                  {item.name}
                  {/* Active indicator */}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${activeSection === item.href.slice(1) ? 'w-full' : 'group-hover:w-full'
                    }`} />
                </a>
              ))}
            </nav>

            {/* Social Links, Theme Toggle & CTA */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Social Links */}
              <div className="flex items-center space-x-3">
                <a
                  href="https://github.com/MDrakib-uddin"
                  className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rakib-uddin-4050381b4/"
                  className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:rakibuddinraki2003@gmail.com"
                  className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  aria-label="Send email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>

              <Button
                asChild
                size="sm"
                className="ml-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#contact');
                  }}
                >
                  Contact
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg text-foreground hover:bg-primary/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
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
                      className={`block py-3 px-2 text-base font-medium rounded-lg transition-all duration-300 ${activeSection === item.href.slice(1)
                        ? 'text-primary bg-primary/10'
                        : 'text-foreground hover:text-primary hover:bg-primary/5'
                        }`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.href);
                        setIsMenuOpen(false);
                      }}
                    >
                      {item.name}
                    </a>
                  ))}

                  {/* Mobile Theme Toggle */}
                  <div className="flex items-center justify-center py-3">
                    <ThemeToggle />
                  </div>

                  <div className="flex items-center justify-center space-x-6 pt-4 mt-4 border-t border-border">
                    <a
                      href="https://github.com/MDrakib-uddin"
                      className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub profile"
                    >
                      <Github className="h-6 w-6" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/rakib-uddin-4050381b4/"
                      className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn profile"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a
                      href="mailto:rakibuddinraki2003@gmail.com"
                      className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                      aria-label="Send email"
                    >
                      <Mail className="h-6 w-6" />
                    </a>
                  </div>

                  <div className="pt-4">
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-primary to-accent text-white hover:scale-105 transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <a
                        href="#contact"
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection('#contact');
                        }}
                      >
                        Contact Me
                      </a>
                    </Button>
                  </div>
                </nav>
              </div>
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;