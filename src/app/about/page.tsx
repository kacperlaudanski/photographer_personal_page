'use client';
import { TypeAnimation } from 'react-type-animation';

import { CtaBanner, PolaroidItem, StatCard, TimelineEntry } from '@/components';
import { personalStats, sessionItems, timelineItems } from '@/consts';

const About = () => (
  <div className='flex flex-col gap-6 px-4 md:px-10 py-10 pt-25'>
    <div className='flex flex-col-reverse lg:flex-row gap-6 lg:gap-10 justify-between'>
      <div className='flex flex-col gap-10'>
        <div className='flex items-center gap-4 text-sm tracking-widest text-subtle font-mono'>
          <span>→</span>
          <span>O MNIE · 01</span>
        </div>
        <div>
          <h1 className='leading-tight tracking-tight font-display'>
            <span className='text-4xl md:text-6xl text-default'>
              Cześć,{' '}<br />
              jestem{' '}
              <span className='text-gradient-brand font-handwrite'>
                Aleksandra
              </span>
            </span>
          </h1>
        </div>
        <p className='font-display text-subtle text-lg'>
          <TypeAnimation
            sequence={[ 'Każde zdjęcie to okno — nie chcę pokazywać widoku, chcę pokazać kogoś, kto przez nie patrzy.' ]}
            wrapper='span'
            speed={20}
            style={{ display: 'inline-block' }}
            cursor={false}
          />
        </p>
        <div className='flex flex-col text-default gap-3 text-lg font-body'>
          <p>
            Fotografuję od ośmiu lat, choć aparat trzymałam w rękach dużo dłużej — jeszcze ten taty, z czasów licealnych ucieczek po Tomaszowie Mazowieckim.
          </p>
          <p>
            Lubię ciszę. Lubię moment przed kadrem, kiedy ktoś przestaje pozować i po prostu jest. To właśnie wtedy robi się najlepsze zdjęcia.
          </p>
        </div>
        <div className='flex flex-col gap-4 text-sm tracking-widest text-subtle'>
          <div className='flex gap-4 font-mono'>
            <span>→</span>
            <span>MOJE SESJE · 02</span>
          </div>
          <div className='flex gap-4 mt-6 overflow-x-auto pb-8 pt-4 px-2 scrollbar-none'>
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
          <div className='col-span-2 relative bg-surface-muted rounded-md max-h-150 w-full aspect-3/4 flex flex-col items-center justify-center gap-2 text-muted'>
            <span className='text-sm'>portret · pionowy</span>
            <span className='text-xs underline cursor-pointer'>or browse files</span>
          </div>
          <div className='bg-surface-muted rounded-md aspect-square flex flex-col items-center justify-center gap-2 text-muted'>
            <span className='text-sm'>kadr · zbliżenie</span>
            <span className='text-xs underline cursor-pointer'>or browse files</span>
          </div>
          <div className='bg-surface-muted rounded-md aspect-square flex flex-col items-center justify-center gap-2 text-muted'>
            <span className='text-sm'>ręce · aparat</span>
            <span className='text-xs underline cursor-pointer'>or browse files</span>
          </div>
        </div>
        <div className='max-w-100 flex items-center gap-3 mt-6 pl-1 h-15'>
          <div className='w-0.5 bg-accent self-stretch shrink-0' />
          <p className='text-muted italic font-handwrite text-xl leading-snug'>
            „Najlepsze zdjęcia robi się wtedy, kiedy ktoś przestaje wiedzieć, że ma być fotografowany.&quot;
          </p>
        </div>
      </div>
    </div>
    <div className='flex flex-col gap-6 mt-10'>
      <div className='flex gap-6 items-end'>
        <div className='text-default font-display text-4xl'>
          Moja <span className='text-gradient-brand font-handwrite'>droga</span>
        </div>
        <div className='h-0.5 flex-1 border-b border-faint' />
        <div className='text-sm tracking-widest text-subtle font-mono'>
          {timelineItems[0].year} → {timelineItems[timelineItems.length - 1].year}
        </div>
      </div>
      <div className='flex gap-4 mt-6 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none'>
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
