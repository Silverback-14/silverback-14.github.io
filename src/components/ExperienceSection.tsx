import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  tagline: string;
  techStack: string[];
  companyIcon?: string;
  achievements: string[];
}

const ExperienceSection: React.FC = () => {
  const experiences: Experience[] = [
    {
      id: 0,
      title: 'Deployment Engineer',
      company: 'Avoca AI (YC W23)',
      location: 'Remote',
      duration: 'Oct 2025 — Present',
      tagline: 'Voice agents that answer every call and book every job.',
      techStack: ['TypeScript', 'React', 'Next.js', 'Supabase', 'Vercel', 'PostgreSQL', 'LLMs', 'AI Agents'],
      companyIcon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkYW-u5rCbSp5J5FhKGDSdMGqRLSqq8nPWqA&s',
      achievements: [
        'Deployed and integrated AI voice agents for home-service businesses, wiring conversational workflows into CRM, scheduling, booking, and operational systems to support reliable production deployments',
        'Led enterprise onboarding with 100+ custom business rules, optimizing AI prompts and booking workflows to achieve a 42% raw booking rate and 80.4% lead booking rate for a key enterprise client',
        'Designed and shipped a booking capacity management system in TypeScript and PostgreSQL — 574 capped booking windows across 45 businesses, 4,278 bookings processed in 30 days, and 375 over-cap bookings prevented',
        'Improved scheduling accuracy through ZIP code routing, dynamic appointment durations, and customer search, resolving incorrect technician assignments, inaccurate appointment times, and failed customer lookups',
      ],
    },
    {
      id: 1,
      title: 'Backend Engineer',
      company: 'Schmooze',
      location: 'Bengaluru, India',
      duration: 'May 2025 — Sep 2025',
      tagline: 'Streaming 200K records before the morning coffee got cold.',
      techStack: ['Python', 'Sanic', 'Flink', 'Kafka', 'Redis', 'PostgreSQL', 'StarRocks', 'Elasticsearch', 'Firebase', 'AWS', 'CLIP', 'BentoML'],
      companyIcon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOOgfjaMnRDsPLjE7CiJ8z0VdLWbpNOEvteA&s',
      achievements: [
        'Engineered an end-to-end feature with scalable APIs — Redis for caching, PostgreSQL for persistence, StarRocks for aggregations — plus a Flink job streaming 200,000+ records for real-time analytics',
        'Built a backend-driven system allotting daily user entitlements tracked in Redis, and deployed a cron job delivering messages to 60,000+ users daily via Kafka producers and consumers',
        'Implemented a user behavior tracking system for swiping patterns, integrating Firebase for interventions, Redis for fast score retrieval, and Kafka for real-time state — reducing rage swiping by 20%',
        'Hardened the caching layer against simultaneous Redis key expiry with staggered TTL logic, eliminating 100% CPU usage during peak hours',
        'Engineered and fine-tuned a CLIP-based multi-stage image classification system at 92% top-1 accuracy, with SQL batch pipelines for metadata, Elasticsearch-indexed embeddings for similarity search, and scalable real-time inference on BentoML',
      ],
    },
    {
      id: 2,
      title: 'Software Developer',
      company: 'Bharat Petroleum',
      location: 'Mumbai, India',
      duration: 'Jun 2024 — Apr 2025',
      tagline: 'Turning a million rows of crude data into crystal clear dashboards.',
      techStack: ['Python', 'Dash', 'Streamlit', 'Pandas', 'SQL', 'PostgreSQL', 'REST APIs', 'OCR', 'Generative AI'],
      companyIcon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIw2u1y_s2KWrxubJCsGglXqYUFZX1rUb_J8ZJV3SjQZpKHZhZDkkA_lC4wNAUQlRNkHU&usqp=CAU',
      achievements: [
        'Constructed dashboards for business insights using Pandas and Dash, presented on Streamlit, helping 3+ business units access performance metrics faster',
        'Implemented a Generative AI-powered Talent Analyzer with OCR to automatically ingest, parse, validate, and summarize candidate documents while ensuring data privacy',
        'Built Python services with REST API integrations to fetch and process data, and optimized PostgreSQL queries — 30% faster data retrieval across 1M+ records',
      ],
    },
    {
      id: 3,
      title: 'Software Developer Intern',
      company: 'Siemens',
      location: 'Bengaluru, India',
      duration: 'Jan 2023 — Jul 2023',
      tagline: 'Making builds faster, one CodeFix at a time.',
      techStack: ['C#', '.NET Framework', 'Roslyn', 'ASP.NET'],
      companyIcon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1NVQt3HQHP1ax44sxuUX5Sean36ypv7bpHw&s',
      achievements: [
        'Developed an internal tool for extraction and optimization of project references with version control integration — 5% build time reduction, leading to faster development cycles',
        'Authored 2 custom CodeFix extensions for Visual Studio Code using code analysis tools, resolving architectural visibility issues and improving code quality',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 relative">
      {/* Background image */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <img
          src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label">Career</span>
          <h2 className="section-title">
            Where I've made<br />an impact<span className="text-glow-purple">.</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-4 bottom-4 w-px bg-gradient-to-b from-glow-purple/30 via-glow-blue/20 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative md:pl-14"
              >
                {/* Timeline dot */}
                <div className="absolute left-[14px] top-8 w-[11px] h-[11px] rounded-full border-2 border-glow-purple bg-void hidden md:block" />

                <div className="glass-card p-7 group">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      {exp.companyIcon && (
                        <img
                          src={exp.companyIcon}
                          alt={`${exp.company} logo`}
                          className="w-9 h-9 rounded-lg object-contain bg-white/10 p-1"
                          onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                      )}
                      <div>
                        <h3 className="font-display font-bold text-lg text-white">
                          {exp.title}
                        </h3>
                        <p className="font-body text-glow-purple/80 text-sm font-medium">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
                      <div className="flex items-center gap-1.5 text-white/30 text-xs font-mono">
                        <Calendar className="w-3 h-3" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1.5 text-white/30 text-xs font-mono">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Tagline */}
                  <p className="font-body italic text-white/30 text-sm mb-5">
                    "{exp.tagline}"
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-2.5 mb-6">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm font-body text-white/50 leading-relaxed">
                        <span className="w-1 h-1 rounded-full bg-glow-purple/60 mt-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/4 text-white/35 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
