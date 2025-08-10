import { FaGraduationCap, FaRegListAlt } from 'react-icons/fa';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { useState, useEffect } from 'react';
import { GraduationCap, BookOpen, Building2, Brain, Bot, Target } from 'lucide-react';

const degrees = [
    {
    title: 'B.Sc in Computer Science & Engineering',
    institution: 'CoxsBazar International University',
    period: '2023 - 2027',
    description: 'Graduated with honors. Coursework in algorithms, data structures, and artificial intelligence fundamentals.',
    status: 'Current',
    gpa: '3.60/4.00',
    progress: 50,
    icon: GraduationCap,
    color: 'from-blue-500 to-cyan-500',
    subjects: ['Algorithms', 'Data Structures', 'AI Fundamentals', 'Machine Learning']
    },
    {
    title: 'Higher Secondary Certificate (HSC)',
    institution: 'Ramu Government Collage',
    period: '2020 - 2022',
    description: 'Completed Higher Secondary Certificate with strong academic performance. Focused on foundational topics in Mathematics, Physics, Chemistry, Biology and introductory Programming.',
    status: 'Completed',
    gpa: '5.00/5.00',
    progress: 100,
    icon: BookOpen,
    color: 'from-green-500 to-teal-500',
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology']
  },
  {
    title: 'Secondary School Certificate (SSC)',
    institution: 'Al-Haj Fazal Ambia High School',
    period: '2018 - 2020',
    description: 'Completed Secondary School Certificate with strong academic performance. Focused on foundational topics in Mathematics, Physics, Chemistry, Biology and English.',
    status: 'Completed',
    gpa: '5.00/5.00',
    progress: 100,
    icon: Building2,
    color: 'from-purple-500 to-pink-500',
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'English']
  }
];

const courses = [
    {
    title: 'Deep Learning Specialization',
    institution: 'Coursera (Andrew Ng)',
    period: '2025',
    description: 'Covered neural networks, CNNs, sequence models, and practical deep learning techniques.',
    status: 'In Progress',
    progress: 80,
    icon: Brain,
    color: 'from-indigo-500 to-purple-500',
    skills: ['Neural Networks', 'CNNs', 'RNNs', 'Transformers']
  },
  {
    title: 'Machine Learning with Python',
    institution: 'IBM Coursera',
    period: '2025',
    description: 'Supervised/unsupervised learning, best practices, and real-world ML applications.',
    status: 'Completed',
    progress: 100,
    icon: Bot,
    color: 'from-orange-500 to-red-500',
    skills: ['Supervised Learning', 'Unsupervised Learning', 'Python', 'Scikit-learn']
    },
    {
    title: 'Deep learning & Reinforcement Learning',
    institution: 'IBM',
    period: '2025',
    description: 'ANN, CNN, RNN, Python, Reinforcement Learning, and Potato Disease Projects.',
    status: 'Completed',
    progress: 98,
    icon: Target,
    color: 'from-yellow-500 to-orange-500',
    skills: ['Reinforcement Learning', 'Q-Learning', 'Policy Gradient', 'PyTorch']
  }
];

