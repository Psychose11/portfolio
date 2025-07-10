import React from 'react';
import PhoneComponent from './PhoneComponent';
import { ExternalLink, Github } from 'lucide-react';
import Meetafa from '../assets/meetafa.png';
import User from '../assets/user.jpg';
const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Meetafa',
      description: 'Meetafa revolutionizes networking with its dynamic Speed Recruiting Experience, connecting ambitious talent with top recruiters in real time.',
      image: Meetafa,
      technologies: ['Flutter', 'Dart', 'Node.js', 'MySQL'],
      phone: {
        appName: 'Meetafa',
        appDescription: 'Speed recruting Experience',
        appImage: User,
        features: ['Multi user', 'Real-time texting', 'Push Notifications', 'CV Download']
      }
    },
    // {
    //   id: 2,
    //   title: 'Task Management App',
    //   description: 'A collaborative task management application with real-time updates, team collaboration features, and intuitive project organization.',
    //   image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
    //   technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    //   phone: {
    //     appName: 'TaskFlow',
    //     appDescription: 'Team Collaboration Made Easy',
    //     appImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300',
    //     features: ['Real-time Sync', 'Team Chat', 'Progress Tracking', 'Smart Notifications']
    //   }
    // },
    
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my expertise in React, React Native, and modern web technologies.
          </p>
        </div>
        
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div key={project.id} className={`flex flex-col lg:flex-row items-center gap-12 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              <div className="lg:w-1/2">
                <PhoneComponent
                  appName={project.phone.appName}
                  appDescription={project.phone.appDescription}
                  appImage={project.phone.appImage}
                  image={project.image}
                  features={project.phone.features}
                  className="animate-float"
                />
              </div>
              
              <div className="lg:w-1/2 text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-primary mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="flex items-center justify-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors">
                    <Github className="w-4 h-4" />
                    <span>Source Code</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;