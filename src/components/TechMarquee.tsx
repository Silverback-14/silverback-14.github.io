import React from 'react';

const TechMarquee: React.FC = () => {
  const row1 = [
    'Python', 'TypeScript', 'JavaScript', 'C++', 'C#', 'SQL', 'Bash',
    'Sanic', 'Django', 'Node.js', 'Express.js', 'React', 'Next.js',
    'ASP.NET', '.NET', 'Roslyn',
  ];

  const row2 = [
    'PostgreSQL', 'Redis', 'StarRocks', 'Elasticsearch', 'MongoDB', 'MySQL',
    'Kafka', 'Flink', 'Airflow', 'Supabase', 'AWS', 'Vercel', 'Firebase',
    'CLIP', 'BentoML', 'OpenAI API', 'Gemini API', 'Pandas', 'NumPy', 'Linux',
  ];

  const renderItems = (items: string[]) => {
    const doubled = [...items, ...items];
    return doubled.map((tech, i) => (
      <span key={i} className="tech-badge mx-3">
        {tech}
      </span>
    ));
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Fading edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-void to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-void to-transparent z-10 pointer-events-none" />

      <div className="mb-12 text-center">
        <span className="section-label">Tech Stack</span>
        <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Tools of the trade</h2>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative overflow-hidden mb-4">
        <div className="flex whitespace-nowrap animate-marquee-left">
          {renderItems(row1)}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee-right">
          {renderItems(row2)}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
