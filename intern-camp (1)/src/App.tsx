import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu } from 'lucide-react';

// Hooks
import { useAuth } from './hooks/useAuth';
import { useJobs } from './hooks/useJobs';

// Types
import { Job, TeamMember, PageType } from './types';

// Layout Components
import { Sidebar } from './components/layout/Sidebar';
import { Footer } from './components/layout/Footer';

// Page Components
import { JobsPage } from './pages/JobsPage';
import { AboutPage } from './pages/AboutPage';
import { CommunityPage } from './pages/CommunityPage';
import { CVEditingPage } from './pages/CVEditingPage';
import { CareerBundlePage } from './pages/CareerBundlePage';
import { MockInterviewPage } from './pages/MockInterviewPage';
import { AssessmentTestPage } from './pages/AssessmentTestPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { NewsletterPage } from './pages/NewsletterPage';

// Feature Components
import { AuthView } from './components/features/auth/AuthView';
import { MemberLetterModal } from './components/features/about/MemberLetterModal';

export default function App() {
  const [activePage, setActivePage] = useState<PageType>('jobs');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  
  // Scroll to top when activePage changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activePage]);
  
  // State for jobs UI
  const [searchQuery, setSearchQuery] = useState('');
  const [filterLocation, setFilterLocation] = useState('all');
  const [filterDate, setFilterDate] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Auth & Data Hooks
  const { 
    user, 
    userProfile, 
    isAuthChecking, 
    authMode, 
    setAuthMode, 
    authLoading, 
    authError, 
    setAuthError,
    login, 
    register, 
    resendVerification,
    checkVerificationStatus,
    resetPassword,
    logout,
    updateProfileData,
    deleteAccount
  } = useAuth();

  const {
    loading,
    teamMembers,
    filteredJobs,
    locations,
    currentJobs,
    stats
  } = useJobs(searchQuery, filterLocation, filterDate, currentPage);

  const [authEmail, setAuthEmail] = useState('');
  const [authPassword, setAuthPassword] = useState('');
  const [authConfirmPassword, setAuthConfirmPassword] = useState('');
  const [authName, setAuthName] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(authEmail, authPassword);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (authPassword !== authConfirmPassword) {
      setAuthError('Mật khẩu không khớp!');
      return;
    }
    register(authEmail, authPassword, authName);
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    resetPassword(authEmail);
  };

  const handleResendVerification = () => {
    resendVerification();
  };

  const handleCheckStatus = async () => {
    const isVerified = await checkVerificationStatus();
    if (isVerified) {
      setAuthError('');
    } else {
      setAuthError('Tài khoản vẫn chưa được xác thực. Vui lòng kiểm tra email của bạn.');
    }
  };

  const [profileLoading, setProfileLoading] = useState(false);
  const handleUpdateProfile = async (newName: string, newPhotoFileName: string) => {
    setProfileLoading(true);
    const success = await updateProfileData(newName, newPhotoFileName);
    setProfileLoading(false);
    if (success) alert('Cập nhật thành công!');
    return success;
  };

  const handleDelete = async () => {
    if (window.confirm('Bạn có chắc muốn xóa tài khoản?')) {
      setProfileLoading(true);
      await deleteAccount();
      setProfileLoading(false);
    }
  };

  if (isAuthChecking) {
    return (
      <div className="min-h-screen bg-brand-bg flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-brand-purple border-t-transparent rounded-full animate-spin" />
          <div className="font-nunito font-black text-brand-gray tracking-widest uppercase text-xs">Intern Camp Loading...</div>
        </div>
      </div>
    );
  }

  if (!user || !user.emailVerified) {
    return (
      <AuthView 
        authMode={authMode}
        setAuthMode={setAuthMode}
        email={authEmail}
        setEmail={setAuthEmail}
        password={authPassword}
        setPassword={setAuthPassword}
        confirmPassword={authConfirmPassword}
        setConfirmPassword={setAuthConfirmPassword}
        name={authName}
        setName={setAuthName}
        authLoading={authLoading}
        authError={authError}
        setAuthError={setAuthError}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        handleLogin={handleLogin}
        handleRegister={handleRegister}
        handleResetPassword={handleResetPassword}
        handleResendVerification={handleResendVerification}
        handleCheckStatus={handleCheckStatus}
        onLogout={logout}
      />
    );
  }

  const renderPage = () => {
    switch (activePage) {
      case 'jobs':
        return (
          <JobsPage 
            jobs={filteredJobs}
            loading={loading}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            filterLocation={filterLocation}
            setFilterLocation={setFilterLocation}
            filterDate={filterDate}
            setFilterDate={setFilterDate}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            viewMode={viewMode}
            setViewMode={setViewMode}
            user={user}
            stats={stats}
            locations={locations}
            filteredJobs={filteredJobs}
            currentJobs={currentJobs}
            onJobClick={(j) => window.open(j.link_1_url || j.link, '_blank')}
          />
        );
      case 'cv-editing': return <CVEditingPage />;
      case 'career-bundle': return <CareerBundlePage />;
      case 'mock-interview': return <MockInterviewPage />;
      case 'assessment-test': return <AssessmentTestPage />;
      case 'case-studies': return <CaseStudiesPage />;
      case 'newsletter': return <NewsletterPage />;
      case 'about': return <AboutPage teamMembers={teamMembers} setSelectedMember={setSelectedMember} />;
      case 'media': return <CommunityPage />;
      default: return null;
    }
  };

  return (
    <div className="layout flex min-h-screen">
      <Sidebar 
        activePage={activePage} 
        setActivePage={(p) => { setActivePage(p); setCurrentPage(1); }}
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setIsSidebarCollapsed}
        isLoggedIn={!!user}
        onLogout={logout}
      />

      <button 
        onClick={() => setIsSidebarCollapsed(false)}
        className={`fixed top-5 left-4 z-[60] w-11 h-11 rounded-2xl border-2 border-brand-gray-lt bg-brand-white text-brand-black shadow-xl shadow-black/10 flex items-center justify-center hover:bg-brand-purple hover:text-brand-white hover:border-brand-purple transition-all duration-300 ${isSidebarCollapsed ? 'flex' : 'hidden'}`}
      >
        <Menu size={20} />
      </button>

      <main className={`flex-1 p-8 lg:p-10 transition-all duration-500 ${isSidebarCollapsed ? 'ml-0' : 'ml-0 lg:ml-[240px]'}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>

        <Footer activePage={activePage} setActivePage={setActivePage} />
        <iframe name="gform-sink" id="gform-sink" style={{ display: 'none' }}></iframe>
      </main>

      <MemberLetterModal member={selectedMember} onClose={() => setSelectedMember(null)} />

      {/* Decorative Elements */}
      <div className="fixed top-20 right-10 pointer-events-none opacity-20 animate-float z-0">
        <svg width="56" height="56" viewBox="0 0 56 56">
          <rect x="6" y="4" width="44" height="44" rx="14" fill="#8B83E8" transform="rotate(12 28 28)"/>
          <circle cx="22" cy="25" r="2.5" fill="#111"/><circle cx="34" cy="25" r="2.5" fill="#111"/>
          <path d="M22 33 Q28 38 34 33" stroke="#111" strokeWidth="2" fill="none" strokeLinecap="round"/>
        </svg>
      </div>
      <div className="fixed bottom-32 right-16 pointer-events-none opacity-15 animate-float-b z-0">
        <svg width="46" height="58" viewBox="0 0 46 58">
          <ellipse cx="23" cy="22" rx="20" ry="18" fill="#FFD246"/>
          <circle cx="17" cy="20" r="2.5" fill="#111"/><circle cx="29" cy="20" r="2.5" fill="#111"/><circle cx="23" cy="23" r="1.5" fill="#111"/>
          <line x1="14" y1="40" x2="12" y2="56" stroke="#FFD246" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="20" y1="40" x2="20" y2="58" stroke="#FFD246" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="26" y1="40" x2="26" y2="57" stroke="#FFD246" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="32" y1="40" x2="34" y2="55" stroke="#FFD246" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
  );
}
