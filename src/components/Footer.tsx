import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Code className="w-6 h-6" />
            <span className="text-xl font-bold">Tahina Sarobidy</span>
          </div>
          
          <div className="flex items-center space-x-2 text-secondary/90">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>using React</span>
          </div>
          
          <div className="text-secondary/90 text-sm mt-4 md:mt-0">
            © 2025 psc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;