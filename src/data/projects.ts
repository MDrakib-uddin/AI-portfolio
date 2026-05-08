export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  size: 'large' | 'small' | 'wide';
}

export const projects: Project[] = [
  {
    title: 'Fine-tuned Image Classification Model For Pets',
    description: 'Developed a finetuned image classification model using Vision Transformers and oxford-pets dataset.',
    image: 'https://media.istockphoto.com/id/480412341/photo/portrait-pomeranian-dog.jpg?s=612x612&w=0&k=20&c=E0rSqNXQF_z6k44g0GiPtXrA9ZzdgBdh-jnYR3PokvI=',
    tags: ['Computer Vision', 'CNN', 'TensorFlow', 'Vision Transformers', 'Gradio'],
    github: 'https://huggingface.co/rakib730/vit-base-oxford-iiit-pets',
    demo: 'https://huggingface.co/spaces/rakib730/ImageClassification',
    size: 'large'
  },
  {
    title: 'Fine-tuned Token Classification LLM Model',
    description: 'Built an intelligent chatbot using transformer models for token classification.',
    image: 'https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg',
    tags: ['NLP', 'Transformers', 'PyTorch', 'BERT', 'Conll2003'],
    github: 'https://github.com/MDrakib-uddin/Hugging-face-fintuned/blob/main/Finetuned_Token_classification_(PyTorch).ipynb',
    demo: 'https://colab.research.google.com/drive/1Fhl3q9igahWLWsrqPeuWZwziGlIzuWWm#scrollTo=GPxJg1znDGVr',
    size: 'small'
  },
  {
    title: 'House Price Prediction Using ML',
    description: 'Built a house price prediction system using Random Forest and XGBoost, leveraging features such as location, square footage, and number of rooms.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKpvCqGI4-FgKWCPAxdF_RW3t7fvfoJksAww&s',
    tags: ['Machine Learning', 'Random Forest', 'XGBoost', 'Railway'],
    github: 'https://github.com/MDrakib-uddin/House-Price-Prediction/tree/master',
    demo: 'https://price-house.netlify.app/',
    size: 'small'
  },
  {
    title: 'End to End MLOps for Car Price Prediction',
    description: 'Developed an end-to-end MLOps pipeline for car price prediction, including data preprocessing, model training, deployment, and monitoring with MLflow and Docker.',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
    tags: ['Docker', 'Kubernetes', 'CI/CD', 'AWS', 'MLflow'],
    github: 'https://github.com/MDrakib-uddin/MLOPS-project1',
    demo: 'https://github.com/MDrakib-uddin/MLOPS-project1',
    size: 'wide'
  },
  {
    title: 'Fine-tuned Audio Classification Model',
    description: 'Finetuned a pre-trained audio classification model on custom datasets to accurately detect and classify sound events.',
    image: 'https://images.ctfassets.net/3viuren4us1n/7MmmorOl3fJ8QhDi6jxrpW/14d2844c5d9094377ecbf0290cfb3732/audio_classification.jpg',
    tags: ['PyTorch', 'Torchvision', 'Librosa', 'Gradio', 'Transformers'],
    github: 'https://github.com/MDrakib-uddin/Hugging-face-fintuned/blob/main/Fine_tuning_audio_model.ipynb',
    demo: 'https://huggingface.co/spaces/rakib730/PartyMusicAgent',
    size: 'small'
  },
  {
    title: 'AI-powered Face Mask Detector',
    description: 'A real-time face mask detection system using deep learning and OpenCV. Detects people with/without masks in live video streams.',
    image: 'https://images.pexels.com/photos/3957987/pexels-photo-3957987.jpeg',
    tags: ['Computer Vision', 'OpenCV', 'TensorFlow', 'Python'],
    github: '#',
    demo: '#',
    size: 'small'
  },
  {
    title: 'Anomaly Detection in Time Series Data',
    description: 'Developed a system for detecting anomalies in IoT sensor data using LSTM networks and statistical methods.',
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg',
    tags: ['Time Series', 'LSTM', 'Anomaly Detection', 'IoT'],
    github: '#',
    demo: '#',
    size: 'wide'
  },
  {
    title: 'Speech Emotion Recognition',
    description: 'Classifies emotions from speech audio using deep learning models. Supports real-time audio input and visualization.',
    image: 'https://cdn.pixabay.com/photo/2023/01/06/15/42/sound-7701546_1280.jpg',
    tags: ['Audio', 'Deep Learning', 'Librosa', 'Keras'],
    github: '#',
    demo: '#',
    size: 'small'
  },
];
