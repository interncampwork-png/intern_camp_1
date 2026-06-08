import React from 'react';
import { motion } from 'motion/react';

export const NavItem = ({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ x: 4 }}
      whileTap={{ scale: 0.98 }}
      className={`relative flex items-center gap-3 p-3 rounded-2xl text-sm font-bold transition-colors ${
        active ? 'text-brand-white' : 'text-brand-gray hover:bg-brand-gray-lt hover:text-brand-black'
      }`}
    >
      {active && (
        <motion.div
          layoutId="activeNav"
          className="absolute inset-0 bg-brand-purple rounded-2xl shadow-lg shadow-brand-purple/30"
          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
        />
      )}
      <span className="relative z-10 w-6 flex justify-center">{icon}</span>
      <span className="relative z-10 whitespace-nowrap">{label}</span>
    </motion.button>
  );
};
