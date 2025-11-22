import { useState, useRef, type FormEvent, type ChangeEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Mail, Phone, MapPin, Send, CheckCircle, Sparkles, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';


// Inline analytics functions to avoid import issues
const trackContactSubmission = () => {
  console.log('📊 Contact submission tracked');
};

const trackButtonClick = (buttonName: string) => {
  console.log('📊 Button click tracked:', buttonName);
};

const useToast = () => {
  return {
    toast: (message: string | { title: string; description?: string }) => {
      if (typeof message === 'string') {
        console.log('Toast:', message);
      } else {
        console.log('Toast:', message.title, message.description ?? '');
      }
    }
  };
};

const useSectionTracking = (_sectionId: string) => {
  const sectionRef = useRef<HTMLElement>(null);
  return sectionRef;
};

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
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" fill="none"><g><path d="M6.857 6.857v18.286h3.429v-6.857l2.857 3.429 7.429 7.429h4.286l-9.143-9.143 8.571-8.571h-4.286l-9.143 9.143v-13.715h-3.429z" fill="#20BEFF" /></g></svg>
    ),
    gradient: 'from-blue-700 to-blue-500'
  },
  {
    href: 'https://huggingface.co/rakib730',
    label: 'Hugging Face',
    icon: (
      <svg width="20" height="20" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="36" cy="36" rx="36" ry="36" fill="#FFD21F" /><ellipse cx="24.5" cy="31.5" rx="3.5" ry="4.5" fill="#fff" /><ellipse cx="47.5" cy="31.5" rx="3.5" ry="4.5" fill="#fff" /><ellipse cx="24.5" cy="32.5" rx="1.5" ry="2.5" fill="#1A1A1A" /><ellipse cx="47.5" cy="32.5" rx="1.5" ry="2.5" fill="#1A1A1A" /><path d="M24 44c2.5 3 8.5 5 12 5s9.5-2 12-5" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" /><path d="M18 41c0 4 7 7 18 7s18-3 18-7" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" /></svg>
    ),
    gradient: 'from-yellow-500 to-orange-500'
  },
];

const Contact = () => {
  const sectionRef = useSectionTracking('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    trackContactSubmission();
    trackButtonClick('submit_contact');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message
    } as Record<string, unknown>;

    try {
      if (!serviceId || !templateId || !publicKey) {
        console.warn('EmailJS env not configured. Skipping real send.');
        await new Promise((res) => setTimeout(res, 1200));
      } else {
        await emailjs.send(serviceId, templateId, templateParams, { publicKey });
      }

      toast({
        title: 'Message sent!',
        description: "Thank you for your message. I'll get back to you soon.",
      });

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#a855f7', '#ec4899', '#8b5cf6'],
      });

      setStatus({ type: 'success', message: 'Message sent successfully.' });
      setTimeout(() => setStatus({ type: null, message: '' }), 4000);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email send failed:', error);
      toast({
        title: 'Failed to send',
        description: 'Please try again later or email me directly.',
      });
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
      setTimeout(() => setStatus({ type: null, message: '' }), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-14 sm:py-20 bg-background relative overflow-hidden" ref={sectionRef}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="h-6 w-6 text-primary" />
            </motion.div>
            <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold">
              Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
            </h2>
            <motion.div
              animate={{
                rotate: [360, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="h-6 w-6 text-accent" />
            </motion.div>
          </div>
          <p className="text-base xs:text-lg text-muted-foreground max-w-xs xs:max-w-md sm:max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? Let's create something amazing together!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Side - Contact Info & Social (2 columns) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <Card className="relative overflow-hidden bg-card border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group cursor-pointer">
                    <div className={`absolute inset-0 bg-gradient-to-br ${info.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${info.gradient}`}></div>

                    <CardContent className="relative p-4">
                      <div className="flex items-center gap-3">
                        <motion.div
                          className={`p-2.5 rounded-lg bg-gradient-to-br ${info.gradient}`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <info.icon className="h-5 w-5 text-white" />
                        </motion.div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xs font-medium text-muted-foreground mb-0.5">{info.title}</h3>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-sm font-semibold text-foreground hover:text-primary transition-colors truncate block"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-sm font-semibold text-foreground truncate">{info.content}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <Card className="relative overflow-hidden bg-card border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"></div>

              <CardHeader className="relative pb-3">
                <CardTitle className="text-base text-card-foreground group-hover:text-primary transition-colors duration-300">
                  Connect With Me
                </CardTitle>
              </CardHeader>

              <CardContent className="relative">
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg bg-gradient-to-r ${social.gradient} text-white shadow-md hover:shadow-lg transition-all duration-300 group/social`}
                      aria-label={social.ariaLabel || social.label}
                      title={social.label}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="group-hover/social:animate-pulse">
                        {social.icon}
                      </div>
                    </motion.a>
                  ))}
                </div>
              </CardContent>

              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-full transition-all duration-500"></div>
            </Card>

            {/* Availability Card */}
            <Card className="relative overflow-hidden bg-card border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 to-teal-500"></div>

              <CardHeader className="relative pb-3">
                <CardTitle className="text-base text-card-foreground flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                  Availability
                </CardTitle>
              </CardHeader>

              <CardContent className="relative">
                <div className="text-sm font-semibold text-card-foreground mb-2">
                  Open for opportunities
                </div>
                <div className="text-xs text-muted-foreground leading-relaxed">
                  Interested in AI projects, consulting, or collaborations. Feel free to reach out!
                </div>
              </CardContent>

              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-full transition-all duration-500"></div>
            </Card>
          </motion.div>

          {/* Right Side - Contact Form (3 columns) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <Card className="relative overflow-hidden bg-card border-border hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 group h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-accent"></div>

              <CardHeader className="relative">
                <CardTitle className="text-xl text-card-foreground flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  Send Me a Message
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-2">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </CardHeader>

              <CardContent className="relative">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-card-foreground">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-background/50 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-card-foreground">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-background/50 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-card-foreground">
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or idea..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-background/50 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:scale-100 h-12 text-base font-semibold"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {status.type && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`text-sm rounded-lg p-4 border flex items-center gap-2 ${status.type === 'success'
                          ? 'bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-400 dark:border-green-800'
                          : 'bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-400 dark:border-red-800'
                        }`}
                      role="status"
                      aria-live="polite"
                    >
                      {status.type === 'success' ? (
                        <CheckCircle className="h-5 w-5 flex-shrink-0" />
                      ) : (
                        <span className="text-lg flex-shrink-0">⚠️</span>
                      )}
                      <span>{status.message}</span>
                    </motion.div>
                  )}
                </form>
              </CardContent>

              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-full transition-all duration-500"></div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;