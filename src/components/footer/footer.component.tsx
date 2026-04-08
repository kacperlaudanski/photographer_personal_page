import React, { JSX } from 'react';

export const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className='fixed bottom-0 left-1/2 -translate-x-1/2 w-full z-50'>
      <div className='bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 shadow-2xl overflow-hidden relative'>
        <div className='absolute inset-0 bg-linear-to-tr from-white/5 to-transparent pointer-events-none' />
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-serif italic text-xl text-white">Zostańmy w kontakcie</p>
            <p className="font-sans text-[10px] uppercase tracking-widest text-white/50 mt-1">
              © {new Date().getFullYear()} Studio Nazwisko
            </p>
          </div>
          <div className="flex gap-6">
            <a href="mailto:hello@studio.com" className="font-sans text-xs uppercase tracking-widest text-white hover:text-zinc-300 transition-colors">
              Email
            </a>
            <a href="#" className="font-sans text-xs uppercase tracking-widest text-white hover:text-zinc-300 transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
