
import React from 'react';
import { motion } from 'framer-motion';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  hoverScale?: number;
  delayIndex?: number;
  intensity?: 'low' | 'medium' | 'high';
}

const GlowCard: React.FC<GlowCardProps> = ({ 
  children, 
  className = '', 
  hoverScale = 1.02,
  delayIndex = 0,
  intensity = 'medium'
}) => {
  // Define glow intensity levels for light theme
  const glowIntensity = {
    low: {
      initial: "0 2px 8px rgba(59, 130, 246, 0.1), 0 0 0 1px rgba(59, 130, 246, 0.05)",
      hover: "0 4px 16px rgba(59, 130, 246, 0.15), 0 0 0 1px rgba(59, 130, 246, 0.1)"
    },
    medium: {
      initial: "0 4px 12px rgba(59, 130, 246, 0.12), 0 0 0 1px rgba(59, 130, 246, 0.08)",
      hover: "0 8px 24px rgba(59, 130, 246, 0.2), 0 0 0 1px rgba(59, 130, 246, 0.15)"
    },
    high: {
      initial: "0 6px 16px rgba(59, 130, 246, 0.15), 0 0 0 1px rgba(59, 130, 246, 0.1)",
      hover: "0 12px 32px rgba(59, 130, 246, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.2)"
    }
  };

  return (
    <motion.div
      className={`glow-card ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: delayIndex * 0.1,
        ease: "easeOut" 
      }}
      whileHover={{ 
        scale: hoverScale,
        boxShadow: glowIntensity[intensity].hover,
        borderColor: "rgba(59, 130, 246, 0.3)",
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      style={{
        boxShadow: glowIntensity[intensity].initial
      }}
    >
      <div className="relative z-10 h-full">
        {children}
      </div>
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
    </motion.div>
  );
};

export default GlowCard;
