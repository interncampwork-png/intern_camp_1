import React from 'react';
import { motion } from 'motion/react';
import { X } from 'lucide-react';
import { TeamMember } from '../../../types';
import { MemberAvatar } from '../../common/MemberAvatar';

interface MemberLetterModalProps {
  member: TeamMember | null;
  onClose: () => void;
}

export const MemberLetterModal = ({ member, onClose }: MemberLetterModalProps) => {
  if (!member) return null;
  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm cursor-pointer"
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="fixed top-6 right-6 lg:top-10 lg:right-10 text-white/60 hover:text-white transition-all hover:scale-110 z-[110] bg-black/20 p-2 rounded-full backdrop-blur-sm"
      >
        <X size={32} />
      </button>
      <motion.div 
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="bg-brand-white rounded-[32px] p-8 lg:p-12 max-w-lg w-full shadow-2xl relative border-2 border-brand-purple cursor-default"
      >
        <div className="text-center">
          <div className="w-40 h-40 mx-auto rounded-[40px] overflow-hidden border-4 border-brand-purple mb-6 shadow-xl">
            <MemberAvatar src={member.avatar} name={member.name} />
          </div>
          <h2 className="font-nunito font-black text-2xl text-brand-black mb-1">{member.name}</h2>
          <p className="text-[10px] font-bold text-brand-purple uppercase tracking-widest mb-6">{member.title}</p>
          
          <div className="relative">
            <div className="absolute -top-4 -left-2 text-4xl text-brand-purple/20 font-serif">"</div>
            <p className="text-brand-black font-semibold leading-relaxed italic text-sm px-4">
              {member.letter}
            </p>
            <div className="absolute -bottom-6 -right-2 text-4xl text-brand-purple/20 font-serif">"</div>
          </div>
          
          <button 
            onClick={onClose}
            className="mt-12 w-full bg-brand-purple text-white font-black py-4 rounded-2xl shadow-lg shadow-brand-purple/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Đóng tâm thư 💜
          </button>
        </div>
      </motion.div>
    </div>
  );
};
