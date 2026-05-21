'use client';
import { motion } from 'framer-motion';
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { FaUser, FaFilm, FaRing, FaUsers, FaCircle } from 'react-icons/fa';

import { animatedLetters } from './consts';
// zmienic path
import { animatedLettersFillDelays } from '../contact/consts';
import { PolaroidItem } from '@/components';
import { PolaroidItemVariant } from '@/enums';
import { sessionItems } from '@/consts';

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
                jestem <span className='font-family-caveat bg-clip-text text-transparent text-8xl'
                  style={{ 
                  backgroundImage: 'linear-gradient(to right, #3b82f6, #a855f7, #ec4899)',
                }}
              >Aleksandra</span>
                {/* <svg
                  className='w-20 h-30 md:w-36 md:h-16'
                  viewBox='0 0 800 200'
                  style={{
                    display: 'inline',
                    verticalAlign: 'text-bottom',
                    marginBottom: '4px',
                  }}
                >
                  <defs>
                    <linearGradient id='grad' x1='0%' y1='0%' x2='100%' y2='0%' gradientUnits='userSpaceOnUse'>
                      <stop offset='0%' stopColor='#3b82f6' />
                      <stop offset='50%' stopColor='#a855f7' />
                      <stop offset='100%' stopColor='#ec4899' />
                    </linearGradient>
                  </defs>
                    <g transform='translate(50, 120)'>
                      {animatedLetters.map((letter, i) => (
                        <motion.path
                          key={i}
                          d={letter.d}
                          fill='url(#grad)'
                          fillRule='evenodd'
                          stroke='url(#grad)'
                          strokeWidth='1.5'
                          initial={{ pathLength: 0, fillOpacity: 0 }}
                          animate={{ pathLength: 1, fillOpacity: 1 }}
                          transition={{
                            pathLength: { duration: 0.8, delay: letter.delay },
                            fillOpacity: { duration: 0, delay: animatedLettersFillDelays[i] },
                          }}
                        />
                      ))}
                    </g>
                </svg> */}
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
            <span>→</span>
            <span>MOJE SESJE · 02</span>
            <div className='flex gap-4'>
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
          </div>
        </div>
        {/* kolaz */}
        <div className='relative w-1/2 shrink-0'>
          <div className='grid grid-cols-2 gap-2'>
            {/* główne zdjęcie - pełna szerokość */}
            <div className='col-span-2 relative bg-stone-300 rounded-md aspect-3/4 flex flex-col items-center justify-center gap-2 text-stone-500'>
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
