import React from 'react';
import { motion } from 'motion/react';
import { FileText, CheckCircle2, MessageSquare, Award, Sparkles, ShieldCheck } from 'lucide-react';
import { REGISTRATION_FORM_URL } from '../constants';
import lanNhiAvatar from '../assets/images/lanni_new_avatar_1780227209816.png';

const renderBrandLogo = (name: string) => {
  switch (name) {
    case "Unilever":
      return (
        <div className="flex items-center gap-1.5 py-1">
          {/* Unilever stylish U */}
          <svg className="w-5 h-5 text-[#1F3E90] shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 3v9c0 4.418 3.582 8 8 8s8-3.582 8-8V3h-2.5v9c0 3.038-2.462 5.5-5.5 5.5S6.5 15.038 6.5 12V3H4z" />
            <circle cx="12" cy="11" r="1.5" />
            <circle cx="12" cy="6" r="1" />
            <circle cx="9" cy="8" r="1" />
            <circle cx="15" cy="8" r="1" />
          </svg>
          <span className="text-[10px] uppercase font-serif tracking-widest text-[#1F3E90] font-black">Unilever</span>
        </div>
      );
    case "Masan Group":
      return (
        <div className="flex items-center gap-1.5 py-1">
          <span className="text-[10px] font-black tracking-tight text-[#0F4C81] uppercase font-sans">Masan Group</span>
          {/* Overlapping blue elements */}
          <div className="flex gap-0.5 shrink-0">
            <div className="w-2.5 h-3 bg-[#0F4C81] rounded-sm transform -skew-x-12 translate-x-0.5"></div>
            <div className="w-2 h-3.5 bg-blue-400 rounded-sm transform -skew-x-12"></div>
          </div>
        </div>
      );
    case "Heineken":
      return (
        <div className="flex items-center gap-1.5 py-1">
          <svg className="w-3.5 h-3.5 text-red-600 shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
          </svg>
          <span className="text-[10px] font-extrabold tracking-wider text-[#008240] font-sans">Heineken</span>
        </div>
      );
    case "McKinsey & Company":
      return (
        <div className="flex items-center py-1">
          <span className="text-[10.5px] font-serif tracking-normal text-[#051C2C] font-bold antialiased">
            McKinsey<span className="text-blue-900 font-extrabold">&amp;</span>Company
          </span>
        </div>
      );
    case "Arthur D Little":
      return (
        <div className="flex flex-col items-start leading-none py-1">
          <span className="text-[9px] font-black tracking-widest text-[#002B49] uppercase font-sans">
            ARTHUR <span className="text-blue-500">D</span> LITTLE
          </span>
        </div>
      );
    case "Deloitte":
      return (
        <div className="flex items-center py-1">
          <span className="text-[11px] font-sans font-black tracking-normal text-black">
            Deloitte<span className="text-[#86BC25] font-black text-xs font-serif inline-block ml-0.5">.</span>
          </span>
        </div>
      );
    case "KPMG":
      return (
        <div className="flex items-center gap-[1px] py-1">
          {["K", "P", "M", "G"].map((letter, i) => (
            <div key={i} className="w-4.5 h-4.5 bg-[#00338D] text-white text-[9.5px] font-black flex items-center justify-center rounded-[1px] shadow-sm">
              {letter}
            </div>
          ))}
        </div>
      );
    case "Shopee":
      return (
        <div className="flex items-center gap-1.5 py-0.5">
          <div className="w-4.5 h-4.5 bg-[#EE4D2D] rounded-md flex items-center justify-center relative shrink-0 shadow-sm border border-orange-600/10">
            <span className="text-[8.5px] text-white font-black italic">S</span>
            <div className="absolute top-0.5 left-1.5 right-1.5 h-1 border-t border-white rounded-t-full opacity-60"></div>
          </div>
          <span className="text-[10.5px] font-black text-[#EE4D2D] tracking-tight italic font-sans">Shopee</span>
        </div>
      );
    case "ZaloPay":
      return (
        <div className="flex items-center gap-0.5 py-1">
          <span className="text-[11px] font-black tracking-tight text-[#008FE5] font-sans">Zalo</span>
          <span className="px-1.5 py-0.5 bg-[#00A859] text-white text-[7.5px] font-black rounded-md tracking-wider uppercase leading-none font-sans">Pay</span>
        </div>
      );
    case "Techcombank":
      return (
        <div className="flex items-center gap-1 py-1">
          <div className="relative w-4.5 h-4.5 shrink-0 flex items-center justify-center">
            <div className="absolute w-3 h-3 border-[1.5px] border-red-600 rotate-45 transform translate-x-[2px] translate-y-[-2px]" />
            <div className="absolute w-3 h-3 border-[1.5px] border-red-600 rotate-45 transform translate-x-[-2px] translate-y-[2px]" />
            <div className="w-2 h-2 bg-red-600 rotate-45" />
          </div>
          <span className="text-[9.5px] font-black text-[#FF0000] tracking-tighter uppercase font-sans">Techcombank</span>
        </div>
      );
    default:
      return <span className="text-xs font-bold text-brand-black">{name}</span>;
  }
};

