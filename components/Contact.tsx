import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#05070a] py-32 px-6 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent -z-10 blur-3xl pointer-events-none" />
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-6 text-white tracking-tight">Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Connect</span></h2>
        <p className="text-gray-400 mb-10 leading-relaxed text-lg max-w-2xl mx-auto">
          I'm currently looking for new opportunities. Whether you have a question or just want to discuss backend technology, I'll try my best to get back to you!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
          <a href={`mailto:${portfolioData.about.email}`} className="px-8 py-4 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
            Email Me
          </a>
          <a href={portfolioData.about.github} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-transparent border-2 border-white/10 text-white rounded-full font-semibold hover:bg-white/5 hover:border-white/20 transition-all duration-300 w-full sm:w-auto">
            GitHub
          </a>
          <a href={portfolioData.about.linkedin} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-transparent border-2 border-white/10 text-white rounded-full font-semibold hover:bg-white/5 hover:border-white/20 transition-all duration-300 w-full sm:w-auto">
            LinkedIn
          </a>
          {portfolioData.about.phone && (
            <a href={`tel:${portfolioData.about.phone.replace(/\s+/g, '')}`} className="px-8 py-4 bg-transparent border-2 border-white/10 text-white rounded-full font-semibold hover:bg-white/5 hover:border-white/20 transition-all duration-300 w-full sm:w-auto">
              Call Me
            </a>
          )}
        </div>
      </div>
    </section>
  );
}