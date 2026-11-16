type DiagramProps = {
  diagrams?: {
    architecture?: string;
    database?: string;
    flow?: string[];
  };
};

export default function ProjectDiagrams({ diagrams }: DiagramProps) {
  if (!diagrams) return null;

  return (
    <div className="mt-8 space-y-8">

      {diagrams.architecture && (
        <div>
          <h4 className="text-lg font-semibold text-white">
            System Architecture
          </h4>
          <img
            src={diagrams.architecture}
            alt="Architecture Diagram"
            className="mt-4 rounded-xl border border-gray-700"
          />
        </div>
      )}

      {diagrams.database && (
        <div>
          <h4 className="text-lg font-semibold text-white">
            Database Design
          </h4>
          <img
            src={diagrams.database}
            alt="Database Diagram"
            className="mt-4 rounded-xl border border-gray-700"
          />
        </div>
      )}

        {/* Multiple Flow Diagrams */}
      {diagrams.flow && diagrams.flow.length > 0 && (
        <div>
          <h4 className="text-lg font-semibold text-white">
            Flow Diagrams
          </h4>

          <div className="mt-4 space-y-6">
            {diagrams.flow.map((flowImg, index) => (
              <img
                key={index}
                src={flowImg}
                alt={`Flow Diagram ${index + 1}`}
                className="rounded-xl border border-gray-700"
              />
            ))}
          </div>
        </div>
      )}

    </div>
  );
}