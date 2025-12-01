import { useParams, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import { ArrowLeft, ExternalLink, Github, Check } from 'lucide-react';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const project = projectsData.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Project Not Found</h2>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-yellow-400 text-slate-950 font-semibold rounded hover:bg-yellow-500 transition"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Back Button */}
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back to Projects</span>
        </button>

        {/* Project Header */}
        <div className="mb-12">
          <span className="inline-block px-4 py-2 bg-yellow-400 bg-opacity-10 text-yellow-400 rounded-full text-sm font-semibold mb-4">
            {project.category}
          </span>
          
          <h1 className="text-5xl font-bold text-white mb-6">{project.title}</h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-3 mb-8">
            {project.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-slate-800 border-2 border-yellow-400 border-opacity-30 text-yellow-400 rounded-full font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button 
              onClick={() => window.open(project.liveUrl, '_blank')}
              className="flex items-center gap-2 px-6 py-3 bg-yellow-400 text-slate-950 font-semibold rounded hover:bg-yellow-500 transition"
            >
              <ExternalLink size={20} />
              View Live Demo
            </button>
            <button 
              onClick={() => window.open(project.githubUrl, '_blank')}
              className="flex items-center gap-2 px-6 py-3 border-2 border-yellow-400 text-yellow-400 font-semibold rounded hover:bg-yellow-400 hover:text-slate-950 transition"
            >
              <Github size={20} />
              View Code
            </button>
          </div>
        </div>

        {/* Full Screenshot */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Full Preview</h2>
          <div className="rounded-lg overflow-hidden border-2 border-yellow-400 border-opacity-30">
            <img 
              src={project.fullScreenshot} 
              alt={`${project.title} full screenshot`}
              className="w-full object-contain bg-slate-900"
            />
          </div>
        </div>

        {/* Project Description */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">About This Project</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-4 bg-slate-900 rounded-lg border border-yellow-400 border-opacity-20"
              >
                <div className="p-1 bg-yellow-400 bg-opacity-20 rounded-full">
                  <Check size={16} className="text-yellow-400" />
                </div>
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-slate-900 rounded-lg p-12 border border-yellow-400 border-opacity-20">
          <h3 className="text-3xl font-bold text-white mb-4">
            Interested in similar project?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and bring your ideas to life with modern web technologies.
          </p>
          <button 
            onClick={() => navigate('/#contact')}
            className="px-8 py-3 bg-yellow-400 text-slate-950 font-semibold rounded hover:bg-yellow-500 transition"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
}