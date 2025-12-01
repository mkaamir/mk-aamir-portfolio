import { Code, Database, GitBranch, Monitor, Palette, Zap } from 'lucide-react';

export default function Skills() {
  const skillsData = [
    { name: "HTML CSS & JavaScript", level: 85 },
    { name: "React.js & Next.js", level: 80 },
    { name: "Tailwind CSS & Bootstrap", level: 85 },
    { name: "PHP + Laravel", level: 80 },
    { name: "Node.js", level: 80 },
    { name: "MongoDB & MySQL", level: 80 },
    { name: "TypeScript", level: 85 },
    { name: "Express.js", level: 80 },
  ];

  const frontendSkills = [
    { name: "React.js & Hooks", icon: Zap, color: "#61DAFB" },
    { name: "Tailwind CSS", icon: Palette, color: "#06B6D4" },
    { name: "JavaScript ES6+", icon: Code, color: "#F7DF1E" },
    { name: "HTML5 & CSS3", icon: Monitor, color: "#E34C26" },
  ];

  const backendSkills = [
    { name: "Node.js & Express", icon: Zap, color: "#68A063" },
    { name: "MongoDB & SQL", icon: Database, color: "#13AA52" },
    { name: "RESTful APIs", icon: Code, color: "#FFD700" },
    { name: "Authentication", icon: GitBranch, color: "#777BB4" },
  ];

  const toolsSkills = [
    { name: "Git & GitHub", icon: GitBranch, color: "#F1502F" },
    { name: "VS Code", icon: Monitor, color: "#007ACC" },
    { name: "Figma", icon: Palette, color: "#F24E1E" },
    { name: "Firebase", icon: Database, color: "#FFCA28" },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-4">My Skills</h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Technologies and tools I've mastered over my career
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {skillsData.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between items-center mb-3">
                <span className="text-white font-semibold">{skill.name}</span>
                <span className="text-yellow-400 font-bold">{skill.level}%</span>
              </div>
              <div className="h-3 bg-slate-800 rounded-full overflow-hidden border border-yellow-400 border-opacity-30">
                <div
                  className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Categories */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {/* Frontend */}
          <div className="bg-slate-800 p-8 rounded-lg border-2 border-yellow-400 md:border-opacity-35">
            <h3 className="text-yellow-400 font-bold text-lg mb-6">Frontend</h3>
            <ul className="space-y-4 text-gray-300">
              {frontendSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <li key={index} className="flex items-center gap-3">
                    <Icon size={20} style={{ color: skill.color }} />
                    <span>{skill.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Backend */}
          <div className="bg-slate-800 p-8 rounded-lg border-2 border-yellow-400 md:border-opacity-35">
            <h3 className="text-yellow-400 font-bold text-lg mb-6">Backend</h3>
            <ul className="space-y-4 text-gray-300">
              {backendSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <li key={index} className="flex items-center gap-3">
                    <Icon size={20} style={{ color: skill.color }} />
                    <span>{skill.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Tools */}
          <div className="bg-slate-800 p-8 rounded-lg border-2 border-yellow-400 md:border-opacity-35">
            <h3 className="text-yellow-400 font-bold text-lg mb-6">Tools</h3>
            <ul className="space-y-4 text-gray-300">
              {toolsSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <li key={index} className="flex items-center gap-3">
                    <Icon size={20} style={{ color: skill.color }} />
                    <span>{skill.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}