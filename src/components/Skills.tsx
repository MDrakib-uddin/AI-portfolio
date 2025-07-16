import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const technicalSkills = [
    { name: "Machine Learning", level: 95 },
    { name: "PyTorch", level: 90 },
    { name: "TensorFlow", level: 85 },
    { name: "Deep Learning", level: 92 },
    { name: "Computer Vision", level: 88 },
    { name: "Natural Language Processing", level: 85 },
    { name: "Reinforcement Learning", level: 80 },
    { name: "MLOps", level: 80 },
    { name: "AWS/GCP", level: 75 }
  ];

  const aiDomains = [
    "Machine Learning","Deep Learning", "Computer Vision", "Natural Language Processing", 
    "Reinforcement Learning", "Time Series Analysis", "Generative AI",
    "Transfer Learning", "Model Optimization", "AI Ethics", "AutoML"
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

  return (
    <section id="skills" className="py-14 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-base xs:text-lg text-muted-foreground max-w-xs xs:max-w-md sm:max-w-3xl mx-auto">
            A comprehensive toolkit for building next-generation AI solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8 mb-8 sm:mb-12">
          {/* Technical Proficiency */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-base sm:text-xl text-card-foreground flex items-center gap-2">
                🎯 Technical Proficiency
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-1 sm:space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-card-foreground font-medium text-xs sm:text-base">{skill.name}</span>
                    <span className="text-primary font-semibold text-xs sm:text-base">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" aria-valuenow={skill.level} aria-valuemin={0} aria-valuemax={100} />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* AI Domains */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-base sm:text-xl text-card-foreground flex items-center gap-2">
                🧠 AI Domains
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3">
                {aiDomains.map((domain, index) => (
                  <div
                    key={index} 
                    className="flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 font-medium hover:bg-primary/20 transition-colors text-xs sm:text-base"
                  >
                    <span className="text-base sm:text-lg">🤖</span>
                    <span>{domain}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8">
          {/* Tools & Frameworks */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-base sm:text-xl text-card-foreground flex items-center gap-2">
                🛠️ Tools & Frameworks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {tools.map((tool, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary"
                    className="bg-secondary/50 hover:bg-secondary transition-colors text-xs sm:text-base"
                    title={tool}
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Programming Languages */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-base sm:text-xl text-card-foreground flex items-center gap-2">
                💻 Programming Languages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {languages.map((language, index) => (
                  <Badge 
                    key={index} 
                    variant="outline"
                    className="border-primary/30 text-primary hover:bg-primary/10 transition-colors text-xs sm:text-base"
                    title={language}
                  >
                    {language}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications */}
        <Card className="bg-card border-border mt-6 sm:mt-8">
          <CardHeader>
            <CardTitle className="text-base sm:text-xl text-card-foreground flex items-center gap-2">
              🏆 Certifications & Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">
              <li className="space-y-1 sm:space-y-2">
                <h4 className="font-semibold text-card-foreground text-xs sm:text-base">AWS Certified Machine Learning - Specialty</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">Amazon Web Services • 2023</p>
              </li>
              <li className="space-y-1 sm:space-y-2">
                <h4 className="font-semibold text-card-foreground text-xs sm:text-base">TensorFlow Developer Certificate</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">Google • 2022</p>
              </li>
              <li className="space-y-1 sm:space-y-2">
                <h4 className="font-semibold text-card-foreground text-xs sm:text-base">Deep Learning Specialization</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">Coursera/Stanford • 2021</p>
              </li>
              <li className="space-y-1 sm:space-y-2">
                <h4 className="font-semibold text-card-foreground text-xs sm:text-base">Published Research Papers</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">ICML, NeurIPS • 2020-2023</p>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;