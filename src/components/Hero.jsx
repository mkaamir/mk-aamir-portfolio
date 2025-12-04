import { ChevronDown, Briefcase, Download } from "lucide-react";

export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadCV = () => {
    // Create a temporary link element
    const link = document.createElement("a");
    link.href = "/aamir_cv.pdf";
    link.download = "MK_Aamir_Lehri_CV.pdf"; // Name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="pt-32 pb-20 px-4 bg-gradient-to-b from-slate-950 to-slate-900 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-yellow-400 bg-opacity-10 border border-yellow-400 border-opacity-30 rounded-full text-yellow-400 text-sm font-medium">
                Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              I'm <span className="text-yellow-400">MK AAMIR LEHRI</span>
            </h1>

            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              A passionate full-stack developer crafting beautiful, functional
              digital experiences. Specialized in React, Node.js, and modern web
              technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={scrollToProjects}
                className="px-8 py-3 bg-yellow-400 !text-slate-950 font-semibold rounded hover:bg-yellow-500 transition duration-300 flex items-center justify-center gap-2"
              >
                <Briefcase size={20} />
                View My Work
              </button>
              <button
                onClick={handleDownloadCV}
                className="px-8 py-3 border-2 border-yellow-400 text-yellow-400 font-semibold rounded hover:bg-yellow-400 hover:text-slate-950 transition duration-300 flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Download CV
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-yellow-400">50+</div>
                <p className="text-gray-400 text-sm">Projects Done</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">50+</div>
                <p className="text-gray-400 text-sm">Happy Clients</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">3+</div>
                <p className="text-gray-400 text-sm">Years Exp.</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center ">
            <div className="relative w-80 h-96 rounded-lg overflow-hidden border-2 border-yellow-400 border-opacity-30 hover:border-opacity-100 transition duration-300">
              <img
                src="/images/profile.png"
                alt="Profile"
                className="w-full h-full object-cover border-2 border-yellow-400 md:border-opacity-100"
              />
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="flex justify-center mt-20 animate-bounce">
          <ChevronDown className="text-yellow-400" size={32} />
        </div>
      </div>
    </section>
  );
}
