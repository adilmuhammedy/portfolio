import { portfolioData } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold tracking-tight mb-6 text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Me</span>
          </h2>
          <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
            <p>{portfolioData.about.description2}</p>
            <p>{portfolioData.about.description3}</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative mt-8 md:mt-0">
          <div className="bg-[#0d1117] border border-purple-500/20 rounded-3xl overflow-hidden relative z-10 flex flex-col items-center justify-center p-10 h-full shadow-[0_0_30px_rgba(168,85,247,0.1)]">
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Architecting Systems</h3>
            <p className="text-center text-gray-400 max-w-sm mb-8 leading-relaxed">
              Focusing on clean design, optimized databases, and resilient APIs that power real-world applications.
            </p>
            <div className="flex gap-4">
              <div className="w-16 h-16 rounded-full bg-[#05070a] border border-purple-500/30 flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-transform hover:scale-110">API</div>
              <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-transform hover:scale-110">DB</div>
              <div className="w-16 h-16 rounded-full bg-[#05070a] border border-white/10 flex items-center justify-center text-white font-bold text-lg transition-transform hover:scale-110">AWS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}