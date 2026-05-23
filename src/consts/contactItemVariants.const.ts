export const contactVariants = {
  purple: { bg: 'bg-[#f3f0ff]', iconBg: 'bg-[#7c3aed]', accent: 'text-[#7c3aed]' },
  pink: { bg: 'bg-[#fff0f7]', iconBg: 'bg-[#ec4899]', accent: 'text-[#ec4899]' },
  blue: { bg: 'bg-[#eef0ff]', iconBg: 'bg-[#6366f1]', accent: 'text-[#6366f1]' },
  darkPurple: { bg: 'bg-[#f5f0ff]', iconBg: 'bg-[#7e22ce]', accent: 'text-[#7e22ce]' },
} as const;

export type ContactVariant = keyof typeof contactVariants;
