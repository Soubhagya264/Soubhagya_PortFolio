
import React, { useState } from 'react';
import ScrollAnimation from './ScrollAnimation';
import { ExternalLink, Code, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

const projectCategories = ['All', 'Web Dev', 'AI/ML', 'Full Stack'];

const projects = [
  {
    title: 'BUILDFLOW - SAAS WEBSITE BUILDER',
    description: 'A SaaS website builder for agency owners, offering drag-and-drop editing for easy website creation and management.',
    category: 'Full Stack',
    technologies: ['NextJs', 'MySQL', 'TypeScript', 'Stripe Connect'],
    github: 'https://github.com/Soubhagya264/BuildFlow',
    liveLink: 'https://build-flow-prod.vercel.app/',
    image: '/BuildFlow.png',
    features: [
      'Drag-and-Drop Editor',
      'Ticket tagging',
      'Lead generation',
      'Responsive previews',
      'Media management',
      'Notifications'
    ]
  },
  {
    title: 'Promo Pilot - AI Powered Video Ads Generator',
    description: 'An AI-driven platform that generates marketing videos using user prompts and product images. Built with Next.js, Google Gemini, HeyGen API, and Convex DB, it automates ad script writing and video creation using AI avatars and voices, reducing manual marketing effort by approximately XYZ%.',
    category: 'Web Dev',
    technologies: ['Next.js', 'JavaScript', 'Google Gemini', 'HeyGen API', 'Convex DB'],
    github: 'https://github.com/Soubhagya264/Ads-Generation-AI',
    liveLink: 'https://ads-generation-ai.vercel.app',
    image: '/PromoPilot.png',
    features: [
      'AI-generated ad scripts based on prompts',
      'Dynamic video generation using HeyGen avatars and voices',
      'Product image integration in videos',
      'Multi-language and voice support',
      'Reduced manual marketing effort by approximately XYZ%'
    ]
  }
  ,
  {
    title: 'ASSISTING VISION - AI POWERED IMAGE-TO-AUDIO CONVERTER',
    description: 'A deep-learning system that converts images into multilingual audio descriptions for visually impaired users using Inception V3 and LSTM networks.',
    category: 'AI/ML',
    technologies: ['NLP', 'Computer Vision', 'TensorFlow', 'Flask', 'JS'],
    github: 'https://github.com/link-to-assisting-vision',
    liveLink: null,
    image: '/AssistingVision.png',
    features: [
      'Image recognition',
      'Text generation',
      'Text-to-speech conversion',
      'Multilingual support',
      'Accessible interface'
    ]
  },
  
  {
    title: 'Movie Recommendation System',
    description: 'A personalized movie recommendation platform using Flask, Ajax, TMDB API, and BeautifulSoup for review aggregation. Uses TfidfVectorizer for text vectorization and Naive Bayes for sentiment analysis to generate accurate movie suggestions.',
    category: 'AI/ML',
    technologies: ['Python', 'Flask', 'Ajax', 'TMDB API', 'BeautifulSoup', 'scikit-learn', 'TfidfVectorizer', 'Naive Bayes'],
    github: 'https://github.com/Soubhagya264/Movie_Recomendation_System',
    liveLink: null,
    image: '/MovieRecomendation.png',
    features: [
      'Aggregates movie reviews using Ajax, TMDB API, and web scraping',
      'Converts text data to vectors using TfidfVectorizer',
      'Performs sentiment analysis with Naive Bayes classifier',
      'Provides personalized movie recommendations based on review sentiment',
      'Enhances user engagement through accurate suggestions'
    ]
  },
  {
    title: 'Google Analytics Customer Revenue Prediction System',
    description: 'An end-to-end machine learning platform for forecasting customer revenue using Google Store data. Features automated data ingestion, validation, and preprocessing with pandas/NumPy, model training using XGBoost and LightGBM, and deployment on Heroku for real-time prediction.',
    category: 'AI/ML',
    technologies: ['Python', 'pandas', 'NumPy', 'MongoDB', 'XGBoost', 'LightGBM', 'scikit-learn', 'Flask', 'Heroku'],
    github: 'https://github.com/Soubhagya264/Google_Analytics',
    liveLink: null,
    image: '/GA_ANALYST.png',
    features: [
      'Automated data ingestion and schema validation',
      'Feature engineering and preprocessing pipeline',
      'Gradient boosting models (XGBoost, LightGBM)',
      'Continuous training and model evaluation',
      'Cloud deployment on Heroku with Flask API'
    ]
  },
  {
    title: 'MULTIUSER CHAT APPLICATION',
    description: 'A scalable messaging platform built with React, NestJs, GraphQL & Redis with real-time capabilities powered by GraphQL subscriptions over WebSockets.',
    category: 'Web Dev',
    technologies: ['React', 'NestJS', 'GraphQL', 'Redis', 'PostgreSQL', 'WebSockets'],
    github: 'https://github.com/link-to-chat-app',
    liveLink: 'https://multiuser-chat-app.demo',
    image: '/multiuserchat.png',
    features: [
      'Real-time messaging',
      'Multiple chat rooms',
      'User authentication',
      'Message persistence',
      'Typing indicators'
    ]
  },
  {
    title: 'Restaurant Food Delivery App with AI Chatbot',
    description: 'A Django-based online food ordering platform featuring user authentication, menu browsing, and checkout. Includes an AI-powered chatbot built with NLTK and TensorFlow (tflearn) for real-time, Ajax-driven customer support with 99% intent recognition accuracy.',
    category: 'Full Stack',
    technologies: [
      'Django',
      'Python',
      'HTML',
      'CSS',
      'JavaScript',
      'Ajax',
      'NLTK',
      'TensorFlow (tflearn)'
    ],
    github: 'https://github.com/Soubhagya264/Food_App',
    liveLink: null, 
    image: '/FoodDelivery.png',
    features: [
      'User signup and authentication',
      'Dynamic menu browsing and cart management',
      'Secure checkout workflow',
      'AI chatbot with 99% intent-classification accuracy',
      'Real-time chat via Ajax requests'
    ]
  },
  {
    title: 'codersHubApp – Real-Time Audio Chat & Podcast Platform',
    description: 'A scalable audio chat application for hosting tech-topic podcasts. Features OTP-based login with server-side hash validation for load balancing, peer-to-peer audio streaming via WebRTC and Socket.IO, and a Dockerized Node.js/Express backend with MongoDB persistence.',
    category: 'Full Stack',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'WebRTC', 'Socket.IO', 'Docker'],
    github: 'https://github.com/Soubhagya264/codersHubApp',
    liveLink: null, 
    image: '/Codershub.png',
    features: [
      'OTP-based authentication with server-side hashing for scale',
      'Peer-to-peer audio rooms powered by WebRTC',
      'Real-time messaging and signaling via Socket.IO',
      'Dockerized microservice architecture',
      'MongoDB for session and user data persistence'
    ]
  },
  {
    title: 'IPL Score Predictor',
    description: 'A cricket match score forecasting tool employing regression models. Implements data ingestion and feature engineering in Python, serves predictions through a Flask API, and visualizes results via a JavaScript front-end dashboard.',
    category: 'AI/ML',
    technologies: ['Python', 'Flask', 'scikit-learn', 'pandas', 'NumPy', 'JavaScript'],
    github: 'https://github.com/Soubhagya264/Ipl_score_predictor',
    liveLink: null, 
    image: '/IPL_Score.png',
    features: [
      'Feature engineering on match data (overs, wickets, run rates)',
      'Regression models (Linear Regression, Random Forest) for score prediction',
      'Flask-based REST API for model inference',
      'Interactive JavaScript dashboard for live predictions',
      'Model evaluation with cross-validation and error metrics'
    ]
  }


];

