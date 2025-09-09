import React from 'react';
import { motion } from 'framer-motion';
import GlowCard from './GlowCard';

const EducationCard: React.FC = () => {
  return (
    <section className="py-20 px-4 relative">
      {/* Premium lighting effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-corner-light-premium opacity-30 z-0"></div>
      
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="section-heading-premium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <GlowCard 
            intensity="high"
            className="group h-full"
            hoverScale={1.02}
          >
            <div className="p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-slate-600 block mb-2 text-lg">2020–2024</span>
                  <h3 className="text-3xl font-bold italic group-hover:text-slate-900 transition-colors mb-2">
                    B.Tech, Computer Science
                  </h3>
                  <p className="text-slate-700 text-xl mb-2">IIT Mandi</p>
                  <p className="text-slate-600 text-lg">GPA: 7.54/10</p>
                </div>
              </div>
            </div>
          </GlowCard>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationCard;
