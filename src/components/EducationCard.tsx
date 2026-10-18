import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const EducationCard: React.FC = () => {
  const coursework = [
    'Data Structures', 'Algorithms', 'Operating Systems',
    'Computer Networks', 'Database Systems', 'Machine Learning',
    'Distributed Systems', 'Software Engineering',
  ];

  return (
    <section id="education" className="py-24 px-6 relative">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c8f1?q=80&w=2071&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover opacity-[0.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-void via-transparent to-void" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label">Education</span>
          <h2 className="section-title">
            Where it all began<span className="text-glow-purple">.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass-card p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-glow-purple/10 border border-glow-purple/20 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-glow-purple" />
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl text-white mb-1">
                  Indian Institute of Technology, Mandi
                </h3>
                <p className="font-body text-white/50">
                  B.Tech, Computer Science & Engineering
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start md:items-end gap-1 flex-shrink-0">
              <span className="font-mono text-sm text-white/30">Jun 2020 — May 2024</span>
              <span className="font-display font-bold text-xl text-gradient-glow">B.Tech CSE</span>
            </div>
          </div>

          <div className="border-t border-white/5 pt-6">
            <p className="font-mono text-xs text-white/25 uppercase tracking-widest mb-4">Relevant Coursework</p>
            <div className="flex flex-wrap gap-2">
              {coursework.map((course, i) => (
                <span
                  key={i}
                  className="text-sm font-body px-3 py-1.5 rounded-lg bg-white/4 text-white/40 border border-white/5 hover:border-glow-purple/20 hover:text-white/60 transition-all duration-300"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationCard;