const ProjectCard = ({ project }) => (
  <div
    className={cn(
      "glass-card rounded-xl overflow-hidden group transition-all flex flex-col h-full relative",
      "hover:-translate-y-2 transform",
      "border border-white/5 hover:border-purple/30"
    )}
  >
    {/* Media */}
    <div className="flex-shrink-0 aspect-video bg-dark-200 overflow-hidden">
      <img src={project.image} alt={project.title.slice(0,2)} className="w-full h-full object-cover" />
    </div>

    {/* Body */}
    <div className="p-6 flex flex-col flex-grow">
      {/* Header with always-visible links and category */}
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-heading font-semibold text-white">
          {project.title}
        </h3>
        <div className="flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 bg-dark-300 rounded text-white hover:text-purple transition-colors"
            >
              <Github size={16} />
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 bg-dark-300 rounded text-white hover:text-purple transition-colors"
            >
              <ExternalLink size={16} />
            </a>
          )}
          <span className="text-xs bg-purple/20 text-purple-light px-2 py-1 rounded">
            {project.category}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
        {project.description}
      </p>

      {/* Footer pushed to bottom */}
      <div className="mt-auto">
        <div className="mb-4">
          <h4 className="text-xs text-white mb-2">KEY FEATURES</h4>
          <div className="flex flex-wrap gap-2">
            {project.features.slice(0, 3).map((f, i) => (
              <span key={i} className="text-xs text-muted-foreground">
                • {f}
              </span>
            ))}
            {project.features.length > 3 && (
              <span className="text-xs text-muted-foreground">
                • +{project.features.length - 3} more
              </span>
            )}
          </div>
        </div>

        <div>
          <h4 className="text-xs text-white mb-2">TECH STACK</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span key={i} className="bg-dark-300 text-xs px-2 py-1 rounded text-purple-light">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Hover overlay */}
    <div className="absolute inset-0 bg-dark-100/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
      <div className="flex gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-dark-300 rounded-full text-white hover:text-purple transition-colors"
          >
            <Github size={20} />
          </a>
        )}
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-dark-300 rounded-full text-white hover:text-purple transition-colors"
          >
            <ExternalLink size={20} />
          </a>
        )}
      </div>
    </div>
  </div>
);



const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-dark-100">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gradient text-center">
            Projects
          </h2>
        </ScrollAnimation>

        <ScrollAnimation delay={200}>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Showcasing my development work and technical solutions
          </p>
        </ScrollAnimation>

        <ScrollAnimation delay={300}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {projectCategories.map((category, index) => (
              <button
                key={index}
                className={cn(
                  "px-4 py-2 rounded-full text-sm transition-all",
                  activeCategory === category
                    ? "bg-purple text-white"
                    : "bg-dark-300 text-muted-foreground hover:bg-dark-200"
                )}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ScrollAnimation key={index} delay={index * 100 + 400}>
              <ProjectCard project={project} />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
