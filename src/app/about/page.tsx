'use client';
import { TypeAnimation } from 'react-type-animation';

import { CtaBanner, PolaroidItem, StatCard, TimelineEntry } from '@/components';
import { personalStats, sessionItems, timelineItems } from '@/consts';

import styles from './page.module.css';

const About = () => (
  <div className='flex flex-col gap-6'>
    <div className='flex flex-col-reverse lg:flex-row gap-6 lg:gap-10 justify-between'>
      <div className='flex flex-col gap-10'>
        <div className='flex items-center gap-4 text-sm tracking-widest text-gray-400'>
          <span>→</span>
          <span>O MNIE · 01</span>
        </div>
        <div>
          <h1 className='leading-tight tracking-tight font-serif'>
            <span className='text-4xl md:text-6xl text-gray-800'>
              Cześć,{' '}<br />
              jestem<span className={styles.name}>{' '}Aleksandra</span>
            </span>
          </h1>
        </div>
        <p className='font-serif text-gray-400 text-lg'>
          <TypeAnimation
            sequence={[ 'Każde zdjęcie to okno — nie chcę pokazywać widoku, chcę pokazać kogoś, kto przez nie patrzy.' ]}
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
          <div className='flex gap-4 mt-6 overflow-x-auto pb-8 pt-4 px-2 [scrollbar-width:none]'>
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
          <div className='flex flex-col md:flex-row gap-4 mt-10'>
            {personalStats.map((stat) => (
              <StatCard count={stat.count} icon={stat.icon} key={stat.text} text={stat.text} />
            ))}
          </div>
        </div>
      </div>
      <div className='relative w-full block sm:hidden xl:block lg:w-2/5 lg:shrink-0 lg:self-start'>
        <div className='grid grid-cols-2 gap-2'>
          <div className='col-span-2 relative bg-stone-300 rounded-md max-h-150 w-full aspect-3/4 flex flex-col items-center justify-center gap-2 text-stone-500'>
            <span className='text-sm'>portret · pionowy</span>
            <span className='text-xs underline cursor-pointer'>or browse files</span>
            <span className='absolute top-[-30] md:right-[-50] text-6xl italic text-pink-500 font-family-caveat'>
              Aleksandra.
            </span>
          </div>
          <div className='bg-stone-300 rounded-md aspect-square flex flex-col items-center justify-center gap-2 text-stone-500'>
            <span className='text-sm'>kadr · zbliżenie</span>
            <span className='text-xs underline cursor-pointer'>or browse files</span>
          </div>
          <div className='bg-stone-300 rounded-md aspect-square flex flex-col items-center justify-center gap-2 text-stone-500'>
            <span className='text-sm'>ręce · aparat</span>
            <span className='text-xs underline cursor-pointer'>or browse files</span>
          </div>
        </div>
        <div className='max-w-100 flex items-center gap-3 mt-6 pl-1 h-15'>
          <div className='w-0.5 bg-pink-400 self-stretch shrink-0' />
          <p className='text-stone-500 italic font-family-caveat text-xl leading-snug'>
            „Najlepsze zdjęcia robi się wtedy, kiedy ktoś przestaje wiedzieć, że ma być fotografowany.&quot;
          </p>
        </div>
      </div>
    </div>
    <div className='flex flex-col gap-6 mt-10'>
      <div className='flex gap-6 items-end'>
        <div className='text-gray-800 font-serif text-2xl'>
          Moja <span className={styles.route}>droga</span>
        </div>
        <div className='h-0.5 flex-1 border-b border-gray-300' />
        <div className='text-sm tracking-widest text-gray-400 font-mono'>
          {timelineItems[0].year} → {timelineItems[timelineItems.length - 1].year}
        </div>
      </div>
      <div className='flex gap-4 mt-6 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
        {timelineItems.map((item) => (
          <TimelineEntry
            description={item.description}
            header={item.header}
            key={item.year}
            year={item.year}
          />
        ))}
      </div>
    </div>
    <div className='md:mt-20'>
      <CtaBanner />
    </div>
  </div>
);

export default About;
