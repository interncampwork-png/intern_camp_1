import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

import { 
  GraduationCap, 
  BookOpen, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Calculator, 
  Lightbulb, 
  BarChart3, 
  AlertTriangle, 
  Eye, 
  HelpCircle, 
  CheckCircle2,
  TrendingUp,
  Award
} from 'lucide-react';

export const CaseStudiesPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  // Big Mountain Resort Case Study Data
  const caseSteps = [
    {
      title: "Context & Problem",
      subtitle: "Bối cảnh & Đề bài kinh doanh",
      icon: <HelpCircle className="text-blue-500" size={20} />,
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-sm text-brand-black font-semibold leading-relaxed">
            <span className="font-bold text-blue-600 block mb-1">🎯 Đề bài từ CEO Many Mountains:</span>
            Many Mountains là tập đoàn sở hữu chuỗi khu nghỉ dưỡng núi tuyết lớn tại Bắc Mỹ & Châu Âu. Để mở rộng quy mô, CEO đang cân nhắc mua lại đối thủ cạnh tranh là <strong className="text-black font-extrabold">Big Mountain Resort</strong> với mức giá đề xuất từ bên bán là <strong className="text-brand-purple font-extrabold">$500 triệu USD</strong>.
            <p className="mt-2 text-brand-gray text-xs font-bold font-mono">Họ có nên mua lại với giá này hay không? Và đề xuất mức giá mua phù hợp?</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs bg-brand-bg rounded-2xl p-4 border border-brand-gray-lt/50">
            <div>
              <h5 className="font-bold text-brand-black mb-1.5 border-b pb-0.5 border-brand-gray-lt">🏢 Bên Mua (Many Mountains)</h5>
              <ul className="space-y-1 text-brand-gray list-disc pl-4 font-semibold">
                <li>Sở hữu 12 khu nghỉ tuyết cao cấp</li>
                <li>Mô hình dịch vụ chất lượng vượt trội</li>
                <li>Đang tích lũy sẵn nguồn vốn $1 tỷ USD</li>
                <li>Mục tiêu: Đột phá danh tiếng & doanh thu</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-brand-black mb-1.5 border-b pb-0.5 border-brand-gray-lt">⛰️ Mục Tiêu (Big Mountain)</h5>
              <ul className="space-y-1 text-brand-gray list-disc pl-4 font-semibold">
                <li>Khu trượt tuyết nổi bật số 1 Bắc Mỹ</li>
                <li>Trải nghiệm trượt tuyết tuyết hảo, đa dạng</li>
                <li>Vốn thuộc quỹ Private Equity nắm giữ</li>
                <li>Đang tìm kiếm đường lui thu hồi vốn đầu tư</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      answerTitle: "Trụ cột phân tích gợi ý (Framework)",
      answer: (
        <div className="space-y-3 text-xs text-brand-black font-semibold">
          <p className="text-brand-gray leading-relaxed mb-2">Để tư vấn cho CEO Many Mountains, một ứng viên Consulting xuất sắc cần phân tích theo 3 trụ cột cốt lõi:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-amber-50/50 p-3 rounded-xl border border-amber-100">
              <span className="font-bold text-amber-600 block mb-1">1. Đàn định giá Độc Lập</span>
              Phân tích cơ cấu doanh thu từ vé, thẻ mùa vụ, chi phí cố định của Big Mountain để định chuẩn giá trị tối đa hiện tại.
            </div>
            <div className="bg-emerald-50/50 p-3 rounded-xl border border-emerald-100">
              <span className="font-bold text-emerald-600 block mb-1">2. Giá trị cộng hưởng (Synergies)</span>
              Mức giảm chi phí tối ưu khi vận hành chung mảng marketing/quản trị, và phát triển các nguồn doanh thu trái mùa (mùa hè).
            </div>
            <div className="bg-brand-purple/5 p-3 rounded-xl border border-brand-purple/10">
              <span className="font-bold text-brand-purple block mb-1">3. Khả năng & Rủi rỡ</span>
              Các quy định pháp lý cạnh tranh, sự ăn khớp về văn hóa dịch vụ và kế hoạch chuyển giao nhân sự.
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Step 1: Structuring",
      subtitle: "Xây dựng khung logic giải quyết",
      icon: <Award className="text-amber-500" size={20} />,
      content: (
        <div className="space-y-3">
          <span className="text-xs font-bold text-brand-purple uppercase">Câu hỏi phỏng vấn:</span>
          <p className="text-sm font-bold text-brand-black">Bạn sẽ cấu trúc hóa hướng tiếp cận vấn đề này như thế nào để trả lời được câu hỏi $500M có đáng đầu tư hay không?</p>
          <div className="bg-brand-bg/50 rounded-xl p-4 border border-brand-gray-lt text-xs leading-relaxed font-semibold text-brand-gray">
            💡 <strong className="text-brand-black">Mẹo làm bài:</strong> Đừng vội vàng đi vào tính toán con số ngay lập tức. Hãy chỉ ra cho người phỏng vấn cấu trúc chiến lược của bạn toàn diện nhất, phân tách rõ giá trị độc lập và các tiềm năng cộng sinh.
          </div>
        </div>
      ),
      answerTitle: "Khung giải pháp (Possible Structure Answer)",
      answer: (
        <div className="space-y-2 text-xs leading-relaxed font-semibold text-brand-black">
          <p className="text-brand-purple font-bold">✓ Cấu trúc chiến lược chuẩn BCG / McKinsey:</p>
          <ol className="list-decimal pl-4 space-y-2 text-brand-gray text-[11px]">
            <li>
              <strong className="text-brand-black">Giá trị nguyên bản (Standalone-value):</strong>
              <ul className="list-disc pl-4 mt-0.5 space-y-0.5">
                <li>Tiềm năng doanh thu: Số lượng khách trượt tuyết (skier-days) & Mức chi trung bình mỗi ngày (Vé, dịch vụ ăn uống, thiết bị).</li>
                <li>Chi phí hoạt động: Chi phí duy trì hạ tầng tuyết nhân tạo, điện nước, cáp treo, tiếp thị & định phí vận hành.</li>
              </ul>
            </li>
            <li>
              <strong className="text-brand-black">Giá trị cộng sinh tiềm năng (Synergies):</strong>
              <ul className="list-disc pl-4 mt-0.5 space-y-0.5">
                <li>Cộng hưởng doanh thu: Khả năng bán chéo (cross-selling) thẻ combo, và tối ưu hóa lượng khách hàng trung thành từ 12 khu cũ.</li>
                <li>Cộng hưởng chi phí: Cắt giảm chi phí trùng lặp về quản trị tổng và nhân lực tiếp thị.</li>
              </ul>
            </li>
            <li>
              <strong className="text-brand-black">Đa dạng hóa danh mục (Tránh biến đổi khí hậu):</strong>
              <ul className="list-disc pl-4 mt-0.5 space-y-0.5">
                <li>Khả năng tổ chức các giải đua mùa hè, trekking, đạp xe leo núi để giải quyết bài toán thời tiết mùa đông ngày càng ngắn lại.</li>
              </ul>
            </li>
          </ol>
        </div>
      )
    },
    {
      title: "Step 2: Judgement",
      subtitle: "Phân tích số liệu biểu đồ",
      icon: <BarChart3 className="text-emerald-500" size={20} />,
      content: (
        <div className="space-y-4">
          <p className="text-xs font-bold text-brand-purple uppercase">Biểu đồ Exhibit 1: Monthly Average Skier Days (Nghìn ngày khách)</p>
          
          {/* Custom interactive CSS Bar Chart to mimic Exhibit 1 */}
          <div className="bg-brand-white border border-brand-gray-lt p-4 rounded-2xl shadow-sm">
            <h6 className="text-center font-bold text-xs text-brand-black mb-3 font-mono">Monthly Average Skier Days At Big Mountain Resort</h6>
            <div className="flex items-end justify-between h-36 gap-1 md:gap-2 px-2 border-b border-brand-gray-lt">
              {[
                { m: "T1", v: 360, color: "bg-teal-500" },
                { m: "T2", v: 360, color: "bg-teal-500" },
                { m: "T3", v: 360, color: "bg-teal-500" },
                { m: "T4", v: 200, color: "bg-teal-400" },
                { m: "T5", v: 90, color: "bg-teal-300" },
                { m: "T6", v: 0, color: "bg-gray-200" },
                { m: "T7", v: 0, color: "bg-gray-200" },
                { m: "T8", v: 0, color: "bg-gray-200" },
                { m: "T9", v: 0, color: "bg-gray-200" },
                { m: "T10", v: 30, color: "bg-teal-200" },
                { m: "T11", v: 180, color: "bg-teal-400" },
                { m: "T12", v: 220, color: "bg-teal-500" }
              ].map((item, i) => (
                <div key={i} className="flex-1 flex flex-col items-center h-full justify-end group relative">
                  {/* Tooltip on hover */}
                  <div className="absolute bottom-full mb-1 opacity-0 group-hover:opacity-100 bg-brand-black text-white text-[9px] font-bold px-1 py-0.5 rounded transition-all pointer-events-none z-20">
                    {item.v}k
                  </div>
                  <div 
                    style={{ height: `${(item.v / 400) * 100}%` }} 
                    className={`w-full ${item.color} rounded-t-md transition-all duration-500 group-hover:opacity-80`}
                  />
                  <span className="text-[9px] font-bold text-brand-gray mt-1">{item.m}</span>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-brand-gray text-center font-bold mt-2 font-mono">(Tháng 6 - Tháng 9 hoàn toàn không có khách vì thiếu tuyết)</p>
          </div>

          <p className="text-sm font-bold text-brand-black">Thông qua dữ liệu hoạt động của resort, bạn rút ra được nhận định cốt lõi nào?</p>
        </div>
      ),
      answerTitle: "Nhận định mấu chốt (Insights Extract)",
      answer: (
        <div className="space-y-2 text-xs leading-relaxed font-semibold text-brand-gray">
          <p><strong className="text-brand-black">1. Tính mùa vụ cực đối lập (Extreme Winter Seasonality):</strong> Hoạt động sầm uất quy tụ ở tháng 11 - tháng 5 năm sau. Từ tháng 6 tới tháng 9 lượng khách bằng <span className="text-red-500 font-bold">0</span> vì tuyết tan.</p>
          <p><strong className="text-brand-black">2. Định phí khổng lồ:</strong> Trong mô hình resort tuyết, khấu hao thiết bị cáp treo và chi phí duy trì vận tải luôn cố định quanh năm, việc đóng băng 4 tháng hè làm tàn phá tỷ suất sinh lời.</p>
          <p><strong className="text-brand-black">🎯 Định hướng giải pháp:</strong> Cần tận dụng tối đa cơ sở hạ tầng có sẵn (cáp treo, khách sạn, nhà hàng) để kích hoạt mô hình thể thao ngoài trời vào mùa hè.</p>
        </div>
      )
    },
    {
      title: "Step 3: Creativity",
      subtitle: "Đề xuất giải pháp doanh thu hè",
      icon: <Lightbulb className="text-yellow-500" size={20} />,
      content: (
        <div className="space-y-3">
          <span className="text-xs font-bold text-brand-purple uppercase">Câu hỏi động não (Brainstorm & Creativity):</span>
          <p className="text-sm font-bold text-brand-black">Hãy đề xuất các giải pháp khả thi nhất để sinh ra dòng tiền doanh thu đột phá vào 4 tháng mùa hè bị đóng băng của Big Mountain?</p>
          <p className="text-xs text-brand-gray leading-relaxed font-semibold bg-brand-bg rounded-xl p-3 border border-brand-gray-lt">
            Hãy gom các ý tưởng sáng tạo của bạn thành hai cụm logic rõ ràng: (1) Sử dụng tài sản hiện hữu không cần đầu tư thêm nhiều, và (2) Xây dựng mới để mở khóa năng lực dài hạn.
          </p>
        </div>
      ),
      answerTitle: "Cơ cấu ý tưởng sáng tạo (Structured Brainstorming)",
      answer: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-semibold leading-relaxed">
          <div className="bg-amber-50/40 p-3 rounded-2xl border border-amber-100">
            <span className="font-bold text-amber-800 block mb-1">💡 Nhóm 1: Tối ưu tài sản sẵn có</span>
            <ul className="list-disc pl-4 space-y-1 text-brand-gray mt-1 text-[11px]">
              <li>Tận dụng địa hình dốc cao mở đường <strong className="text-brand-black">Đạp xe địa hình (Mountain Biking)</strong> và đi bộ leo núi tự do (Hiking trail).</li>
              <li>Sử dụng hệ thống cáp treo đưa khách chiêm ngưỡng thung lũng hè.</li>
              <li>Sử dụng các nhà hàng, khu lưu trú làm địa điểm tổ chức Workshop, Team building cao cấp cho doanh nghiệp lớn.</li>
            </ul>
          </div>
          <div className="bg-blue-50/40 p-3 rounded-2xl border border-blue-100">
            <span className="font-bold text-blue-800 block mb-1">🏗️ Nhóm 2: Đầu tư thiết lập mới</span>
            <ul className="list-disc pl-4 space-y-1 text-brand-gray mt-1 text-[11px]">
              <li>Xây dựng trung tâm làm đẹp cao cấp Spa & Wellness để trị liệu thiên nhiên mùa hè.</li>
              <li>Biến núi thành điểm xuất phát của các giải đua Marathon địa hình siêu thử thách (Ironman, Trail Run).</li>
              <li>Xây dựng sòng bài (Casino) hoặc công viên trượt máng mạo hiểm trên núi.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Step 4: Numeracy",
      subtitle: "Giải bài toán tài chính phức tạp",
      icon: <Calculator className="text-brand-purple" size={20} />,
      content: (
        <div className="space-y-4">
          <div className="bg-teal-50 border border-teal-100 rounded-2xl p-4 text-xs font-semibold leading-relaxed text-brand-black">
            <span className="font-bold text-teal-700 block mb-1">📊 Tài liệu tài chính được cung cấp thêm:</span>
            <ul className="list-disc pl-4 space-y-1 text-[11px] text-brand-gray mt-1">
              <li>Doanh thu trung bình thu từ 1 khách/ngày: <strong className="text-black">$150</strong></li>
              <li>Định phí hoạt động cố định hiện tại của cả năm: <strong className="text-black">$200 triệu USD</strong></li>
              <li>Tỷ lệ chiết khấu (Discount rate) áp dụng: <strong className="text-black">20%</strong></li>
              <li>Tổng lượt khách trượt tuyết các tháng tuyết (Skier-days) cộng dồn: <strong className="text-brand-purple font-extrabold">1.8 triệu ngày</strong></li>
            </ul>
          </div>
          
          <div className="bg-brand-bg rounded-xl p-3 border border-brand-gray-lt text-xs leading-relaxed text-brand-black font-semibold">
            ❓ <strong className="text-brand-black">Câu hỏi tính toán:</strong> Hãy tính giá trị Độc Lập hiện tại (Standalone Valuation) của Big Mountain Resort dựa trên công thức nhân dòng tiền chuẩn?
          </div>
        </div>
      ),
      answerTitle: "Lời giải & Tính toán giá trị mở rộng",
      answer: (
        <div className="space-y-3 text-xs leading-relaxed font-semibold text-brand-black">
          <div className="bg-brand-bg p-3 rounded-xl border border-brand-gray-lt/50">
            <p className="font-bold mb-1">🏦 1. Tính toán giá trị nguyên bản (Standalone Value):</p>
            <div className="font-mono text-[11px] text-brand-gray pl-3 space-y-1">
              <p>• Doanh thu = 1.8 triệu lượt khách × $150 = $270 triệu USD</p>
              <p>• Lợi nhuận = Doanh thu ($270M) - Chi phí cố định ($200M) = $70 triệu USD</p>
              <p>• Giá trị độc lập = Lợi nhuận / Hệ số chiết khấu = $70M / 20% = <strong className="text-brand-black font-extrabold text-sm">$350 triệu USD</strong></p>
            </div>
            <p className="mt-2 text-red-500 font-bold font-mono text-[11px]">→ Nhận xét ban đầu: Định giá độc lập $350M bé hơn giá đề nghị $500M!</p>
          </div>

          <div className="bg-brand-bg p-3 rounded-xl border border-brand-gray-lt/50">
            <p className="font-bold mb-1">🔋 2. Tính toán giá trị cộng hưởng & Doanh thu hè:</p>
            <div className="font-mono text-[11px] text-brand-gray pl-3 space-y-1">
              <p>• Doanh thu hè = 4 tháng hè × 30 ngày × 5,000 khách/ngày × $150 = $90 triệu USD</p>
              <p>• Lợi nhuận tăng thêm từ hè = Doanh thu hè ($90M) - Chi phí vận hành phát sinh ($50M) = $40 triệu USD</p>
              <p>• Định giá mảng hè = $40M / 20% = $200 triệu USD</p>
              <p>• Định giá cộng hưởng chi phí tiết kiệm = $10M / 20% = $50 triệu USD</p>
              <p>• Trừ chi phí đầu tư hạ tầng ban đầu để mở hè: -$50 triệu USD</p>
              <p className="text-emerald-600 font-bold block mt-1.5">• Tổng định giá mới = Tối thiểu ($350M) + Mảng hè ($200M) + Tiết kiệm ($50M) - Đầu tư hè ($50M) = <strong className="text-emerald-700 font-extrabold text-sm">$550 triệu USD</strong></p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Step 5: Synthesis",
      subtitle: "Đề xuất trực tiếp gửi CEO",
      icon: <CheckCircle2 className="text-indigo-500" size={20} />,
      content: (
        <div className="space-y-3">
          <span className="text-xs font-bold text-brand-purple uppercase">Phát biểu kết nghị luận (Consultant-ready Recommendation):</span>
          <p className="text-sm font-bold text-brand-black">Với tư cách cố vấn quản trị cao cấp, bạn có khuyên CEO Many Mountains mua lại không và đề xuất chiến lược triển khai thế nào?</p>
          <div className="bg-brand-bg/50 rounded-xl p-4 border border-brand-gray-lt text-xs leading-relaxed font-semibold text-brand-gray">
            💡 <strong className="text-brand-black">Mẹo rèn luyện:</strong> Mở đầu đề xuất bằng kết luận trực diện (Có/Không), theo sau là lý do tài chính thuyết phục và các việc cần làm ngay lập tức để giảm bớt rủi ro chuyển giao.
          </div>
        </div>
      ),
      answerTitle: "Khuyến nghị chuẩn mực (Model Consulting Pitch)",
      answer: (
        <div className="space-y-3 text-xs leading-relaxed font-semibold text-brand-black">
          <div className="border-l-4 border-emerald-500 pl-4 py-1">
            <h5 className="font-extrabold text-brand-black text-sm">💡 KHUYẾN NGHỊ: ĐỒNG Ý MUA LẠI VỚI GIÁ KHẤU TRỪ TỪ $450M - $480M</h5>
          </div>
          <p className="text-brand-gray text-[11px] leading-normal font-medium">Bản pitch đề xuất bao gồm 3 luận điểm cốt lõi:</p>
          <div className="space-y-2 text-[11px] text-brand-gray">
            <p>1. <strong className="text-brand-black">Thăng hạng dòng tiền:</strong> Giá trị tối thiểu của Big Mountain đạt <strong className="text-brand-purple">$550M</strong> khi tích cực cải tiến vận hành du lịch hè & cắt giảm chi phí thừa. Chi phí mua lại đề nghị $500M hoàn toàn tạo ra giá trị gia tăng thặng dư dương ròng $50M.</p>
            <p>2. <strong className="text-brand-black">Hạn chế rủi ro mùa vụ:</strong> Mô hình đạp xe địa hình (Mountain Biking) dự báo đem lại 600K khách/mùa, giúp giải quyết hoàn toàn rủi ro thời tiết ấm lên của hiện tượng nóng lên toàn cầu.</p>
            <p>3. <strong className="text-brand-black">Khả năng chi trả tuyệt vời:</strong> Tập đoàn sẵn có túi tài chính $1 tỷ USD nhàn rỗi, không cần vay nợ chịu lãi suất cao để mua đứt tài sản.</p>
          </div>
        </div>
      )
    }
  ];

  const handleNext = () => {
    if (activeStep < caseSteps.length - 1) {
      setActiveStep(prev => prev + 1);
      setShowAnswer(false);
    }
  };

  const handlePrev = () => {
    if (activeStep > 0) {
      setActiveStep(prev => prev - 1);
      setShowAnswer(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <header className="mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center">
            <GraduationCap size={24} />
          </div>
          <div>
            <h1 className="text-3xl font-nunito font-black text-brand-black">Case Studies</h1>
            <p className="text-brand-gray font-semibold">Rèn luyện tư duy giải quyết vấn đề</p>
          </div>
        </motion.div>
      </header>

      {/* Main Intro Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-brand-white p-8 rounded-[2.5rem] border-2 border-brand-gray-lt relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="w-14 h-14 bg-brand-bg rounded-2xl flex items-center justify-center text-brand-black mb-6">
              <BookOpen size={28} />
            </div>
            <h3 className="text-3xl font-black text-brand-black mb-4">Tư vấn chuyên sâu</h3>
            <p className="text-brand-gray text-sm leading-relaxed mb-8">
              Bên dưới là làm nổi bật điểm mạnh của ứng viên với từng vị trí
            </p>
            <div className="flex items-center gap-6">
              <div>
                <div className="text-xs font-bold text-brand-gray uppercase mb-1">Giá combo</div>
                <div className="text-2xl font-black text-brand-black">chỉ từ 99k/bộ 5 case</div>
              </div>
              <a 
                href="https://docs.google.com/forms/d/1DqdGgW7BwouCV1-X73l3bMvwLKYAcn1JcPVWGPTjWus/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-4 bg-brand-black text-brand-white font-bold rounded-2xl hover:bg-brand-purple transition-all text-center inline-block animate-pulse hover:animate-none"
              >
                Mua ngay
              </a>
            </div>
          </div>
          
          <div className="absolute top-10 right-10 opacity-5 rotate-12">
            <Star size={120} fill="currentColor" />
          </div>
        </motion.div>

        <div className="flex flex-col gap-4">
          {[
            { title: 'Tư duy chiến lược', desc: 'Học cách bóc tách vấn đề thành các phần nhỏ dễ xử lý.' },
            { title: 'Dữ liệu & Con số', desc: 'Cách sử dụng data để bảo vệ lập luận trong case interview.' },
            { title: 'Cấu trúc bài giải', desc: 'Học cách structure & giải quyết các bài toán kinh doanh chuẩn consulting.' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i }}
              className="p-5 bg-brand-bg rounded-2xl border-2 border-brand-gray-lt hover:border-brand-black transition-all group"
            >
              <h4 className="font-bold text-brand-black group-hover:text-brand-purple transition-colors mb-1">{item.title}</h4>
              <p className="text-xs text-brand-gray">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* New Interactive Demo Case Study Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-brand-white border-2 border-brand-gray-lt rounded-[2.5rem] p-6 md:p-8"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b-2 border-brand-gray-lt pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Star size={12} className="text-teal-600 fill-teal-600" />
              <span>Demo Case Simulation</span>
            </div>
            <h3 className="text-2xl font-nunito font-black text-brand-black">Big Mountain Resort Case</h3>
            <p className="text-brand-gray text-xs font-semibold mt-1">Trải nghiệm cách giải Case Interview chuẩn mực của ứng viên Big 3 Management Consulting</p>
          </div>
          
          <div className="flex items-center gap-2 text-xs font-bold text-brand-gray font-mono bg-brand-bg border border-brand-gray-lt px-3 py-1.5 rounded-xl self-start md:self-auto">
            <span>Độ khó:</span>
            <span className="text-amber-600 font-extrabold uppercase">Medium</span>
          </div>
        </div>

        {/* Step Tabs Indicator */}
        <div className="flex overflow-x-auto gap-2 pb-4 mb-6 border-b border-brand-gray-lt scrollbar-none">
          {caseSteps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveStep(idx);
                setShowAnswer(false);
              }}
              className={`px-4 py-2 text-xs font-bold rounded-xl whitespace-nowrap transition-all border ${
                activeStep === idx 
                  ? "bg-brand-black text-brand-white border-brand-black shadow-sm" 
                  : "bg-brand-bg text-brand-gray border-brand-gray-lt hover:text-brand-black hover:bg-brand-gray-lt/50"
              }`}
            >
              <span className="opacity-60 mr-1.5">{idx + 1}.</span>
              {step.title.split(":")[1]?.trim() || step.title}
            </button>
          ))}
        </div>

        {/* Current Active Step Content */}
        <div className="bg-brand-bg rounded-[2rem] border border-brand-gray-lt/50 p-6 mb-6 min-h-[220px] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              {caseSteps[activeStep].icon}
              <h4 className="text-base font-black text-brand-black">{caseSteps[activeStep].title}: {caseSteps[activeStep].subtitle}</h4>
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
              >
                {caseSteps[activeStep].content}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Action buttons within current card for flow */}
          <div className="mt-8 pt-4 border-t border-brand-gray-lt/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => setShowAnswer(!showAnswer)}
              className="w-full sm:w-auto px-5 py-2.5 bg-brand-purple/10 text-brand-purple hover:bg-brand-purple hover:text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5"
            >
              <Eye size={14} />
              {showAnswer ? "Ẩn đáp án tham khảo" : "Xem gợi ý & đáp án chi tiết"}
            </button>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <button
                disabled={activeStep === 0}
                onClick={handlePrev}
                className="flex-1 sm:flex-initial p-2.5 bg-brand-white hover:bg-brand-gray-lt text-brand-black rounded-xl border border-brand-gray-lt disabled:opacity-40 disabled:hover:bg-brand-white transition-all flex items-center justify-center"
              >
                <ChevronLeft size={16} />
              </button>
              <span className="text-xs font-bold text-brand-gray font-mono px-2">
                {activeStep + 1} / {caseSteps.length}
              </span>
              <button
                disabled={activeStep === caseSteps.length - 1}
                onClick={handleNext}
                className="flex-1 sm:flex-initial p-2.5 bg-brand-white hover:bg-brand-gray-lt text-brand-black rounded-xl border border-brand-gray-lt disabled:opacity-40 disabled:hover:bg-brand-white transition-all flex items-center justify-center"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Answer Reveal Panel */}
        <AnimatePresence>
          {showAnswer && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="bg-brand-white rounded-[2rem] border-2 border-brand-purple/20 p-6 md:p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-3 bg-brand-purple/10 text-brand-purple rounded-bl-3xl text-[10px] font-black uppercase font-mono tracking-wider">
                Consultant Solution Keys
              </div>
              <h5 className="text-sm font-black text-brand-purple mb-4 flex items-center gap-1.5">
                <CheckCircle2 size={16} />
                {caseSteps[activeStep].answerTitle}
              </h5>
              <div>
                {caseSteps[activeStep].answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

