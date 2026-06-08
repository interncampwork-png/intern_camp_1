import React from 'react';
import { motion } from 'motion/react';

import { ClipboardList, Target, Zap, MessageCircle, Star, Sparkles } from 'lucide-react';

export const AssessmentTestPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <header className="mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="w-12 h-12 bg-brand-purple/10 text-brand-purple rounded-2xl flex items-center justify-center">
            <ClipboardList size={24} />
          </div>
          <div>
            <h1 className="text-3xl font-nunito font-black text-brand-black">Assessment Test</h1>
            <p className="text-brand-gray">Chinh phục vòng loại với bộ đề chuẩn</p>
          </div>
        </motion.div>
      </header>

      <div className="bg-brand-white rounded-3xl border-2 border-brand-gray-lt p-8 md:p-12 mb-12">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <div className="flex items-center gap-2 text-brand-purple mb-4">
              <Target size={20} />
              <span className="font-bold text-sm uppercase tracking-wider">Highlight Product</span>
            </div>
            <h2 className="text-4xl font-black text-brand-black mb-6">Mock Aptitude Test</h2>
            <p className="text-brand-gray leading-relaxed mb-8">
              Bộ đề Mock assessment test chuyên sâu cho vòng 1 các kỳ tuyển chọn Management Trainee (MT), Fresher, Graduate Program. Bao gôm các dạng đề GMAT, Logical, Numerical Reasoning chuẩn cấu trúc đề thi thực tế.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                'Hơn 100 câu hỏi tuyển chọn sát thực tế',
                'Giải thích chi tiết từng đáp án',
                'Mẹo làm bài nhanh và chính xác',
                'Cập nhật theo xu hướng đề thi mới nhất'
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-brand-gray font-medium">
                  <div className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Zap size={12} fill="currentColor" />
                  </div>
                  {text}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:w-72">
            <div className="bg-brand-bg rounded-2xl p-6 border-2 border-brand-gray-lt sticky top-8">
              <div className="text-sm font-bold text-brand-gray mb-1 uppercase tracking-tight">Giá trọn bộ</div>
              <div className="text-4xl font-black text-brand-black mb-6">200k</div>
              <a 
                href="https://docs.google.com/forms/d/19v5Zrtmbid-_EN92pUGfDm2KRNjPS95vlBcGEjqn88U/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-brand-purple text-white font-bold rounded-xl hover:bg-brand-purple/90 transition-all shadow-lg shadow-brand-purple/20 mb-3 text-center"
              >
                Mua ngay
              </a>
              <div className="text-[10px] text-center text-brand-gray font-medium">Thanh toán một lần, sử dụng vĩnh viễn</div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials / Mentee Feedback Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-16"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 border-b-2 border-brand-gray-lt pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles size={12} className="text-brand-purple" />
              <span>150+ Trusted Mentees</span>
            </div>
            <h3 className="text-2xl font-nunito font-black text-brand-black">Phản Hồi Từ Học Viên</h3>
            <p className="text-brand-gray text-sm font-semibold mt-1">Đánh giá thực tế từ các mentee đã rải bước thành công qua vòng Mock Test</p>
          </div>
          <div className="flex items-center gap-1 bg-brand-yellow/10 border border-brand-yellow/30 px-3 py-1.5 rounded-xl self-start md:self-auto">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-brand-yellow text-brand-yellow" />
              ))}
            </div>
            <span className="text-xs font-black text-brand-black ml-1">4.9/5 chất lượng</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Feedback Card 1 */}
          <div className="bg-brand-white rounded-3xl border-2 border-brand-gray-lt p-6 shadow-sm hover:shadow-brand transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-brand-gray-lt/50">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-brand-pink/10 text-brand-pink font-bold flex items-center justify-center text-sm border border-brand-pink/20">
                    UL
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-brand-black tracking-tight leading-none">Anonymous Unilever Mentee</h4>
                    <p className="text-[10px] text-brand-gray font-bold mt-1 text-green-500 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse" />
                      Active now
                    </p>
                  </div>
                </div>
                <div className="px-2 py-0.5 rounded bg-brand-bg text-[10px] font-bold text-brand-gray">Aptitude Candidate</div>
              </div>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <div className="bg-brand-bg rounded-2xl rounded-tl-sm p-3 text-sm text-brand-black font-semibold leading-relaxed max-w-[90%] shadow-sm border border-brand-gray-lt/30">
                    bộ mock test siêu helpful luôn anh ơi, nhờ nó mà em biết cách làm được nhiều câu, với có các câu trùng dạng nữa. Không có chắc em chết lặng 60p làm test luôn quá 🙂
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center text-[10px] text-brand-gray font-bold">
              <span>Học tập & Ôn thi MT</span>
              <span>✓ Đã xem 14:32</span>
            </div>
          </div>

          {/* Feedback Card 2 */}
          <div className="bg-brand-white rounded-3xl border-2 border-brand-gray-lt p-6 shadow-sm hover:shadow-brand transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-brand-gray-lt/50">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-brand-purple/10 text-brand-purple font-bold flex items-center justify-center text-sm border border-brand-purple/20">
                    SP
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-brand-black tracking-tight leading-none">Anonymous Shopee Mentee</h4>
                    <p className="text-[10px] text-brand-gray font-bold mt-1 text-green-500 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse" />
                      Active now
                    </p>
                  </div>
                </div>
                <div className="px-2 py-0.5 rounded bg-brand-bg text-[10px] font-bold text-brand-gray">Numerical Focused</div>
              </div>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <div className="bg-brand-bg rounded-2xl rounded-tl-sm p-3 text-sm text-brand-black font-semibold leading-relaxed max-w-[90%] shadow-sm border border-brand-gray-lt/30">
                    Dạ đúng rồi anhh bộ mock test này giúp em nhiều lắm ạ, nhờ nó em biết cách giải mấy câu data suff. Em tự ôn bằng đề cũ thì hiếm lắm mới gặp mấy dạng phổ biến trong đây.
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="bg-brand-bg rounded-2xl rounded-tl-sm p-3 text-sm text-brand-black font-semibold leading-relaxed max-w-[90%] shadow-sm border border-brand-gray-lt/30">
                    Với mấy câu numeracy + data suffcient trúng dạng hết chỉ khác số thôi í. Không có chắc em stuck mỗi câu cũng 4p 😭
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center text-[10px] text-brand-gray font-bold">
              <span>GMAT & Data Sufficiency</span>
              <span>✓ Đã xem 10:15</span>
            </div>
          </div>

          {/* Feedback Card 3 */}
          <div className="bg-brand-white rounded-3xl border-2 border-brand-gray-lt p-6 shadow-sm hover:shadow-brand transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-brand-gray-lt/50">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-green-100 text-green-600 font-bold flex items-center justify-center text-sm border border-green-200">
                    PC
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-brand-black tracking-tight leading-none">Anonymous PepsiCo Mentee</h4>
                    <p className="text-[10px] text-brand-gray font-bold mt-1 text-green-500 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse" />
                      Active now
                    </p>
                  </div>
                </div>
                <div className="px-2 py-0.5 rounded bg-brand-bg text-[10px] font-bold text-brand-gray">Big Corps Track</div>
              </div>
              <div className="space-y-3 flex flex-col">
                <div className="flex justify-end">
                  <div className="bg-brand-purple text-white rounded-2xl rounded-tr-sm p-3 text-sm font-semibold leading-relaxed max-w-[85%] shadow-sm">
                    Trong mock test có câu nào trùng dạng k em?
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="bg-brand-bg rounded-2xl rounded-tl-sm p-3 text-sm text-brand-black font-semibold leading-relaxed max-w-[85%] shadow-sm border border-brand-gray-lt/30">
                    Dạ cũng có á anh. Mà ko trùng thì cũng giống dạng trong mock nên làm cũng nhanh. Trộm vía =)))
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-brand-purple text-white rounded-2xl rounded-tr-sm p-3 text-sm font-semibold leading-relaxed max-w-[85%] shadow-sm">
                    ok ok. Làm xong tự tin k em?
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="bg-brand-bg rounded-2xl rounded-tl-sm p-3 text-sm text-brand-black font-semibold leading-relaxed max-w-[85%] shadow-sm border border-brand-gray-lt/30">
                    Dạ cũng tự tin =)) nhưng mà cũng hồi hộp đợi kết quả
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center text-[10px] text-brand-gray font-bold">
              <span>Độ tương tự đề thực tế</span>
              <span>✓ Đã xem 18:45</span>
            </div>
          </div>

          {/* Feedback Card 4 */}
          <div className="bg-brand-white rounded-3xl border-2 border-brand-gray-lt p-6 shadow-sm hover:shadow-brand transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-brand-gray-lt/50">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-yellow-100 text-yellow-600 font-bold flex items-center justify-center text-sm border border-yellow-200">
                    NL
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-brand-black tracking-tight leading-none">Anonymous Nestlé Mentee</h4>
                    <p className="text-[10px] text-brand-gray font-bold mt-1 text-green-500 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse" />
                      Active now
                    </p>
                  </div>
                </div>
                <div className="px-2 py-0.5 rounded bg-brand-bg text-[10px] font-bold text-brand-gray">Graduate Program</div>
              </div>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <div className="bg-brand-bg rounded-2xl rounded-tl-sm p-3 text-sm text-brand-black font-semibold leading-relaxed max-w-[90%] shadow-sm border border-brand-gray-lt/30">
                    daaa, nch em rất cảm ơn anh chị em học đc nhiu cái ạ
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="bg-brand-bg rounded-2xl rounded-tl-sm p-3 text-sm text-brand-black font-semibold leading-relaxed max-w-[90%] shadow-sm border border-brand-gray-lt/30">
                    kiểu đó h chưa bao h học ôn mấy cái bài toán v hết nên em biết ơn he he để em luyện thêm cho giỏi thi thêm bên khác ah
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center text-[10px] text-brand-gray font-bold">
              <span>Phân tích & Logical</span>
              <span>✓ Đã xem 21:05</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
