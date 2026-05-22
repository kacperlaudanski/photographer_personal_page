import Link from 'next/link';
import React, { JSX } from 'react';

import styles from './ctaBanner.module.css';

export const CtaBanner: React.FC = (): JSX.Element => (
  <div className='flex flex-col md:flex-row relative justify-between md:items-center px-6 md:px-12 py-10 rounded-2xl bg-[rgb(247,220,245)] overflow-hidden'>
    <div className='flex flex-col'>
      <span className='hidden lg:block absolute right-46 top-30 -rotate-15 -translate-y-1/2 text-[10rem] font-family-caveat text-pink-100 select-none whitespace-nowrap'>
        do zobaczenia
      </span>
      <div className='flex flex-col gap-2 z-10'>
        <span className={styles.label}>
          Napisz do mnie
        </span>
        <h2 className='text-3xl md:text-5xl mt-2 font-semi-bold text-stone-800 font-serif'>
          Masz pomysł na sesję?
        </h2>
        <span className={styles.ctaText}>
          Pogadajmy.
        </span>
        <p className='text-md text-stone-500 italic max-w-100 font-serif'>
          Najczęściej odpisuję tego samego dnia. Najlepsze sesje zaczynają się od długiej rozmowy przy kawie — zapraszam.
        </p>
      </div>
    </div>
    <Link href='/contact' className={styles.ctaButton}>
      Wyślij wiadomość
    </Link>
  </div>
);
