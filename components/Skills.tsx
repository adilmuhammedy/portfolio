import { portfolioData } from "@/data/portfolio";

export default function Skills() {
  const { frontend, backend, databases, cloudDevops, other } = portfolioData.skills;
  
  const categories = [
    { title: "Backend Systems", skills: backend },
    { title: "Databases", skills: databases },
    { title: "Cloud & DevOps", skills: cloudDevops },
    { title: "Frontend", skills: frontend },
    { title: "Other Tools", skills: other },
  ];

  return (
    <section id="skills" className="relative py-24 px-6 max-w-6xl mx-auto">
      <div className="absolute top-1/2 left-0 w-full h-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent -z-10 blur-3xl pointer-events-none" />
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">
          Technical Skills
        </h2>
        <div className="max-w-2xl mx-auto pt-4 pb-2">
          <p className="text-white font-medium text-lg border-t border-white/10 pt-6">
             {portfolioData.education[0].degree}
          </p>
          <div className="text-purple-400 font-medium mt-1">
             {portfolioData.education[0].institution} • {portfolioData.education[0].period}
          </div>
          <p className="text-gray-400 text-sm mt-2">
             {portfolioData.education[0].description}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, idx) => (
          <div key={idx} className="bg-[#0d1117] border border-white/5 p-6 rounded-3xl hover:shadow-[0_0_20px_rgba(168,85,247,0.1)] transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
              </div>
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, sIdx) => (
                <span key={sIdx} className="px-3 py-1.5 bg-[#05070a] border border-white/10 rounded-xl text-sm font-medium text-gray-300 transition-colors cursor-default hover:border-purple-500/50 hover:text-white">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold tracking-tight mb-8 text-center flex items-center justify-center gap-2 text-white">
          Achievements & Certifications
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          {portfolioData.achievements.map((achievement, idx) => (
             <div key={idx} className="bg-[#0d1117] border border-white/5 p-5 rounded-2xl flex items-start gap-3 hover:-translate-y-1 transition-transform shadow-sm">
               <span className="text-purple-500 mt-0.5 text-lg leading-none shadow-[0_0_10px_rgba(168,85,247,0.5)] rounded-full">★</span>
               <span className="text-gray-300 font-medium leading-tight">{achievement}</span>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}