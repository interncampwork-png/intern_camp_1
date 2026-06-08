import React from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'motion/react';
import { 
  Briefcase, 
  Users, 
  X, 
  Mail, 
  FileText, 
  UserCheck, 
  GraduationCap, 
  Package,
  Send,
  ClipboardList
} from 'lucide-react';
import { NavItem } from '../common/NavItem';
import { PageType } from '../../types';

interface SidebarProps {
  activePage: PageType;
  setActivePage: (p: PageType) => void;
  isCollapsed: boolean;
  setIsCollapsed: (c: boolean) => void;
  isLoggedIn: boolean;
  onLogout: () => void;
}

export const Sidebar = ({ 
  activePage, 
  setActivePage, 
  isCollapsed, 
  setIsCollapsed, 
  isLoggedIn, 
  onLogout 
}: SidebarProps) => {
  return (
    <>
      <AnimatePresence>
        {!isCollapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCollapsed(true)}
            className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      <motion.aside
        initial={false}
        animate={{ x: isCollapsed ? -260 : 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed top-0 left-0 bottom-0 w-[240px] bg-brand-white border-r-2 border-brand-gray-lt flex flex-col p-6 z-50 overflow-y-auto"
      >
        <div className="flex items-center justify-between mb-2 outline-none" style={{ height: '50px' }}>
          <div 
            className="flex items-center gap-3 px-1 cursor-pointer"
            onClick={() => setActivePage('jobs')}
          >
            <img 
              src="https://lh3.googleusercontent.com/d/1mNBHwI4x5DfS8n7UWfg94_2o1FG01VVR" 
              alt="Intern Camp Logo" 
              style={{ width: '200px', height: '200px', paddingLeft: '0px', paddingRight: '0px' }}
              className="object-contain"
              onError={(e) => {
                // Fallback to text if image fails to load
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden font-nunito font-black text-lg leading-tight uppercase">
              INTERN<br /><span className="text-brand-purple">CAMP</span>
            </div>
          </div>
          <button 
            onClick={() => setIsCollapsed(true)}
            className="w-9 h-9 rounded-xl border-2 border-brand-gray-lt bg-brand-bg text-brand-gray flex items-center justify-center hover:bg-brand-black hover:text-brand-white hover:border-brand-black transition-colors lg:hidden"
          >
            <X size={18} />
          </button>
        </div>

        <div className="text-[10px] font-extrabold tracking-[1.5px] uppercase text-brand-gray px-3 mb-2 mt-4">
          Dashboard
        </div>
        <nav className="flex flex-col gap-1 mb-6">
          <LayoutGroup id="nav-dashboard">
            <NavItem 
              active={activePage === 'jobs'} 
              onClick={() => setActivePage('jobs')}
              icon={<Briefcase size={18} />}
              label="Cơ hội thực tập"
            />
          </LayoutGroup>
        </nav>

        <div className="text-[10px] font-extrabold tracking-[1.5px] uppercase text-brand-gray px-3 mb-2">
          Consulting Service
        </div>
        <nav className="flex flex-col gap-1 mb-6">
          <LayoutGroup id="nav-consulting">
            <NavItem 
              active={activePage === 'cv-editing'} 
              onClick={() => setActivePage('cv-editing')}
              icon={<FileText size={18} />}
              label="CV editing & review"
            />
            <NavItem 
              active={activePage === 'mock-interview'} 
              onClick={() => setActivePage('mock-interview')}
              icon={<UserCheck size={18} />}
              label="Mock Interview"
            />
          </LayoutGroup>
        </nav>

        <div className="text-[10px] font-extrabold tracking-[1.5px] uppercase text-brand-gray px-3 mb-2">
          Tool Kit
        </div>
        <nav className="flex flex-col gap-1 mb-6">
          <LayoutGroup id="nav-toolkit">
            <NavItem 
              active={activePage === 'assessment-test'} 
              onClick={() => setActivePage('assessment-test')}
              icon={<ClipboardList size={18} />}
              label="Assesment Test"
            />
            <NavItem 
              active={activePage === 'case-studies'} 
              onClick={() => setActivePage('case-studies')}
              icon={<GraduationCap size={18} />}
              label="Case Studies"
            />
          </LayoutGroup>
        </nav>

        <div className="text-[10px] font-extrabold tracking-[1.5px] uppercase text-brand-gray px-3 mb-2">
          Career Service
        </div>
        <nav className="flex flex-col gap-1 mb-6">
          <LayoutGroup id="nav-career">
            <NavItem 
              active={activePage === 'career-bundle'} 
              onClick={() => setActivePage('career-bundle')}
              icon={<Package size={18} />}
              label="E2E Bundle"
            />
          </LayoutGroup>
        </nav>

        <div className="text-[10px] font-extrabold tracking-[1.5px] uppercase text-brand-gray px-3 mb-2">
          Newsletter
        </div>
        <nav className="flex flex-col gap-1 mb-6">
          <LayoutGroup id="nav-newsletter">
            <NavItem 
              active={activePage === 'newsletter'} 
              onClick={() => setActivePage('newsletter')}
              icon={<Send size={18} />}
              label="Newsletter"
            />
          </LayoutGroup>
        </nav>

        <div className="text-[10px] font-extrabold tracking-[1.5px] uppercase text-brand-gray px-3 mb-2">
          About
        </div>
        <nav className="flex flex-col gap-1">
          <LayoutGroup id="nav-about">
            <NavItem 
              active={activePage === 'media'} 
              onClick={() => setActivePage('media')}
              icon={<Users size={18} />}
              label="Cộng đồng"
            />
            <NavItem 
              active={activePage === 'about'} 
              onClick={() => setActivePage('about')}
              icon={<Mail size={18} />}
              label="Về chúng tôi"
            />
          </LayoutGroup>
        </nav>

        {isLoggedIn && (
          <button 
            onClick={onLogout}
            className="flex items-center gap-3 p-3 rounded-2xl text-sm font-bold text-red-500 hover:bg-red-50 transition-colors mt-4 mx-3 text-left"
          >
            <X size={18} /> Đăng xuất
          </button>
        )}

        <div className="mt-auto flex justify-center py-3">
          <motion.div 
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <svg width="80" height="64" viewBox="0 0 80 64" className="drop-shadow-md">
              <circle cx="20" cy="32" r="16" fill="#8B83E8"/><circle cx="15" cy="30" r="2" fill="#111"/><circle cx="25" cy="30" r="2" fill="#111"/><path d="M15 36 Q20 41 25 36" stroke="#111" strokeWidth="2" fill="none" strokeLinecap="round"/><line x1="12" y1="46" x2="10" y2="58" stroke="#8B83E8" strokeWidth="3" strokeLinecap="round"/><line x1="28" y1="46" x2="30" y2="58" stroke="#8B83E8" strokeWidth="3" strokeLinecap="round"/>
              <rect x="46" y="8" width="28" height="28" rx="9" fill="#FFD246" transform="rotate(10 60 22)"/><circle cx="56" cy="20" r="2" fill="#111"/><circle cx="65" cy="20" r="2" fill="#111"/><path d="M56 26 Q60 30 65 26" stroke="#111" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
              <circle cx="40" cy="12" r="4" fill="#FF4F9A"/><circle cx="5" cy="18" r="3" fill="#8B83E8"/><circle cx="50" cy="50" r="5" fill="#FFD246"/>
            </svg>
          </motion.div>
        </div>
      </motion.aside>
    </>
  );
};
