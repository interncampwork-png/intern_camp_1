import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export const CommunityPage = () => {
  return (
    <motion.div
      key="media"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl mx-auto"
    >
      <div className="mb-10">
        <h1 className="font-nunito font-black text-3xl tracking-tight">Cộng đồng 📱</h1>
        <p className="text-brand-gray font-semibold mt-1">Kết nối với chúng tôi trên các nền tảng</p>
      </div>

      <div className="grid gap-4 max-w-lg">
        <MediaLink 
          href="https://www.threads.com/@interncamp.vn"
          icon="🧵"
          title="Threads"
          handle="interncamp.vn"
          color="bg-brand-black"
        />
        <MediaLink 
          href="https://beacons.ai/interncamp"
          icon="💬"
          title="Zalo (Beacons.ai)"
          handle="Cộng đồng thực tập sinh"
          color="bg-[#e6f9eb]"
        />
        <MediaLink 
          href="https://www.facebook.com/profile.php?id=61577518855789&locale=vi_VN"
          icon="📘"
          title="Facebook"
          handle="Intern Camp"
          color="bg-[#eff6ff]"
        />
      </div>
    </motion.div>
  );
};

const MediaLink = ({ href, icon, title, handle, color }: { href: string, icon: string, title: string, handle: string, color: string }) => (
  <motion.a
    href={href}
    target="_blank"
    whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0,0,0,0.12)' }}
    whileTap={{ scale: 0.98 }}
    className="flex items-center gap-4 p-4 bg-brand-white rounded-2xl shadow-brand border-2 border-transparent hover:border-brand-purple transition-colors"
  >
    <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 ${color}`}>
      {icon}
    </div>
    <div className="flex-1">
      <div className="font-nunito font-extrabold text-base">{title}</div>
      <div className="text-xs text-brand-gray font-semibold mt-0.5">{handle}</div>
    </div>
    <ChevronRight size={18} className="text-brand-gray-lt" />
  </motion.a>
);
