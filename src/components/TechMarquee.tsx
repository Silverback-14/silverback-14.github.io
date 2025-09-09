import React from 'react';
import { 
  Github, Code2, Database, 
  ServerCrash, Container, Cpu, Cloud, Terminal, 
  Paintbrush, Layers 
} from 'lucide-react';

const TechMarquee: React.FC = () => {
  const techStackRow1 = [
    { name: "React", icon: <Code2 className="w-5 h-5 mr-2" /> },
    { name: "Next.js", icon: <Code2 className="w-5 h-5 mr-2" /> },
    { name: "Node.js", icon: <ServerCrash className="w-5 h-5 mr-2" /> },
    { name: "TailwindCSS", icon: <Paintbrush className="w-5 h-5 mr-2" /> },
    { name: "PostgreSQL", icon: <Database className="w-5 h-5 mr-2" /> },
    { name: "MySQL", icon: <Database className="w-5 h-5 mr-2" /> },
    { name: "MongoDB", icon: <Database className="w-5 h-5 mr-2" /> },
    { name: "Redis", icon: <Database className="w-5 h-5 mr-2" /> },
    { name: "Elasticsearch", icon: <Cpu className="w-5 h-5 mr-2" /> },
    { name: "AWS", icon: <Cloud className="w-5 h-5 mr-2" /> },
    { name: "Docker", icon: <Container className="w-5 h-5 mr-2" /> },
    { name: "Kubernetes", icon: <Layers className="w-5 h-5 mr-2" /> }
  ];
  
  const techStackRow2 = [
    { name: "Python", icon: <Terminal className="w-5 h-5 mr-2" /> },
    { name: "C#", icon: <Cpu className="w-5 h-5 mr-2" /> },
    { name: "C++", icon: <Cpu className="w-5 h-5 mr-2" /> },
    { name: "SQL", icon: <Database className="w-5 h-5 mr-2" /> },
    { name: "Bash/Shell", icon: <Terminal className="w-5 h-5 mr-2" /> },
    { name: "Django", icon: <Cpu className="w-5 h-5 mr-2" /> },
    { name: "Sanic", icon: <Cpu className="w-5 h-5 mr-2" /> },
    { name: "Express.js", icon: <ServerCrash className="w-5 h-5 mr-2" /> },
    { name: "Streamlit", icon: <Cpu className="w-5 h-5 mr-2" /> },
    { name: ".NET Framework", icon: <Cpu className="w-5 h-5 mr-2" /> },
    { name: "ASP.NET", icon: <Cpu className="w-5 h-5 mr-2" /> },
    { name: "Flink", icon: <Cpu className="w-5 h-5 mr-2" /> },
    { name: "Kafka", icon: <Cpu className="w-5 h-5 mr-2" /> },
    { name: "Apache Airflow", icon: <Cpu className="w-5 h-5 mr-2" /> },
    { name: "Firebase", icon: <Cloud className="w-5 h-5 mr-2" /> },
  ];
  

  const renderMarqueeItems = (items: Array<{ name: string; icon: React.ReactNode }>) => {
    // Duplicate items for seamless scrolling
    const duplicatedItems = [...items, ...items];
    return duplicatedItems.map((tech, index) => (
      <span key={index} className="tech-badge-premium mx-4 flex items-center">
        {tech.icon}
        {tech.name}
      </span>
    ));
  };

  return (
    <section className="py-20 bg-slate-100/50 relative max-w-screen-xl mx-auto px-10 overflow-hidden">
      {/* Light effect for tech section */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-radial-glow-premium opacity-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
      
      {/* Top row - scrolling right */}
      <div className="relative overflow-hidden ">
        <div className="animate-scroll-right flex whitespace-nowrap py-5">
          {renderMarqueeItems(techStackRow1)}
        </div>
      </div>
      
      {/* Bottom row - scrolling left */}
      <div className="relative overflow-hidden mt-10">
        <div className="animate-scroll-left flex whitespace-nowrap py-5">
          {renderMarqueeItems(techStackRow2)}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
