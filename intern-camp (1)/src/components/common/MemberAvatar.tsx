import React, { useState } from 'react';

export const MemberAvatar = ({ src, name }: { src: string; name: string }) => {
  const [failed, setFailed] = useState(false);
  const initials = name.trim().split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase();

  if (!src || failed) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-brand-purple to-[#7c3aed] flex items-center justify-center">
        <span className="font-nunito font-black text-white text-3xl">{initials}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={name}
      className="w-full h-full object-cover"
      onError={() => setFailed(true)}
      referrerPolicy="no-referrer"
    />
  );
};
