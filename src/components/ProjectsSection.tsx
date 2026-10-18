import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import GlowCard from './GlowCard';

interface Project {
  id: number;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  image: string;
  url: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Magnetic Property Prediction',
      tagline: 'When atoms talk, neural networks listen.',
      description:
        'Collected 200+ crystal structures and trained a Graph Attention Network to predict magnetic properties of Mn & Cr solids with MAE of 1.29.',
      techStack: ['Graph Neural Networks', 'Python', 'PyTorch', 'Data Processing'],
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop',
      url: '#',
    },
    {
      id: 2,
      title: 'MERN Blogging Platform',
      tagline: 'Where thoughts become threads.',
      description:
        'Full-stack blogging platform supporting 100+ posts with real-time updates, JWT authentication, and RESTful APIs.',
      techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT'],
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop',
      url: '#',
    },
    {
      id: 3,
      title: 'AI-Powered Slack Chatbot',
      tagline: "Your team's smartest colleague that never sleeps.",
      description:
        'Intelligent Slack bot with message context retrieval and Google Gemini API integration via Socket Mode for real-time responses.',
      techStack: ['Python', 'Slack API', 'Google Gemini', 'Socket Mode'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
      url: '#',
    },
    {
      id: 4,
      title: 'Restaurant Reservation System',
      tagline: 'Every great meal starts with a booked table.',
      description:
        'Reservation system handling 100+ bookings across 12 database tables with full CRUD operations and organized architecture.',
      techStack: ['Django', 'MySQL', 'HTML', 'CSS'],
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop',
      url: '#',
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 relative">
      {/* Background accent */}
      <div className="orb orb-purple w-[500px] h-[500px] -top-[100px] right-[10%] opacity-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">
            Things I've shipped<span className="text-glow-purple">.</span>
          </h2>
          <p className="font-body text-white/40 text-lg max-w-xl">
            From neural networks to real-time systems &mdash; each project is a story of solving hard problems with elegant code.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <GlowCard
              key={project.id}
              intensity={index < 2 ? 'high' : 'medium'}
              hoverScale={1.02}
              delayIndex={index}
            >
              {/* Project image */}
              <div className="relative h-52 overflow-hidden rounded-t-[15px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void-50 via-void-50/50 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5">
                  <p className="font-mono text-xs text-glow-purple/80 tracking-wide">{project.tagline}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display font-bold text-xl text-white leading-snug pr-4">
                    {project.title}
                  </h3>
                  <a
                    href={project.url}
                    className="flex-shrink-0 p-2 rounded-lg bg-white/5 hover:bg-glow-purple/20 transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4 text-white/50" />
                  </a>
                </div>

                <p className="font-body text-white/40 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-white/40 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
