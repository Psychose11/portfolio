import React from 'react';
import { Code, Search, ShieldCheck, Terminal, GitBranch, Cpu, Briefcase, GraduationCap } from 'lucide-react';
import { useApp } from '../AppContext';

// Les textes viennent de translations.ts (tr.skills), dans le même ordre que ces icônes.
const cardIcons = [Code, Search, ShieldCheck, Terminal, GitBranch, Cpu];
const highlightIcons = [Briefcase, GraduationCap, Search];

const Skills: React.FC = () => {
  const { tr } = useApp();
  const s = tr.skills;

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{s.title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{s.intro}</p>
        </div>

        {/* Points clés : poste, formation, spécialité */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {s.highlights.map((h, i) => {
            const Icon = highlightIcons[i];
            return (
              <div key={i} className="bg-secondary/20 rounded-lg p-6 border-l-4 border-accent">
                <div className="flex items-center mb-3 text-primary">
                  <Icon className="w-6 h-6 mr-3" />
                  <h3 className="text-lg font-bold text-primary">{h.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{h.text}</p>
              </div>
            );
          })}
        </div>

        {/* Domaines d'expertise */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {s.cards.map((card, i) => {
            const Icon = cardIcons[i];
            return (
              <div key={i} className="bg-secondary/20 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="text-primary mr-3">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-primary">{card.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{card.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;