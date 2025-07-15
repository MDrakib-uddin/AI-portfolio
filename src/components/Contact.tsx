import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    content: 'rakibuddinraki2003@gmail.com',
    link: 'mailto:rakibuddinraki2003@gmail.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '01609980287',
    link: 'tel:+8801609980287',
  },
  {
    icon: MapPin,
    title: 'Location',
    content: "Cox's Bazar",
    link: null,
  },
];

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
    href: 'https://www.kaggle.com/rakib730',
    label: 'Kaggle',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" fill="none"><g><path d="M6.857 6.857v18.286h3.429v-6.857l2.857 3.429 7.429 7.429h4.286l-9.143-9.143 8.571-8.571h-4.286l-9.143 9.143v-13.715h-3.429z" fill="#20BEFF"/></g></svg>
    ),
  },
  {
    href: 'https://huggingface.co/rakib730',
    label: 'Hugging Face',
    icon: (
      <svg width="20" height="20" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="36" cy="36" rx="36" ry="36" fill="#FFD21F"/><ellipse cx="24.5" cy="31.5" rx="3.5" ry="4.5" fill="#fff"/><ellipse cx="47.5" cy="31.5" rx="3.5" ry="4.5" fill="#fff"/><ellipse cx="24.5" cy="32.5" rx="1.5" ry="2.5" fill="#1A1A1A"/><ellipse cx="47.5" cy="32.5" rx="1.5" ry="2.5" fill="#1A1A1A"/><path d="M24 44c2.5 3 8.5 5 12 5s9.5-2 12-5" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round"/><path d="M18 41c0 4 7 7 18 7s18-3 18-7" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(true); // For animation, can be improved

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-14 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6">
        <div
          ref={ref}
          className={`transition-all duration-500 transform ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
        <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
            <p className="text-base xs:text-lg text-muted-foreground max-w-xs xs:max-w-md sm:max-w-2xl mx-auto">
              Have a project in mind or want to discuss potential collaborations? Feel free to reach out.
          </p>
        </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
            {/* Left: Contact Form */}
          <Card className="bg-card border-border">
            <CardHeader>
                <CardTitle className="text-base sm:text-xl text-card-foreground flex items-center gap-2">
                  <Send className="h-5 w-5 text-primary" /> Send me a message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-1 sm:space-y-2">
                    <label htmlFor="name" className="text-xs sm:text-sm font-medium text-card-foreground">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                      className="bg-background border-border text-xs sm:text-base"
                    />
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <label htmlFor="email" className="text-xs sm:text-sm font-medium text-card-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-background border-border text-xs sm:text-base"
                    />
                  </div>
                    <div className="space-y-1 sm:space-y-2 col-span-1 sm:col-span-2">
                  <label htmlFor="subject" className="text-xs sm:text-sm font-medium text-card-foreground">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                    className="bg-background border-border text-xs sm:text-base"
                  />
                </div>
                  </div>
                <div className="space-y-1 sm:space-y-2">
                  <label htmlFor="message" className="text-xs sm:text-sm font-medium text-card-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or idea..."
                    rows={8}
                    required
                    className="bg-background border-border resize-none w-full min-h-[120px] sm:min-h-[200px] text-xs sm:text-base"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary hover:shadow-glow-purple transition-all duration-300 group text-xs sm:text-base"
                >
                  <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
            {/* Right: Info Cards */}
            <div className="flex flex-col gap-4 sm:gap-6 mt-6 lg:mt-0">
          {/* Contact Information */}
            <Card className="bg-card border-border">
              <CardHeader>
                  <CardTitle className="text-sm sm:text-lg text-card-foreground">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-full text-primary">
                        <item.icon size={22} />
                      </div>
                    <div>
                        <div className="font-semibold text-card-foreground">{item.title}</div>
                        {item.link ? (
                          <a href={item.link} className="text-muted-foreground hover:text-primary transition">
                            {item.content}
                          </a>
                        ) : (
                          <div className="text-muted-foreground">{item.content}</div>
                        )}
                      </div>
                    </div>
                ))}
              </CardContent>
            </Card>
              {/* Follow Me */}
            <Card className="bg-card border-border">
              <CardHeader>
                  <CardTitle className="text-lg text-card-foreground">Follow Me</CardTitle>
              </CardHeader>
              <CardContent>
                  <div className="flex gap-3 mt-2">
                    {socialLinks.map((social, i) => (
                    <a
                        key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                        className="p-3 rounded-full bg-secondary/30 hover:bg-primary/80 hover:text-white transition"
                        aria-label={social.label}
                    >
                        {social.icon}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
            {/* Availability */}
            <Card className="bg-card border-border">
              <CardHeader>
                  <CardTitle className="text-lg text-card-foreground">Availability</CardTitle>
              </CardHeader>
              <CardContent>
                  <div className="font-semibold text-card-foreground mb-1">Currently open for new opportunities</div>
                  <div className="text-muted-foreground text-sm">
                    I'm always interested in discussing innovative AI projects, consulting opportunities, or potential collaborations. Feel free to reach out!
                  </div>
              </CardContent>
            </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;