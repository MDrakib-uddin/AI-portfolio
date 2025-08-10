import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { trackContactSubmission, trackButtonClick } from '@/lib/analytics';
import { useToast } from '@/hooks/use-toast';
import { useSectionTracking } from '@/hooks/use-section-tracking';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    content: 'rakibuddinraki2003@gmail.com',
    link: 'mailto:rakibuddinraki2003@gmail.com',
    gradient: 'from-red-500 to-pink-500',
    bgGradient: 'from-red-500/10 to-pink-500/10'
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '01609980287',
    link: 'tel:+8801609980287',
    gradient: 'from-green-500 to-teal-500',
    bgGradient: 'from-green-500/10 to-teal-500/10'
  },
  {
    icon: MapPin,
    title: 'Location',
    content: "Cox's Bazar",
    link: null,
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-500/10 to-cyan-500/10'
  },
];

const socialLinks = [
  {
    href: 'https://github.com/MDrakib-uddin',
    label: 'Github',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
    ),
    ariaLabel: 'Github profile',
    gradient: 'from-gray-600 to-gray-400'
  },
  {
    href: 'https://www.linkedin.com/in/rakib-uddin-4050381b4/',
    label: 'LinkedIn',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
    ),
    gradient: 'from-blue-600 to-blue-400'
  },
  {
    href: 'https://x.com/UddinRakib97463',
    label: 'Twitter',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
    ),
    gradient: 'from-sky-500 to-blue-500'
  },
  {
    href: 'https://www.kaggle.com/rakib730',
    label: 'Kaggle',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" fill="none"><g><path d="M6.857 6.857v18.286h3.429v-6.857l2.857 3.429 7.429 7.429h4.286l-9.143-9.143 8.571-8.571h-4.286l-9.143 9.143v-13.715h-3.429z" fill="#20BEFF"/></g></svg>
    ),
    gradient: 'from-blue-700 to-blue-500'
  },
  {
    href: 'https://huggingface.co/rakib730',
    label: 'Hugging Face',
    icon: (
      <svg width="20" height="20" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="36" cy="36" rx="36" ry="36" fill="#FFD21F"/><ellipse cx="24.5" cy="31.5" rx="3.5" ry="4.5" fill="#fff"/><ellipse cx="47.5" cy="31.5" rx="3.5" ry="4.5" fill="#fff"/><ellipse cx="24.5" cy="32.5" rx="1.5" ry="2.5" fill="#1A1A1A"/><ellipse cx="47.5" cy="32.5" rx="1.5" ry="2.5" fill="#1A1A1A"/><path d="M24 44c2.5 3 8.5 5 12 5s9.5-2 12-5" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round"/><path d="M18 41c0 4 7 7 18 7s18-3 18-7" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    gradient: 'from-yellow-500 to-orange-500'
  },
];

const Contact = () => {
  const sectionRef = useSectionTracking({ sectionName: 'contact' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Track contact submission
    trackContactSubmission();
    trackButtonClick('submit_contact');
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-14 sm:py-20 bg-gradient-secondary" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-base xs:text-lg text-muted-foreground max-w-xs xs:max-w-md sm:max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Enhanced Contact Form */}
          <Card className="relative overflow-hidden bg-card border-border hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 group">
            {/* Gradient background overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Top gradient border */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
            
            <CardHeader className="relative">
              <CardTitle className="text-base sm:text-xl text-card-foreground flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                <CheckCircle className="h-5 w-5 text-primary" />
                Send Message
              </CardTitle>
            </CardHeader>
            
            <CardContent className="relative">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-card-foreground">
                    Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                    type="text"
                    placeholder="Enter your name"
                      value={formData.name}
                    onChange={handleChange}
                      required
                    className="bg-background/50 border-border focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                    />
                  </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-card-foreground">
                    Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                    placeholder="Enter your email"
                      value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-border focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-card-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or idea"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={8}
                    className="bg-background/50 border-border focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none min-h-[200px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                  Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
            
            {/* Bottom decoration */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-full transition-all duration-500"></div>
          </Card>

          {/* Enhanced Contact Info & Social */}
          <div className="flex flex-col gap-6 sm:gap-8 mt-6 lg:mt-0">
            {/* Enhanced Contact Information */}
            <Card className="relative overflow-hidden bg-card border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 group">
              {/* Gradient background overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Top gradient border */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              
              <CardHeader className="relative">
                <CardTitle className="text-sm sm:text-lg text-card-foreground group-hover:text-primary transition-colors duration-300">
                  Contact Information
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-2 rounded-lg hover:bg-secondary/20 transition-all duration-300">
                    <div className={`p-3 bg-gradient-to-r ${item.gradient} rounded-full text-white shadow-lg hover:scale-110 transition-transform duration-300`}>
                      <item.icon size={20} />
                      </div>
                    <div>
                        <div className="font-semibold text-card-foreground">{item.title}</div>
                        {item.link ? (
                        <a 
                          href={item.link} 
                          className="text-muted-foreground hover:text-primary transition-colors duration-300"
                        >
                            {item.content}
                          </a>
                        ) : (
                          <div className="text-muted-foreground">{item.content}</div>
                        )}
                      </div>
                    </div>
                ))}
              </CardContent>
              
              {/* Bottom decoration */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-full transition-all duration-500"></div>
            </Card>

            {/* Enhanced Follow Me */}
            <Card className="relative overflow-hidden bg-card border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 group">
              {/* Gradient background overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Top gradient border */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              
              <CardHeader className="relative">
                <CardTitle className="text-lg text-card-foreground group-hover:text-primary transition-colors duration-300">
                  Follow Me
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative">
                  <div className="flex gap-3 mt-2">
                    {socialLinks.map((social, i) => (
                    <a
                        key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full bg-gradient-to-r ${social.gradient} text-white shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 group/social`}
                        aria-label={social.ariaLabel || social.label}
                      title={social.label}
                    >
                      <div className="group-hover/social:animate-pulse">
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
              
              {/* Bottom decoration */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-full transition-all duration-500"></div>
            </Card>

            {/* Enhanced Availability */}
            <Card className="relative overflow-hidden bg-card border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 group">
              {/* Gradient background overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Top gradient border */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 to-teal-500"></div>
              
              <CardHeader className="relative">
                <CardTitle className="text-lg text-card-foreground flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  Availability
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative">
                <div className="font-semibold text-card-foreground mb-2">
                  Currently open for new opportunities
                </div>
                <div className="text-muted-foreground text-sm leading-relaxed">
                    I'm always interested in discussing innovative AI projects, consulting opportunities, or potential collaborations. Feel free to reach out!
                  </div>
              </CardContent>
              
              {/* Bottom decoration */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-full transition-all duration-500"></div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;