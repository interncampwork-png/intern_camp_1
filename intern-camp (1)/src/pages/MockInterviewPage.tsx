import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  UserCheck, 
  Award, 
  GraduationCap, 
  CheckCircle2, 
  HelpCircle, 
  Sparkles, 
  MessageSquare, 
  Trophy, 
  Star, 
  BookOpen, 
  Clock, 
  ArrowRight, 
  Plus, 
  Check, 
  Heart,
  ExternalLink,
  ChevronRight,
  Flame,
  FileQuestion,
  Users
} from 'lucide-react';
import { REGISTRATION_FORM_URL } from '../constants';

// Define the case studies data mirroring the user slides
const CASE_STUDIES = [
  {
    id: 'berlin-zoo',
    tabName: '🐘 Berlin Zoo Case',
    title: 'Business Case 01: Berlin Zoo Investment Analysis',
    subtitle: 'Vòng Consulting / MT',
    category: 'Operational Investment',
    difficulty: 'Medium',
    duration: '45m phỏng vấn • 30m giải đáp',
    content: (
      <div className="space-y-3 font-nunito-sans text-brand-black text-xs md:text-sm">
        <div className="flex items-center gap-2 border-b border-brand-gray-lt pb-1.5">
          <span className="px-2 py-0.5 bg-brand-purple/10 text-brand-purple rounded text-[10px] font-black uppercase">Problem</span>
          <span className="text-[11px] text-brand-gray">Berlin Zoo Dilemma</span>
        </div>
        <p className="font-semibold leading-relaxed text-gray-700">
          Our client is the <span className="text-brand-purple font-extrabold">Berlin Zoo</span>, one of Europe&apos;s largest. Following a nearby competitor&apos;s successful elephant exhibit, management is considering buying a male elephant to satisfy a trend for bigger animals.
        </p>
        <p className="font-semibold leading-relaxed text-gray-700">
          Given the massive capital requirements, they need our help to decide if this investment is financially viable.
        </p>
        <div className="p-3 bg-indigo-50 border border-brand-purple/20 rounded-xl">
          <p className="text-[11px] font-black text-brand-purple uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
            Nhiệm vụ của bạn (Objective)
          </p>
          <p className="text-xs font-bold text-gray-800 leading-relaxed">
            Duyệt xét doanh thu tiềm năng, chi phí vận hành, chi phí xây dựng chuồng trại &amp; rủi ro để đưa ra khuyến nghị đầu tư tối ưu.
          </p>
        </div>
        <div className="flex gap-2">
          <span className="text-[9px] bg-red-50 text-red-600 border border-red-150 rounded-md px-1.5 py-0.5 font-bold">@INTERNCAMP.VN</span>
        </div>
      </div>
    )
  },
  {
    id: 'bev-cars',
    tabName: '⚡ BEVCars Case',
    title: 'Business Case 02: BEVCars IT Platform Strategy',
    subtitle: 'Startup & Tech Strategy',
    category: 'EV Operations & Tech',
    difficulty: 'Hard',
    duration: '45m phỏng vấn • 30m giải đáp',
    content: (
      <div className="space-y-3 font-nunito-sans text-brand-black text-xs md:text-sm">
        <div className="flex items-center gap-2 border-b border-brand-gray-lt pb-1.5">
          <span className="px-2 py-0.5 bg-brand-purple/10 text-brand-purple rounded text-[10px] font-black uppercase">Problem</span>
          <span className="text-[11px] text-brand-gray">EV Tech Strategy</span>
        </div>
        <p className="font-semibold leading-relaxed text-gray-700">
          <span className="text-brand-purple font-extrabold">BEVCars</span> manufactures low-cost, low-range electric vehicles (EVs) for SEA. Having secured <span className="font-bold text-brand-purple">$150M</span> in Series-C funding, they plan to build a new IT Digital Platform.
        </p>
        <p className="font-semibold leading-relaxed text-gray-700">
          The platform must process data from their current and future factories and car fleet, aiming to hit break-even within 5 years.
        </p>
        <div className="p-3 bg-indigo-50 border border-brand-purple/20 rounded-xl">
          <p className="text-[11px] font-black text-brand-purple uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
            Nhiệm vụ của bạn (Objective)
          </p>
          <p className="text-xs font-bold text-gray-800 leading-relaxed">
            Đánh giá nhà cung cấp, lên ngân sách phân bổ vốn IT, và xây dựng lộ trình triển khai tích hợp hệ thống.
          </p>
        </div>
        <div className="flex gap-2">
          <span className="text-[9px] bg-red-50 text-red-600 border border-red-150 rounded-md px-1.5 py-0.5 font-bold">@INTERNCAMP.VN</span>
        </div>
      </div>
    )
  },
  {
    id: 'hairify',
    tabName: '🧴 Hairify Case',
    title: 'Business Case 03: Hairify Vietnam Market Entry',
    subtitle: 'FMCG Market Expansion',
    category: 'FMCG Portfolio Strategy',
    difficulty: 'Medium - Hard',
    duration: '45m phỏng vấn • 30m giải đáp',
    content: (
      <div className="space-y-3 font-nunito-sans text-brand-black text-xs md:text-sm">
        <div className="bg-gradient-to-r from-orange-400 to-red-500 rounded-xl p-2.5 text-white flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-1.5">
            <span className="bg-white text-orange-600 px-1.5 py-0.5 rounded text-[9px] font-black">FTU × INTERN CAMP</span>
            <span className="text-[11px] font-bold">I. GIỚI THIỆU CHUNG VỀ HAIRIFY</span>
          </div>
        </div>

        <p className="font-semibold leading-relaxed text-gray-700">
          <span className="text-orange-600 font-extrabold">Hairify (US)</span> had 10% market share in 2025. Due to US market stagnation in 2025, their growth slowed to <span className="text-red-500 font-black">2%</span>.
        </p>

        <div className="border border-brand-gray-lt rounded-xl overflow-hidden shadow-sm">
          <table className="w-full text-left text-[11px] bg-white text-brand-black">
            <thead>
              <tr className="bg-orange-50 border-b border-brand-gray-lt font-black text-orange-850">
                <th className="p-1.5">Loại sản phẩm</th>
                <th className="p-1.5 text-center">Thị phần</th>
                <th className="p-1.5 text-center">Tăng trưởng 2025</th>
              </tr>
            </thead>
            <tbody className="font-semibold">
              <tr className="border-b border-brand-gray-lt">
                <td className="p-1.5">Sạch gàu</td>
                <td className="p-1.5 text-center text-brand-purple">12%</td>
                <td className="p-1.5 text-center text-brand-gray">0%</td>
              </tr>
              <tr className="border-b border-brand-gray-lt">
                <td className="p-1.5">Thảo dược</td>
                <td className="p-1.5 text-center text-brand-purple">3%</td>
                <td className="p-1.5 text-center text-brand-green">8%</td>
              </tr>
              <tr>
                <td className="p-1.5">Mềm mượt</td>
                <td className="p-1.5 text-center text-brand-purple">7%</td>
                <td className="p-1.5 text-center text-brand-green">2%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-3 bg-orange-50 border border-orange-250 rounded-xl">
          <p className="text-[11px] font-black text-orange-700 uppercase tracking-wider mb-1">
            🎯 Mục tiêu (Objective)
          </p>
          <p className="text-xs font-bold text-gray-800 leading-relaxed">
            Thúc đẩy tăng trưởng lên <strong className="text-orange-600">20%</strong> vào 2026 bằng thâm nhập thị trường Việt Nam. Hãy đề xuất cơ cấu danh mục sản phẩm &amp; định vị phù hợp.
          </p>
        </div>
      </div>
    )
  }
];

