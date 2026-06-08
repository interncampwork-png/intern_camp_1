import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  Star, 
  MapPin, 
  Briefcase, 
  DollarSign, 
  CheckCircle2, 
  Clock, 
  ChevronRight 
} from 'lucide-react';
import { Job } from '../../../types';
import { parseTimeToDate, isToday } from '../../../lib/utils';

interface JobCardProps {
  job: Job;
  onSelect: (job: Job) => void;
}

export const JobCard: React.FC<JobCardProps> = ({ job, onSelect }) => {
  const isJobNew = useMemo(() => isToday(parseTimeToDate(job.timePosted)), [job.timePosted]);

  return (
    <motion.div
      layout
      whileHover={{ y: -5, borderColor: '#8B83E8' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={() => onSelect(job)}
      className="bg-brand-white rounded-[32px] shadow-brand border-2 border-transparent transition-all cursor-pointer group flex flex-col h-full relative overflow-hidden border-b-[6px] hover:shadow-2xl hover:shadow-brand-purple/20"
    >
      {/* Top Section: Score & New Badge */}
      <div className="p-6 flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-black text-brand-black tracking-tight">{job.company}</h1>
          <span className="text-xs font-bold text-brand-purple uppercase tracking-wider">{job.position}</span>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            {isJobNew && (
              <div className="bg-brand-purple text-white px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider shadow-lg shadow-brand-purple/30 w-fit">
                New Today
              </div>
            )}
            {job.timePosted && (
              <div className="bg-brand-bg text-brand-gray border border-brand-gray-lt/80 px-2.5 py-1 rounded-xl text-[9px] font-black uppercase tracking-wider w-fit flex items-center gap-1 shadow-sm">
                <Clock size={10} className="text-brand-purple" /> {job.timePosted}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          {job.score && (
            <div className="bg-brand-purple/10 text-brand-purple px-3 py-1.5 rounded-xl text-sm font-black flex items-center gap-1.5 border border-brand-purple/20">
              <Star size={14} className="fill-brand-purple" /> {job.score}
            </div>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="px-6 pb-6 flex-1 flex flex-col">
        {/* Metadata Table (Pivoted) */}
        <div className="mb-6 rounded-2xl border border-brand-gray-lt overflow-hidden bg-brand-bg/20 grid grid-cols-2 divide-x divide-brand-gray-lt">
          <div className="flex flex-col">
            <div className="p-2 bg-brand-bg/50 text-[8px] font-black text-brand-gray uppercase tracking-widest flex items-center justify-center gap-1 border-b border-brand-gray-lt">
              <MapPin size={10} className="text-brand-purple" /> Vị trí
            </div>
            <div className="p-2.5 text-[10px] font-bold text-brand-black text-center truncate">{job.location}</div>
          </div>
          <div className="flex flex-col">
            <div className="p-2 bg-brand-bg/50 text-[8px] font-black text-brand-gray uppercase tracking-widest flex items-center justify-center gap-1 border-b border-brand-gray-lt">
              <Briefcase size={10} className="text-brand-purple" /> Loại
            </div>
            <div className="p-2.5 text-[10px] font-bold text-brand-black text-center truncate">{job.jobType || 'Toàn thời gian'}</div>
          </div>
        </div>

        {/* AI Evaluation (Enlarged) */}
        {job.aiVerification && (
          <div className="mt-auto p-4 bg-brand-bg/50 rounded-2xl border border-brand-gray-lt group-hover:bg-brand-purple/5 transition-colors">
            <div className="text-[10px] font-black text-brand-purple uppercase tracking-widest flex items-center gap-1.5 mb-2">
              <CheckCircle2 size={12} /> AI Evaluation
            </div>
            <div className="text-xs font-medium text-brand-black leading-relaxed italic">
              "{job.aiVerification.length > 85 ? `${job.aiVerification.substring(0, 82)}...` : job.aiVerification}"
            </div>
          </div>
        )}
      </div>

      {/* Footer info */}
      <div className="px-6 py-4 bg-brand-bg/20 border-t border-brand-gray-lt flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-brand-gray">
            <Clock size={12} />
            <span className="text-[10px] font-bold">{job.timePosted}</span>
          </div>
          {job.link_1_platform && (
            <div className="flex items-center gap-1 bg-brand-purple/15 text-brand-purple px-2 py-0.5 rounded-lg text-[9px] font-black uppercase tracking-wider border border-brand-purple/20">
              {job.link_1_platform}
            </div>
          )}
        </div>
        <div className="text-brand-purple opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
          <ChevronRight size={20} />
        </div>
      </div>
    </motion.div>
  );
};
