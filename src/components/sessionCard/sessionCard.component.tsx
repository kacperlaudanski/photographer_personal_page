import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import { Label } from '../label/label.component';

import { SessionCardProps } from './sessionCard.types';

export const SessionCard = (props: SessionCardProps) => {
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
  } = props;

  return (
    <div className={clsx('flex flex-col lg:flex-row gap-8 lg:gap-12 w-full', reversed ? 'lg:flex-row-reverse' : 'lg:flex-row')}>
  <div className='flex flex-col lg:flex-row gap-3 w-full lg:basis-3/5'>
    {!!coverImage?.url && !!coverImage.blurDataURL && (
      <Image
        src={coverImage.url}
        alt=''
        width={500}
        height={300}
        sizes='(max-width: 768px) 100vw, 60vw'
        blurDataURL={coverImage.blurDataURL}
        placeholder='blur'
        priority={priority}
        className='object-cover rounded-2xl w-full lg:w-2/3 h-auto shadow-2xl transition-transform duration-500 hover:scale-[1.03]'
      />
    )}
    <div className='flex flex-row lg:flex-col gap-3 min-w-0 w-full lg:w-1/3'>
      {!!secondaryImage?.url && !!secondaryImage.blurDataURL && (
        <Image
          src={secondaryImage.url}
          alt=''
          width={250}
          height={150}
          sizes='(max-width: 768px) 50vw, 20vw'
          blurDataURL={secondaryImage.blurDataURL}
          placeholder='blur'
          className='object-cover flex-1 min-w-0 rounded-2xl h-auto w-full shadow-2xl transition-transform duration-500 hover:scale-[1.03]'
        />
      )}
      {!!tertiaryImage?.url && !!tertiaryImage.blurDataURL && (
        <Image
          src={tertiaryImage.url}
          alt=''
          width={250}
          height={150}
          sizes='(max-width: 768px) 50vw, 20vw'
          blurDataURL={tertiaryImage.blurDataURL}
          placeholder='blur'
          className='object-cover flex-1 min-w-0 rounded-2xl h-auto w-full shadow-2xl transition-transform duration-500 hover:scale-[1.03]'
        />
      )}
    </div>
  </div>
      <div className='lg:basis-2/5 min-w-0 flex flex-col gap-2 justify-center'>
        <div className='flex items-center gap-3 mb-4'>
          <div className='w-9 h-px bg-pink-500' />
          <span className='text-xs font-medium tracking-widest uppercase text-pink-500 font-mono'>
            {index}
          </span>
          <div className='w-0.5 h-0.5 bg-pink-500 rounded-full' />
          <span className='text-xs font-medium tracking-widest uppercase text-pink-500 font-mono'>
            {sessionNumber} realizacji
          </span>
        </div>
        <h2 className='font-display text-5xl text-gray-700 font-normal mb-4'>
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
