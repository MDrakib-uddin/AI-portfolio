import { Mail } from 'lucide-react';

const socialLinks = [
  {
    href: 'https://github.com/MDrakib-uddin',
    label: 'Github',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
    ),
  },
  {
    href: 'https://www.linkedin.com/in/rakib-uddin-4050381b4/',
    label: 'LinkedIn',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
    ),
  },
  {
    href: 'https://x.com/UddinRakib97463',
    label: 'Twitter',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
    ),
  },
  {
    href: 'https://facebook.com',
    label: 'Facebook',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
    ),
  },
  {
    href: 'mailto:rakibuddinraki2003@gmail.com',
    label: 'Email',
    icon: <Mail size={20} />,
  },
];

const Footer = () => {
  return (
    <footer className="bg-background pt-8 sm:pt-10 pb-3 sm:pb-4 border-t border-border">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-8 pb-4 sm:pb-6">
          {/* Left: Name & Description */}
          <div className="text-left w-full md:w-auto text-center md:text-left">
            <div className="text-xl sm:text-2xl font-bold mb-1">
              <span className="text-foreground">Rakib</span> <span className="bg-gradient-primary bg-clip-text text-transparent">Uddin</span>
            </div>
            <div className="text-muted-foreground text-sm">
              Building intelligent systems that solve real-world problems<br />
              through machine learning and data science.
            </div>
          </div>
          {/* Right: Social Icons */}
          <div className="flex gap-2 sm:gap-3 flex-wrap justify-center">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 rounded-full bg-secondary/20 hover:bg-primary/80 hover:text-white transition"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <hr className="border-border mb-2" />
        <div className="flex flex-col items-center gap-2">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xs sm:text-sm px-3 py-1 rounded bg-primary/10 hover:bg-primary/20 text-primary transition mb-1"
            aria-label="Back to top"
          >
            ↑ Back to top
          </button>
          <div className="text-center text-muted-foreground text-xs sm:text-sm">
            © 2025 Rakib Uddin. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;