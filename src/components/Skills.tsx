import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FiExternalLink } from 'react-icons/fi';
import { useState, useEffect } from 'react';

const Skills = () => {
  const [animatedValues, setAnimatedValues] = useState({});
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const technicalSkills = [
    { 
      name: "Machine Learning", 
      level: 95, 
      icon: "🤖",
      description: "Supervised/Unsupervised learning, Feature Engineering",
      projects: ["House Price Prediction", "Anomaly Detection"],
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      name: "PyTorch", 
      level: 90, 
      icon: "🔥",
      description: "Neural Networks, Custom Models, Fine-tuning",
      projects: ["Vision Transformers", "Audio Classification"],
      gradient: "from-orange-500 to-red-500"
    },
    { 
      name: "TensorFlow", 
      level: 85, 
      icon: "🧠",
      description: "Deep Learning, Model Deployment, TensorFlow Lite",
      projects: ["Image Classification", "Face Mask Detection"],
      gradient: "from-green-500 to-teal-500"
    },
    { 
      name: "Deep Learning", 
      level: 92, 
      icon: "⚡",
      description: "CNNs, RNNs, Transformers, GANs",
      projects: ["Token Classification", "Speech Recognition"],
      gradient: "from-purple-500 to-pink-500"
    },
    { 
      name: "Computer Vision", 
      level: 88, 
      icon: "👁️",
      description: "Image Processing, Object Detection, OCR",
      projects: ["Pet Classification", "Real-time Detection"],
      gradient: "from-indigo-500 to-blue-500"
    },
    { 
      name: "Natural Language Processing", 
      level: 85, 
      icon: "💬",
      description: "Text Processing, Sentiment Analysis, LLMs",
      projects: ["Chatbot", "Text Classification"],
      gradient: "from-emerald-500 to-green-500"
    },
    { 
      name: "Reinforcement Learning", 
      level: 80, 
      icon: "🎯",
      description: "Q-Learning, Policy Gradient, Game AI",
      projects: ["Game Agent", "Optimization"],
      gradient: "from-yellow-500 to-orange-500"
    },
    { 
      name: "MLOps", 
      level: 80, 
      icon: "🚀",
      description: "Model Deployment, Monitoring, CI/CD",
      projects: ["Pipeline Automation", "Model Serving"],
      gradient: "from-pink-500 to-rose-500"
    },
  ];

  const aiDomains = [
    { name: "Computer Vision", icon: "👁️", color: "from-blue-500 to-cyan-500" },
    { name: "Natural Language Processing", icon: "💬", color: "from-green-500 to-teal-500" },
    { name: "Machine Learning", icon: "🤖", color: "from-purple-500 to-pink-500" },
    { name: "Deep Learning", icon: "🧠", color: "from-orange-500 to-red-500" },
    { name: "Neural Networks", icon: "🔗", color: "from-indigo-500 to-purple-500" },
    { name: "Data Science", icon: "📊", color: "from-emerald-500 to-green-500" },
    { name: "MLOps & DevOps", icon: "🚀", color: "from-yellow-500 to-orange-500" },
    { name: "Edge Computing", icon: "⚡", color: "from-pink-500 to-rose-500" },
    { name: "Explainable AI", icon: "🔍", color: "from-cyan-500 to-blue-500" },
    { name: "Reinforcement Learning", icon: "🎯", color: "from-violet-500 to-purple-500" }
  ];

  const tools = [
    "PyTorch", "TensorFlow", "Hugging Face", "OpenCV", "scikit-learn",
    "Pandas", "NumPy", "Docker", "Kubernetes", "Git", "Jupyter",
    "MLflow", "Weights & Biases", "Librosa", "Transformers", "LangChain", "LangGraph",
    "Flask","Railway","Netlify","Streamlit","Gradio","Vercel",
  ];

  const languages = [
    "Python", "JavaScript", "C++", "SQL", "R", "Julia", "Go", "Rust","Java","C",
    "SQL","NoSQL","DSA","OOP"
  ];

  // Animate progress bars on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      technicalSkills.forEach((skill, index) => {
        setTimeout(() => {
          setAnimatedValues(prev => ({
            ...prev,
            [skill.name]: skill.level
          }));
        }, index * 200);
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="py-14 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">
            Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-base xs:text-lg text-muted-foreground max-w-xs xs:max-w-md sm:max-w-3xl mx-auto">
            A comprehensive toolkit for building next-generation AI solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* Enhanced Technical Proficiency */}
          <Card className="relative overflow-hidden bg-card border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 group">
            {/* Gradient background overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Top gradient border */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
            
            <CardHeader className="relative pb-3">
              <CardTitle className="text-base sm:text-xl text-card-foreground flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                🎯 Technical Proficiency
              </CardTitle>
            </CardHeader>
            <CardContent className="relative space-y-3 sm:space-y-4">
              {technicalSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="space-y-2 p-2 rounded-lg hover:bg-secondary/20 transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{skill.icon}</span>
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    </div>
                    <span className="text-sm text-primary font-semibold">{skill.level}%</span>
                  </div>
                  <div className="relative">
                    <Progress 
                      value={animatedValues[skill.name] || 0} 
                      className="h-2"
                    />
                    <div 
                      className={`absolute top-0 left-0 h-2 bg-gradient-to-r ${skill.gradient} rounded-full transition-all duration-1000`}
                      style={{ width: `${animatedValues[skill.name] || 0}%` }}
                    ></div>
                  </div>
                  {hoveredSkill === skill.name && (
                    <div className="mt-1 animate-fade-in">
                      <p className="text-xs text-muted-foreground mb-1">{skill.description}</p>
                      <div className="flex gap-1 flex-wrap">
                        {skill.projects.map((project, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs bg-primary/10">
                            {project}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
            
            {/* Bottom decoration */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-full transition-all duration-500"></div>
          </Card>

          {/* Enhanced AI Domains */}
          <Card className="relative overflow-hidden bg-card border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 group">
            {/* Gradient background overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Top gradient border */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-primary"></div>
            
            <CardHeader className="relative pb-3">
              <CardTitle className="text-base sm:text-xl text-card-foreground flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                🤖 AI Domains
              </CardTitle>
            </CardHeader>
            <CardContent className="relative">
              <div className="grid grid-cols-2 gap-1 sm:gap-2">
                {aiDomains.map((domain, index) => (
                  <div
                    key={domain.name}
                    className="group/item p-2 rounded-lg border border-border/50 text-center hover:shadow-md transition-all duration-300 cursor-pointer hover:scale-105"
                  >
                    <div className={`w-8 h-8 mx-auto mb-1 rounded-lg bg-gradient-to-r ${domain.color} p-1 flex items-center justify-center group-hover/item:animate-bounce`}>
                      <span className="text-white text-sm">{domain.icon}</span>
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-card-foreground group-hover/item:text-primary transition-colors truncate">
                      {domain.name}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            
            {/* Bottom decoration */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-full transition-all duration-500"></div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-5 sm:mb-6">
          {/* Enhanced Tools & Technologies */}
          <Card className="relative overflow-hidden bg-card border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 group">
            {/* Gradient background overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Top gradient border */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 to-teal-500"></div>
            
            <CardHeader className="relative pb-3">
              <CardTitle className="text-base sm:text-xl text-card-foreground flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                🛠️ Tools & Technologies
              </CardTitle>
            </CardHeader>
            <CardContent className="relative">
              <div className="flex flex-wrap gap-1">
                {tools.map((tool, index) => (
                  <Badge
                    key={tool}
                    variant="outline"
                    className="text-xs sm:text-sm bg-primary/10 border-primary/20 hover:bg-gradient-to-r hover:from-green-500 hover:to-teal-500 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
            
            {/* Bottom decoration */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-full transition-all duration-500"></div>
          </Card>

          {/* Enhanced Languages & Others */}
          <Card className="relative overflow-hidden bg-card border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 group">
            {/* Gradient background overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Top gradient border */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            
            <CardHeader className="relative pb-3">
              <CardTitle className="text-base sm:text-xl text-card-foreground flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                🔤 Languages & Others
              </CardTitle>
            </CardHeader>
            <CardContent className="relative">
              <div className="flex flex-wrap gap-1">
                {languages.map((language, index) => (
                  <Badge
                    key={language}
                    variant="outline"
                    className="text-xs sm:text-sm bg-primary/10 border-primary/20 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
                  >
                    {language}
                  </Badge>
                ))}
              </div>
            </CardContent>
            
            {/* Bottom decoration */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-full transition-all duration-500"></div>
          </Card>
        </div>

        {/* Enhanced Certifications & Achievements */}
        <Card className="relative overflow-hidden bg-card border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 group mt-5 sm:mt-6">
          {/* Gradient background overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Top gradient border */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500"></div>
          
          <CardHeader className="relative">
            <CardTitle className="text-base sm:text-xl text-card-foreground flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
              🏆 Certifications & Achievements
            </CardTitle>
          </CardHeader>
          <CardContent className="relative">
            <ul className="space-y-2 sm:space-y-3">
              <li className="space-y-1 sm:space-y-2 flex items-center justify-between gap-2 p-2 rounded-lg hover:bg-secondary/20 transition-all duration-300">
                <div>
                  <h4 className="font-semibold text-card-foreground text-xs sm:text-base flex items-center gap-2">
                    <span className="text-lg">🎖️</span>
                    AWS Certified Machine Learning - Specialty
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">Amazon Web Services • 2023</p>
                </div>
                <Button
                  asChild
                  size="sm"
                  className="bg-gradient-to-r from-primary to-purple-500 text-white shadow-md hover:from-primary/90 hover:to-purple-600 hover:scale-105 transition-all px-3 py-1.5 rounded flex items-center gap-1"
                  aria-label="View AWS Certificate"
                >
                  <a href="https://example.com/aws-certificate-demo" target="_blank" rel="noopener noreferrer">
                    View <FiExternalLink className="ml-1" />
                  </a>
                </Button>
              </li>

              <li className="space-y-1 sm:space-y-2 flex items-center justify-between gap-2 p-2 rounded-lg hover:bg-secondary/20 transition-all duration-300">
                <div>
                  <h4 className="font-semibold text-card-foreground text-xs sm:text-base flex items-center gap-2">
                    <span className="text-lg">🥇</span>
                    TensorFlow Developer Certificate
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">Google • 2022</p>
                </div>
                <Button
                  asChild
                  size="sm"
                  className="bg-gradient-to-r from-primary to-yellow-500 text-white shadow-md hover:from-primary/90 hover:to-yellow-600 hover:scale-105 transition-all px-3 py-1.5 rounded flex items-center gap-1"
                  aria-label="View TensorFlow Certificate"
                >
                  <a href="https://example.com/tensorflow-certificate-demo" target="_blank" rel="noopener noreferrer">
                    View <FiExternalLink className="ml-1" />
                  </a>
                </Button>
              </li>

              <li className="space-y-1 sm:space-y-2 flex items-center justify-between gap-2 p-2 rounded-lg hover:bg-secondary/20 transition-all duration-300">
                <div>
                  <h4 className="font-semibold text-card-foreground text-xs sm:text-base flex items-center gap-2">
                    <span className="text-lg">🎓</span>
                    Deep Learning Specialization
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">Coursera/Stanford • 2021</p>
                </div>
                <Button
                  asChild
                  size="sm"
                  className="bg-gradient-to-r from-primary to-pink-500 text-white shadow-md hover:from-primary/90 hover:to-pink-600 hover:scale-105 transition-all px-3 py-1.5 rounded flex items-center gap-1"
                  aria-label="View Deep Learning Certificate"
                >
                  <a href="https://example.com/deeplearning-certificate-demo" target="_blank" rel="noopener noreferrer">
                    View <FiExternalLink className="ml-1" />
                  </a>
                </Button>
              </li>
            </ul>
          </CardContent>
          
          {/* Bottom decoration */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-full transition-all duration-500"></div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;