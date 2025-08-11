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
    href: 'https://www.reddit.com/user/mdrakib_uddin/',
    label: 'Reddit',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M14.5 3l-1.5 3.5c-1.3.1-2.5.5-3.6 1.2-2.3-.4-4.2.3-5.1 1.9-.8 1.3-.7 2.9.2 4.1.3.4.7.7 1.1.9.2 1.5 1.3 2.9 3 3.9 1.5.9 3.4 1.4 5.4 1.4s3.9-.5 5.4-1.4c1.7-1 2.8-2.4 3-3.9.4-.2.8-.5 1.1-.9.9-1.2 1-2.8.2-4.1-.9-1.6-2.8-2.3-5.1-1.9-1.1-.7-2.3-1.1-3.6-1.2L14.5 3zM8.5 13c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm7 0c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zM12 18.2c-1.1 0-2.1-.3-2.8-.9-.2-.2-.2-.5 0-.7s.5-.2.7 0c.5.4 1.3.6 2.1.6s1.6-.2 2.1-.6c.2-.2.5-.2.7 0s.2.5 0 .7c-.7.6-1.7.9-2.8.9z"/></svg>
    ),
    gradient: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-500/10 to-red-500/10'
  },
  {
    href: 'https://substack.com/@vitaledge00?utm_source=user-menu',
    label: 'Substack',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M6 7h12M6 11h12M6 15h12"></path></svg>
    ),
    gradient: 'from-orange-500 to-orange-400',
    bgGradient: 'from-orange-500/10 to-orange-400/10'
  },
  {
    href: 'https://www.facebook.com/rakibuddin730',
    label: 'Facebook',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z"/></svg>
    ),
    gradient: 'from-blue-700 to-blue-500',
    bgGradient: 'from-blue-700/10 to-blue-500/10'
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