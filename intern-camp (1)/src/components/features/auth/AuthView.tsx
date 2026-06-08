import React from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ChevronRight, 
  X, 
  UserPlus, 
  CheckCircle2 
} from 'lucide-react';
import { AuthMode } from '../../../types';

interface AuthViewProps {
  authMode: AuthMode;
  setAuthMode: (m: AuthMode) => void;
  email: string;
  setEmail: (e: string) => void;
  password: string;
  setPassword: (p: string) => void;
  confirmPassword: string;
  setConfirmPassword: (p: string) => void;
  name: string;
  setName: (n: string) => void;
  authLoading: boolean;
  authError: string;
  setAuthError: (e: string) => void;
  showPassword: boolean;
  setShowPassword: (s: boolean) => void;
  handleLogin: (e: React.FormEvent) => void;
  handleRegister: (e: React.FormEvent) => void;
  handleResetPassword: (e: React.FormEvent) => void;
  handleResendVerification: () => void;
  handleCheckStatus: () => void;
  onLogout: () => void;
}

export const AuthView = ({
  authMode,
  setAuthMode,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  name,
  setName,
  authLoading,
  authError,
  setAuthError,
  showPassword,
  setShowPassword,
  handleLogin,
  handleRegister,
  handleResetPassword,
  handleResendVerification,
  handleCheckStatus,
  onLogout
}: AuthViewProps) => {
  return (
    <div className="min-h-screen bg-brand-bg flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-brand-purple rounded-2xl flex items-center justify-center text-3xl mx-auto shadow-xl shadow-brand-purple/20 mb-4 animate-float">
            🌱
          </div>
          <h1 className="font-nunito font-black text-3xl text-brand-black tracking-tight">INTERN<span className="text-brand-purple">CAMP</span></h1>
          <p className="text-brand-gray font-bold text-sm mt-2">Nền tảng thực tập hàng đầu cho sinh viên</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[40px] shadow-2xl shadow-brand-purple/10 border-2 border-brand-gray-lt p-8 lg:p-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10">
            {authMode === 'verify' ? (
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-brand-purple/10 text-brand-purple rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <Mail size={32} />
                </div>
                <h3 className="font-nunito font-black text-2xl text-brand-black">Xác thực Email 📧</h3>
                <div className="bg-brand-bg p-5 rounded-2xl border-2 border-brand-gray-lt text-sm font-semibold text-brand-gray leading-relaxed text-left">
                  We have sent you a verification email to <span className="text-brand-purple font-black">{email}</span>. <br />
                  Please verify it and log in to continue. <br />
                  <span className="text-brand-purple font-black text-base mt-2 block animate-pulse">⚠️ Please check your spam email too!</span>
                </div>
                
                {authError && (
                  <div className="bg-red-50 text-red-500 text-xs font-bold p-4 rounded-xl border border-red-100 flex items-center gap-2">
                     <X size={14} className="shrink-0" /> {authError}
                  </div>
                )}

                <div className="space-y-3 pt-2">
                  <button 
                    onClick={() => { setAuthMode('login'); setAuthError(''); }}
                    className="w-full bg-brand-purple text-white font-black py-4 rounded-2xl shadow-xl shadow-brand-purple/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                  >
                    Login <ChevronRight size={18} />
                  </button>

                  <button 
                    onClick={handleCheckStatus}
                    disabled={authLoading}
                    className="w-full bg-brand-bg text-brand-purple font-black py-4 rounded-2xl border-2 border-brand-purple/10 hover:bg-brand-purple/5 transition-all flex items-center justify-center gap-2"
                  >
                    {authLoading ? (
                      <div className="w-5 h-5 border-2 border-brand-purple border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>I have already verified</>
                    )}
                  </button>
                  
                  <div className="flex gap-4 justify-center pt-2">
                    <button 
                      onClick={handleResendVerification}
                      disabled={authLoading}
                      className="text-brand-purple text-xs font-bold hover:underline"
                    >
                      Resend Email
                    </button>
                    <button 
                      onClick={onLogout}
                      className="text-brand-gray text-xs font-bold hover:underline"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : authMode === 'reset' ? (
              <form className="space-y-6" onSubmit={handleResetPassword}>
                <div className="mb-8">
                  <h3 className="font-nunito font-black text-2xl text-brand-black">Quên mật khẩu? 🔑</h3>
                  <p className="text-brand-gray font-bold text-sm mt-1">Nhập email của bạn để nhận liên kết đặt lại mật khẩu</p>
                </div>

                <div>
                  <label className="block text-[10px] font-extrabold uppercase tracking-widest text-brand-gray mb-1.5 ml-1">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray" size={18} />
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-brand-bg border-2 border-brand-gray-lt rounded-2xl pl-12 pr-5 py-4 font-bold text-sm outline-none focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/10 transition-all placeholder:text-brand-gray/40"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {authError && (
                  <div className="bg-red-50 text-red-500 text-xs font-bold p-4 rounded-2xl border border-red-100 flex items-center gap-2">
                     <X size={14} className="shrink-0" /> {authError}
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={authLoading}
                  className="w-full bg-brand-purple text-white font-black py-4 rounded-2xl shadow-xl shadow-brand-purple/30 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {authLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>Gửi liên kết đặt lại <ChevronRight size={18} /></>
                  )}
                </button>

                <div className="text-center pt-6 border-t border-brand-gray-lt">
                  <button 
                    type="button"
                    onClick={() => { setAuthMode('login'); setAuthError(''); }}
                    className="text-xs font-bold text-brand-gray hover:text-brand-purple transition-all"
                  >
                    Quay lại <span className="text-brand-purple underline underline-offset-4">Đăng nhập</span>
                  </button>
                </div>
              </form>
            ) : authMode === 'resetSuccess' ? (
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-brand-purple/10 text-brand-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="font-nunito font-black text-2xl text-brand-black">Đã gửi liên kết! 📧</h3>
                <div className="bg-brand-bg p-5 rounded-2xl border-2 border-brand-gray-lt text-sm font-semibold text-brand-gray leading-relaxed text-left">
                  Chúng tôi đã gửi một liên kết đặt lại mật khẩu đến địa chỉ: <br />
                  <span className="text-brand-purple font-black">{email}</span>. <br />
                  Vui lòng kiểm tra hộp thư đến và làm theo hướng dẫn. <br />
                  <span className="text-brand-purple font-black text-base mt-2 block animate-pulse">⚠️ Please check your spam email too!</span>
                </div>
                <button 
                  onClick={() => { setAuthMode('login'); setAuthError(''); }}
                  className="w-full bg-brand-purple text-white font-black py-4 rounded-2xl shadow-xl shadow-brand-purple/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  Quay lại Đăng nhập <ChevronRight size={18} />
                </button>
              </div>
            ) : authMode === 'login' ? (
              <form className="space-y-6" onSubmit={handleLogin}>
                <div className="mb-8">
                  <h3 className="font-nunito font-black text-2xl text-brand-black">Chào mừng trở lại! 👋</h3>
                  <p className="text-brand-gray font-bold text-sm mt-1">Đăng nhập để xem hàng ngàn vị trí thực tập</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-extrabold uppercase tracking-widest text-brand-gray mb-1.5 ml-1">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray" size={18} />
                      <input 
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-brand-bg border-2 border-brand-gray-lt rounded-2xl pl-12 pr-5 py-4 font-bold text-sm outline-none focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/10 transition-all placeholder:text-brand-gray/40"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-[10px] font-extrabold uppercase tracking-widest text-brand-gray mb-1.5 ml-1">Mật khẩu</label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray" size={18} />
                      <input 
                        type={showPassword ? "text" : "password"} 
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-brand-bg border-2 border-brand-gray-lt rounded-2xl pl-12 pr-12 py-4 font-bold text-sm outline-none focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/10 transition-all placeholder:text-brand-gray/40"
                        placeholder="••••••••"
                      />
                      <button 
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-gray hover:text-brand-purple transition-colors"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                    <div className="text-right mt-2 px-1">
                      <button 
                        type="button"
                        onClick={() => { setAuthMode('reset'); setAuthError(''); }}
                        className="text-xs font-bold text-brand-gray hover:text-brand-purple transition-all"
                      >
                        Quên mật khẩu?
                      </button>
                    </div>
                  </div>
                </div>

                {authError && (
                  <div className="bg-red-50 text-red-500 text-xs font-bold p-4 rounded-2xl border border-red-100 flex items-center justify-between gap-2">
                     <span className="flex items-center gap-2 flex-1">
                      <X size={14} className="shrink-0" /> {authError}
                    </span>
                    {authError.includes('Sign in?') && (
                      <button 
                        type="button"
                        onClick={() => setAuthMode('login')}
                        className="text-brand-purple hover:underline underline-offset-4"
                      >
                        Sign in
                      </button>
                    )}
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={authLoading}
                  className="w-full bg-brand-purple text-white font-black py-4 rounded-2xl shadow-xl shadow-brand-purple/30 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-8"
                >
                  {authLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>Đăng nhập ngay <ChevronRight size={18} /></>
                  )}
                </button>

                <div className="text-center mt-8 pt-8 border-t border-brand-gray-lt">
                  <p className="text-xs font-bold text-brand-gray mb-4">
                    Chưa có tài khoản thành viên?
                  </p>
                  <button 
                    type="button"
                    onClick={() => { setAuthMode('register'); setAuthError(''); }}
                    className="w-full bg-brand-bg text-brand-purple font-black py-4 rounded-2xl border-2 border-brand-purple/20 hover:bg-brand-purple/10 transition-all flex items-center justify-center gap-2"
                  >
                    <UserPlus size={18} /> Đăng ký tài khoản mới
                  </button>
                </div>
              </form>
            ) : (
              <form className="space-y-6" onSubmit={handleRegister}>
                <div className="mb-6">
                  <h3 className="font-nunito font-black text-2xl text-brand-black">Tham gia ngay! 🚀</h3>
                  <p className="text-brand-gray font-bold text-sm mt-1">Cơ hội thực tập tốt nhất đang chờ bạn</p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-[10px] font-extrabold uppercase tracking-widest text-brand-gray mb-1.5 ml-1">Họ tên</label>
                    <input 
                      type="text" 
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-brand-bg border-2 border-brand-gray-lt rounded-2xl px-5 py-4 font-bold text-sm outline-none focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/10 transition-all"
                      placeholder="Nguyễn Văn A"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-extrabold uppercase tracking-widest text-brand-gray mb-1.5 ml-1">Email</label>
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-brand-bg border-2 border-brand-gray-lt rounded-2xl px-5 py-4 font-bold text-sm outline-none focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/10 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-extrabold uppercase tracking-widest text-brand-gray mb-1.5 ml-1">Mật khẩu</label>
                    <input 
                      type="password" 
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-brand-bg border-2 border-brand-gray-lt rounded-2xl px-5 py-4 font-bold text-sm outline-none focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/10 transition-all"
                      placeholder="••••••••"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-extrabold uppercase tracking-widest text-brand-gray mb-1.5 ml-1">Nhập lại mật khẩu</label>
                    <input 
                      type="password" 
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full bg-brand-bg border-2 border-brand-gray-lt rounded-2xl px-5 py-4 font-bold text-sm outline-none focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/10 transition-all"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                {authError && (
                  <div className="bg-red-50 text-red-500 text-xs font-bold p-4 rounded-2xl border border-red-100 flex items-center justify-between gap-2">
                    <span className="flex items-center gap-2 flex-1">
                      <X size={14} className="shrink-0" /> {authError}
                    </span>
                    {authError.includes('Sign in?') && (
                      <button 
                        type="button"
                        onClick={() => setAuthMode('login')}
                        className="text-brand-purple hover:underline underline-offset-4"
                      >
                        Sign in
                      </button>
                    )}
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={authLoading}
                  className="w-full bg-brand-purple text-white font-black py-4 rounded-2xl shadow-xl shadow-brand-purple/30 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-4"
                >
                  {authLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>Hoàn tất đăng ký 🚀</>
                  )}
                </button>

                <div className="text-center pt-6 border-t border-brand-gray-lt">
                  <button 
                    type="button"
                    onClick={() => { setAuthMode('login'); setAuthError(''); }}
                    className="text-xs font-bold text-brand-gray hover:text-brand-purple transition-all"
                  >
                    Đã có tài khoản? <span className="text-brand-purple underline underline-offset-4">Đăng nhập ngay</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
