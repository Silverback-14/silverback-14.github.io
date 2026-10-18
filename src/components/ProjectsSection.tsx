
import React from 'react';
import { motion } from 'framer-motion';
import GlowCard from './GlowCard';

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  url: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Predicting Magnetic Properties of Mn and Cr Solids",
      description: "Collected 200+ crystal structures and trained a Graph Attention Network (GAT) to predict magnetic properties with high accuracy (MAE 1.29).",
      techStack: ["Graph Neural Networks", "Python", "PyTorch", "Data Processing"],
      url: "#"
    },
    {
      id: 2,
      title: "MERN Blogging Platform",
      description: "Created a full-stack blogging platform using the MERN stack. Enabled JWT authentication for secure sign-up/sign-in, allowing users to create, edit, and manage 100+ blog posts with real-time updates.",
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "REST APIs"],
      url: "#"
    },
    {
      id: 3,
      title: "AI-Powered Slack Chatbot",
      description: "Programmed a Slack chatbot that listens for mentions, retrieves the last 5 messages for context, and generates responses using Google Gemini API. Integrated real-time event handling via Slack Socket Mode and optimized message processing with an in-memory conversation store.",
      techStack: ["Python", "Slack API", "Google Gemini API", "Socket Mode", "Bolt for Python"],
      url: "#"
    },
    {
      id: 4,
      title: "Restaurant Website",
      description: "Built a restaurant website with a reservation system handling 100+ reservations efficiently. Applied Django views, routes, and templates for organized website structure and modeled 12 database tables to enhance user interactions.",
      techStack: ["Django", "MySQL", "HTML", "CSS"],
      url: "#"
    }
  ];


  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Premium light effect for top corner */}
      <div className="corner-light-premium top-0 right-0 opacity-50"></div>
      
      {/* Light rays */}
      <div className="light-ray-premium opacity-20" style={{ top: '30%', right: '-20%', width: '70%', transform: 'rotate(165deg)' }}></div>
      <div className="light-ray-premium opacity-15" style={{ top: '60%', right: '-10%', width: '50%', transform: 'rotate(150deg)' }}></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          className="section-heading-premium relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <GlowCard 
                intensity={index % 3 === 0 ? 'high' : index % 2 === 0 ? 'medium' : 'low'}
                className="group h-full"
                hoverScale={1.03}
              >
                <div className="p-6 h-full flex flex-col relative z-10">
                  {/* Premium highlight effect on hover */}
                  <div className="absolute -inset-x-4 -inset-y-4 bg-blue-50/50 rounded-xl opacity-0 group-hover:opacity-100 -z-10 blur-2xl transition-opacity"></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-blue-50 via-blue-100/20 to-transparent transition-all duration-500"></div>
                  
                  <h3 className="text-2xl font-bold italic mb-3 group-hover:text-slate-900 transition-colors">{project.title}</h3>
                  <p className="text-slate-600 mb-6 group-hover:text-slate-800 transition-colors">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.techStack.map((tech, i) => (
                      <span 
                        key={i} 
                        className="text-xs px-3 py-1 bg-slate-100 backdrop-blur-sm border border-slate-200 rounded-full text-slate-600 group-hover:text-slate-800 group-hover:border-slate-300 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
