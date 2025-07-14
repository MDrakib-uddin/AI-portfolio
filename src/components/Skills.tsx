import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const technicalSkills = [
    { name: "Python", level: 95 },
    { name: "PyTorch", level: 90 },
    { name: "TensorFlow", level: 85 },
    { name: "Deep Learning", level: 92 },
    { name: "Computer Vision", level: 88 },
    { name: "NLP", level: 85 },
    { name: "MLOps", level: 80 },
    { name: "AWS/GCP", level: 75 }
  ];

  const aiDomains = [
    "Deep Learning", "Computer Vision", "Natural Language Processing", 
    "Reinforcement Learning", "Time Series Analysis", "Generative AI",
    "Transfer Learning", "Model Optimization", "AI Ethics", "AutoML"
  ];

  const tools = [
    "PyTorch", "TensorFlow", "Hugging Face", "OpenCV", "scikit-learn",
    "Pandas", "NumPy", "Docker", "Kubernetes", "Git", "Jupyter",
    "MLflow", "Weights & Biases", "Apache Spark", "Elasticsearch"
  ];

  const languages = [
    "Python", "JavaScript", "C++", "SQL", "R", "Julia", "Go", "Rust"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building next-generation AI solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Technical Proficiency */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-xl text-card-foreground flex items-center gap-2">
                🎯 Technical Proficiency
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-card-foreground font-medium">{skill.name}</span>
                    <span className="text-primary font-semibold">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* AI Domains */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-xl text-card-foreground flex items-center gap-2">
                🧠 AI Domains
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {aiDomains.map((domain, index) => (
                  <Badge 
                    key={index} 
                    className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {domain}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Tools & Frameworks */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-xl text-card-foreground flex items-center gap-2">
                🛠️ Tools & Frameworks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary"
                    className="bg-secondary/50 hover:bg-secondary transition-colors"
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
              <CardTitle className="text-xl text-card-foreground flex items-center gap-2">
                💻 Programming Languages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {languages.map((language, index) => (
                  <Badge 
                    key={index} 
                    variant="outline"
                    className="border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                  >
                    {language}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications */}
        <Card className="bg-card border-border mt-8">
          <CardHeader>
            <CardTitle className="text-xl text-card-foreground flex items-center gap-2">
              🏆 Certifications & Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-card-foreground">AWS Certified Machine Learning - Specialty</h4>
                <p className="text-sm text-muted-foreground">Amazon Web Services • 2023</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-card-foreground">TensorFlow Developer Certificate</h4>
                <p className="text-sm text-muted-foreground">Google • 2022</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-card-foreground">Deep Learning Specialization</h4>
                <p className="text-sm text-muted-foreground">Coursera/Stanford • 2021</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-card-foreground">Published Research Papers</h4>
                <p className="text-sm text-muted-foreground">ICML, NeurIPS • 2020-2023</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;