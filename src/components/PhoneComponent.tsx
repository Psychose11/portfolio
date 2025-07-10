import React from 'react';
import { Smartphone, Play, Heart, Star, Download } from 'lucide-react';

interface PhoneComponentProps {
  appName: string;
  appDescription: string;
  appImage: string;
  features: string[];
  className?: string;
}

const PhoneComponent: React.FC<PhoneComponentProps> = ({
  appName,
  appDescription,
  appImage,
  image,
  features,
  className = '',
}) => {
  return (
    <div className={`relative ${className}`}>
      <div className="relative mx-auto w-64 h-[500px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
        {/* Phone frame */}
        <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
          {/* Status bar */}
          <div className="flex justify-between items-center px-6 py-2 bg-gray-50 text-xs font-medium text-gray-600">
            <span>9:41</span>
            <div className="flex items-center space-x-1">
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div> 
              <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
            </div>
          </div>
          
          {/* App content */}
          <div className="p-4 h-full bg-gradient-to-br from-primary/10 to-accent/10">
            <div className="text-center mb-4">
              <div className="w-16 h-16 rounded-2xl mx-auto mb-3 flex items-center justify-center">
              <img 
                src={image} 
                alt={appName}
                className="w-16 h-16 object-cover rounded-lg"
              />
              </div>
              
              <p className="text-xs text-gray-600">{appDescription}</p>
            </div>
            
            {/* App screenshot */}
            <div className="items-center rounded-2xl mx-auto mb-3 flex justify-center">
              <img 
                src={appImage} 
                alt={appName}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            
            {/* Features */}
            <div className="space-y-1 mb-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-xs">
                  <Star className="w-3 h-3 text-accent fill-current" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
          </div>
        </div>
        
        {/* Home indicator */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-400 rounded-full"></div>
      </div>
    </div>
  );
};

export default PhoneComponent;