'use client';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

import { animatedLetters, animatedLettersFillDelays } from './consts';

const photoVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const Contact = () => {
  return (
    <section className='flex text-stone-800'>
      <div className='flex items-center px-15'>
        <motion.div
          className='overflow-hidden'
          variants={photoVariants}
          initial='hidden'
          animate='visible'
        >
          <div className='flex gap-4 items-center justify-center'>
            <div className='rounded-xl overflow-hidden relative'>
              <motion.div
                className='h-full w-10 bg-[#f5f5f5] absolute top-0 left-24.5'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0, delay: 1 }}
              />
              <Image
                alt='contact'
                src='/assets/contact-hero.jpg'
                height={500}
                width={500}
              />
              <motion.div
                className='h-full w-10 bg-[#f5f5f5] absolute top-0 right-4.5'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0, delay: 1.3 }}
              />
              <motion.div
                className='h-10 w-full bg-[#f5f5f5] absolute top-75'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0, delay: 1.6 }}
              />
            </div>
          </div>
        </motion.div>
      </div>
      <div className='flex flex-col p-8 flex-1'>
        <h1 className='leading-tight tracking-tight font-serif'>
          <span className='text-6xl'>
            Każde zdjęcie to{' '}
            <svg
              width='150'
              height='75'
              viewBox='0 0 146.743 66.492'
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
            </svg>
          </span>
          <br />
          <span className='text-gray-400 text-3xl font-light tracking-wide mt-6 block'>
          <TypeAnimation
            sequence={[
              'Jeśli chcesz otworzyć kolejne, napisz.',
              1000,
              'Jeśli chcesz otworzyć kolejne, zadzwoń.',
              1000,
              'Jeśli chcesz otworzyć kolejne, odezwij się.',
              1000,
              'Jeśli chcesz otworzyć kolejne, zostaw ślad.',
              1000
            ]}
            wrapper='span'
            speed={20}
            style={{ display: 'inline-block' }}
            repeat={Infinity}
          />
          </span>
        </h1>
      </div>
    </section>
  );
};

export default Contact;
