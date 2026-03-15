type Props = {
  title: string;
  description: string[];
  tech: string[];
};

export default function ProjectCard({ title, description, tech }: Props) {
  return (
    <div className="bg-[#0d1117] p-8 rounded-3xl border border-purple-500/20 shadow-[0_0_20px_rgba(0,0,0,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] transition-all duration-300">

      <h3 className="text-2xl font-bold text-white">
        {title}
      </h3>

      <ul className="mt-5 space-y-2 text-gray-400 list-disc list-inside">
        {description.map((point, index) => (
          <li key={index} className="leading-relaxed">
            {point}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mt-6">
        {tech.map((t) => (
          <span
            key={t}
            className="text-xs font-semibold bg-[#05070a] text-purple-400 border border-purple-500/30 px-3 py-1.5 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>

    </div>
  );
}