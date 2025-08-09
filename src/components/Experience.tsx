import { FaGraduationCap, FaRegListAlt } from 'react-icons/fa';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useState, useEffect } from 'react';

const degrees = [
    {
    title: 'B.Sc in Computer Science & Engineering',
    institution: 'CoxsBazar International University',
    period: '2023 - 2027',
    description: 'Graduated with honors. Coursework in algorithms, data structures, and artificial intelligence fundamentals.',
    status: 'Current',
    gpa: '3.85/4.00',
    progress: 75,
    icon: '🎓',
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
    icon: '📚',
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
    icon: '🏫',
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
    progress: 60,
    icon: '🧠',
    color: 'from-indigo-500 to-purple-500',
    skills: ['Neural Networks', 'CNNs', 'RNNs', 'Transformers']
  },
  {
    title: 'Machine Learning with Python',
    institution: 'IBM Coursera',
    period: '2025',
    description: 'Supervised/unsupervised learning, best practices, and real-world ML applications.',
    status: 'In Progress',
    progress: 80,
    icon: '🤖',
    color: 'from-orange-500 to-red-500',
    skills: ['Supervised Learning', 'Unsupervised Learning', 'Python', 'Scikit-learn']
    },
    {
    title: 'Deep learning & Reinforcement Learning',
    institution: 'IBM',
    period: '2025',
    description: 'ANN, CNN, RNN, Python, Reinforcement Learning, and Potato Disease Projects.',
    status: 'In Progress',
    progress: 45,
    icon: '🎯',
    color: 'from-yellow-500 to-orange-500',
    skills: ['Reinforcement Learning', 'Q-Learning', 'Policy Gradient', 'PyTorch']
  }
];

