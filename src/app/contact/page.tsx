import Image from 'next/image';
import React from 'react';

const Contact = () => {
  return (
    <div className='-m-8 flex h-[calc(80vh)]'>
     <div className='relative w-1/2 overflow-hidden'>
      <Image
        src='/assets/contact-hero.jpg'
        alt='Kontakt'
        fill
        className='object-cover'
      />
      <div className='absolute inset-0 bg-black/30' />
      <h1 className='absolute bottom-0 right-0 font-serif italic text-gray-100 text-8xl font-black tracking-tight leading-[0.65] m-0'>
        Kontakt
      </h1>
    </div>
    <div className='w-1/2 flex items-center justify-center bg-[#1e1e1e] px-16'>
      <form className='w-full max-w-md flex flex-col gap-6'>
        <h2 className='font-serif italic text-white text-3xl mb-2'>Napisz do mnie</h2>
        <div className='flex flex-col gap-1'>
          <label className='text-white/50 text-xs uppercase tracking-widest'>Imię</label>
          <input
            type='text'
            placeholder='Jan Kowalski'
            className='bg-transparent border-b border-white/20 text-white placeholder:text-white/20 py-2 outline-none focus:border-yellow-500 transition-colors'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label className='text-white/50 text-xs uppercase tracking-widest'>Email</label>
          <input
            type='email'
            placeholder='jan@example.com'
            className='bg-transparent border-b border-white/20 text-white placeholder:text-white/20 py-2 outline-none focus:border-yellow-500 transition-colors'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label className='text-white/50 text-xs uppercase tracking-widest'>Wiadomość</label>
          <textarea
            rows={5}
            placeholder='Cześć, chciałbym/chciałabym...'
            className='bg-transparent border-b border-white/20 text-white placeholder:text-white/20 py-2 outline-none focus:border-yellow-500 transition-colors resize-none'
          />
        </div>
        <button
          type='submit'
          className='mt-2 self-start text-yellow-500 border border-yellow-500/40 px-8 py-3 text-sm uppercase tracking-widest hover:bg-yellow-500 hover:text-black transition-colors'
        >
          Wyślij
        </button>
      </form>
    </div>

  </div>
  );
};

export default Contact;
