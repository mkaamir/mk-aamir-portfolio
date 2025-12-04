import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = ['Home', 'About', 'Services', 'Skills', 'Projects', 'Testimonials', 'Blog', 'Contact'];

  const handleNavigation = (item) => {
    const sectionId = item.toLowerCase();
    
    // If on project/blog detail page, navigate to home first
    if (location.pathname.startsWith('/project/') || location.pathname.startsWith('/blog/')) {
      navigate('/');
      // Wait for navigation, then scroll
      setTimeout(() => {
        if (sectionId === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
    
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-slate-950 bg-opacity-95 backdrop-blur z-50 border-b border-yellow-500 border-opacity-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => handleNavigation('Home')}>
            <span className="text-2xl font-bold">
              <span className="text-yellow-400">MK_Aamir</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavigation(item)}
                className="px-3 py-2 text-sm text-gray-300 hover:text-yellow-400 transition duration-300"
              >
                {item}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => handleNavigation('Contact')}
              className="px-6 py-2 bg-yellow-400 text-slate-950 font-semibold rounded hover:bg-yellow-500 transition duration-300"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-yellow-400 hover:text-yellow-500"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-slate-900 border-t border-yellow-500 border-opacity-20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavigation(item)}
                  className="w-full text-left block px-3 py-2 text-gray-300 hover:text-yellow-400 hover:bg-slate-800 rounded transition"
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={() => handleNavigation('Contact')}
                className="w-full mt-4 px-6 py-2 bg-yellow-400 text-slate-950 font-semibold rounded hover:bg-yellow-500 transition"
              >
                Hire Me
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}