import React from 'react';
import { Star, Lock } from 'lucide-react';

interface BrowserComponentProps {
  siteName: string;
  url: string;
  screenshot: string;
  features: string[];
  className?: string;
}

const BrowserComponent: React.FC<BrowserComponentProps> = ({
  siteName,
  url,
  screenshot,
  features,
  className = '',
}) => {
  return (
    <div className={`w-full max-w-xl mx-auto ${className}`}>
      <div className="bg-gray-900 rounded-xl p-2 shadow-2xl">
        <div className="bg-white rounded-lg overflow-hidden">
          {/* Barre du navigateur */}
          <div className="flex items-center gap-3 px-3 py-2 bg-gray-100 border-b border-gray-200">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-400"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span className="w-3 h-3 rounded-full bg-green-400"></span>
            </div>
            <div className="flex-1 flex items-center gap-1 bg-white rounded-md px-3 py-1 text-xs text-gray-600 truncate">
              <Lock className="w-3 h-3 text-green-600 shrink-0" />
              <span className="truncate">{url}</span>
            </div>
          </div>

          {/* Capture du site */}
          <div className="h-64 md:h-80 overflow-hidden bg-gray-50">
            <img
              src={screenshot}
              alt={siteName}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* Pied du navigateur (écran / pied) */}
      <div className="mx-auto w-1/3 h-3 bg-gray-800 rounded-b-xl"></div>
      <div className="mx-auto w-1/2 h-1.5 bg-gray-700 rounded-b-xl"></div>

      {features.length > 0 && (
        <div className="mt-4 grid grid-cols-2 gap-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2 text-sm">
              <Star className="w-3 h-3 text-accent fill-current shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowserComponent;