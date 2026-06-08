import React from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  Download, 
  ChevronLeft, 
  ChevronRight, 
  UserPlus 
} from 'lucide-react';
import { Job } from '../types';
import { JobCard } from '../components/features/jobs/JobCard';
import { PAGE_SIZE, REGISTRATION_FORM_URL } from '../constants';

interface JobsPageProps {
  jobs: Job[];
  loading: boolean;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  filterLocation: string;
  setFilterLocation: (l: string) => void;
  filterDate: string;
  setFilterDate: (d: string) => void;
  currentPage: number;
  setCurrentPage: (p: number | ((prev: number) => number)) => void;
  viewMode: 'grid' | 'table';
  setViewMode: (m: 'grid' | 'table') => void;
  user: any;
  stats: { total: number; companies: number; newToday: number };
  locations: string[];
  filteredJobs: Job[];
  currentJobs: Job[];
  onJobClick: (j: Job) => void;
}

export const JobsPage = ({
  loading,
  searchQuery,
  setSearchQuery,
  filterLocation,
  setFilterLocation,
  filterDate,
  setFilterDate,
  currentPage,
  setCurrentPage,
  viewMode,
  setViewMode,
  user,
  stats,
  locations,
  filteredJobs,
  currentJobs,
  onJobClick
}: JobsPageProps) => {
  const totalPages = Math.ceil(filteredJobs.length / PAGE_SIZE);

  return (
    <motion.div
      key="jobs"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero Banner - always visible */}
      <div className="relative bg-gradient-to-br from-[#5b21b6] via-[#7c3aed] to-brand-purple rounded-brand p-12 lg:p-14 mb-6 overflow-hidden shadow-2xl shadow-brand-purple/30">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h1 className="font-nunito font-black text-4xl text-white tracking-tight leading-tight mb-3 drop-shadow-md">
              Khám phá cơ hội thực tập 🎯
            </h1>
            <p className="text-white/90 font-semibold mb-6 text-sm">
              Tìm vị trí phù hợp với bạn từ hàng trăm công ty hàng đầu Việt Nam
            </p>
            
            {user && (
              <div className="flex items-center gap-3 bg-white/95 rounded-2xl p-3 px-5 shadow-xl border-2 border-transparent focus-within:border-white/60 transition-all max-w-md mb-6">
                <Search size={20} className="text-brand-gray shrink-0" />
                <input 
                  type="text" 
                  placeholder="Tìm công ty, vị trí thực tập..."
                  className="bg-transparent border-none outline-none font-nunito font-bold text-sm text-brand-black w-full"
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                />
              </div>
            )}

            <div className="flex items-center gap-8">
              <div className="flex flex-col">
                <span className="font-nunito font-black text-3xl text-white leading-none tracking-tight">{stats.total || '—'}</span>
                <span className="text-[11px] font-bold text-white/75 uppercase tracking-wider mt-1">Vị trí</span>
              </div>
              <div className="w-px h-10 bg-white/25" />
              <div className="flex flex-col">
                <span className="font-nunito font-black text-3xl text-white leading-none tracking-tight">{stats.companies || '—'}</span>
                <span className="text-[11px] font-bold text-white/75 uppercase tracking-wider mt-1">Công ty</span>
              </div>
              <div className="w-px h-10 bg-white/25" />
              <div className="flex flex-col">
                <span className="font-nunito font-black text-3xl text-white leading-none tracking-tight">{stats.newToday || '—'}</span>
                <span className="text-[11px] font-bold text-white/75 uppercase tracking-wider mt-1">Mới hôm nay</span>
              </div>
            </div>
          </div>

          {/* Right side announcement card */}
          <div className="lg:max-w-xs xl:max-w-sm w-full shrink-0">
            <div className="bg-white/10 backdrop-blur-lg border-2 border-white/20 p-6 rounded-3xl text-white shadow-xl shadow-black/10 flex flex-col gap-3 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl translate-x-4 -translate-y-4 group-hover:scale-150 transition-all duration-700" />
              <div className="flex items-center gap-2.5">
                <span className="text-2xl animate-bounce">⏰</span>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-white/80">Cập Nhật Hàng Ngày</span>
              </div>
              <p className="text-base md:text-lg font-nunito font-black leading-snug">
                Cơ hội sẽ được <span className="text-amber-300">refresh tự động</span> vào lúc <span className="underline decoration-amber-300 decoration-3 underline-offset-4">7h30 tối</span> hàng ngày nha ae!
              </p>
            </div>
          </div>
        </div>

        <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
          <svg width="280" height="280" viewBox="0 0 220 220">
            <circle cx="110" cy="110" r="100" fill="none" stroke="white" strokeWidth="2" strokeOpacity="0.2"/>
            <circle cx="110" cy="110" r="70"  fill="none" stroke="white" strokeWidth="1.5" strokeOpacity="0.15"/>
            <circle cx="110" cy="110" r="40"  fill="white" fillOpacity="0.1"/>
            <circle cx="110" cy="10"  r="7"   fill="white" fillOpacity="0.4"/>
            <circle cx="110" cy="210" r="7"   fill="white" fillOpacity="0.4"/>
            <circle cx="10"  cy="110" r="7"   fill="white" fillOpacity="0.4"/>
            <circle cx="210" cy="110" r="7"   fill="white" fillOpacity="0.4"/>
          </svg>
        </div>
      </div>

      {/* Introduction section - always visible */}
      <div className="bg-brand-white rounded-brand p-7 shadow-brand mb-5 border-2 border-brand-gray-lt">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-1">
            <h2 className="font-nunito font-black text-xl text-brand-black mb-2">Intern Camp là gì? 🌱</h2>
            <p className="text-sm text-brand-gray font-semibold leading-relaxed">
              Intern Camp là nền tảng tổng hợp cơ hội thực tập chất lượng cao dành cho sinh viên Việt Nam. 
              Chúng tôi thu thập và xác thực hàng trăm tin tuyển dụng từ các công ty hàng đầu, giúp bạn tiết kiệm thời gian và tìm đúng vị trí phù hợp.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:shrink-0">
            {[
              { icon: '🤖', label: 'AI Verified' },
              { icon: '⭐', label: 'AI Scoring' },
              { icon: '🔄', label: 'Cập nhật liên tục' },
              { icon: '🔒', label: 'Chỉ dành cho thành viên' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 bg-brand-purple/8 text-brand-purple px-3 py-2 rounded-xl text-xs font-black border border-brand-purple/15">
                <span>{item.icon}</span> {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filters & View Toggle - always visible */}
      <div className="bg-brand-white rounded-brand p-5 px-6 shadow-brand mb-5">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-extrabold tracking-wider uppercase text-brand-gray shrink-0">📍 Nơi làm</span>
              <select 
                className="appearance-none bg-brand-bg border-2 border-brand-gray-lt rounded-xl px-4 py-2 pr-10 text-sm font-bold outline-none focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/10 transition-all cursor-pointer min-w-[150px]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='11' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
                value={filterLocation}
                onChange={(e) => { setFilterLocation(e.target.value); setCurrentPage(1); }}
              >
                <option value="all">Tất cả khu vực</option>
                {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
              </select>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[11px] font-extrabold tracking-wider uppercase text-brand-gray shrink-0">📅 Thời gian</span>
              <select 
                className="appearance-none bg-brand-bg border-2 border-brand-gray-lt rounded-xl px-4 py-2 pr-10 text-sm font-bold outline-none focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/10 transition-all cursor-pointer min-w-[150px]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='11' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
                value={filterDate}
                onChange={(e) => { setFilterDate(e.target.value); setCurrentPage(1); }}
              >
                <option value="all">Mọi lúc</option>
                <option value="today">Hôm nay</option>
                <option value="3days">3 ngày qua</option>
                <option value="week">1 tuần qua</option>
                <option value="month">1 tháng qua</option>
              </select>
            </div>
          </div>

          <div className="flex items-center bg-brand-bg p-1 rounded-2xl border-2 border-brand-gray-lt">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-2 ${viewMode === 'grid' ? 'bg-brand-purple text-white shadow-lg shadow-brand-purple/20' : 'text-brand-gray hover:text-brand-black'}`}
            >
              <div className="grid grid-cols-2 gap-0.5 w-3 h-3">
                <div className="bg-current rounded-[1px]" />
                <div className="bg-current rounded-[1px]" />
                <div className="bg-current rounded-[1px]" />
                <div className="bg-current rounded-[1px]" />
              </div>
              Grid View
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-2 ${viewMode === 'table' ? 'bg-brand-purple text-white shadow-lg shadow-brand-purple/20' : 'text-brand-gray hover:text-brand-black'}`}
            >
              <div className="flex flex-col gap-0.5 w-3 h-3">
                <div className="bg-current h-0.5 w-full rounded-full" />
                <div className="bg-current h-0.5 w-full rounded-full" />
                <div className="bg-current h-0.5 w-full rounded-full" />
              </div>
              Table View
            </button>
          </div>
        </div>
      </div>

      {/* Jobs Listing */}
      <div className="bg-brand-white rounded-brand p-6 shadow-brand">
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="font-nunito font-black text-lg">Danh sách cơ hội thực tập</div>
            <div className="text-xs text-brand-gray font-semibold mt-1">
              {filteredJobs.length} vị trí · <span className="text-brand-purple">💡 Chuyển đến trang ứng tuyển để xem JD chi tiết và đầy đủ</span>
            </div>
          </div>
          <button className="text-xs font-extrabold text-brand-purple hover:underline flex items-center gap-1">
            <Download size={14} /> Tải CSV
          </button>
        </div>

        {loading ? (
          <div className="py-20 text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 border-4 border-brand-purple border-t-transparent rounded-full animate-spin" />
              <div className="font-bold text-brand-gray">Đang tải dữ liệu...</div>
            </div>
          </div>
        ) : filteredJobs.length > 0 ? (
          <>
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                {currentJobs.map((job) => (
                  <JobCard 
                    key={job.id} 
                    job={job} 
                    onSelect={(j) => onJobClick(j)}
                  />
                ))}
              </div>
            ) : (
              <div className="overflow-x-auto relative">
                <table className="w-full">
                  <thead>
                    <tr className="bg-brand-bg/50">
                      <th className="px-6 py-4 text-[10px] font-black tracking-widest uppercase text-brand-gray text-left rounded-tl-[24px]">Công ty</th>
                      <th className="px-6 py-4 text-[10px] font-black tracking-widest uppercase text-brand-gray text-left">Vị trí</th>
                      <th className="px-6 py-4 text-[10px] font-black tracking-widest uppercase text-brand-gray text-left">Đăng lúc</th>
                      <th className="px-6 py-4 text-[10px] font-black tracking-widest uppercase text-brand-gray text-left text-center">Score</th>
                      <th className="px-6 py-4 text-[10px] font-black tracking-widest uppercase text-brand-gray text-right rounded-tr-[24px]">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-gray-lt">
                    {currentJobs.map((job) => (
                      <motion.tr 
                        key={job.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        whileHover={{ backgroundColor: '#faf9ff', x: 4 }}
                        onClick={() => onJobClick(job)}
                        className="cursor-pointer group transition-all"
                      >
                        <td className="px-6 py-5">
                          <div className="flex flex-col">
                            <span className="font-black text-brand-black text-sm">{job.company}</span>
                            <span className="text-xs font-bold text-brand-purple mt-0.5">{job.position}</span>
                            <span className="text-[10px] font-bold text-brand-gray mt-0.5">{job.location}</span>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex flex-col">
                            <span className="font-bold text-brand-black text-sm group-hover:text-brand-purple transition-colors">{job.position}</span>
                            <div className="flex items-center gap-2 mt-1">
                              {job.salary && <span className="text-[10px] font-bold text-brand-purple bg-brand-purple/10 px-2 py-0.5 rounded-md">{job.salary}</span>}
                              {job.jobType && <span className="text-[10px] font-bold text-brand-gray bg-brand-bg px-2 py-0.5 rounded-md">{job.jobType}</span>}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-1.5 text-brand-gray font-bold text-[11px]">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-purple/40" />
                            {job.timePosted}
                          </div>
                        </td>
                        <td className="px-6 py-5 text-center">
                          <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-brand-purple/5 text-brand-purple font-black text-sm border border-brand-purple/10 group-hover:bg-brand-purple group-hover:text-white transition-all">
                            {job.score || '—'}
                          </div>
                        </td>
                        <td className="px-6 py-5 text-right">
                          <button className="text-brand-purple font-black text-xs hover:underline inline-flex items-center gap-1">
                            {job.link_1_platform ? `Ứng tuyển (${job.link_1_platform})` : 'Ứng tuyển'} <ChevronRight size={14} />
                          </button>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {filteredJobs.length > PAGE_SIZE && (
              <div className="flex items-center justify-between mt-6 pt-4 border-t-2 border-brand-gray-lt">
                <div className="text-xs font-bold text-brand-gray">
                  {(currentPage - 1) * PAGE_SIZE + 1}–{Math.min(currentPage * PAGE_SIZE, filteredJobs.length)} / {filteredJobs.length}
                </div>
                <div className="flex gap-1.5">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => { setCurrentPage(prev => Math.max(1, prev - 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="w-8 h-8 rounded-lg border-2 border-brand-gray-lt flex items-center justify-center text-brand-gray hover:bg-brand-purple hover:border-brand-purple hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => {
                    const page = i + 1;
                    if (page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1)) {
                      return (
                        <button
                          key={page}
                          onClick={() => { setCurrentPage(page); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                          className={`w-8 h-8 rounded-lg border-2 font-extrabold text-[13px] flex items-center justify-center transition-all ${
                            currentPage === page 
                              ? 'bg-brand-purple border-brand-purple text-white' 
                              : 'bg-white border-brand-gray-lt text-brand-gray hover:bg-brand-purple hover:border-brand-purple hover:text-white'
                          }`}
                        >
                          {page}
                        </button>
                      );
                    }
                    if (page === currentPage - 2 || page === currentPage + 2) {
                      return <span key={page} className="w-4 flex items-center justify-center text-brand-gray">...</span>;
                    }
                    return null;
                  })}
                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => { setCurrentPage(prev => Math.min(totalPages, prev + 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="w-8 h-8 rounded-lg border-2 border-brand-gray-lt flex items-center justify-center text-brand-gray hover:bg-brand-purple hover:border-brand-purple hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="py-12 text-center text-brand-gray font-bold">
            Không tìm thấy kết quả phù hợp
          </div>
        )}
      </div>

      {/* Footer CTA - always visible */}
      <div className="mt-8 bg-gradient-to-br from-brand-purple/10 to-brand-purple/5 rounded-brand p-8 border-2 border-brand-purple/20 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-nunito font-black text-xl text-brand-black mb-1">Muốn truy cập danh sách đầy đủ? 🚀</h3>
          <p className="text-sm text-brand-gray font-semibold">
            Đăng ký thành viên để xem tất cả {stats.total ? `${stats.total} ` : ''}vị trí thực tập và nhận thông báo mới nhất.
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <a 
            href={REGISTRATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-purple text-white font-nunito font-black text-sm px-6 py-3 rounded-2xl shadow-lg shadow-brand-purple/30 hover:scale-[1.02] transition-all flex items-center gap-2"
          >
            <UserPlus size={16} /> Đăng ký ngay
          </a>
        </div>
      </div>
    </motion.div>
  );
};
