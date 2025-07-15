import { ExternalLink, Github, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Fine-tuned Image Classification Model For Pets',
      description: 'Developed a finetuned image classification model using Vision Transformers and oxford-pets dataset.',
      image: 'https://media.istockphoto.com/id/480412341/photo/portrait-pomeranian-dog.jpg?s=612x612&w=0&k=20&c=E0rSqNXQF_z6k44g0GiPtXrA9ZzdgBdh-jnYR3PokvI=',
      technologies: ['Computer Vision', 'CNN', 'TensorFlow', 'Python','Vision Transformers','Gradio'],
      github: 'https://github.com/MDrakib-uddin/Hugging-face-fintuned/blob/main/image-classification.ipynb',
      demo: 'https://huggingface.co/spaces/rakib730/ImageClassification',
      featured: true
    },
    {
      title: 'Fine-tuned Token Classification LLM Model',
      description: 'Built an intelligent chatbot using transformer models for token classification.',
      image: 'https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg',
      technologies: ['Natural Language Processing', 'Transformers', 'PyTorch', 'BERT','Conll2003 Dataset'],
      github: 'https://github.com/MDrakib-uddin/Hugging-face-fintuned/blob/main/Finetuned_Token_classification_(PyTorch).ipynb',
      demo: 'https://colab.research.google.com/drive/1Fhl3q9igahWLWsrqPeuWZwziGlIzuWWm#scrollTo=GPxJg1znDGVr',
      featured: true
    },
    {
      title: 'Predictive Analytics for E-commerce',
      description: 'Created a product recommendation system using collaborative filtering and content-based approaches.',
      image: 'https://images.pexels.com/photos/7567460/pexels-photo-7567460.jpeg',
      technologies: ['Recommender Systems', 'ML', 'Python', 'SQL'],
      github: '#',
      demo: '#',
      featured: false
    },
    {
      title: 'Anomaly Detection in Time Series Data',
      description: 'Developed a system for detecting anomalies in IoT sensor data using LSTM networks and statistical methods.',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg',
      technologies: ['Time Series', 'LSTM', 'Anomaly Detection', 'IoT'],
      github: '#',
      demo: '#',
      featured: false
    },
    {
      title: 'End to End MLOps project for Car Price Prediction',
      description: 'Developed an end-to-end MLOps pipeline for car price prediction, including data preprocessing, model training, deployment, and monitoring. Integrated automated workflows for scalable and continuous delivery using tools like MLflow and Docker..',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
      technologies: ['Docker', 'Kubernetes', 'CI/CD pipeline', 'AWS','MLflow'],
      github: 'https://github.com/MDrakib-uddin/MLOPS-project1',
      demo: 'https://github.com/MDrakib-uddin/MLOPS-project1',
      featured: false
    },
    {
      title: 'Fine-tuned Audio Classification Model',
      description: 'Finetuned a pre-trained audio classification model on custom datasets to accurately detect and classify sound events. Improved model performance through data augmentation and hyperparameter tuning.',
      image: 'https://images.ctfassets.net/3viuren4us1n/7MmrorOl3fJ8QhDi6jxrpW/14d2844c5d9094377ecbf0290cfb3732/audio_classification.jpg',
      technologies: ['Pytorch', 'Torchvision', 'Librosa', 'Gradio','Transformers'],
      github: 'https://github.com/MDrakib-uddin/Hugging-face-fintuned/blob/main/Fine_tuning_audio_model.ipynb',
      demo: 'https://huggingface.co/spaces/rakib730/PartyMusicAgent',
      featured: false
    },
    {
      title: 'AI-powered Face Mask Detector',
      description: 'A real-time face mask detection system using deep learning and OpenCV. Detects people with/without masks in live video streams.',
      image: 'https://images.pexels.com/photos/3957987/pexels-photo-3957987.jpeg',
      technologies: ['Computer Vision', 'OpenCV', 'TensorFlow', 'Python'],
      github: '#',
      demo: '#',
      featured: false
    },
    {
      title: 'Speech Emotion Recognition',
      description: 'Classifies emotions from speech audio using deep learning models. Supports real-time audio input and visualization.',
      image: 'https://cdn.pixabay.com/photo/2023/01/06/15/42/sound-7701546_1280.jpg',
      technologies: ['Audio', 'Deep Learning', 'Librosa', 'Keras'],
      github: '#',
      demo: '#',
      featured: false
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative AI solutions and cutting-edge research implementations
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-glow-purple/20 transition-all duration-300 overflow-hidden group">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground">
                    <Star className="h-3 w-3 mr-1" />
                    Featured
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-secondary/50">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-gradient-primary">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">
            Other <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-glow-purple/20 transition-all duration-300 overflow-hidden group">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-card-foreground">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs bg-secondary/50">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-secondary/50">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1 text-xs">
                      <Github className="h-3 w-3 mr-1" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1 text-xs bg-gradient-primary">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Demo
                    </Button>
                  </div>
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
