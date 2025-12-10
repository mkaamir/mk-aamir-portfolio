import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleQuickLinkClick = (link) => {
    const sectionId = link.toLowerCase();

    // Check if on home page
    if (location.pathname === "/") {
      // Already on home page, just scroll to section
      if (sectionId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      // On project/blog detail page, navigate to home first
      navigate("/");

      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        if (sectionId === "home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, 100);
    }
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = ["Home", "About", "Services", "Projects"];
  const services = [
    "Front-End Development",
    "Full-Stack Web Application",
    "Backend Development",
    "WordPress Website",
  ];

  return (
    <footer className="bg-slate-950 border-t border-yellow-400 border-opacity-20 text-center md:text-left">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-yellow-400">MK AaMir</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Helping businesses grow with smart, sleek, and reliable web
              development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleQuickLinkClick(link)}
                    className="text-gray-400 hover:text-yellow-400 transition text-sm cursor-pointer"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 transition text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center justify-center md:justify-start  gap-2">
                <Mail size={16} className="text-yellow-400" />
                mkaamir786@gmail.com
              </li>
              <li>+92 (304) 833-8506</li>
              <li>Quetta Balochistan, Pakistan</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-yellow-400 border-opacity-20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} MK AaMir. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/mkaamir"
                className="w-10 h-10 rounded-lg bg-yellow-400 bg-opacity-10 hover:bg-opacity-20 border border-yellow-400 border-opacity-30 text-yellow-400 hover:text-yellow-500 transition flex items-center justify-center"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/mkaamir786"
                className="w-10 h-10 rounded-lg bg-yellow-400 bg-opacity-10 hover:bg-opacity-20 border border-yellow-400 border-opacity-30 text-yellow-400 hover:text-yellow-500 transition flex items-center justify-center"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-yellow-400 bg-opacity-10 hover:bg-opacity-20 border border-yellow-400 border-opacity-30 text-yellow-400 hover:text-yellow-500 transition flex items-center justify-center"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-yellow-400 bg-opacity-10 hover:bg-opacity-20 border border-yellow-400 border-opacity-30 text-yellow-400 hover:text-yellow-500 transition flex items-center justify-center"
              >
                <Mail size={18} />
              </a>
            </div>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-lg bg-yellow-400 bg-opacity-10 hover:bg-opacity-20 border border-yellow-400 border-opacity-30 text-yellow-400 hover:text-yellow-500 transition flex items-center justify-center"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
