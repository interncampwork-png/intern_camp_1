import React from 'react';
import { motion } from 'motion/react';
import { Globe, Briefcase, Coins, History, Cpu, ArrowUpRight, Sparkles } from 'lucide-react';

export const NewsletterPage = () => {
  const topics = [
    {
      id: 'topic-macro',
      title: 'Macroeconomic',
      subtitle: 'Kinh Tế Vĩ Mô',
      desc: 'Phân tích các xu hướng kinh tế toàn cầu, sự biến động của lạm phát, lãi suất và các quyết sách kinh tế vĩ mô ảnh hưởng mạnh mẽ tới Việt Nam và thị trường quốc tế.',
      icon: Globe,
      color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    },
    {
      id: 'topic-business',
      title: 'Business Study',
      subtitle: 'Nghiên Cứu Doanh Nghiệp',
      desc: 'Mổ xẻ các bài học chiến lược thực tiễn (case studies) từ các tập đoàn lớn, khởi nghiệp sáng tạo toàn cầu cho tới những mô hình vận hành định hình thời đại.',
      icon: Briefcase,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    },
    {
      id: 'topic-finance',
      title: 'Finance',
      subtitle: 'Tài Chính',
      desc: 'Bồi dưỡng tư duy tài chính nhạy bén, phương pháp quản lý dòng tiền cá nhân và doanh nghiệp vững vàng, cùng các góc nhìn phân tích thị trường thực tiễn.',
      icon: Coins,
      color: 'bg-amber-50 text-amber-600 border-amber-100',
    },
    {
      id: 'topic-history',
      title: 'History',
      subtitle: 'Lịch Sử',
      desc: 'Đút rút các bài học đắt giá vượt thời gian qua lăng kính lịch sử: từ lịch sử kinh tế, sự trỗi dậy và suy tàn của các tập đoàn khổng lồ lẫn các nền văn minh.',
      icon: History,
      color: 'bg-rose-50 text-rose-600 border-rose-100',
    },
    {
      id: 'topic-technology',
      title: 'Technology',
      subtitle: 'Công Nghệ',
      desc: 'Cập nhật dòng chảy công nghệ đột phá toàn thế giới: từ sức mạnh của Trí tuệ nhân tạo (AI), Blockchain, cho tới các giải pháp chuyển đổi số tương lai.',
      icon: Cpu,
      color: 'bg-purple-50 text-purple-600 border-purple-100',
    },
  ];

  return (
    <div id="newsletter-page-container" className="max-w-6xl mx-auto px-4 py-8 md:py-12 flex flex-col justify-center min-h-[75vh]">
      {/* Intro Hero Section */}
      <div id="newsletter-hero" className="text-center mb-10 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          {/* Decorative badge */}
          <span 
            id="newsletter-badge"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-purple/10 text-brand-purple mb-4 border border-brand-purple/20"
          >
            <Sparkles size={12} className="animate-spin" style={{ animationDuration: '3s' }} /> Chuyên Mục Đặc Biệt
          </span>

          <h1 id="newsletter-title" className="text-4xl md:text-5xl font-nunito font-black text-brand-black mb-5 tracking-tight max-w-3xl mx-auto leading-tight">
            Hành trình tri thức cùng <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-pink">
              Intern Camp Newsletter
            </span>
          </h1>

          <p id="newsletter-intro" className="text-lg text-brand-gray font-semibold max-w-3xl mx-auto leading-relaxed mb-6">
            Nơi tổng hợp, phân tích sâu và cung cấp góc nhìn đa chiều về kinh tế, business, công nghệ,... Chúng tôi đồng hành cùng bạn mài dũa tư duy sắc bén mỗi ngày.
          </p>
        </motion.div>

        {/* Fancy backgrounds */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none" />
      </div>

      {/* Grid of Topics with flex wrap to center bottom row items beautifully */}
      <div id="newsletter-topics-grid" className="flex flex-wrap justify-center gap-6 mb-10">
        {topics.map((topic, index) => {
          const IconComponent = topic.icon;
          return (
            <motion.div
              key={topic.id}
              id={topic.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="bg-brand-white p-6 rounded-[2rem] border-2 border-brand-gray-lt hover:border-brand-purple/30 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-center items-center text-center group w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-[280px]"
            >
              <div>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border-2 mb-4 mx-auto ${topic.color} transition-transform duration-300 group-hover:scale-110`}>
                  <IconComponent size={24} />
                </div>
                <h3 className="text-xl font-nunito font-black text-brand-black mb-1 group-hover:text-brand-purple transition-colors">
                  {topic.title}
                </h3>
                <h4 className="text-xs font-bold text-brand-purple/80 uppercase tracking-wider">
                  {topic.subtitle}
                </h4>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Call to action "Alpha Testing" card below topics, sleek and centered */}
      <motion.div
        id="newsletter-cta-grid-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="max-w-2xl mx-auto w-full bg-gradient-to-br from-brand-purple to-brand-purple/90 p-8 rounded-[2rem] text-brand-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6"
      >
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="inline-flex p-3 bg-brand-white/20 rounded-2xl shrink-0">
            <Sparkles size={24} className="text-brand-yellow animate-bounce" />
          </div>
          <h3 className="text-xl md:text-2xl font-nunito font-black text-brand-white leading-tight">
            Trải nghiệm bản Alpha Testing của Newsletter
          </h3>
        </div>
        
        <a
          id="newsletter-cta-grid-link"
          href="https://interncamp-newsletter.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-brand-white text-brand-purple hover:bg-brand-yellow hover:text-brand-black px-6 py-3.5 rounded-[1.25rem] font-bold text-sm shadow-md hover:shadow-lg transition-all duration-300 shrink-0"
        >
          Thăm quan Newsletter <ArrowUpRight size={16} />
        </a>
      </motion.div>
    </div>
  );
};
