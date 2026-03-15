import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent -z-10 blur-3xl pointer-events-none" />
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-center text-white">
          Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Experience</span>
        </h2>
        
        <div className="space-y-8">
          {portfolioData.experience.map((exp, idx) => (
            <div key={idx} className="bg-[#0d1117] border border-purple-500/20 rounded-3xl p-8 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                  <div className="text-purple-400 font-medium mt-1">{exp.company}</div>
                </div>
                <div className="px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm font-medium text-purple-300 w-fit">
                  {exp.duration}
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                {exp.responsibilities.map((req, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-3 text-gray-400 leading-relaxed">
                    <span className="text-purple-500 mt-1.5 text-lg leading-none">•</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {exp.technologies.map((tech, tIdx) => (
                  <span key={tIdx} className="px-3 py-1 bg-[#05070a] border border-purple-500/30 rounded-full text-xs font-semibold text-gray-300 shadow-[0_0_10px_rgba(168,85,247,0.1)]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
