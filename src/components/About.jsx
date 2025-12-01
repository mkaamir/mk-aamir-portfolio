import { Mail, Phone, MapPin, Calendar } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          About Me
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Get to know me better - my journey, skills, and what drives my passion
          for web development
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative w-80 h-100 rounded-lg overflow-hidden border-2 border-yellow-400 border-opacity-30 hover:border-opacity-100 transition duration-300">
              <img
                src="/images/profile.png"
                alt="About"
                className="w-full h-full object-cover border-2 border-yellow-400 md:border-opacity-100"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              I'm a full-stack web developer with 3+ years of experience
              building responsive and scalable web applications. I specialize in
              React, Node.js, and modern web technologies.
            </p>

            <p className="text-gray-400 text-base leading-relaxed mb-8">
              My journey started with curiosity about how websites work, which
              led me to learn programming. Today, I help businesses bring their
              ideas to life through clean, efficient code and beautiful user
              interfaces.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-800 p-4 rounded border-2 border-yellow-400 md:border-opacity-35">
                <p className="text-gray-400 text-sm mb-2">Name</p>
                <p className="text-white font-semibold">MK Aamir Lehri</p>
              </div>
              <div className="bg-slate-800 p-4 rounded border-2 border-yellow-400 md:border-opacity-35">
                <p className="text-gray-400 text-sm mb-2">Email</p>
                <p className="text-white font-semibold">mkaamir786@gmail.com</p>
              </div>
              <div className="bg-slate-800 p-4 rounded border-2 border-yellow-400 md:border-opacity-35">
                <p className="text-gray-400 text-sm mb-2">Location</p>
                <p className="text-white font-semibold">
                  Quetta Balochistan, Pakistan
                </p>
              </div>
              <div className="bg-slate-800 p-4 rounded border-2 border-yellow-400 md:border-opacity-35">
                <p className="text-gray-400 text-sm mb-2">Freelance</p>
                <p className="text-yellow-400 font-semibold">Available</p>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition">
                <Mail size={20} className="text-yellow-400" />
                <span>mkaamir786@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition">
                <Phone size={20} className="text-yellow-400" />
                <span>+92 (304) 833-8506</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition">
                <MapPin size={20} className="text-yellow-400" />
                <span>Quetta Balochistan, Pakistan</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition">
                <Calendar size={20} className="text-yellow-400" />
                <span>Available for freelance projects</span>
              </div>
            </div>

            <button className="mt-8 px-8 py-3 bg-yellow-400 text-slate-950 font-semibold rounded hover:bg-yellow-500 transition duration-300">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
