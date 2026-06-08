import React from 'react';
import { motion } from 'motion/react';

import { Package, ShieldCheck, HeartPulse, Sparkles } from 'lucide-react';

export const CareerBundlePage = () => {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <header className="mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="w-12 h-12 bg-brand-purple/10 text-brand-purple rounded-2xl flex items-center justify-center">
            <Package size={24} />
          </div>
          <div>
            <h1 className="text-3xl font-nunito font-black text-brand-black">End-to-end mentorship</h1>
            <p className="text-brand-gray">Lộ trình toàn diện, cam kết đầu ra</p>
          </div>
        </motion.div>
      </header>

      <div className="relative mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-brand-white p-8 md:p-12 rounded-[3rem] border-2 border-brand-gray-lt shadow-sm relative z-10"
        >
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-purple text-white rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
                Premium Program
              </div>
              <h2 className="text-4xl font-black text-brand-black mb-6">Đồng hành cùng bạn cho tới khi đạt Internship</h2>
              <p className="text-brand-gray leading-relaxed mb-8">
                Gói dịch vụ End-to-End (E2E) được thiết kế riêng biệt cho từng cá nhân. Chúng tôi cung cấp sự hỗ trợ toàn diện từ việc định hướng, xây dựng hồ sơ, luyện tập phỏng vấn cho đến khi bạn nhận được lời mời thực tập từ doanh nghiệp mơ ước.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: <ShieldCheck size={16} />, text: 'Cam kết hỗ trợ 100%' },
                  { icon: <HeartPulse size={16} />, text: 'Cố vấn chuyên môn 24/7' },
                  { icon: <Sparkles size={16} />, text: 'Mạng lưới kết nối rộng' },
                  { icon: <ShieldCheck size={16} />, text: 'Bảo mật thông tin tuyệt đối' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-brand-gray font-bold">
                    <div className="text-brand-purple">{item.icon}</div>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="w-full md:w-80 flex-shrink-0">
              <div className="bg-brand-bg p-8 rounded-3xl border-2 border-brand-gray-lt text-center">
                <div className="text-xs font-bold text-brand-gray uppercase mb-4 tracking-widest">Phí dịch vụ</div>
                <div className="text-5xl font-black text-brand-black mb-2">2TR</div>
                <div className="text-brand-purple font-bold text-lg mb-8">+ 30% lương tháng đầu</div>
                <a 
                  href="https://docs.google.com/forms/d/1icydTFcRwtNQWSBOoeqDQEt5p_hDD6Zxp0p7hlSXBms/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-brand-black text-brand-white font-bold rounded-2xl hover:bg-brand-purple transition-all shadow-lg active:scale-95 block text-center"
                >
                  Đăng ký tư vấn ngay
                </a>
                <p className="mt-4 text-[10px] text-brand-gray">Áp dụng cho các bạn sinh viên năm 2, 3, 4</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Background Decor */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-brand-purple/5 rounded-[4rem] -rotate-1" />
      </div>

      <div className="text-center">
        <h3 className="text-xl font-bold text-brand-black mb-8">Quy trình đồng hành</h3>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          {['Phân tích năng lực', 'Xây dựng lộ trình', 'Tối ưu hồ sơ', 'Luyện tập thực chiến', 'Nhận Offer'].map((step, i) => (
            <React.Fragment key={i}>
              <div className="px-6 py-3 bg-brand-white border-2 border-brand-gray-lt rounded-xl text-sm font-bold text-brand-gray italic">
                {i + 1}. {step}
              </div>
              {i < 4 && <div className="hidden md:block text-brand-gray-lt">→</div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
