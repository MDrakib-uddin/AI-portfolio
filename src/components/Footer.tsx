import { Heart, Brain } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo & Copyright */}
          <div className="flex items-center space-x-2">
            <Brain className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
              AI Engineer
            </span>
          </div>
          
          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© 2024 Alex Chen. Built with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>and cutting-edge AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;