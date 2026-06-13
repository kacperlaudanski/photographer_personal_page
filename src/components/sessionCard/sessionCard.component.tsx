import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { SessionCardProps } from './sessionCard.types';
import { Label } from '../label/label.component';

export const SessionCard: React.FC<SessionCardProps> = (props: SessionCardProps) => {
  const {
    coverImage,
    secondaryImage,
    tertiaryImage,
    sessionNumber,
    header,
    description,
    path,
    reversed,
    index,
    labels,
    priority,
  }: SessionCardProps = props;

  console.log(coverImage)

  return (
    <div className={clsx('flex flex-col md:flex-row gap-8 md:gap-12', reversed ? 'md:flex-row-reverse' : 'md:flex-row')}>
      <div className='flex gap-3'>
        {!!coverImage?.url && !!coverImage.blurDataURL && (
          <Image
            src={coverImage.url}
            alt=''
            width={500}
            height={300}
            sizes='(max-width: 768px) 60vw, 500px'
            blurDataURL={coverImage.blurDataURL}
            placeholder='blur'
            priority={priority}
            className='rounded-2xl max-w-125 min-w-0 shadow-2xl transition-transform duration-500 hover:scale-[1.03]'
          />
        )}
        <div className='flex flex-col gap-3 min-w-0'>
          {!!secondaryImage?.url && !!secondaryImage.blurDataURL && (
            <Image
              src={secondaryImage.url}
              alt=''
              width={250}
              height={150}
              sizes='(max-width: 768px) 30vw, 250px'
              blurDataURL={secondaryImage.blurDataURL}
              placeholder='blur'
              className='flex-1 max-w-62.5 rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-[1.03]'
            />
          )}
          {!!tertiaryImage?.url && !! tertiaryImage.blurDataURL && (
            <Image
              src={tertiaryImage.url}
              alt=''
              width={250}
              height={150}
              sizes='(max-width: 768px) 30vw, 250px'
              blurDataURL={tertiaryImage.blurDataURL}
              placeholder='blur'
              className='flex-1 max-w-62.5 rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-[1.03]'
            />
          )}
        </div>
      </div>
      <div className='w-full flex flex-col gap-2 justify-center'>
        <div className='flex items-center gap-3 mb-4'>
          <div className={clsx('w-9 h-px bg-pink-500')} />
          <span className='text-xs font-medium tracking-widest uppercase text-pink-500 font-family-jet-brains'>
            {index} 
          </span>
          <div className='w-0.5 h-0.5 bg-pink-500 rounded-full' />
          <span className='text-xs font-medium tracking-widest uppercase text-pink-500 font-family-jet-brains'>
            {sessionNumber} realizacji
          </span>
        </div>
        <h2 className='font-serif text-5xl text-gray-700 font-normal mb-4'>
          {header}
        </h2>
        <p className='text-sm italic text-neutral-500 leading-relaxed mb-6'>
          {description}
        </p>
        <div className='flex gap-2 flex-wrap'>
          {labels.map((label, index) => (
            <Label key={index} text={label.text} variant={label.variant} />
          ))}
        </div>
        <Link href={path} className='inline-flex items-center gap-3 mt-5'>
          <span className='text-sm font-medium'>Otwórz serię</span>
          <span className='w-9 h-9 rounded-full bg-pink-500 flex items-center justify-center'>
            <span className='text-white text-sm'>→</span>
          </span>
        </Link>
      </div>
    </div>
  );
};