const Education = () => {
  const [animatedStats, setAnimatedStats] = useState({
    years: 0,
    gpa: 0,
    courses: 0,
    hours: 0
  });
  const [hoveredItem, setHoveredItem] = useState(null);
  const [progressValues, setProgressValues] = useState({});

  // Animate stats on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      // Animate years counter
      let yearsCount = 0;
      const yearsInterval = setInterval(() => {
        yearsCount += 0.1;
        setAnimatedStats(prev => ({ ...prev, years: Math.min(yearsCount, 3.2) }));
        if (yearsCount >= 3.2) clearInterval(yearsInterval);
      }, 50);

      // Animate GPA counter
      let gpaCount = 0;
      setTimeout(() => {
        const gpaInterval = setInterval(() => {
          gpaCount += 0.05;
          setAnimatedStats(prev => ({ ...prev, gpa: Math.min(gpaCount, 3.85) }));
          if (gpaCount >= 3.85) clearInterval(gpaInterval);
        }, 30);
      }, 200);

      // Animate courses counter
      let coursesCount = 0;
      setTimeout(() => {
        const coursesInterval = setInterval(() => {
          coursesCount += 1;
          setAnimatedStats(prev => ({ ...prev, courses: Math.min(coursesCount, 6) }));
          if (coursesCount >= 6) clearInterval(coursesInterval);
        }, 100);
      }, 400);

      // Animate hours counter
      let hoursCount = 0;
      setTimeout(() => {
        const hoursInterval = setInterval(() => {
          hoursCount += 5;
          setAnimatedStats(prev => ({ ...prev, hours: Math.min(hoursCount, 150) }));
          if (hoursCount >= 150) clearInterval(hoursInterval);
        }, 50);
      }, 600);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Left: Degrees */}
            <div className="animate-fade-in delay-300">
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="p-3 bg-gradient-to-r from-primary to-accent rounded-xl shadow-lg animate-pulse">
                  <FaGraduationCap className="text-white text-xl sm:text-2xl" />
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-foreground">Education Timeline</h3>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {degrees.map((deg, i) => (
                  <Card 
                    key={i} 
                    className="bg-card border-border hover:shadow-glow-purple/30 hover:scale-105 transition-all duration-500 overflow-hidden group cursor-pointer"
                    onMouseEnter={() => setHoveredItem(`deg-${i}`)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div className={`h-1 bg-gradient-to-r ${deg.color} transition-all duration-300 group-hover:h-2`}></div>
                    <CardHeader className="pb-2 pt-3">
                      <div className="flex items-start gap-2">
                        <div className={`p-2 bg-gradient-to-r ${deg.color} rounded-lg flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <span className="text-sm text-white">{deg.icon}</span>
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-sm sm:text-base text-card-foreground mb-1 group-hover:text-primary transition-colors">
                            {deg.title}
                          </CardTitle>
                          <div className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground mb-1">
                            <span>{deg.institution}</span>
                            <span>•</span>
                            <span>{deg.period}</span>
                            <Badge variant={deg.status === 'Current' ? 'default' : 'secondary'} className="text-xs animate-pulse">
                              {deg.status}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-3 mb-1">
                            <div className="text-xs font-semibold text-primary">
                              GPA: {deg.gpa}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-1">
                                <Progress 
                                  value={progressValues[deg.title] || 0} 
                                  className="flex-1 h-1.5" 
                                />
                                <span className="text-xs text-primary font-semibold">{deg.progress}%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0 pb-3">
                      <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                        {deg.description}
                      </p>
                      {hoveredItem === `deg-${i}` && (
                        <div className="animate-fade-in">
                          <div className="flex flex-wrap gap-1">
                            {deg.subjects.map((subject, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs bg-primary/10 animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
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
            <div className="animate-fade-in delay-400">
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="p-3 bg-gradient-to-r from-accent to-primary rounded-xl shadow-lg animate-pulse delay-500">
                  <FaRegListAlt className="text-white text-xl sm:text-2xl" />
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-foreground">Specialized Courses</h3>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {courses.map((course, i) => (
                  <Card 
                    key={i} 
                    className="bg-card border-border hover:shadow-glow-purple/30 hover:scale-105 transition-all duration-500 overflow-hidden group cursor-pointer"
                    onMouseEnter={() => setHoveredItem(`course-${i}`)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div className={`h-1 bg-gradient-to-r ${course.color} transition-all duration-300 group-hover:h-2`}></div>
                    <CardHeader className="pb-2 pt-3">
                      <div className="flex items-start gap-2">
                        <div className={`p-2 bg-gradient-to-r ${course.color} rounded-lg flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <span className="text-sm text-white">{course.icon}</span>
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-sm sm:text-base text-card-foreground mb-1 group-hover:text-primary transition-colors">
                            {course.title}
                          </CardTitle>
                          <div className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground mb-1">
                            <span>{course.institution}</span>
                            <span>•</span>
                            <span>{course.period}</span>
                            <Badge variant={course.status === 'In Progress' ? 'default' : 'secondary'} className="text-xs animate-pulse">
                              {course.status}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-1">
                            <Progress 
                              value={progressValues[course.title] || 0} 
                              className="flex-1 h-1.5" 
                            />
                            <span className="text-xs text-primary font-semibold">{course.progress}%</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0 pb-3">
                      <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                        {course.description}
                      </p>
                      {hoveredItem === `course-${i}` && (
                        <div className="animate-fade-in">
                          <div className="flex flex-wrap gap-1">
                            {course.skills.map((skill, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs bg-primary/10 animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
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

          {/* Enhanced Achievement Stats */}
          <div className="mt-8 sm:mt-12 animate-fade-in delay-600">
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 shadow-2xl hover:shadow-glow-purple/20 transition-all duration-500">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-center text-lg sm:text-xl font-bold text-foreground mb-6">Academic Achievements</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div className="space-y-2 hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <div className="text-2xl sm:text-3xl font-bold text-primary animate-pulse">
                      {animatedStats.years.toFixed(1)}+
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Years of Study</div>
                    <div className="w-full bg-secondary/30 rounded-full h-2">
                      <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000" style={{ width: `${(animatedStats.years / 3.2) * 100}%` }}></div>
                    </div>
                  </div>
                  <div className="space-y-2 hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <div className="text-2xl sm:text-3xl font-bold text-primary animate-pulse">
                      {animatedStats.gpa.toFixed(2)}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Current GPA</div>
                    <div className="w-full bg-secondary/30 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-teal-500 h-2 rounded-full transition-all duration-1000" style={{ width: `${(animatedStats.gpa / 4) * 100}%` }}></div>
                    </div>
                  </div>
                  <div className="space-y-2 hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <div className="text-2xl sm:text-3xl font-bold text-primary animate-pulse">
                      {animatedStats.courses}+
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Courses Completed</div>
                    <div className="w-full bg-secondary/30 rounded-full h-2">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-1000" style={{ width: `${(animatedStats.courses / 6) * 100}%` }}></div>
                    </div>
                  </div>
                  <div className="space-y-2 hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <div className="text-2xl sm:text-3xl font-bold text-primary animate-pulse">
                      {animatedStats.hours}+
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Hours Learning</div>
                    <div className="w-full bg-secondary/30 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000" style={{ width: `${(animatedStats.hours / 150) * 100}%` }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
        </div>
      </div>
    </section>
  </>
  );
};

export default Education;