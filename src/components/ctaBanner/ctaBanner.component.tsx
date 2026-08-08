import Link from 'next/link';

export const CtaBanner = () => (
  <div className='flex flex-col md:flex-row relative justify-between md:items-center px-6 md:px-12 py-10 rounded-2xl bg-surface-accent overflow-hidden'>
    <div className='flex flex-col'>
      <span className='hidden lg:block absolute right-46 top-30 -rotate-15 -translate-y-1/2 text-[10rem] font-handwrite text-on-surface-accent select-none whitespace-nowrap'>
        do zobaczenia
      </span>
      <div className='flex flex-col gap-3 z-10'>
        <span className='font-mono text-accent text-xs uppercase'>
          Napisz do mnie
        </span>
        <h2 className='font-display text-3xl md:text-5xl text-default'>
          Masz pomysł na sesję?
        </h2>
        <span className='text-gradient-brand font-handwrite text-5xl'>
          Pogadajmy.
        </span>
        <p className='text-sm text-muted max-w-100 font-body italic'>
          Najczęściej odpisuję tego samego dnia. Najlepsze sesje zaczynają się od długiej rozmowy przy kawie — zapraszam.
        </p>
      </div>
    </div>
    <Link href='/contact' className='bg-gradient-brand rounded-full px-6 py-3 font-body text-on-accent text-sm'>
      Wyślij wiadomość
    </Link>
  </div>
);
