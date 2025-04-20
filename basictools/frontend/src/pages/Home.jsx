import { Link } from "react-router-dom";

export default function Home() {
  const tools = [
    { name: "Resize Image", path: "/resize-image" },
    { name: "Compress PDF", path: "/compress-pdf" },
    // Add more tools here...
  ];

  return (
    <div className="min-h-screen bg-accent p-6 text-center">
      <h1 className="text-4xl font-bold text-primary mb-8">🛠️ ToolNest</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {tools.map((tool, i) => (
          <Link key={i} to={tool.path} className="bg-white p-4 rounded-2xl shadow hover:bg-blue-100 transition">
            {tool.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
