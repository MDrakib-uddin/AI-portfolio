import { ExternalLink, Github, Star } from 'lucide-react';
import { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
// Inline analytics functions to avoid import issues
const trackProjectView = (projectName: string) => {
  console.log('📊 Project view tracked:', projectName);
  // Add analytics tracking logic here if needed
};

const trackButtonClick = (buttonName: string) => {
  console.log('📊 Button click tracked:', buttonName);
  // Add analytics tracking logic here if needed
};
// Inline hook to avoid import issues
const useSectionTracking = (_sectionId: string) => {
  const sectionRef = useRef<HTMLElement>(null);
  return sectionRef;
};

const Projects = () => {
  const sectionRef = useSectionTracking('projects');
  
  const projects = [
    {
      title: 'Fine-tuned Image Classification Model For Pets',
      description: 'Developed a finetuned image classification model using Vision Transformers and oxford-pets dataset.',
      image: 'https://media.istockphoto.com/id/480412341/photo/portrait-pomeranian-dog.jpg?s=612x612&w=0&k=20&c=E0rSqNXQF_z6k44g0GiPtXrA9ZzdgBdh-jnYR3PokvI=',
      technologies: ['Computer Vision', 'CNN', 'TensorFlow', 'Python','Vision Transformers','Gradio'],
      github: 'https://huggingface.co/rakib730/vit-base-oxford-iiit-pets',
      demo: 'https://huggingface.co/spaces/rakib730/ImageClassification',
      featured: true,
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      title: 'Fine-tuned Token Classification LLM Model',
      description: 'Built an intelligent chatbot using transformer models for token classification.',
      image: 'https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg',
      technologies: ['Natural Language Processing', 'Transformers', 'PyTorch', 'BERT','Conll2003 Dataset'],
      github: 'https://github.com/MDrakib-uddin/Hugging-face-fintuned/blob/main/Finetuned_Token_classification_(PyTorch).ipynb',
      demo: 'https://colab.research.google.com/drive/1Fhl3q9igahWLWsrqPeuWZwziGlIzuWWm#scrollTo=GPxJg1znDGVr',
      featured: true,
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/10 to-pink-500/10'
    },
    {
      title: 'House Price Prediction Using Machine Learning',
      description: 'Built a house price prediction system using machine learning techniques like Random Forest and XGBoost, leveraging features such as location, square footage, and number of rooms',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKpvCqGI4-FgKWCPAxdF_RW3t7fvfoJksAww&s',
      technologies: ['Machine Learning', 'Random Forest', 'XGBoost', 'netlify', 'Railway'],
      github: 'https://github.com/MDrakib-uddin/House-Price-Prediction/tree/master',
      demo: 'https://price-house.netlify.app/',
      featured: false,
      gradient: 'from-green-500 to-teal-500',
      bgGradient: 'from-green-500/10 to-teal-500/10'
    },
    {
      title: 'Anomaly Detection in Time Series Data',
      description: 'Developed a system for detecting anomalies in IoT sensor data using LSTM networks and statistical methods.',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg',
      technologies: ['Time Series', 'LSTM', 'Anomaly Detection', 'IoT'],
      github: '#',
      demo: '#',
      featured: false,
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-500/10 to-red-500/10'
    },
    {
      title: 'End to End MLOps project for Car Price Prediction',
      description: 'Developed an end-to-end MLOps pipeline for car price prediction, including data preprocessing, model training, deployment, and monitoring. Integrated automated workflows for scalable and continuous delivery using tools like MLflow and Docker.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
      technologies: ['Docker', 'Kubernetes', 'CI/CD pipeline', 'AWS','MLflow'],
      github: 'https://github.com/MDrakib-uddin/MLOPS-project1',
      demo: 'https://github.com/MDrakib-uddin/MLOPS-project1',
      featured: false,
      gradient: 'from-indigo-500 to-purple-500',
      bgGradient: 'from-indigo-500/10 to-purple-500/10'
    },
    {
      title: 'Fine-tuned Audio Classification Model',
      description: 'Finetuned a pre-trained audio classification model on custom datasets to accurately detect and classify sound events. Improved model performance through data augmentation and hyperparameter tuning.',
      image: 'https://images.ctfassets.net/3viuren4us1n/7MmrorOl3fJ8QhDi6jxrpW/14d2844c5d9094377ecbf0290cfb3732/audio_classification.jpg',
      technologies: ['Pytorch', 'Torchvision', 'Librosa', 'Gradio','Transformers'],
      github: 'https://github.com/MDrakib-uddin/Hugging-face-fintuned/blob/main/Fine_tuning_audio_model.ipynb',
      demo: 'https://huggingface.co/spaces/rakib730/PartyMusicAgent',
      featured: false,
      gradient: 'from-yellow-500 to-orange-500',
      bgGradient: 'from-yellow-500/10 to-orange-500/10'
    },
    {
      title: 'AI-powered Face Mask Detector',
      description: 'A real-time face mask detection system using deep learning and OpenCV. Detects people with/without masks in live video streams.',
      image: 'https://images.pexels.com/photos/3957987/pexels-photo-3957987.jpeg',
      technologies: ['Computer Vision', 'OpenCV', 'TensorFlow', 'Python'],
      github: '#',
      demo: '#',
      featured: false,
      gradient: 'from-pink-500 to-rose-500',
      bgGradient: 'from-pink-500/10 to-rose-500/10'
    },
    {
      title: 'Speech Emotion Recognition',
      description: 'Classifies emotions from speech audio using deep learning models. Supports real-time audio input and visualization.',
      image: 'https://cdn.pixabay.com/photo/2023/01/06/15/42/sound-7701546_1280.jpg',
      technologies: ['Audio', 'Deep Learning', 'Librosa', 'Keras'],
      github: '#',
      demo: '#',
      featured: false,
      gradient: 'from-cyan-500 to-blue-500',
      bgGradient: 'from-cyan-500/10 to-blue-500/10'
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-14 sm:py-20 bg-gradient-secondary" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-base xs:text-lg text-muted-foreground max-w-xs xs:max-w-md sm:max-w-3xl mx-auto">
            A showcase of innovative AI solutions and cutting-edge research implementations
          </p>
        </div>

        {/* Enhanced Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8 mb-10 sm:mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden bg-card border-border hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 group" 
              tabIndex={0}
            >
              {/* Gradient background overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Top gradient border */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.gradient}`}></div>
              
              {/* Enhanced Image Container */}
              <div className="relative">
                <div className="overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`Screenshot of project: ${project.title}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-32 xs:h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                </div>
                <div className="absolute top-3 right-3">
                  <div className={`p-1 bg-gradient-to-r ${project.gradient} rounded-lg shadow-lg`}>
                    <Badge className="bg-white/90 text-primary border-0 text-xs sm:text-sm font-semibold">
                    <Star className="h-3 w-3 mr-1" />
                    Featured
                  </Badge>
                </div>
              </div>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <CardHeader className="relative">
                <CardTitle className="text-base sm:text-xl text-card-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative">
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Enhanced Technology Tags */}
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="text-xs bg-primary/10 border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Enhanced Action Buttons */}
                <div className="flex gap-2">
                  <Button 
                    asChild 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 text-xs border-primary/20 hover:bg-primary/10" 
                    disabled={project.github === '#'}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={project.github === '#' ? -1 : 0}
                      aria-label={`${project.title} GitHub`}
                    >
                      <Github className="h-3 w-3 mr-1" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    asChild 
                    size="sm" 
                    className={`flex-1 text-xs bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white shadow-md`}
                    disabled={project.demo === '#'}
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={project.demo === '#' ? -1 : 0}
                      aria-label={`${project.title} Demo`}
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Demo
                    </a>
                  </Button>
                </div>
                
                {/* Bottom decoration */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-full transition-all duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Other Projects */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">
            Other <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={index} 
                className="relative overflow-hidden bg-card border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 group cursor-pointer" 
                tabIndex={0}
                onClick={() => trackProjectView(project.title)}
              >
                {/* Gradient background overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Top gradient border */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.gradient}`}></div>
                
                {/* Enhanced Image Container */}
                <div className="relative">
                  <div className="overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={`Screenshot of project: ${project.title}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-24 xs:h-28 sm:h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  </div>
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <CardHeader className="relative">
                  <CardTitle className="text-base sm:text-xl text-card-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Enhanced Technology Tags */}
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="text-xs bg-primary/10 border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Enhanced Action Buttons */}
                  <div className="flex gap-2">
                    <Button 
                      asChild 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 text-xs border-primary/20 hover:bg-primary/10" 
                      disabled={project.github === '#'}
                      onClick={(e) => {
                        e.stopPropagation();
                        trackButtonClick(`view_${project.title}_github`);
                      }}
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={project.github === '#' ? -1 : 0}
                        aria-label={`${project.title} GitHub`}
                      >
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </a>
                    </Button>
                    <Button 
                      asChild 
                      size="sm" 
                      className={`flex-1 text-xs bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white shadow-md`}
                      disabled={project.demo === '#'}
                      onClick={(e) => {
                        e.stopPropagation();
                        trackButtonClick(`view_${project.title}_demo`);
                      }}
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={project.demo === '#' ? -1 : 0}
                        aria-label={`${project.title} Demo`}
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Demo
                      </a>
                    </Button>
                  </div>
                  
                  {/* Bottom decoration */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-full transition-all duration-500"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
