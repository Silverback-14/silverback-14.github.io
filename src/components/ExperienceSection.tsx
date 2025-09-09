import React from 'react';
import { motion } from 'framer-motion';
import GlowCard from './GlowCard';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  techStack: string[];
  companyIcon?: string;
  achievements?: string[];
}

const ExperienceSection: React.FC = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      title: "Backend Engineer",
      company: "Schmooze",
      location: "Bangalore, India",
      duration: "May 2025 - Present",
      description: "Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      techStack: ["Python", "Sanic", "Flink", "Kafka", "Redis", "PostgreSQL", "StarRocks", "Elasticsearch", "Firebase", "AWS", "CLIP", "BentoML", "SQL"],
      companyIcon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOOgfjaMnRDsPLjE7CiJ8z0VdLWbpNOEvteA&s",
      achievements: [
        "Engineered an end-to-end feature with scalable APIs, leveraging Redis for caching, PostgreSQL for data persistence, and StarRocks for aggregations; devised a Flink job to stream and populate StarRocks with 200,000+ records, ensuring high performance and real-time analytics",
        "Built a backend-driven feature that allots entitlements to users daily, using Redis to track consumption. Also deployed a cron job delivering messages to 60,000+ users daily, leveraging Kafka producers and consumers",
        "Implemented a user behavior tracking system for swiping patterns; integrated Firebase for interventions, applied Redis for fast score retrieval, and used Kafka for real-time processing with PostgreSQL for state storage — reducing rage swiping by 20%",
        "Enhanced caching layer reliability by addressing simultaneous Redis key expiry; introduced staggered TTL logic, eliminating 100% CPU usage during peak hours and ensuring consistent performance",
        "Engineered and fine-tuned a CLIP-based multi-stage image classification system, achieving 92% top-1 accuracy. Designed SQL batch pipelines for efficient metadata retrieval, indexed embeddings in Elasticsearch for fast similarity search, and deployed scalable real-time inference using BentoML"
      ]
    },
    {
      id: 2,
      title: "Software Developer",
      company: "Bharat Petroleum",
      location: "Mumbai",
      duration: "June 2024 - April 2025",
      description: "Building scalable web applications and leading the development of new features. Mentoring junior developers and implementing best practices.",
      techStack: ["Python", "Pandas", "Dash", "Streamlit", "PostgreSQL", "REST API"],
      companyIcon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIw2u1y_s2KWrxubJCsGglXqYUFZX1rUb_J8ZJV3SjQZpKHZhZDkkA_lC4wNAUQlRNkHU&usqp=CAU",
      achievements: [
        "Constructed dashboards for business insights using Pandas and Dash and presented them on Streamlit, helping 3+ business units access performance metrics faster",
        "Orchestrated the development of a web app for RO dealers, enabling 2000+ dealers to access stock summaries, product details, and sales trends, while recommending improvements to meet business goals",
        "Built Python services with REST API integrations to fetch and process data, and optimized PostgreSQL queries, reducing data retrieval time by 30% and supporting 1M+ records for analytics"
      ]
    },
    {
      id: 3,
      title: "Software Developer Intern",
      company: "Siemens",
      location: "Mumbai",
      duration: "January 2023 - July 2023",
      description: "Building scalable web applications and leading the development of new features. Mentoring junior developers and implementing best practices.",
      techStack: ["C#", ".NET Framework", "Roslyn", "ASP.NET", "Visual Studio Code"],
      companyIcon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1NVQt3HQHP1ax44sxuUX5Sean36ypv7bpHw&s",
      achievements: [
        "Developed an internal tool for the extraction and optimization of project references with version control integration. Reduced build times by 5%, leading to faster development cycles and improved overall productivity",
        "Authored custom CodeFix extensions for Visual Studio Code to enhance code quality. Delivered 2 CodeFixes, resolved architectural visibility issues, and leveraged code analysis tools"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Premium lighting effects */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-corner-light-premium opacity-30 z-0"></div>
      
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="section-heading-premium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <GlowCard 
                intensity={index % 2 === 0 ? 'high' : 'medium'}
                className="group h-full"
                hoverScale={1.02}
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {experience.companyIcon && (
                        <img 
                          src={experience.companyIcon} 
                          alt={`${experience.company} logo`}
                          className="w-8 h-8 rounded-lg object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      )}
                      <div>
                        <h3 className="text-2xl font-bold italic text-black leading-tight">
                          {experience.title}
                        </h3>
                        <p className="text-slate-700 text-lg">{experience.company}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-slate-600 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{experience.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{experience.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 mb-4 group-hover:text-slate-800 transition-colors leading-relaxed">
                    {experience.description}
                  </p>
                  
                  {experience.achievements && experience.achievements.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-slate-700 mb-3 group-hover:text-slate-900 transition-colors">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-slate-600 group-hover:text-slate-700 transition-colors leading-relaxed flex items-start">
                            <span className="text-blue-500 mr-2 mt-1 flex-shrink-0">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2">
                    {experience.techStack.map((tech, i) => (
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

export default ExperienceSection;
