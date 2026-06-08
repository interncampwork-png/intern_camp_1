import React from 'react';
import { motion } from 'motion/react';
import { 
  ChevronRight, 
  ArrowUp 
} from 'lucide-react';
import { FooterContactForm } from './FooterContactForm';
import { GOOGLE_FORM_URL } from '../../constants';
import { PageType } from '../../types';

interface FooterProps {
  activePage: PageType;
  setActivePage: (p: PageType) => void;
}

export const Footer = ({ activePage, setActivePage }: FooterProps) => {
  return (
    <footer className="mt-20 py-16 bg-[#1a1a2e] text-brand-white border-t-4 border-brand-purple/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-purple/50 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-16 items-start">
          {/* Column 1: Brand & Socials */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="https://lh3.googleusercontent.com/d/1mNBHwI4x5DfS8n7UWfg94_2o1FG01VVR" 
                alt="Intern Camp Logo" 
                className="h-14 w-auto object-contain brightness-0 invert opacity-90"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden font-nunito font-black text-xl tracking-tight uppercase">
                INTERN<span className="text-brand-purple">CAMP</span>
              </div>
            </div>
            <p className="text-sm text-brand-gray-lt font-semibold leading-relaxed opacity-70">
              Nền tảng kết nối thực tập sinh với những cơ hội nghề nghiệp tốt nhất tại Việt Nam. Đồng hành cùng sinh viên trên con đường sự nghiệp.
            </p>
            <div className="flex flex-col gap-3 w-full">
              <FooterMediaItem 
                href="https://www.threads.com/@interncamp.vn"
                icon="🧵"
                title="Threads"
                handle="interncamp.vn"
              />
              <FooterMediaItem 
                href="https://beacons.ai/interncamp"
                icon="💬"
                title="Zalo Community"
                handle="Cộng đồng thực tập sinh"
              />
              <FooterMediaItem 
                href={GOOGLE_FORM_URL}
                icon="📧"
                title="Đăng ký nhận tin"
                handle="Nhận thông báo mới nhất"
              />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 lg:pl-8">
            <h3 className="font-nunito font-black text-lg mb-6 text-brand-purple uppercase tracking-wider">Khám phá 🚀</h3>
            <ul className="space-y-4">
              {[
                { label: 'Tìm việc làm', page: 'jobs' },
                { label: 'Về chúng tôi', page: 'about' },
                { label: 'Cộng đồng', page: 'media' },
              ].map((link) => (
                <li key={link.page}>
                  <button 
                    onClick={() => { setActivePage(link.page as PageType); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="text-sm font-bold text-brand-gray-lt hover:text-brand-purple transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <h3 className="font-nunito font-black text-lg mb-4 text-brand-purple uppercase tracking-wider">Hỗ trợ 🛠️</h3>
              <p className="text-xs font-bold text-brand-gray-lt opacity-50">Sắp ra mắt: Blog, Tài liệu, Hướng dẫn CV.</p>
            </div>
          </div>

          {/* Column 3: Contact Form */}
          <div className="lg:col-span-5 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
            <h3 className="font-nunito font-black text-xl mb-2 text-brand-purple">Liên hệ 💌</h3>
            <p className="text-xs text-brand-gray-lt font-semibold mb-6 opacity-60">
              Gửi tin nhắn cho chúng tôi nếu bạn cần hỗ trợ.
            </p>
            <FooterContactForm />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10">
          <div className="text-[11px] font-bold text-brand-gray-lt opacity-40">
            © 2026 Intern Camp. Nền tảng tuyển dụng thực tập sinh hàng đầu.
          </div>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 text-[11px] font-black text-brand-purple hover:text-white transition-colors uppercase tracking-widest"
            >
              Lên đầu trang <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-purple/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-purple/10 rounded-full blur-[100px] pointer-events-none" />
    </footer>
  );
};

const FooterMediaItem = ({ href, icon, title, handle }: { href: string, icon: string, title: string, handle: string }) => (
  <motion.a
    href={href}
    target="_blank"
    whileHover={{ 
      x: 4, 
      borderColor: '#8B83E8',
      boxShadow: '0 0 20px rgba(139, 131, 232, 0.4)',
      backgroundColor: 'rgba(255, 255, 255, 0.05)'
    }}
    className="flex items-center gap-4 p-4 rounded-2xl border-2 border-white/10 transition-all duration-300 bg-transparent text-white w-full"
  >
    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0 bg-white/10">
      {icon}
    </div>
    <div className="flex-1">
      <div className="font-nunito font-extrabold text-sm">{title}</div>
      <div className="text-xs font-semibold mt-0.5 opacity-70">{handle}</div>
    </div>
    <ChevronRight size={16} className="opacity-40" />
  </motion.a>
);
