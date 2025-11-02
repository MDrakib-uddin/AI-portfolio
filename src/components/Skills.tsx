import { Progress } from './ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { FiExternalLink } from 'react-icons/fi';
import { useState, useEffect, useRef } from 'react';
import { 
  Bot, Brain, Zap, Eye, MessageSquare, Target, Rocket,
  Network, BarChart3, Code, Globe, Database, Cloud, Layers, Terminal, Server
} from 'lucide-react';

const useSectionTracking = (sectionId: string) => {
  const sectionRef = useRef<HTMLElement>(null);
  return sectionRef;
};

const Skills = () => {
  const sectionRef = useSectionTracking('skills');
  const [animatedValues, setAnimatedValues] = useState({});
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeSection, setActiveSection] = useState('programming');

  // Programming & Development Skills
  const programmingSkills = [
    { 
      name: "Python", 
      level: 95, 
      icon: Code,
      description: "Core Python, OOP, Data Structures, Algorithms",
      projects: ["Web APIs", "Data Processing", "Automation"],
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      name: "JavaScript", 
      level: 88, 
      icon: Globe,
      description: "ES6+, React, Node.js, TypeScript",
      projects: ["Frontend Apps", "Backend APIs", "Full-stack"],
      gradient: "from-yellow-500 to-orange-500"
    },
    { 
      name: "C++", 
      level: 85, 
      icon: Code,
      description: "STL, Competitive Programming, System Programming",
      projects: ["Algorithms", "Data Structures", "Performance"],
      gradient: "from-purple-500 to-pink-500"
    },
    { 
      name: "Web Development", 
      level: 90, 
      icon: Layers,
      description: "React, Next.js, HTML/CSS, Responsive Design",
      projects: ["Portfolio Sites", "Blogsite", "E-commerce"],
      gradient: "from-green-500 to-teal-500"
    },
    { 
      name: "Backend Development", 
      level: 85, 
      icon: Server,
      description: "Flask, FastAPI, Django, REST APIs",
      projects: ["API Development", "Database Design", "Authentication"],
      gradient: "from-indigo-500 to-blue-500"
    },
    { 
      name: "Database", 
      level: 80, 
      icon: Database,
      description: "SQL, MongoDB, PostgreSQL, Redis",
      projects: ["Data Modeling", "Query Optimization", "Caching"],
      gradient: "from-red-500 to-pink-500"
    }
  ];

  // AI & Machine Learning Skills (Merged)
  const aiSkills = [
    { 
      name: "Machine Learning", 
      level: 95, 
      icon: Brain,
      description: "Regration,Classification, Clustering, Dimensionality Reduction",
      projects: ["House Price Prediction", "Insurance Prediction"],
      gradient: "from-blue-500 to-cyan-500",
      domains: ["Supervised Learning", "Unsupervised Learning", "Feature Engineering","PCA"]
    },
    { 
      name: "Deep Learning", 
      level: 92, 
      icon: Zap,
      description: "ANNs, CNNs, RNNs, Transformers, GANs",
      projects: ["Token Classification", "Speech Recognition","Potato Disease Detection"],
      gradient: "from-purple-500 to-pink-500",
      domains: ["Neural Networks", "Computer Vision", "NLP", "LLMs","TensorFlow", "PyTorch"]
    },
    { 
      name: "Computer Vision", 
      level: 88, 
      icon: Eye,
      description: "Image Processing, Object Detection, OCR",
      projects: ["Pet Classification", "Biomedical Image Analysis"],
      gradient: "from-indigo-500 to-blue-500",
      domains: ["Image Processing", "Object Detection", "OCR"]
    },
    { 
      name: "Natural Language Processing", 
      level: 85, 
      icon: MessageSquare,
      description: "Text Processing, Sentiment Analysis, LLMs",
      projects: ["Chatbot", "Text Classification","Question Answering"],
      gradient: "from-emerald-500 to-green-500",
      domains: ["Text Processing", "Sentiment Analysis", "LLMs"]
    },
    { 
      name: "Reinforcement Learning", 
      level: 80, 
      icon: Target,
      description: "Unity ML-Agents, Policy Gradient, Game AI",
      projects: ["Game Agent", "Optimization","PPO Agent"],
      gradient: "from-yellow-500 to-orange-500",
      domains: ["Q-Learning", "Policy Gradient", "Game AI"]
    },
    { 
      name: "MLOps", 
      level: 80, 
      icon: Rocket,
      description: "Model Deployment, Monitoring, CI/CD",
      projects: ["Pipeline Automation", "Car Price Prediction","Capstone Project"],
      gradient: "from-pink-500 to-rose-500",
      domains: ["Model Deployment", "Monitoring", "CI/CD"]
    }
  ];

  // Tools & Technologies
  const toolsAndTech = [
    {
      category: "AI Frameworks",
      items: ["PyTorch", "TensorFlow", "Hugging Face", "OpenCV", "scikit-learn", "Keras","nltk","YOLO","OpenAI Gym","Stable Baselines3"],
      icon: Brain,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      category: "Data Science",
      items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter","Google Colab","Kaggle"],
      icon: BarChart3,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      category: "Version Control & MLOps",
      items: ["Docker", "Kubernetes", "AWS", "Azure", "GCP","Git", "Github","DVC","GitLab", "Bitbucket"],
      icon: Cloud,
      gradient: "from-green-500 to-teal-500"
    },
    {
      category: "AI Agents",
      items: ["Langchain", "LlamaIndex", "Langgraph", "SmolAgent", "RAG","Vector DBs", "Pinecone", "ChromaDB"],
      icon: Code,
      gradient: "from-orange-500 to-red-500"
    },
    {
      category: "Web Frameworks",
      items: ["React","GO", "Django", "FastAPI", "Flask"],
      icon: Globe,
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      category: "Deployment & Monitoring",
      items: ["MLflow", "Weights & Biases", "Streamlit", "Gradio", "TensorBoard", "Prometheus", "Grafana",],
      icon: Rocket,
      gradient: "from-indigo-500 to-purple-500"
    },
  ];

  const languages = [
    "Python", "JavaScript", "C++", "SQL", "R", "Go", "Rust", "Java", "C",
    "TypeScript", "HTML", "CSS", "DSA", "OOP", "Arduino"
  ];

  // Animate progress bars on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      const allSkills = [...programmingSkills, ...aiSkills];
      allSkills.forEach((skill, index) => {
        setTimeout(() => {
          setAnimatedValues(prev => ({
            ...prev,
            [skill.name]: skill.level
          }));
        }, index * 150);
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const sections = [
    { id: 'programming', name: 'Programming & Development', icon: Code },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain },
    { id: 'tools', name: 'Tools & Technologies', icon: Rocket }
  ];

  return (
    <section id="skills" className="py-14 sm:py-20 bg-background" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">
            Technical Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-base xs:text-lg text-muted-foreground max-w-xs xs:max-w-md sm:max-w-3xl mx-auto">
            A comprehensive toolkit for building next-generation AI solutions
          </p>
        </div>

        {/* Dynamic Section Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg scale-105'
                  : 'bg-card border border-border text-muted-foreground hover:bg-secondary hover:text-foreground'
              }`}
            >
              <section.icon className="h-4 w-4" />
              <span className="text-sm font-medium">{section.name}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Content Based on Active Section */}
        <div className="space-y-6">
          {activeSection === 'programming' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Programming Skills */}
              <Card className="relative overflow-hidden bg-card border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                
                <CardHeader className="relative pb-3">
                  <CardTitle className="text-base sm:text-xl text-card-foreground flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                    <Code className="h-5 w-5" /> Programming Skills
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative space-y-3 sm:space-y-4">
                  {programmingSkills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="space-y-2 p-2 rounded-lg hover:bg-secondary/20 transition-all duration-300 cursor-pointer"
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <skill.icon className="h-5 w-5 text-primary" />
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
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-full transition-all duration-500"></div>
              </Card>

              {/* Languages */}
              <Card className="relative overflow-hidden bg-card border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 group">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 to-teal-500"></div>
                
                <CardHeader className="relative pb-3">
                  <CardTitle className="text-base sm:text-xl text-card-foreground flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                    <Terminal className="h-5 w-5" /> Programming Languages
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <div className="flex flex-wrap gap-2">
                    {languages.map((language, index) => (
                      <Badge 
                        key={language}
                        variant="outline"
                        className="text-xs sm:text-sm bg-primary/10 border-primary/20 hover:bg-gradient-to-r hover:from-green-500 hover:to-teal-500 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
                      >
                        {language}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-full transition-all duration-500"></div>
              </Card>
            </div>
          )}

          {activeSection === 'ai' && (
            <div className="space-y-6">
              {/* AI Skills with Domains */}
              <Card className="relative overflow-hidden bg-card border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                
                <CardHeader className="relative pb-3">
                  <CardTitle className="text-base sm:text-xl text-card-foreground flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                    <Brain className="h-5 w-5" /> AI & Machine Learning Expertise
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* AI Skills with Progress Bars */}
                    <div className="space-y-3 sm:space-y-4">
                      {aiSkills.map((skill, index) => (
                        <div
                          key={skill.name}
                          className="space-y-2 p-3 rounded-lg hover:bg-secondary/20 transition-all duration-300 cursor-pointer border border-border/50"
                          onMouseEnter={() => setHoveredSkill(skill.name)}
                          onMouseLeave={() => setHoveredSkill(null)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <skill.icon className="h-5 w-5 text-primary" />
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
                            <div className="mt-2 animate-fade-in space-y-2">
                              <p className="text-xs text-muted-foreground">{skill.description}</p>
                              <div className="space-y-1">
                                <p className="text-xs font-medium text-primary">Projects:</p>
                                <div className="flex gap-1 flex-wrap">
                                  {skill.projects.map((project, idx) => (
                                    <Badge key={idx} variant="outline" className="text-xs bg-primary/10">
                                      {project}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              <div className="space-y-1">
                                <p className="text-xs font-medium text-primary">Domains:</p>
                                <div className="flex gap-1 flex-wrap">
                                  {skill.domains.map((domain, idx) => (
                                    <Badge key={idx} variant="outline" className="text-xs bg-accent/10 border-accent/20">
                                      {domain}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* AI Domains Grid */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <Network className="h-5 w-5 text-primary" /> AI Domains Overview
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { name: "Image Processing", icon: Eye, color: "from-blue-500 to-cyan-500", count: "3+ Projects" },
                          { name: "Text Processing", icon: MessageSquare, color: "from-green-500 to-teal-500", count: "5+ Projects" },
                          { name: "Speech & Audio", icon: Bot, color: "from-purple-500 to-pink-500", count: "2+ Projects" },
                          { name: "Neural Networks", icon: Network, color: "from-indigo-500 to-purple-500", count: "8+ Projects" },
                          { name: "Data Science", icon: BarChart3, color: "from-emerald-500 to-green-500", count: "6+ Projects" },
                          { name: "Edge Computing", icon: Zap, color: "from-pink-500 to-rose-500", count: "2+ Projects" },
                          { name: "LLMs", icon: Brain, color: "from-cyan-500 to-blue-500", count: "4+ Projects" },
                          { name: "Reinforcement Learning", icon: Target, color: "from-violet-500 to-purple-500", count: "3+ Projects" }
                        ].map((domain, index) => (
                          <div
                            key={domain.name}
                            className="group/item p-3 rounded-lg border border-border/50 text-center hover:shadow-md transition-all duration-300 cursor-pointer hover:scale-105 bg-card/50"
                          >
                            <div className={`w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-r ${domain.color} p-2 flex items-center justify-center group-hover/item:animate-bounce`}>
                              <domain.icon className="h-5 w-5 text-white" />
                            </div>
                            <div className="text-sm font-medium text-card-foreground group-hover/item:text-primary transition-colors">
                              {domain.name}
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              {domain.count}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-full transition-all duration-500"></div>
              </Card>
            </div>
          )}

          {activeSection === 'tools' && (
            <div className="space-y-6">
              {/* Tools & Technologies Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {toolsAndTech.map((category, index) => (
                  <Card 
                    key={category.category}
                    className="relative overflow-hidden bg-card border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 group"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${category.gradient}`}></div>
                    
                    <CardHeader className="relative pb-3">
                      <CardTitle className="text-base sm:text-lg text-card-foreground flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                        <category.icon className="h-4 w-4" />
                        {category.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative">
                      <div className="flex flex-wrap gap-1">
                        {category.items.map((item, idx) => (
                          <Badge 
                            key={item}
                            variant="outline"
                            className="text-xs bg-primary/10 border-primary/20 hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
                          >
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-full transition-all duration-500"></div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Certifications & Achievements */}
        <Card className="relative overflow-hidden bg-card border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 group mt-8">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500"></div>
          
          <CardHeader className="relative">
            <CardTitle className="text-base sm:text-xl text-card-foreground flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
              <Target className="h-5 w-5" /> Certifications & Achievements
            </CardTitle>
          </CardHeader>
          <CardContent className="relative">
            <ul className="space-y-2 sm:space-y-3">
              <li className="space-y-1 sm:space-y-2 flex items-center justify-between gap-2 p-2 rounded-lg hover:bg-secondary/20 transition-all duration-300">
                <div>
                  <h4 className="font-semibold text-card-foreground text-xs sm:text-base flex items-center gap-2">
                    <span className="text-lg">🎖️</span>
                    Machine Learning with Python
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">IBM • 2025</p>
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
                    Quantum Program
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">Womanium & WISER • 2025</p>
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
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-full transition-all duration-500"></div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;