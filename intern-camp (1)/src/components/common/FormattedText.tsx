import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const FormattedText = ({ text, className = "" }: { text: string; className?: string }) => {
  if (!text) return null;
  
  // Split by pipe and clean up
  const parts = text.split('|').map(p => p.trim()).filter(p => p.length > 0);
  let currentSectionIsList = false;
  
  return (
    <div className={`space-y-4 ${className}`}>
      {parts.map((part, index) => {
        // Detect headers: common section titles or short uppercase strings
        const isHeader = /^(Description|About The Role|What You’ll Achieve|Requirements|Responsibilities|About Us|The Role|Your Impact|Qualifications|What You'll Do|Who You Are|Achieve|What You Will Achieve|Key Responsibilities|Skills|Experience|Benefits|About the company)$/i.test(part) || 
                        (part.length < 40 && part === part.toUpperCase() && part.length > 2) ||
                        (part.length < 30 && part.endsWith(':'));
        
        if (isHeader) {
          // Skip "Description" header if it's the first part
          if (index === 0 && part.toLowerCase() === 'description') return null;

          // Clean up header text (remove trailing colon)
          const headerText = part.replace(/:$/, '');
          // Determine if the following section should be treated as a list
          currentSectionIsList = /^(What You’ll Achieve|Requirements|Responsibilities|Qualifications|What You'll Do|Who You Are|Achieve|What You Will Achieve|Key Responsibilities|Skills|Experience|Benefits)$/i.test(headerText);
          
          return (
            <div key={index} className="pt-6 first:pt-0">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-6 w-1 bg-brand-purple rounded-full" />
                <h4 className="text-[13px] font-black text-brand-black uppercase tracking-[1.5px]">
                  {headerText}
                </h4>
              </div>
            </div>
          );
        }
        
        // Detect list items: starts with bullet or is in a list section and is relatively short
        const isListItem = /^[•-]* /.test(part) || (currentSectionIsList && part.length < 400);

        if (isListItem) {
          return (
            <div key={index} className="flex items-start gap-3 pl-2 group">
              <div className="mt-2 text-brand-purple/40 group-hover:text-brand-purple transition-colors">
                <div className="w-1.5 h-1.5 rounded-full bg-current" />
              </div>
              <p className="text-sm font-bold text-brand-black/80 leading-relaxed group-hover:text-brand-black transition-colors">
                {part.replace(/^[•-]*\s*/, '')}
              </p>
            </div>
          );
        }

        // Tagline detection: very short part at the beginning or after a header
        const isTagline = part.length < 80 && index < 3 && !isHeader;
        if (isTagline) {
          return (
            <p key={index} className="text-lg font-nunito font-black text-brand-purple leading-tight italic opacity-90 border-l-4 border-brand-purple/20 pl-4 py-1">
              {part}
            </p>
          );
        }

        // Default paragraph
        return (
          <p key={index} className="text-base font-bold text-brand-black/90 leading-relaxed">
            {part}
          </p>
        );
      })}
    </div>
  );
};
