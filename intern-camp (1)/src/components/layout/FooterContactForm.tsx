import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Send } from 'lucide-react';
import { FOOTER_EMAIL_ENTRY, FOOTER_MSG_ENTRY, GOOGLE_FORM_URL } from '../../constants';

export const FooterContactForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    const params = new URLSearchParams();
    params.set(FOOTER_EMAIL_ENTRY, email);
    params.set(FOOTER_MSG_ENTRY, message);
    const url = `${GOOGLE_FORM_URL}?${params.toString()}&submit=Submit`;
    window.open(url, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setEmail('');
    setMessage('');
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <input 
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email của bạn..."
        className="w-full p-4 px-5 bg-white/5 border-2 border-white/10 rounded-xl text-xs font-semibold outline-none focus:border-brand-purple focus:bg-white/10 transition-all text-white placeholder:text-white/30"
      />
      <textarea 
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Tin nhắn..."
        className="w-full p-4 px-5 bg-white/5 border-2 border-white/10 rounded-xl text-xs font-semibold outline-none focus:border-brand-purple focus:bg-white/10 transition-all min-h-[120px] resize-none text-white placeholder:text-white/30"
      />
      <motion.button 
        type="submit"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="bg-brand-purple text-white font-nunito font-extrabold text-sm p-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-brand-purple/20 hover:bg-[#7c3aed] transition-colors"
      >
        {submitted ? <><CheckCircle2 size={16} /> Đã gửi!</> : <><Send size={16} /> Gửi ngay</>}
      </motion.button>
    </form>
  );
};
