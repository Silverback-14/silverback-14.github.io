import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import TechMarquee from '@/components/TechMarquee';
import ProjectsSection from '@/components/ProjectsSection';
import EducationCard from '@/components/EducationCard';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';

const Index: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative min-h-screen bg-void overflow-hidden"
    >
      {/* Film grain */}
      <div className="grain-overlay animate-grain" />

      {/* Ambient orbs */}
      <div className="orb orb-purple w-[600px] h-[600px] -top-[200px] -left-[200px] animate-float" />
      <div className="orb orb-blue w-[500px] h-[500px] top-[60vh] -right-[150px] animate-float" style={{ animationDelay: '2s' }} />
      <div className="orb orb-cyan w-[400px] h-[400px] top-[140vh] -left-[100px] animate-float" style={{ animationDelay: '4s' }} />
      <div className="orb orb-pink w-[350px] h-[350px] top-[220vh] -right-[100px] animate-float" style={{ animationDelay: '3s' }} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="font-display font-bold text-xl tracking-tight text-white hover:text-glow-purple transition-colors">
            ananth<span className="text-glow-purple">.</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {['Projects', 'Experience', 'Education', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-white/50 hover:text-white transition-colors duration-300 tracking-wide"
              >
                {item}
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/12sN7Fdeu6_YOY-BFxSTvaguX17myt0JU/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow text-sm !py-2.5 !px-5"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main>
        <HeroSection />

        <div className="hr-glow mx-auto max-w-5xl" />

        <TechMarquee />

        <div className="hr-glow mx-auto max-w-5xl" />

        <ProjectsSection />

        <div className="hr-glow mx-auto max-w-5xl" />

        <ExperienceSection />

        <div className="hr-glow mx-auto max-w-5xl" />

        <EducationCard />

        <div className="hr-glow mx-auto max-w-5xl" />

        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm font-body">
            &copy; {new Date().getFullYear()} Ananthram. Built with caffeine & curiosity.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/silverback-14" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-glow-purple text-sm transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/in/ananthram-v" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-glow-purple text-sm transition-colors">
              LinkedIn
            </a>
            <a href="mailto:ananthram1411@gmail.com" className="text-white/30 hover:text-glow-purple text-sm transition-colors">
              Email
            </a>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default Index;
