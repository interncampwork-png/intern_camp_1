import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { Job } from '../../../types';
import { FormattedText } from '../../common/FormattedText';

interface HoverCardProps {
  job: Job | null;
  position: { x: number; y: number };
}

export const HoverCard = ({ job, position }: HoverCardProps) => {
  if (!job) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 10 }}
      style={{ 
        left: position.x + 20, 
        top: position.y - 20,
        position: 'fixed',
        zIndex: 1000,
        pointerEvents: 'none'
      }}
      className="w-[600px] bg-brand-white rounded-[24px] shadow-2xl border-2 border-brand-purple overflow-hidden"
    >
      <div className="bg-brand-purple p-4 text-center">
        <span className="text-[12px] font-black text-white uppercase tracking-widest flex items-center justify-center gap-2">
          <ExternalLink size={16} /> Bấm vào để xem chi tiết
        </span>
      </div>

      <div className="p-10">
        <div className="space-y-8 max-h-[500px] overflow-y-auto custom-scrollbar pr-4">
          {/* Description */}
          <div>
            <div className="text-[12px] font-black text-brand-gray uppercase tracking-widest mb-4 flex items-center gap-2">
              📝 Mô tả công việc <div className="flex-1 h-px bg-brand-gray-lt" />
            </div>
            <FormattedText text={job.companyDesc || ""} />
          </div>

          {/* Responsibilities */}
          {job.responsibilities && job.responsibilities.length > 0 && (
            <div>
              <div className="text-[12px] font-black text-brand-gray uppercase tracking-widest mb-4 flex items-center gap-2">
                💼 Trách nhiệm <div className="flex-1 h-px bg-brand-gray-lt" />
              </div>
              <ul className="space-y-2">
                {job.responsibilities.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm font-semibold text-brand-black leading-snug">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-purple mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Requirements */}
          {job.requirements && job.requirements.length > 0 && (
            <div>
              <div className="text-[12px] font-black text-brand-gray uppercase tracking-widest mb-4 flex items-center gap-2">
                🎯 Yêu cầu <div className="flex-1 h-px bg-brand-gray-lt" />
              </div>
              <ul className="space-y-2">
                {job.requirements.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm font-semibold text-brand-black leading-snug">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
