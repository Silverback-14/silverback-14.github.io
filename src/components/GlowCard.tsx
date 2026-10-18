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
  intensity = 'medium',
}) => {
  const glowIntensity = {
    low: {
      initial: '0 0 0 1px rgba(255,255,255,0.04)',
      hover: '0 20px 50px rgba(139, 92, 246, 0.08), 0 0 0 1px rgba(139, 92, 246, 0.15)',
    },
    medium: {
      initial: '0 0 0 1px rgba(255,255,255,0.06)',
      hover: '0 25px 60px rgba(139, 92, 246, 0.12), 0 0 0 1px rgba(139, 92, 246, 0.2)',
    },
    high: {
      initial: '0 0 0 1px rgba(255,255,255,0.08)',
      hover: '0 30px 70px rgba(139, 92, 246, 0.15), 0 0 0 1px rgba(139, 92, 246, 0.25)',
    },
  };

  return (
    <motion.div
      className={`glass-card ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: delayIndex * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        scale: hoverScale,
        boxShadow: glowIntensity[intensity].hover,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
      style={{ boxShadow: glowIntensity[intensity].initial }}
    >
      {children}
    </motion.div>
  );
};

export default GlowCard;