// Success testimonials replicating the uploaded screenshots
const SUCCESS_FEEDBACKS = [
  {
    id: 'shopee_offer',
    title: '🏆 Shopee Apprentice',
    user: 'Mentee Pass Apprentice Program',
    tagColor: 'bg-orange-100 text-orange-600 border-orange-200',
    headerEmoji: '🐝',
    content: (
      <div className="space-y-3 text-xs font-nunito-sans">
        <div className="bg-gray-100 p-2.5 rounded-xl border border-gray-200">
          <p className="text-[9px] font-black text-[#EE4D2D] uppercase">Email Replica View</p>
          <div className="border-t border-gray-200 mt-1 pt-1">
            <span className="font-extrabold text-brand-black block">[Shopee] Select to next step</span>
            <div className="bg-white border rounded p-1.5 mt-1.5 leading-relaxed text-[10px]">
              Dear em, you have been selected to proceed for our <strong className="text-[#EE4D2D]">Apprentice Program</strong>!
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex flex-col items-start">
            <div className="bg-[#EE4D2D] text-white py-2 px-3 rounded-2xl rounded-tl-none max-w-[85%] font-extrabold shadow-sm leading-relaxed">
              Omg c ới. E pass final r. E cảm ơn c nhiều huhu 😭😭💖
            </div>
            <span className="text-[8px] text-brand-gray mt-0.5 ml-1 font-bold">Học viên thực tế • Shopee</span>
          </div>
          <div className="flex flex-col items-end">
            <div className="bg-brand-purple text-white py-1.5 px-3 rounded-2xl rounded-tr-none max-w-[80%] font-black shadow-sm leading-relaxed text-right">
              Giỏi quá trời giỏi! Chúc mừng em bé nhé!
            </div>
            <span className="text-[8px] text-brand-gray mt-0.5 mr-1 font-bold">Mentor Nhi Nguyễn</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'perfetti_offer',
    title: '🍬 Perfetti Intern Offer',
    user: 'Mentee Nhận Tin Vui CMI Intern',
    tagColor: 'bg-blue-50 text-blue-600 border-blue-200',
    headerEmoji: '🍭',
    content: (
      <div className="space-y-3 text-xs font-nunito-sans">
        <div className="bg-gray-100 p-2.5 rounded-xl border border-gray-200">
          <p className="text-[9px] font-black text-blue-700 uppercase">Email Replica View</p>
          <div className="border-t border-gray-200 mt-1 pt-1">
            <span className="font-extrabold text-brand-black block">PERFETTI VAN MELLE _ OFFER EMAIL</span>
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded p-2 mt-1.5 text-center">
              <span className="text-[10px] font-extrabold block">CONGRATS ON CMI INTERN ROLE!</span>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex flex-col items-start">
            <div className="bg-white border text-brand-black py-2 px-3 rounded-2xl rounded-tl-none max-w-[85%] font-extrabold leading-relaxed">
              Không có buổi mock hướng dẫn chắc em rớt từ sớm mấttt ❤️❤️
            </div>
            <span className="text-[8px] text-brand-gray mt-0.5 ml-1 font-bold">Học viên thực tế • CMI Intern</span>
          </div>
          <div className="flex flex-col items-end">
            <div className="bg-brand-purple text-white py-1.5 px-3 rounded-2xl rounded-tr-none max-w-[80%] font-black shadow-sm leading-relaxed">
              Vào tiếp báo anh chị nhé, cố lên em!
            </div>
            <span className="text-[8px] text-brand-gray mt-0.5 mr-1 font-bold">Mentor Tuấn Nguyễn</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'threads_post',
    title: '💬 Threads Shoutout từ Mentees',
    user: 'Tri ân chân thực trên Threads',
    tagColor: 'bg-purple-50 text-purple-600 border-purple-200',
    headerEmoji: '🌿',
    content: (
      <div className="space-y-2 text-xs font-nunito-sans bg-white p-2.5 rounded-2xl border-2 border-brand-gray-lt">
        <div className="flex items-center justify-between border-b pb-1.5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-black">NH</div>
            <div>
              <span className="text-[11px] font-black text-brand-black block">_neyugn.hna</span>
              <span className="text-[8px] text-[#8B83E8] font-bold">Threads Shoutout</span>
            </div>
          </div>
        </div>
        <div className="text-[10.5px] font-medium text-gray-700 leading-relaxed italic">
          &quot;Gửi lời tri ân to đùng dâng tặng <strong className="text-brand-purple font-black">anh Tuấn và chị Nhi</strong> @interncamp.vn. Trộm vía sau buổi mock sharing siêu nhiệt tình trước thềm Final Interview, mình đã tự tin hẳn và đỗ luôn line-management FI 🥰. Iu lém!&quot;
        </div>
        <div className="flex items-center gap-3 text-[9px] text-brand-gray font-bold pt-1 border-t">
          <span className="text-red-500 font-black">❤️ 192 Likes</span>
          <span>💬 20 Comments</span>
        </div>
      </div>
    )
  },
  {
    id: 'empathetic_detail',
    title: '🧠 Feedback Quá Trình Prep 1-1',
    user: 'Customize sâu sắc & Chu đáo',
    tagColor: 'bg-green-50 text-green-600 border-green-200',
    headerEmoji: '❤️',
    content: (
      <div className="space-y-2.5 text-xs font-nunito-sans overflow-y-auto max-h-[250px] pr-1">
        <div className="bg-brand-bg/50 p-2.5 rounded-xl border border-brand-gray-lt space-y-1.5">
          <span className="text-[8px] font-black text-brand-purple block uppercase">Đánh giá độ tận tâm (1000/10đ)</span>
          <p className="text-[10.5px] font-semibold text-brand-black leading-normal">
            &quot;Sessions so far là <strong className="text-brand-purple">TUYỆT VỜI</strong> luôn ạ. Em thấy cách chị Nhi dẫn dắt rất bài bản, thoải mái qua từng phần từ cơ bản đến nâng cao. Direction cực kỳ clear và hiệu quả.&quot;
          </p>
          <p className="text-[10.5px] font-medium text-brand-black leading-normal italic">
            &quot;Insights về job on-point đúng thứ em cần. Chị lắng nghe thấu cảm siêu đỉnh, nắm rõ tình hình của em.&quot;
          </p>
        </div>
        <div className="bg-white p-2 border border-brand-gray-lt rounded-xl">
          <p className="text-[9px] text-brand-green font-black mb-0.5">💡 Kỹ năng đúc kết (Transferable):</p>
          <p className="text-[10px] font-semibold text-gray-750">
            &quot;Prep xong làm HR Interview em cực kỳ tự tin, kiến thức có tính ứng dụng cao cho mọi câu hỏi khác.&quot;
          </p>
        </div>
      </div>
    )
  }
];

// Interactive Personal Interview Questions representing floaters
const PERSONAL_QUESTIONS = [
  {
    q: "Tại sao em lại thích công ty và vị trí này?",
    a: "Sử dụng Framework 3P (People - Product - Purpose). Gắn kết nối cá nhân với định hướng phát hiện của doanh nghiệp thay vì trả lời sáo rỗng."
  },
  {
    q: "Kể về một lần em bất đồng ý kiến với sếp hoặc đồng đội?",
    a: "Ứng dụng STAR + Constructive Mindset. Khẳng định sự tôn trọng tổ chức/sếp, đề xuất giải pháp khách quan lấy hiệu suất công việc làm trọng tâm."
  },
  {
    q: "Hãy giới thiệu bản thân em và trải nghiệm nổi bật?",
    a: "Pitching 60 giây. Tóm tắt 3 thành tựu lớn nhất bằng con số định lượng phù hợp trực tiếp với vị trí ứng tuyển mục tiêu."
  },
  {
    q: "Kể về một thất bại lớn gần đây và bài học từ nó?",
    a: "Tỷ lệ vàng 60/40. 40% dòng thời gian mô tả bối cảnh bế tắc, 60% tập trung phân tích lỗi sai, định hướng và bài học rút ra."
  },
  {
    q: "Điểm yếu lớn nhất của em là gì?",
    a: "Nêu một kỹ năng chuyên môn cần cải thiện, đi kèm hành động thực tế bạn ĐANG thực hiện để nâng cấp (ví dụ: đang tự học một khóa học)."
  }
];

export const MockInterviewPage = () => {
  const [activeCaseTab, setActiveCaseTab] = useState('berlin-zoo');
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number | null>(0);
  const [activeFeedback, setActiveFeedback] = useState('shopee_offer');

  const selectedCase = CASE_STUDIES.find(c => c.id === activeCaseTab) || CASE_STUDIES[0];
  const selectedFeedback = SUCCESS_FEEDBACKS.find(f => f.id === activeFeedback) || SUCCESS_FEEDBACKS[0];

  return (
    <div id="mock-interview-container" className="max-w-5xl mx-auto py-12 px-4 select-none">
      {/* HEADER BANNER */}
      <header className="mb-12 text-center md:text-left">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 bg-brand-purple/10 text-brand-purple px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-4"
        >
          <Sparkles size={14} className="animate-pulse-custom" />
          Nâng tầm kỹ năng ứng tuyển thực tế 🌿
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-nunito font-black text-brand-black tracking-tight leading-tight">
              Mock Interview <span className="text-brand-purple">Premium 1-1</span>
            </h1>
            <p className="text-brand-gray text-base font-semibold mt-2 max-w-2xl leading-relaxed">
              Trực tiếp luyện tập, vượt qua áp lực cùng đội ngũ Mentor nắm giữ vị trí chủ chốt tại các tập đoàn danh tiếng Việt Nam. Giải quyết trọn vẹn cả hai rào cản lớn nhất kỳ tuyển dụng.
            </p>
          </div>
          
          <a
            href={REGISTRATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-brand-purple text-white px-8 py-4 rounded-3xl font-black shadow-brand hover:scale-105 active:scale-95 transition-all text-sm uppercase tracking-wider flex items-center gap-2 group border-2 border-brand-purple"
          >
            Đăng ký tư vấn ngay
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </header>

      {/* 3 PARTS GRID & TIMELINES */}
      <div className="space-y-16">
        
        {/* ==================== PART 1: MOCK PERSONAL INTERVIEW ==================== */}
        <section id="part-1-personal-interview" className="bg-brand-white border-2 border-brand-gray-lt rounded-[2.5rem] p-6 md:p-8 shadow-brand relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/5 rounded-full blur-3xl -z-10" />
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2 space-y-6">
              <div>
                <span className="px-3 py-1 bg-brand-purple/10 text-brand-purple rounded-full text-[10px] font-black uppercase tracking-widest block w-fit mb-3">
                  PHẦN 1 • TIÊU CHUẨN HR ROUND
                </span>
                <h2 className="text-2xl md:text-3xl font-nunito font-black text-brand-black">
                  Mock Personal Interview
                </h2>
                <p className="text-brand-gray text-xs md:text-sm font-bold mt-2 leading-relaxed">
                  Personal Interview là vòng nhằm đánh giá motivation, behavioral assessment & adaptability trong các vòng thi vào MNC & Big Corp
                </p>
              </div>

              {/* Action breakdown - 75 minutes */}
              <div className="bg-[#fafafa] border border-brand-gray-lt p-4.5 rounded-2xl space-y-4">
                <div className="flex items-center gap-2 pb-2.5 border-b border-brand-gray-lt">
                  <Clock size={16} className="text-brand-purple shrink-0" />
                  <span className="text-xs font-black text-brand-black uppercase tracking-wider">Cấu trúc buổi học 75 Phút chi tiết</span>
                </div>
                
                <div className="space-y-3.5">
                  <div className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-brand-purple text-white text-xs font-black flex items-center justify-center shrink-0">
                      01
                    </span>
                    <div>
                      <h4 className="text-xs font-black text-brand-black uppercase">45 - 60 Phút: Mock Personal Interview</h4>
                      <p className="text-xs text-brand-gray font-semibold leading-relaxed mt-0.5">
                        Thực chiến hỏi xoáy đáp xoay 1-1 giả lập phòng tuyển dụng thực tế dựa trên CV và hồ sơ ứng tuyển của chính bạn.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-brand-purple text-white text-xs font-black flex items-center justify-center shrink-0">
                      02
                    </span>
                    <div>
                      <h4 className="text-xs font-black text-brand-black uppercase">15 - 30 Phút: Detailed Feedback & Frameworks</h4>
                      <p className="text-xs text-brand-gray font-semibold leading-relaxed mt-0.5">
                        Sửa chi tiết câu trả lời. Định hướng khung <strong className="text-brand-purple">STAR</strong>, tư duy <strong className="text-brand-purple">Structuring</strong> &amp; cách kể chuyện <strong className="text-brand-purple">60/40</strong> vào CV.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Value Add access key */}
              <div className="flex items-center gap-3 p-3.5 bg-brand-purple/5 border border-brand-purple/20 rounded-2xl">
                <span className="text-xl">🎁</span>
                <span className="text-xs font-black text-brand-black leading-normal">
                  Đặc quyền đi kèm: Tặng quyền truy cập trọn đời kho tài liệu <span className="text-brand-purple font-black">50 bộ câu hỏi mẫu Mock HR Interview</span> ưu tú của Intern Camp.
                </span>
              </div>
            </div>

            {/* Interactive Sample Questions Floater */}
            <div className="lg:w-1/2 bg-[#fafafa]/60 border-2 border-brand-gray-lt p-5 rounded-3xl flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-black text-brand-gray uppercase tracking-widest mb-3.5 flex items-center gap-1.5">
                  <FileQuestion size={14} className="text-brand-purple animate-bounce" />
                  Mẫu Câu Hỏi Phỏng Vấn Thường Gặp (Hãy click xem mẹo)
                </h4>
                
                <div className="space-y-2.5">
                  {PERSONAL_QUESTIONS.map((item, idx) => {
                    const isSelected = activeQuestionIndex === idx;
                    return (
                      <div 
                        key={idx}
                        onClick={() => setActiveQuestionIndex(idx)}
                        className={`p-3 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                          isSelected 
                            ? 'bg-white border-brand-purple shadow-md scale-[1.01]' 
                            : 'bg-white/80 border-brand-gray-lt hover:border-brand-purple/30'
                        }`}
                      >
                        <div className="flex justify-between items-center gap-2">
                          <span className="text-xs font-black text-brand-black leading-tight flex items-start gap-1.5">
                            <span className="text-brand-purple font-black">Q:</span>
                            {item.q}
                          </span>
                          <span className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 transition-all ${isSelected ? 'bg-brand-purple text-white rotate-45' : 'bg-brand-gray-lt text-brand-gray'}`}>
                            <Plus size={10} />
                          </span>
                        </div>
                        
                        <AnimatePresence>
                          {isSelected && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden mt-2 pt-2 border-t border-brand-gray-lt/60"
                            >
                              <p className="text-[11px] font-black text-brand-purple uppercase tracking-wider mb-0.5">💡 Phương pháp tiếp cận (Tip):</p>
                              <p className="text-[11px] font-semibold text-gray-700 leading-relaxed">{item.a}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-gray-lt/80 flex items-center justify-between gap-4">
                <div className="text-xs">
                  <span className="text-brand-gray font-bold block">Học phí ưu đãi:</span>
                  <span className="text-2xl font-black text-brand-black">299k <span className="text-xs font-normal text-brand-gray">/người/buổi</span></span>
                </div>
                <a
                  href={REGISTRATION_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-purple hover:bg-brand-purple/90 text-white px-5 py-3 rounded-xl font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
                >
                  Đăng ký ngay <ChevronRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== PART 2: MOCK CASE INTERVIEW ==================== */}
        <section id="part-2-case-interview" className="bg-brand-black text-brand-white rounded-[2.5rem] p-6 md:p-8 shadow-brand relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-green/5 rounded-full blur-3xl -z-10" />
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-5/12 space-y-6">
              <div>
                <span className="px-3 py-1 bg-brand-green/20 text-brand-green border border-brand-green/20 rounded-full text-[10px] font-black uppercase tracking-widest block w-fit mb-3">
                  PHẦN 2 • TƯ DUY KHẢO SÁT DOANH NGHIỆP
                </span>
                <h2 className="text-2xl md:text-3xl font-nunito font-black text-white">
                  Mock Case Interview
                </h2>
                <p className="text-gray-400 text-xs md:text-sm font-bold mt-2 leading-relaxed">
                  Giải bài toán doanh nghiệp thực tế – phần thi bắt buộc trong các kỳ tuyển dụng Consulting, Management Trainee &amp; vị trí chuyên môn sâu tại MNCs, Big Corps.
                </p>
              </div>

              {/* Action breakdown - 75 minutes */}
              <div className="bg-white/5 border border-white/10 p-4.5 rounded-2xl space-y-4">
                <div className="flex items-center gap-2 pb-2.5 border-b border-white/10">
                  <Clock size={16} className="text-brand-green shrink-0" />
                  <span className="text-xs font-black text-white uppercase tracking-wider">Cấu trúc buổi học 75 Phút</span>
                </div>
                
                <div className="space-y-3.5 text-xs">
                  <div className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-brand-green text-brand-black text-xs font-black flex items-center justify-center shrink-0">
                      01
                    </span>
                    <div>
                      <h4 className="font-black text-white uppercase">45 - 60 Phút: Live Case Solving & Mentoring</h4>
                      <p className="text-gray-300 font-semibold leading-relaxed mt-0.5">
                        Thực chiến giải quyết Business Case thực tế &amp; rèn luyện nhạy bén tư duy dưới áp lực phòng thi.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-brand-green text-brand-black text-xs font-black flex items-center justify-center shrink-0">
                      02
                    </span>
                    <div>
                      <h4 className="font-black text-white uppercase">15 - 30 Phút: Structure, Business Acumen & Strategy</h4>
                      <p className="text-gray-300 font-semibold leading-relaxed mt-0.5">
                        Hệ thống mô hình giải toán kinh doanh, phương pháp Structuring, nhạy bén thương mại (Business Acumen) &amp; chiến lược ứng biến với case lạ.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Value Add access key */}
              <div className="flex items-center gap-4 p-4 bg-brand-green/20 border-2 border-brand-green/45 rounded-2xl shadow-lg shadow-brand-green/5">
                <span className="text-2xl shrink-0">🎁</span>
                <span className="text-[13px] font-black text-white leading-relaxed">
                  Đi kèm buổi học: Tặng bộ đề bài và giải đáp chi tiết <span className="text-brand-green font-extrabold underline decoration-2 underline-offset-4">10 bộ đề bài mẫu Business Case chọn lọc</span> đỉnh cao.
                </span>
              </div>
            </div>

            {/* Interactive Slide Case Study Display Component representing attached slides */}
            <div className="lg:w-7/12 flex flex-col justify-between">
              <div className="bg-white/5 border border-white/10 p-4.5 rounded-3xl">
                <h4 className="text-[10px] font-black text-brand-green uppercase tracking-widest mb-3 flex items-center gap-1.5">
                  <Award size={13} />
                  Mẫu Đề Bài Luyện Tập Thực Tế (Phổ biến tại Intern Camp)
                </h4>

                {/* Tabs selection showing zoo, electric, hair */}
                <div className="flex flex-wrap gap-1.5 mb-4 border-b border-white/5 pb-3">
                  {CASE_STUDIES.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setActiveCaseTab(c.id)}
                      className={`px-3 py-2 text-xs font-black uppercase tracking-wider rounded-xl transition-all ${
                        activeCaseTab === c.id 
                          ? 'bg-brand-green text-brand-black font-black shadow-md' 
                          : 'bg-white/5 text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      {c.tabName}
                    </button>
                  ))}
                </div>

                {/* Mock Slide Container rendering */}
                <div className="bg-white rounded-2xl p-4 md:p-5 shadow-lg border border-white/10 select-none min-h-[280px]">
                  <div className="flex justify-between items-start gap-2 mb-3 border-b border-brand-gray-lt pb-2">
                    <div>
                      <h5 className="text-[13px] font-black text-brand-black font-nunito">{selectedCase.title}</h5>
                      <span className="text-[9px] font-black text-brand-purple tracking-widest uppercase">{selectedCase.subtitle}</span>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="inline-block px-2 py-0.5 bg-red-150 text-red-650 rounded text-[8px] font-black uppercase tracking-wider">
                        Độ khó: {selectedCase.difficulty}
                      </span>
                      <span className="block text-[8px] text-brand-gray mt-0.5 font-bold">{selectedCase.category}</span>
                    </div>
                  </div>

                  {/* HTML render of specific slide */}
                  <div className="py-1">
                    {selectedCase.content}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                <div className="text-xs">
                  <span className="text-gray-400 font-bold block">Học phí ưu đãi:</span>
                  <span className="text-2xl font-black text-white">499k <span className="text-xs font-normal text-gray-500">/người/buổi</span></span>
                </div>
                <a
                  href={REGISTRATION_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-green hover:bg-brand-green/90 text-brand-black px-5 py-3 rounded-xl font-extrabold text-xs shadow-md transition-all flex items-center gap-1.5"
                >
                  Đăng ký ngay <ChevronRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== PART 3: TESTIMONIAL, ACHIEVEMENTS & FEEDBACK ==================== */}
        <section id="part-3-testimonials-achievements" className="space-y-10">
          
          {/* Header */}
          <div className="text-left">
            <span className="px-3.5 py-1.5 bg-brand-green/10 text-brand-green rounded-full text-xs font-black uppercase tracking-wider mb-3 inline-block">
              Kết quả đột phá & Danh Tiếng 🚀
            </span>
            <h2 className="text-3xl font-nunito font-black text-brand-black">Testimonials, Achievements & Feedback</h2>
            <p className="text-brand-gray text-sm font-semibold max-w-2xl leading-relaxed mt-1">
              Hành trình đồng hành cùng học viên vượt qua các kỳ thi tuyển sinh đỉnh cao. Khám phá những thành thành tích nổi bật của đội ngũ Mentor và phản hồi thực tế từ những bạn trúng tuyển.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* COLUMN 1: Mentor Achievements & Accolades (FTU & Competitions) */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-5 bg-gradient-to-br from-brand-purple to-indigo-600 rounded-[2.5rem] p-6 text-white shadow-brand flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-2.5 pb-3 border-b border-white/15">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Trophy className="text-brand-yellow" size={18} />
                  </div>
                  <div>
                    <h3 className="font-nunito font-black text-lg text-white">Mentor Achievements</h3>
                    <p className="text-[10px] text-brand-yellow uppercase tracking-widest font-black">Thành tích chiến hữu xuất sắc</p>
                  </div>
                </div>

                <p className="text-xs text-indigo-50 font-semibold leading-relaxed">
                  Mạng lưới Mentor không chỉ có kinh nghiệm phỏng vấn sâu rộng mà còn là những Quán quân, Á quân kỳ cựu bước ra từ các giải đấu lớn nhất tại Việt Nam.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    "National Runner up of HSBC Case Competition 🥈",
                    "Champion of The A Program 🏆",
                    "Runner-up of VNG Product Case Challenge 🥈",
                    "Champion of G'contest - Data Analytics 🥇",
                    "Case partners / Mentors of FTU Career Fair & other domestic/global competitions 💼"
                  ].map((ach, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 bg-white/5 border border-white/10 rounded-xl p-3 hover:bg-white/10 transition-all duration-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow mt-1.5 shrink-0" />
                      <span className="text-xs font-bold leading-relaxed">{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  <div className="w-8 h-8 rounded-full bg-brand-green text-brand-black text-[9px] font-black flex items-center justify-center border border-white">FTU</div>
                  <div className="w-8 h-8 rounded-full bg-brand-yellow text-brand-black text-[9px] font-black flex items-center justify-center border border-white">HSBC</div>
                  <div className="w-8 h-8 rounded-full bg-brand-purple text-white text-[9px] font-black flex items-center justify-center border border-white">IC</div>
                </div>
                <span className="text-[10px] text-indigo-150 font-bold">Đối tác thiết lập học trình cùng FTU, NEU & Career Fair</span>
              </div>
            </motion.div>

            {/* COLUMN 2: 50+ Mentees Offers & Chat Screenshot Replica Hub */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-7 bg-brand-white border-2 border-brand-gray-lt rounded-[2.5rem] p-6 shadow-brand flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between flex-wrap gap-2 pb-3 border-b border-brand-gray-lt">
                  <div>
                    <h3 className="font-nunito font-black text-xl text-brand-black flex items-center gap-1.5">
                      <span className="w-2 h-4 bg-brand-green rounded-sm block" />
                      Mentees Success Gallery
                    </h3>
                    <p className="text-xs font-bold text-brand-gray mt-0.5">
                      50+ mentees proceeding to next rounds & getting job offers from Shopee, Deloitte, Perfetti Van Melle,...
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-brand-green/10 text-brand-green border border-brand-green/20 rounded-full text-[10px] font-black uppercase">
                    50+ OFFERS 🎓
                  </span>
                </div>

                <p className="text-xs font-bold text-brand-black">
                  Lựa chọn học viên tiêu biểu bên dưới để xem trực quan phản hồi & Email trúng tuyển thực tế (replicas of attachments):
                </p>

                {/* Tabs to select success screenshots */}
                <div className="grid grid-cols-2 gap-1.5 mb-2">
                  {SUCCESS_FEEDBACKS.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveFeedback(item.id)}
                      className={`px-2.5 py-2 text-[11px] font-black uppercase tracking-wider rounded-xl transition-all border flex items-center gap-1 justify-center ${
                        activeFeedback === item.id 
                          ? 'bg-brand-purple/10 text-brand-purple border-brand-purple/30 font-black shadow-inner' 
                          : 'bg-brand-bg/50 text-brand-gray border-brand-gray-lt hover:bg-brand-bg'
                      }`}
                    >
                      <span className="text-xs shrink-0">{item.headerEmoji}</span>
                      <span className="truncate">{item.title.split(' ')[0] + ' ' + (item.title.split(' ')[1] || '')}</span>
                    </button>
                  ))}
                </div>

                {/* Interactive Display of Replicated Screenshots */}
                <div className="bg-brand-bg/40 border-2 border-brand-gray-lt rounded-2xl p-4 min-h-[300px] flex flex-col justify-between hover:shadow-inner transition-shadow">
                  <div className="flex justify-between items-center gap-2 mb-3 pb-2 border-b border-brand-gray-lt/80">
                    <span className="text-[11px] font-black text-brand-black flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                      {selectedFeedback.title}
                    </span>
                    <span className={`inline-block px-2.5 py-0.5 border text-[9px] font-black rounded-lg ${selectedFeedback.tagColor}`}>
                      {selectedFeedback.user}
                    </span>
                  </div>

                  <div className="flex-1 py-1">
                    {selectedFeedback.content}
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-brand-gray-lt flex items-center justify-between flex-wrap gap-3">
                <span className="text-xs font-bold text-brand-purple flex items-center gap-1.5">
                  <Sparkles size={13} className="animate-pulse-custom" />
                  Mentees 1000/10đ Hài Lòng & Tự Tin Vượt Bậc
                </span>
                
                <a
                  href={REGISTRATION_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-black hover:bg-brand-black/90 text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
                >
                  Nhận tư vấn ngay <ArrowRight size={13} />
                </a>
              </div>
            </motion.div>

          </div>
        </section>

      </div>
    </div>
  );
};