const Education = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [progressValues, setProgressValues] = useState({});

  // Animate progress bars
  useEffect(() => {
    const timer = setTimeout(() => {
      [...degrees, ...courses].forEach((item, index) => {
        setTimeout(() => {
          setProgressValues(prev => ({
            ...prev,
            [item.title]: item.progress
          }));
        }, index * 300);
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
  <>
      <section id="education" className="py-14 sm:py-20 bg-background relative overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/6 w-40 h-40 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-secondary/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 relative">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 animate-fade-in">
          <span className="text-foreground">Academic</span> <span className="bg-gradient-primary bg-clip-text text-transparent">Qualification</span>
          </h2>
            <div className="text-base xs:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in delay-200">
          Strong academic background in Computer Science, focused on algorithms, data structures, and AI.
        </div>
      </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-stretch">
            {/* Left: Degrees */}
            <div className="animate-fade-in delay-300 flex flex-col min-h-full">
              <div className="flex items-center gap-3 mb-8 sm:mb-10">
                <div className="p-3 bg-gradient-to-r from-primary to-accent rounded-xl shadow-lg animate-pulse">
                  <FaGraduationCap className="text-white text-xl sm:text-2xl" />
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-foreground">Education Timeline</h3>
              </div>
              
              <div className="space-y-4 sm:space-y-5 flex-1">
                {degrees.map((deg, i) => (
                  <Card 
                    key={i} 
                    className="bg-card border-border hover:shadow-glow-purple/30 hover:scale-105 transition-all duration-500 overflow-hidden group cursor-pointer"
                    onMouseEnter={() => setHoveredItem(`deg-${i}`)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div className={`h-1 bg-gradient-to-r ${deg.color} transition-all duration-300 group-hover:h-2`}></div>
                    <CardHeader className="pb-3 pt-4">
                      <div className="flex items-start gap-3">
                        <div className={`p-3 bg-gradient-to-r ${deg.color} rounded-lg flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <deg.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-base sm:text-lg text-card-foreground mb-2 group-hover:text-primary transition-colors">
                            {deg.title}
                          </CardTitle>
                          <div className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground mb-2">
                            <span>{deg.institution}</span>
                            <span>•</span>
                            <span>{deg.period}</span>
                            <Badge variant={deg.status === 'Current' ? 'default' : 'secondary'} className="text-sm animate-pulse">
                              {deg.status}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-3 mb-2">
                            <div className="text-sm font-semibold text-primary">
                              GPA: {deg.gpa}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <Progress 
                                  value={progressValues[deg.title] || 0} 
                                  className="flex-1 h-2" 
                                />
                                <span className="text-sm text-primary font-semibold">{deg.progress}%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0 pb-4">
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        {deg.description}
                      </p>
                      {hoveredItem === `deg-${i}` && (
                        <div className="animate-fade-in">
                          <div className="flex flex-wrap gap-2">
                            {deg.subjects.map((subject, idx) => (
                              <Badge key={idx} variant="outline" className="text-sm bg-primary/10 animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                                {subject}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Right: Courses */}
            <div className="animate-fade-in delay-400 flex flex-col min-h-full">
              <div className="flex items-center gap-3 mb-8 sm:mb-10">
                <div className="p-3 bg-gradient-to-r from-accent to-primary rounded-xl shadow-lg animate-pulse delay-500">
                  <FaRegListAlt className="text-white text-xl sm:text-2xl" />
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-foreground">Specialized Courses</h3>
              </div>
              
              <div className="space-y-4 sm:space-y-5 flex-1">
                {courses.map((course, i) => (
                  <Card 
                    key={i} 
                    className="bg-card border-border hover:shadow-glow-purple/30 hover:scale-105 transition-all duration-500 overflow-hidden group cursor-pointer"
                    onMouseEnter={() => setHoveredItem(`course-${i}`)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div className={`h-1 bg-gradient-to-r ${course.color} transition-all duration-300 group-hover:h-2`}></div>
                    <CardHeader className="pb-3 pt-4">
                      <div className="flex items-start gap-3">
                        <div className={`p-3 bg-gradient-to-r ${course.color} rounded-lg flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <course.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-base sm:text-lg text-card-foreground mb-2 group-hover:text-primary transition-colors">
                            {course.title}
                          </CardTitle>
                          <div className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground mb-2">
                            <span>{course.institution}</span>
                            <span>•</span>
                            <span>{course.period}</span>
                            <Badge variant={course.status === 'In Progress' ? 'default' : 'secondary'} className="text-sm animate-pulse">
                              {course.status}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2">
                            <Progress 
                              value={progressValues[course.title] || 0} 
                              className="flex-1 h-2" 
                            />
                            <span className="text-sm text-primary font-semibold">{course.progress}%</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0 pb-4">
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        {course.description}
                      </p>
                      {hoveredItem === `course-${i}` && (
                        <div className="animate-fade-in">
                          <div className="flex flex-wrap gap-2">
                            {course.skills.map((skill, idx) => (
                              <Badge key={idx} variant="outline" className="text-sm bg-primary/10 animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                                {skill}
                              </Badge>
                            ))}
                          </div>
                    </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
                </div>
        </div>
      </div>
    </section>
  </>
  );
};

export default Education;