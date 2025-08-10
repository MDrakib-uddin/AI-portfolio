import { Mail } from 'lucide-react';

const socialLinks = [
  {
    href: 'https://github.com/MDrakib-uddin',
    label: 'Github',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
    ),
    gradient: 'from-gray-600 to-gray-400',
    bgGradient: 'from-gray-600/10 to-gray-400/10'
  },
  {
    href: 'https://www.linkedin.com/in/rakib-uddin-4050381b4/',
    label: 'LinkedIn',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
    ),
    gradient: 'from-blue-600 to-blue-400',
    bgGradient: 'from-blue-600/10 to-blue-400/10'
  },
  {
    href: 'https://x.com/UddinRakib97463',
    label: 'Twitter',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
    ),
    gradient: 'from-sky-500 to-blue-500',
    bgGradient: 'from-sky-500/10 to-blue-500/10'
  },
  {
    href: 'https://www.kaggle.com/rakib730',
    label: 'Kaggle',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" fill="none"><g><path d="M6.857 6.857v18.286h3.429v-6.857l2.857 3.429 7.429 7.429h4.286l-9.143-9.143 8.571-8.571h-4.286l-9.143 9.143v-13.715h-3.429z" fill="#20BEFF"/></g></svg>
    ),
    gradient: 'from-blue-700 to-blue-500',
    bgGradient: 'from-blue-700/10 to-blue-500/10'
  },
  {
    href: 'https://huggingface.co/rakib730',
    label: 'Hugging Face',
    icon: (
      <svg width="20" height="20" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="36" cy="36" rx="36" ry="36" fill="#FFD21F"/><ellipse cx="24.5" cy="31.5" rx="3.5" ry="4.5" fill="#fff"/><ellipse cx="47.5" cy="31.5" rx="3.5" ry="4.5" fill="#fff"/><ellipse cx="24.5" cy="32.5" rx="1.5" ry="2.5" fill="#1A1A1A"/><ellipse cx="47.5" cy="32.5" rx="1.5" ry="2.5" fill="#1A1A1A"/><path d="M24 44c2.5 3 8.5 5 12 5s9.5-2 12-5" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round"/><path d="M18 41c0 4 7 7 18 7s18-3 18-7" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    gradient: 'from-yellow-500 to-orange-500',
    bgGradient: 'from-yellow-500/10 to-orange-500/10'
  },
  {
    href: 'mailto:rakibuddinraki2003@gmail.com',
    label: 'Email',
    icon: <Mail size={20} />,
    gradient: 'from-red-500 to-pink-500',
    bgGradient: 'from-red-500/10 to-pink-500/10'
  },
];

const Footer = () => {
  return (
    <footer className="bg-background pt-8 sm:pt-12 pb-4 sm:pb-6 border-t border-border relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 relative">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 pb-6 sm:pb-8">
          {/* Left: Enhanced Name & Description */}
          <div className="text-center md:text-left">
            <div className="text-xl sm:text-2xl font-bold mb-2 hover:scale-105 transition-transform duration-300">
              <span className="text-foreground">Rakib</span> 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Uddin</span>
            </div>
            <div className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Building intelligent systems that solve real-world problems<br />
              through <span className="text-primary font-semibold">machine learning</span> and <span className="text-primary font-semibold">data science</span>.
            </div>
          </div>

          {/* Right: Enhanced Social Icons */}
          <div className="flex gap-3 sm:gap-4 flex-wrap justify-center">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative p-3 sm:p-4 rounded-full bg-gradient-to-r ${social.gradient} text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group overflow-hidden`}
                aria-label={social.label}
                title={social.label}
              >
                {/* Background overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${social.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className="relative group-hover:animate-pulse">
                  {social.icon}
                </div>
                
                {/* Ripple effect */}
                <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-110 transition-transform duration-300 opacity-0 group-hover:opacity-30"></div>
              </a>
            ))}
          </div>
        </div>

        {/* Enhanced Divider */}
        <div className="relative mb-4 sm:mb-6">
          <hr className="border-border" />
          <div className="absolute inset-0 flex justify-center">
            <div className="bg-gradient-to-r from-primary to-accent h-0.5 w-24 sm:w-32"></div>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <div className="text-xs sm:text-sm text-muted-foreground text-center">
            <span className="block sm:inline">© 2025 Rakib Uddin. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;