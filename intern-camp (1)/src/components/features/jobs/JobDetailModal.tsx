import React from 'react';
import { motion } from 'motion/react';
import { 
  X, 
  MapPin, 
  Briefcase, 
  DollarSign, 
  Star, 
  FileText, 
  CheckCircle2, 
  Clock, 
  ExternalLink 
} from 'lucide-react';
import { Job } from '../../../types';
import { FormattedText } from '../../common/FormattedText';

interface JobDetailModalProps {
  job: Job | null;
  onClose: () => void;
}

export const JobDetailModal = ({ job, onClose }: JobDetailModalProps) => {
  if (!job) return null;
  return (
    <div 
      className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/40 backdrop-blur-md cursor-pointer"
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="fixed top-6 right-6 lg:top-10 lg:right-10 text-white/60 hover:text-white transition-all hover:scale-110 z-[120] bg-black/20 p-2 rounded-full backdrop-blur-sm"
      >
        <X size={32} />
      </button>
      <motion.div 
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="bg-brand-white/90 backdrop-blur-xl rounded-[40px] max-w-3xl w-full shadow-2xl relative border-2 border-white/20 overflow-hidden flex flex-col max-h-[90vh] cursor-default"
      >
        {/* Header */}
        <div className="bg-gradient-to-br from-brand-purple to-[#7c3aed] p-8 lg:p-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          
          <div className="flex flex-col gap-2 relative z-10">
            <div className="text-[10px] font-black uppercase tracking-[3px] text-white/70">{job.company}</div>
            <h2 className="font-nunito font-black text-3xl leading-tight drop-shadow-md">{job.position}</h2>
            <div className="flex flex-wrap items-center gap-4 mt-6">
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-xl text-xs font-bold border border-white/10 backdrop-blur-sm">
                <MapPin size={14} /> {job.location}
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-xl text-xs font-bold border border-white/10 backdrop-blur-sm">
                <Briefcase size={14} /> {job.jobType || 'Toàn thời gian'}
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-xl text-xs font-bold border border-white/10 backdrop-blur-sm">
                <DollarSign size={14} /> {job.salary || 'Thỏa thuận'}
              </div>
              {job.score && (
                <div className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-xl text-xs font-black border border-white/20 backdrop-blur-sm">
                  <Star size={14} className="fill-white" /> {job.score}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 lg:p-10 overflow-y-auto custom-scrollbar flex-1 bg-white/40">
          <div className="space-y-12">
            {/* Description */}
            <div>
              <div className="text-[12px] font-black text-brand-gray uppercase tracking-widest mb-6 flex items-center gap-3">
                <FileText size={18} className="text-brand-purple" /> Chi tiết công việc 
                <div className="flex-1 h-px bg-brand-gray-lt" />
              </div>
              <FormattedText text={job.companyDesc || ""} />
            </div>

            {/* Responsibilities */}
            {job.responsibilities && job.responsibilities.length > 0 && (
              <div>
                <div className="text-[12px] font-black text-brand-gray uppercase tracking-widest mb-6 flex items-center gap-3">
                  <Briefcase size={18} className="text-brand-purple" /> Trách nhiệm chính
                  <div className="flex-1 h-px bg-brand-gray-lt" />
                </div>
                <ul className="grid grid-cols-1 gap-4">
                  {job.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 p-4 bg-brand-bg/30 rounded-2xl border border-brand-gray-lt/50 text-sm font-semibold text-brand-black leading-relaxed">
                      <div className="w-2 h-2 rounded-full bg-brand-purple mt-2 shrink-0 shadow-sm shadow-brand-purple/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Requirements */}
            {job.requirements && job.requirements.length > 0 && (
              <div>
                <div className="text-[12px] font-black text-brand-gray uppercase tracking-widest mb-6 flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-brand-green" /> Yêu cầu ứng viên
                  <div className="flex-1 h-px bg-brand-gray-lt" />
                </div>
                <ul className="grid grid-cols-1 gap-4">
                  {job.requirements.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 p-4 bg-brand-green/5 rounded-2xl border border-brand-green/10 text-sm font-semibold text-brand-black leading-relaxed">
                      <div className="w-2 h-2 rounded-full bg-brand-green mt-2 shrink-0 shadow-sm shadow-brand-green/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* AI Verification */}
            {job.aiVerification && (
              <div className="p-8 bg-gradient-to-br from-brand-purple/5 to-transparent rounded-[32px] border-2 border-brand-purple/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <CheckCircle2 size={80} className="text-brand-purple" />
                </div>
                <div className="relative z-10">
                  <div className="text-[10px] font-black text-brand-purple uppercase tracking-widest flex items-center gap-2 mb-4">
                    <CheckCircle2 size={14} /> AI Evaluation & Verification
                  </div>
                  <div className="text-base font-bold text-brand-black leading-relaxed italic">
                    "{job.aiVerification}"
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-8 border-t border-brand-gray-lt bg-white/60 backdrop-blur-sm flex items-center justify-between">
          <div className="flex items-center gap-2 text-brand-gray">
            <Clock size={16} />
            <span className="text-xs font-bold">Đã đăng: {job.timePosted}</span>
          </div>
          <motion.a
            href={job.link_1_url || job.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-brand-purple text-white font-nunito font-black text-sm px-10 py-4 rounded-2xl shadow-xl shadow-brand-purple/20 flex items-center gap-2 hover:bg-[#7c3aed] transition-colors"
          >
            {job.link_1_platform ? `Ứng tuyển trên ${job.link_1_platform}` : 'Ứng tuyển ngay'} <ExternalLink size={18} />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};
