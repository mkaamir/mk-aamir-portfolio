import { ExternalLink, Github } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

export default function Projects() {
  const navigate = useNavigate();

  const handleViewProject = (id) => {
    navigate(`/project/${id}`);
    window.scrollTo(0, 0); // Scroll to top when navigating
  };

  const handleGithub = (url, e) => {
    e.stopPropagation(); // Prevent card click when clicking github button
    window.open(url, '_blank');
  };

  return (
    <section id="projects" className="py-20 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-4">Our Projects</h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Showcasing my recent work and successful projects delivered to clients
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projectsData.map((project) => (
            <div
              key={project.id}
              onClick={() => handleViewProject(project.id)}
              className="group bg-slate-900 rounded-lg overflow-hidden border border-yellow-400 border-opacity-20 hover:border-opacity-100 transition duration-300 cursor-pointer hover:shadow-2xl hover:shadow-yellow-400/20 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 bg-gray-800 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition"></div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-yellow-400 bg-opacity-0 group-hover:bg-opacity-10 transition duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition duration-300 text-lg">
                    Click to View Details
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-yellow-400 text-sm font-semibold mb-2">{project.category}</p>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition duration-300">{project.title}</h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-yellow-400 bg-opacity-10 text-yellow-400 px-3 py-1 rounded-full group-hover:bg-opacity-20 transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-yellow-400 border-opacity-20">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent card click
                      handleViewProject(project.id);
                    }}
                    className="flex-1 flex items-center justify-center gap-2 text-gray-400 hover:text-yellow-400 transition py-2"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">View</span>
                  </button>
                  <button 
                    onClick={(e) => handleGithub(project.githubUrl, e)}
                    className="flex-1 flex items-center justify-center gap-2 text-gray-400 hover:text-yellow-400 transition py-2"
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="px-8 py-3 bg-yellow-400 !text-slate-950 font-semibold rounded hover:bg-yellow-500 transition duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}