import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Mail, 
  Camera 
} from 'lucide-react';
import { UserProfile } from '../types';

interface ProfilePageProps {
  profile: UserProfile | null;
  onUpdate: (name: string, photo: string) => Promise<boolean>;
  onDelete: () => void;
  loading: boolean;
}

export const ProfilePage = ({ 
  profile, 
  onUpdate, 
  onDelete, 
  loading 
}: ProfilePageProps) => {
  const [name, setName] = useState(profile?.name || '');
  const [photo, setPhoto] = useState(profile?.photoFileName || '');

  useEffect(() => {
    if (profile) {
      setName(profile.name);
      setPhoto(profile.photoFileName);
    }
  }, [profile]);

  if (!profile) return (
    <div className="flex flex-col items-center justify-center p-20 animate-pulse">
      <div className="w-20 h-20 bg-brand-gray-lt rounded-full mb-4" />
      <div className="h-6 w-40 bg-brand-gray-lt rounded-lg" />
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto py-10">
      <div className="mb-10 text-center">
        <h2 className="font-nunito font-black text-3xl text-brand-black">Hồ sơ của bạn</h2>
        <p className="text-brand-gray font-bold text-sm mt-2">Quản lý thông tin cá nhân và tài khoản</p>
      </div>

      <div className="bg-white rounded-[40px] shadow-2xl border-2 border-brand-gray-lt p-10 space-y-8">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-brand-purple/10 text-brand-purple rounded-full flex items-center justify-center mb-4 border-4 border-brand-purple/20">
            <Users size={40} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-brand-gray">Ảnh đại diện mặc định</span>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-[10px] font-extrabold uppercase tracking-widest text-brand-gray mb-1.5 ml-1">Email (Không thể thay đổi)</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray opacity-50" size={18} />
              <input 
                type="email" 
                disabled
                value={profile.email}
                className="w-full bg-brand-bg/50 border-2 border-brand-gray-lt rounded-2xl pl-12 pr-5 py-4 font-bold text-sm text-brand-gray opacity-70 cursor-not-allowed"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-extrabold uppercase tracking-widest text-brand-gray mb-1.5 ml-1">Họ tên</label>
            <div className="relative">
              <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray" size={18} />
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-brand-bg border-2 border-brand-gray-lt rounded-2xl pl-12 pr-5 py-4 font-bold text-sm outline-none focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/10 transition-all placeholder:text-brand-gray/40"
                placeholder="Nhập họ tên của bạn"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-extrabold uppercase tracking-widest text-brand-gray mb-1.5 ml-1">Tên file ảnh</label>
            <div className="relative">
              <Camera className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray" size={18} />
              <input 
                type="text" 
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                className="w-full bg-brand-bg border-2 border-brand-gray-lt rounded-2xl pl-12 pr-5 py-4 font-bold text-sm outline-none focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/10 transition-all placeholder:text-brand-gray/40"
                placeholder="avatar.jpg"
              />
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-gray-lt space-y-4">
          <button 
            onClick={() => onUpdate(name, photo)}
            disabled={loading}
            className="w-full bg-brand-purple text-white font-black py-4 rounded-2xl shadow-xl shadow-brand-purple/30 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : 'Cập nhật thông tin'}
          </button>

          <button 
            onClick={onDelete}
            disabled={loading}
            className="w-full bg-white text-red-500 font-extrabold py-4 rounded-2xl border-2 border-red-100 hover:bg-red-50 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
          >
            Xóa tài khoản
          </button>
        </div>
      </div>
    </div>
  );
};
