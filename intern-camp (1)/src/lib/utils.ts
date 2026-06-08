import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const normalize = (s: string) => 
  (s || '').toLowerCase()
   .normalize("NFD")
   .replace(/[\u0300-\u036f]/g, "")
   .replace(/[_\s]/g, "");

export const resolve = (row: any, ...candidates: string[]) => {
  const normalizedCandidates = candidates.map(normalize);
  for (const nc of normalizedCandidates) {
    for (const [k, v] of Object.entries(row)) {
      if (normalize(k).includes(nc) && v) return v as string;
    }
  }
  return '';
};

// Converts a Google Drive share link to a directly embeddable image URL
export const convertDriveUrl = (url: string): string => {
  if (!url) return '';
  // Match /file/d/{id}/ or /open?id={id} or /uc?id={id}
  const fileMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (fileMatch) return `https://lh3.googleusercontent.com/d/${fileMatch[1]}`;
  const openMatch = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (openMatch) return `https://lh3.googleusercontent.com/d/${openMatch[1]}`;
  // Already a direct image URL
  return url;
};

export const splitPipes = (raw: string) => {
  if (!raw) return [];
  return raw.split('|').map(s => s.replace(/^[-•*✓→·▪▸\d\)\.]\s*/u, '').trim()).filter(s => s.length > 8).slice(0, 5);
};

export const parseTimeToDate = (timeStr: string): Date => {
  if (!timeStr) return new Date(0);
  const now = new Date();
  const lower = timeStr.toLowerCase().trim();
  
  if (lower.includes('vừa xong') || lower.includes('just now') || lower.includes('mới đăng')) return now;
  if (lower.includes('hôm nay') || lower.includes('today')) return now;
  if (lower.includes('hôm qua') || lower.includes('yesterday')) {
    const d = new Date(now);
    d.setDate(now.getDate() - 1);
    return d;
  }
  
  // Handle DD/MM/YYYY or D/M/YYYY
  const dateMatch = lower.match(/^(\d{1,2})[\/\-\.](\d{1,2})[\/\-\.](\d{4})/);
  if (dateMatch) {
    const day = parseInt(dateMatch[1]);
    const month = parseInt(dateMatch[2]) - 1;
    const year = parseInt(dateMatch[3]);
    return new Date(year, month, day);
  }

  // Handle YYYY-MM-DD or YYYY/MM/DD
  const ymdMatch = lower.match(/^(\d{4})[\/\-\.](\d{1,2})[\/\-\.](\d{1,2})/);
  if (ymdMatch) {
    const year = parseInt(ymdMatch[1]);
    const month = parseInt(ymdMatch[2]) - 1;
    const day = parseInt(ymdMatch[3]);
    return new Date(year, month, day);
  }
  
  const match = lower.match(/(\d+)\s+(giây|phút|giờ|ngày|tuần|tháng|năm|second|minute|hour|day|week|month|year)/);
  if (match) {
    const val = parseInt(match[1]);
    const unit = match[2];
    const date = new Date(now);
    
    if (unit.startsWith('giây') || unit.startsWith('second')) date.setSeconds(now.getSeconds() - val);
    else if (unit.startsWith('phút') || unit.startsWith('minute')) date.setMinutes(now.getMinutes() - val);
    else if (unit.startsWith('giờ') || unit.startsWith('hour')) date.setHours(now.getHours() - val);
    else if (unit.startsWith('ngày') || unit.startsWith('day')) date.setDate(now.getDate() - val);
    else if (unit.startsWith('tuần') || unit.startsWith('week')) date.setDate(now.getDate() - val * 7);
    else if (unit.startsWith('tháng') || unit.startsWith('month')) date.setMonth(now.getMonth() - val);
    else if (unit.startsWith('năm') || unit.startsWith('year')) date.setFullYear(now.getFullYear() - val);
    
    return date;
  }
  
  // Handle numeric timestamps
  if (/^\d+$/.test(lower)) {
    const d = new Date(parseInt(lower));
    if (!isNaN(d.getTime())) return d;
  }

  const directDate = new Date(timeStr);
  if (!isNaN(directDate.getTime())) return directDate;
  
  return new Date(0);
};

export const isToday = (date: Date): boolean => {
  if (!date || isNaN(date.getTime())) return false;
  const now = new Date();
  
  // Also check if it's within the last 24 hours to be safe if calendar day check fails due to late night postings
  const diffInHours = Math.abs(now.getTime() - date.getTime()) / (1000 * 60 * 60);
  
  return (date.getDate() === now.getDate() &&
         date.getMonth() === now.getMonth() &&
         date.getFullYear() === now.getFullYear()) || (diffInHours < 24);
};

export const getSectorGrad = (industry: string) => {
  const norm = normalize(industry);
  if (norm.includes('congnghe') || norm.includes('tech')) return 'linear-gradient(135deg, #1d4ed8, #3b82f6)';
  if (norm.includes('marketing')) return 'linear-gradient(135deg, #6d28d9, #8B83E8)';
  if (norm.includes('taichinh') || norm.includes('finance')) return 'linear-gradient(135deg, #92400e, #d4900a)';
  if (norm.includes('banhang') || norm.includes('sales')) return 'linear-gradient(135deg, #be185d, #FF4F9A)';
  if (norm.includes('nhansu') || norm.includes('hr')) return 'linear-gradient(135deg, #166534, #5DBE6E)';
  if (norm.includes('vanhanh') || norm.includes('operation')) return 'linear-gradient(135deg, #065f46, #10b981)';
  return 'linear-gradient(135deg, #475569, #94a3b8)';
};
