'use client';
import React from 'react'
import { TypeAnimation } from 'react-type-animation';

// zmienic path
import { PolaroidItem, StatCard } from '@/components';
import { personalStats, sessionItems } from '@/consts';

import styles from './page.module.css';

const About = () => {
  return (
    <div className='flex flex-col gap-6'>
      {/* sekcja głowna + kolaz zdjec */}
      <div className='flex gap-10 justify-between'>
        {/* sekcja z info */}
        <div className='flex flex-col gap-10'>
          <div className='flex items-center gap-4 text-sm tracking-widest text-gray-400'>
            <span>→</span>
            <span>O MNIE · 01</span>
          </div>
          <div>
            <h1 className='leading-tight tracking-tight font-serif'>
              <span className='text-3xl md:text-7xl text-gray-800'>
                Cześć,{' '}<br />
                jestem<span className={styles.name}>{' '}Aleksandra</span>
              </span>
            </h1>
          </div>
          <p className='font-serif text-gray-400 text-lg'>
            <TypeAnimation
              sequence={[
                'Każde zdjęcie to okno — nie chcę pokazywać widoku, chcę pokazać kogoś, kto przez nie patrzy.',
              ]}
              wrapper='span'
              speed={20}
              style={{ display: 'inline-block' }}
              cursor={false}
            />
          </p>
          <div className='flex flex-col text-gray-800 gap-3 text-lg'>
            <p>
              Fotografuję od ośmiu lat, choć aparat trzymałam w rękach dużo dłużej — jeszcze ten taty, z czasów licealnych ucieczek po Tomaszowie Mazowieckim.
            </p>
            <p>
              Lubię ciszę. Lubię moment przed kadrem, kiedy ktoś przestaje pozować i po prostu jest. To właśnie wtedy robi się najlepsze zdjęcia.
            </p>
          </div>
          <div className='flex flex-col gap-4 text-sm tracking-widest text-gray-400'>
            <div className='flex gap-4'>
              <span>→</span>
              <span>MOJE SESJE · 02</span>
            </div>
            <div className='flex gap-4 mt-6'>
              {sessionItems.map((item) => (
                <PolaroidItem
                  key={item.visibleId}
                  variant={item.variant}
                  label={item.label}
                  visibleId={item.visibleId}
                  icon={item.icon}
                  style={{ transform: `rotate(${item.rotation}deg)` }}
                />
              ))}
            </div>
            <div className='flex gap-4 mt-10'>
              {personalStats.map((stat) => (
                <StatCard count={stat.count} icon={stat.icon} key={stat.text} text={stat.text} />
              ))}
            </div>
          </div>
        </div>
        {/* kolaz */}
        <div className='relative w-1/2 shrink-0'>
          <div className='grid grid-cols-2 gap-2'>
            {/* główne zdjęcie - pełna szerokość */}
            <div className='col-span-2 relative bg-stone-300 rounded-md max-h-150 w-full aspect-3/4 flex flex-col items-center justify-center gap-2 text-stone-500'>
              <span className='text-sm'>portret · pionowy</span>
              <span className='text-xs underline cursor-pointer'>or browse files</span>
              <span className='absolute top-[-30] right-[-50] text-6xl italic text-pink-500 font-family-caveat'>
                Aleksandra.
              </span>
            </div>
            {/* dwa dolne kafelki */}
            <div className='bg-stone-300 rounded-md aspect-square flex flex-col items-center justify-center gap-2 text-stone-500'>
              <span className='text-sm'>kadr · zbliżenie</span>
              <span className='text-xs underline cursor-pointer'>or browse files</span>
            </div>
            <div className='bg-stone-300 rounded-md aspect-square flex flex-col items-center justify-center gap-2 text-stone-500'>
              <span className='text-sm'>ręce · aparat</span>
              <span className='text-xs underline cursor-pointer'>or browse files</span>
            </div>
          </div>
        </div>
      </div>
      {/* sekcja ściezki */}
      <div>
      </div>
    </div>
  );
};

export default About;
