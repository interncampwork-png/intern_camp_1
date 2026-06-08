import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Mail } from 'lucide-react';
import { TeamMember } from '../types';
import { MemberAvatar } from '../components/common/MemberAvatar';

interface AboutPageProps {
  teamMembers: TeamMember[];
  setSelectedMember: (m: TeamMember) => void;
}

export const AboutPage = ({ teamMembers, setSelectedMember }: AboutPageProps) => {
  return (
    <motion.div
      key="about"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl mx-auto"
    >
      <div className="mb-10">
        <h1 className="font-nunito font-black text-3xl tracking-tight">Về chúng tôi 🌿</h1>
        <p className="text-brand-gray font-semibold mt-1">Sứ mệnh kết nối tương lai</p>
      </div>

      <div className="bg-brand-white rounded-[32px] p-8 lg:p-12 shadow-brand border-2 border-brand-gray-lt">
        <div className="prose prose-slate max-w-none">
          <h2 className="font-nunito font-black text-2xl text-brand-purple mb-6">Intern Camp là gì?</h2>
          <p className="text-brand-black font-semibold leading-relaxed mb-8">
            Intern Camp là nền tảng tổng hợp cơ hội thực tập hàng đầu dành cho sinh viên Việt Nam. 
            Chúng tôi hiểu rằng việc tìm kiếm kỳ thực tập đầu tiên là bước ngoặt quan trọng nhất 
            trong sự nghiệp của mỗi bạn trẻ.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-brand-bg p-6 rounded-2xl border border-brand-gray-lt">
              <div className="text-2xl mb-3">🎯</div>
              <h3 className="font-nunito font-black text-lg mb-2">Sứ mệnh</h3>
              <p className="text-sm text-brand-gray font-semibold leading-relaxed">
                Xóa bỏ rào cản thông tin giữa doanh nghiệp và sinh viên, giúp mọi bạn trẻ 
                tiếp cận được những cơ hội thực tập chất lượng nhất.
              </p>
            </div>
            <div className="bg-brand-bg p-6 rounded-2xl border border-brand-gray-lt">
              <div className="text-2xl mb-3">🚀</div>
              <h3 className="font-nunito font-black text-lg mb-2">Tầm nhìn</h3>
              <p className="text-sm text-brand-gray font-semibold leading-relaxed">
                Trở thành hệ sinh thái hỗ trợ nghề nghiệp toàn diện nhất cho thế hệ trẻ Việt Nam 
                bắt đầu từ những bước chân đầu tiên.
              </p>
            </div>
          </div>

          <h2 className="font-nunito font-black text-2xl text-brand-green mb-6">Tại sao chọn chúng tôi?</h2>
          <ul className="space-y-4 mb-10">
            {[
              "Dữ liệu được cập nhật liên tục từ hàng trăm nguồn uy tín.",
              "Hệ thống chấm điểm giúp đánh giá chất lượng tin tuyển dụng.",
              "Xác thực bởi AI + expert để đảm bảo độ tin cậy của thông tin.",
              "Giao diện tối ưu, tìm kiếm nhanh chóng."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-brand-black font-semibold">
                <CheckCircle2 className="text-brand-green shrink-0 mt-1" size={18} />
                {item}
              </li>
            ))}
          </ul>

          <div className="bg-brand-purple/5 p-8 rounded-[24px] border-2 border-brand-purple/20 text-center">
            <h3 className="font-nunito font-black text-xl text-brand-purple mb-3">Đồng hành cùng Intern Camp</h3>
            <p className="text-sm text-brand-gray font-semibold mb-2">
              Hãy cùng chúng tôi xây dựng một cộng đồng thực tập sinh vững mạnh và chuyên nghiệp.
            </p>
            <p className="text-[11px] font-bold text-brand-purple uppercase tracking-widest">
              Bấm vào thành viên đội ngũ để xem tâm thư 💌
            </p>
          </div>

          <div className="mt-16">
            <h2 className="font-nunito font-black text-2xl text-brand-black mb-8 text-center">Đội ngũ của chúng tôi 🤝</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {teamMembers.map((member, i) => (
                <motion.button 
                  key={i} 
                  onClick={() => setSelectedMember(member)}
                  whileHover={{ y: -10 }}
                  className="text-center group outline-none"
                >
                  <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-[40px] overflow-hidden border-4 border-brand-gray-lt mb-6 group-hover:border-brand-purple group-hover:scale-105 transition-all duration-500 shadow-lg relative">
                    <MemberAvatar src={member.avatar} name={member.name} />
                    <div className="absolute inset-0 bg-brand-purple/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Mail size={32} className="text-white" />
                    </div>
                  </div>
                  <h4 className="font-nunito font-black text-brand-black text-lg mb-1">{member.name}</h4>
                  <p className="text-[11px] font-bold text-brand-gray uppercase tracking-widest">{member.title}</p>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
