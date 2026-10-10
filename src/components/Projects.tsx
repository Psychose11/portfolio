import React, { useState, useEffect } from 'react';
import BrowserComponent from './BrowserComponent';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { useApp } from '../AppContext';
import Aquavela from '../assets/aquavela.png';
import Fetanoo from '../assets/fetanoo.png';
import Zotcarton from '../assets/zotcarton.png';
import Pretalouer from '../assets/pretalouer.png';

// Les textes (description + points forts) viennent de translations.ts, dans le même ordre.
const baseProjects = [
  {
    id: 1,
    title: 'Aquavela',
    url: 'https://aquavela.re',
    screenshot: Aquavela,
    technologies: ['Alpine.js', 'PHP', 'MySQL', 'Tailwind CSS'],
  },
  {
    id: 2,
    title: 'Fetanoo',
    url: 'https://fetanoo.com',
    screenshot: Fetanoo,
    technologies: ['PHP', 'MySQL', 'Tailwind CSS'],
  },
  {
    id: 3,
    title: 'ZotCarton',
    url: 'https://zotcarton.re',
    screenshot: Zotcarton,
    technologies: ['PHP', 'Alpine.js', 'MySQL', 'Tailwind CSS'],
  },
  {
    id: 4,
    title: 'Pretalouer',
    url: 'https://pretalouer.re',
    screenshot: Pretalouer,
    technologies: ['Alpine.js', 'PHP', 'MySQL', 'Tailwind CSS'],
  },
];

const Projects: React.FC = () => {
  const { tr } = useApp();
  const projects = baseProjects.map((p, i) => ({ ...p, ...tr.projects.items[i] }));

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = projects.length;

  const next = () => setCurrent((c) => (c + 1) % total);
  const prev = () => setCurrent((c) => (c - 1 + total) % total);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [paused, total]);

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{tr.projects.title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{tr.projects.intro}</p>
        </div>

        <div
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full shrink-0 px-2 md:px-12">
                  <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2 w-full">
                      <BrowserComponent
                        siteName={project.title}
                        url={project.url.replace('https://', '')}
                        screenshot={project.screenshot}
                        features={project.features}
                      />
                    </div>

                    <div className="lg:w-1/2 text-center lg:text-left">
                      <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">{project.title}</h3>
                      <p className="text-gray-600 mb-6 text-lg leading-relaxed">{project.desc}</p>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-primary mb-3">{tr.projects.tech}</h4>
                        <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                          {project.technologies.map((tech, i) => (
                            <span key={i} className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>{tr.projects.visit}</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`${i + 1}`}
              className={`h-3 rounded-full transition-all ${i === current ? 'w-8 bg-primary' : 'w-3 bg-primary/30'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;