export const CVEditingPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <header className="mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="w-12 h-12 bg-brand-purple/10 text-brand-purple rounded-2xl flex items-center justify-center">
            <FileText size={24} />
          </div>
          <div>
            <h1 className="text-3xl font-nunito font-black text-brand-black">CV Editing & Review</h1>
            <p className="text-brand-gray">Nâng cấp hồ sơ, chinh phục nhà tuyển dụng</p>
          </div>
        </motion.div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          { title: 'Tư vấn 1:1', desc: 'Phân tích điểm mạnh, điểm yếu trong CV hiện tại.' },
          { title: 'Tối ưu Keyword', desc: 'Đưa các từ khóa chuyên ngành vào CV để vượt qua bộ lọc ATS.' },
          { title: 'Thiết kế chuyên nghiệp', desc: 'Trình bày đẹp mắt, chuẩn xu hướng tuyển dụng.' }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
            className="p-6 bg-brand-white rounded-2xl border-2 border-brand-gray-lt"
          >
            <h3 className="font-bold text-brand-black mb-2">{item.title}</h3>
            <p className="text-sm text-brand-gray">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-brand-purple text-white p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 mb-16"
      >
        <div>
          <h2 className="text-2xl font-black mb-2">Dịch vụ sửa CV chuyên sâu</h2>
          <p className="text-brand-purple-lt/80 max-w-md">Chúng tôi giúp bạn tạo ra một bản CV không chỉ đẹp mà còn mang đậm dấu ấn cá nhân và chuyên nghiệp.</p>
        </div>
        <div className="text-center md:text-right">
          <div className="text-4xl font-black mb-2">149k <span className="text-sm font-normal opacity-70">/người/lần</span></div>
          <a
            href={REGISTRATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-white text-brand-purple px-8 py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all text-center"
          >
            Đăng ký ngay
          </a>
        </div>
      </motion.div>

      {/* SECTION 1: Mentor Profile & Networks */}
      <header className="mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left"
        >
          <span className="px-3.5 py-1.5 bg-brand-purple/10 text-brand-purple rounded-full text-xs font-black uppercase tracking-wider mb-3 inline-block">
            Đội ngũ chuyên nghiệp 🌿
          </span>
          <h2 className="text-2xl font-nunito font-black text-brand-black mb-2">Mentor Profile & Mạng Lưới Mentor</h2>
          <p className="text-brand-gray text-sm font-semibold">
            Đồng hành cùng đội ngũ mentor chất lượng, nắm giữ các vị trí quan trọng tại các tập đoàn lớn nhất Việt Nam.
          </p>
        </motion.div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
        {/* Mentor Profile (Lan Nhi) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-5 bg-brand-white rounded-3xl p-6 border-2 border-brand-gray-lt shadow-brand flex flex-col items-center text-center"
        >
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-brand-purple/20 mb-4 shadow-inner relative group bg-brand-bg/50">
            <img
              src={lanNhiAvatar}
              alt="Nguyen N Lan Nhi"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>

          <h3 className="font-nunito font-black text-xl text-brand-black mb-1">Nguyen N Lan Nhi</h3>
          <p className="text-brand-purple font-extrabold text-sm mb-4">Founder Intern Camp</p>

          <div className="w-full border-t border-brand-gray-lt pt-4 space-y-2.5 text-left">
            {[
              "Founder Intern Camp",
              "2026 Management Associate @ Techcombank",
              "Consulting experiences @McKinsey, ADL & KPMG",
              "Shopee Apprentice Program @Shopee"
            ].map((xp, index) => (
              <div key={index} className="flex items-start gap-2 p-2.5 rounded-xl border border-brand-gray-lt/50 bg-[#fafafa]">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-purple mt-2 shrink-0" />
                <p className="text-xs font-bold text-brand-black leading-relaxed">{xp}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mentor Networks */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-7 bg-brand-white rounded-3xl p-6 border-2 border-brand-gray-lt shadow-brand flex flex-col"
        >
          <div className="mb-6">
            <h4 className="font-nunito font-black text-base text-brand-black mb-1 flex items-center gap-2">
              <span className="w-2.5 h-5 bg-brand-green rounded-md inline-block" />
              Mạng lưới kết nối chia sẻ tri thức
            </h4>
            <p className="text-xs font-bold text-brand-gray">
              Đội ngũ mentor dày dặn kinh nghiệm đến từ các tập đoàn và tổ chức uy tín hàng đầu:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
            {[
              {
                category: "FMCG",
                color: "bg-brand-green/10 text-brand-green border-brand-green/35",
                logos: ["Unilever", "Masan Group", "Heineken"]
              },
              {
                category: "Consulting",
                color: "bg-brand-purple/10 text-brand-purple border-brand-purple/35",
                logos: ["McKinsey & Company", "Arthur D Little", "Deloitte", "KPMG"]
              },
              {
                category: "E-commerce",
                color: "bg-orange-500/10 text-orange-600 border-orange-500/35",
                logos: ["Shopee"]
              },
              {
                category: "Banking / Payment",
                color: "bg-blue-500/10 text-blue-600 border-blue-500/35",
                logos: ["ZaloPay", "Techcombank"]
              }
            ].map((cat, index) => (
              <div key={index} className="border-2 border-brand-gray-lt/70 rounded-2xl overflow-hidden bg-[#fafafa]/80 flex flex-col hover:shadow-md transition-shadow">
                <div className={`px-3 py-2 text-[10px] font-black uppercase tracking-widest text-center border-b border-brand-gray-lt/70 ${cat.color}`}>
                  {cat.category}
                </div>
                <div className="p-3.5 flex-1 flex flex-wrap gap-2 justify-center items-center bg-white/50">
                  {cat.logos.map((logo, lIndex) => (
                    <div 
                      key={lIndex} 
                      className="bg-white border-2 border-brand-gray-lt hover:border-brand-purple/20 hover:shadow-md transition-all duration-300 rounded-xl px-2.5 py-1.5 shadow-sm flex items-center justify-center min-w-[120px] max-w-full h-10 select-none"
                    >
                      {renderBrandLogo(logo)}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* SECTION 2: Testimonials & Chat screen */}
      <header className="mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left"
        >
          <span className="px-3.5 py-1.5 bg-brand-green/10 text-brand-green rounded-full text-xs font-black uppercase tracking-wider mb-3 inline-block">
            Kết quả đột phá 🚀
          </span>
          <h2 className="text-2xl font-nunito font-black text-brand-black mb-2">Chinh Phục 100+ Vòng Phỏng Vấn</h2>
          <p className="text-brand-gray text-sm font-semibold">
            Đã đồng hành hỗ trợ hàng loạt học viên chỉnh sửa CV chuyên sâu, nhận tấm vé bước tiếp vào vòng phỏng vấn.
          </p>
        </motion.div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Chat bubble Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-white border-2 border-brand-gray-lt p-5 rounded-3xl shadow-brand flex flex-col justify-between"
        >
          <div className="flex items-center gap-2.5 mb-4 pb-2 border-b border-brand-gray-lt">
            <span className="text-lg">📧</span>
            <div>
              <span className="text-xs font-black text-brand-black block">Kết Quả Phỏng Vấn</span>
              <p className="text-[10px] text-brand-purple font-extrabold uppercase tracking-wide">Nhận tin vui liền tay</p>
            </div>
          </div>
          <div className="space-y-4 flex-1 flex flex-col justify-end text-xs">
            <div className="flex flex-col items-end">
              <div className="bg-brand-purple text-white py-2 px-3 rounded-2xl rounded-tr-none max-w-[80%] font-semibold shadow-sm leading-relaxed">
                Có mail ch em
              </div>
              <span className="text-[9px] text-brand-gray mt-1 mr-1 font-bold">Mentor • Vừa mới gửi</span>
            </div>
            <div className="flex flex-col items-start">
              <div className="bg-brand-bg text-brand-black py-2.5 px-3.5 rounded-2xl rounded-tl-none max-w-[85%] font-medium leading-relaxed border border-brand-gray-lt">
                Anh muốn nghe câu trả lời là có hay không 🥺
              </div>
              <span className="text-[9px] text-brand-gray mt-1 ml-1 font-bold">Học viên</span>
            </div>
            <div className="flex flex-col items-end">
              <div className="bg-brand-purple text-white py-2 px-3 rounded-2xl rounded-tr-none max-w-[80%] font-semibold shadow-sm leading-relaxed">
                là chưa à
              </div>
              <span className="text-[9px] text-brand-gray mt-1 mr-1 font-bold">Mentor</span>
            </div>
            <div className="flex flex-col items-start">
              <div className="bg-brand-purple/5 border border-brand-purple/20 text-brand-black py-2.5 px-3.5 rounded-2xl rounded-tl-none max-w-[85%] font-black leading-relaxed">
                Coá gòiiii Vừa mới có luônnnn 🎉
              </div>
              <span className="text-[9px] text-brand-gray mt-1 ml-1 font-bold">Học viên</span>
            </div>
          </div>
        </motion.div>

        {/* Chat bubble Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-brand-white border-2 border-brand-gray-lt p-5 rounded-3xl shadow-brand flex flex-col justify-between"
        >
          <div className="flex items-center gap-2.5 mb-4 pb-2 border-b border-brand-gray-lt">
            <span className="text-lg">💡</span>
            <div>
              <span className="text-xs font-black text-brand-black block">Chỉnh sửa siêu chi tiết</span>
              <p className="text-[10px] text-brand-green font-extrabold uppercase tracking-wide">Giải đáp chuyên sâu mọi băn khoăn</p>
            </div>
          </div>
          <div className="space-y-3.5 flex-1 flex flex-col justify-end text-xs">
            <div className="flex flex-col items-end">
              <div className="bg-brand-purple text-white py-1.5 px-2.5 rounded-xl rounded-tr-none max-w-[85%] font-semibold shadow-sm text-right leading-relaxed">
                Hi em ơi, hôm nay anh thấy em có upload bản mới lên r dko
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="bg-brand-purple text-white py-1.5 px-2.5 rounded-xl rounded-tr-none max-w-[85%] font-semibold shadow-sm text-right leading-relaxed">
                Mai mentor sẽ feedback round cuối cho em nha
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="bg-brand-purple text-white py-1.5 px-2.5 rounded-xl rounded-tr-none max-w-[85%] font-semibold shadow-sm text-right leading-relaxed">
                So far em cần support thêm j k ^^ feedback mentor ntn
              </div>
              <span className="text-[9px] text-brand-gray mt-1 mr-1 font-bold">Mentor</span>
            </div>
            <div className="flex flex-col items-start">
              <div className="bg-brand-bg text-brand-black py-2.5 px-3.5 rounded-2xl rounded-tl-none max-w-[90%] font-medium border border-brand-gray-lt leading-relaxed bg-[#f9f9f9]">
                Dạ bên mình <strong className="text-brand-purple">feedback siu kĩ aaaaa</strong>, dạ cho em hỏi thêm là nếu MB Bank làm giảm thiện cảm với nhà tuyển dụng thì em có nên bỏ ra khỏi CV k ạ vì em thực tập đến tháng 6 mới xong ạ, em cảm ơn anh/chị nhìu ạaa
              </div>
              <span className="text-[9px] text-brand-gray mt-1 ml-1 font-bold">Học viên</span>
            </div>
          </div>
        </motion.div>

        {/* Chat bubble Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-brand-white border-2 border-brand-gray-lt p-5 rounded-3xl shadow-brand flex flex-col justify-between"
        >
          <div className="flex items-center gap-2.5 mb-4 pb-2 border-b border-brand-gray-lt">
            <span className="text-lg">🚀</span>
            <div>
              <span className="text-xs font-black text-brand-black block">Customize Từng Chi Tiết</span>
              <p className="text-[10px] text-orange-600 font-extrabold uppercase tracking-wide">Tăng sự tự tin vượt bậc</p>
            </div>
          </div>
          <div className="space-y-4 flex-1 flex flex-col justify-end text-xs">
            <div className="flex flex-col items-start">
              <div className="bg-brand-bg text-brand-black py-3 px-4 rounded-2xl rounded-tl-none max-w-[85%] font-medium border border-brand-gray-lt leading-relaxed">
                nma cũng cảm ơn anh chị nhiều lắm vì đã <span className="font-extrabold text-brand-purple">customize CV của em</span>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div className="bg-brand-purple/5 border border-brand-purple/30 text-brand-black py-3 px-4 rounded-2xl rounded-tl-none max-w-[85%] font-black leading-relaxed">
                ngoài ra 1 điều lớn hơn là cx cho em <span className="font-extrabold text-brand-purple">thêm tự tin 💪</span>
              </div>
              <span className="text-[9px] text-brand-gray mt-1 ml-1 font-bold">Học viên</span>
            </div>
          </div>
        </motion.div>

        {/* Chat bubble Card 4 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-brand-white border-2 border-brand-gray-lt p-5 rounded-3xl shadow-brand flex flex-col justify-between"
        >
          <div className="flex items-center gap-2.5 mb-4 pb-2 border-b border-brand-gray-lt">
            <span className="text-lg">❤️</span>
            <div>
              <span className="text-xs font-black text-brand-black block">Sự Hài Lòng Của Học Viên</span>
              <p className="text-[10px] text-red-500 font-extrabold uppercase tracking-wide">Lan tỏa tri thức quý giá</p>
            </div>
          </div>
          <div className="space-y-3 flex-1 flex flex-col justify-end text-[11px]">
            <div className="flex flex-col items-start">
              <div className="bg-brand-bg text-brand-black py-1.5 px-3 rounded-xl rounded-tl-none max-w-[80%] font-medium">
                em sẽ proceed bên này
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="bg-brand-purple text-white py-1.5 px-3 rounded-xl rounded-tr-none max-w-[70%] font-semibold">
                yeahhhhhh
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="bg-brand-purple text-white py-1.5 px-3 rounded-xl rounded-tr-none max-w-[85%] font-semibold">
                m đã quá nha bé =))))))))))
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="bg-brand-purple text-white py-1.5 px-3 rounded-xl rounded-tr-none max-w-[85%] font-semibold">
                thanks for spreading happiness hehe
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div className="bg-brand-bg text-brand-black py-1.5 px-3 rounded-xl rounded-tl-none max-w-[80%] font-bold">
                hehee and thank u for spreading the knowledge ❤️
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div className="bg-brand-bg text-brand-black py-1.5 px-3 rounded-xl rounded-tl-none max-w-[85%] font-medium">
                em sẽ cất các video đấy trong tàng thư các
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div className="bg-brand-purple/10 text-brand-purple py-1.5 px-3 rounded-xl rounded-tl-none max-w-[85%] font-black border border-brand-purple/20">
                sau truyền đời con em ^^ ❤️
              </div>
              <span className="text-[9px] text-brand-gray mt-1 ml-1 font-bold">Học viên</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

