import React from 'react';
import { ChevronDown, Github, Linkedin, Twitter } from 'lucide-react';
import Pdp from '../assets/pdp.jpg';
const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-primary via-accent to-primary/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-white/5 rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Hi, I'm <span className="text-secondary">Tahina Sarobidy</span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary/90 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Web - mobile Developer
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
              I create beautiful, responsive web and mobile applications using React, React Native,Flutter and modern web technologies. 
              Let's build something amazing together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <button 
                onClick={scrollToProjects}
                className="bg-secondary text-primary px-8 py-3 rounded-lg font-medium hover:bg-secondary/90 transition-colors"
              >
                View My Work
              </button>
              <button className="border-2 border-secondary text-secondary px-8 py-3 rounded-lg font-medium hover:bg-secondary hover:text-primary transition-colors">
                Download CV
              </button>
            </div>
            
            <div className="flex justify-center lg:justify-start space-x-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="relative">
              <div className="w-80 h-80 bg-secondary rounded-full overflow-hidden shadow-2xl">
              <img src={Pdp} alt="Photo de profil" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full flex items-center justify-center animate-pulse-slow">
                <span className="text-white font-bold text-sm">React</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary rounded-full flex items-center justify-center animate-float">
                <span className="text-primary font-bold text-xs">Mobile</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToProjects} className="text-white hover:text-secondary transition-colors">
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;