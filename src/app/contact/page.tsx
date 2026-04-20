'use client';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
 
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
                className='h-full w-10 bg-white absolute top-0 left-24.5'
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
                className='h-full w-10 bg-white absolute top-0 right-4.5'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0, delay: 1.3 }}
              />
              <motion.div
                className='h-10 w-full bg-white absolute top-75'
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
            <span className='bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
              okno
            </span>
          </span>
          <br />
          <span className='text-gray-400 text-3xl font-light tracking-wide mt-6 block'>
            Jeśli chcesz otworzyć kolejne, napisz.
          </span>
        </h1>
      </div>
    </section>
 );
};

export default Contact;
