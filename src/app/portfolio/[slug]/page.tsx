import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { PortfolioGallery } from '@/components';
import { client, getSessionMetadata, sessionData, urlFor } from '@/sanity';
import { PageParams } from '@/types';

import { PortfolioParams } from './types';

export const generateMetadata = async (props: PageParams<PortfolioParams>): Promise<Metadata> => {
  const { slug } = await props.params;
  const session = await getSessionMetadata(slug);

  if (!session) {
    return {};
  }

  const ogImage = session.coverImage
    ? urlFor(session.coverImage)?.width(1200).height(630).fit('crop').auto('format').url()
    : undefined;

  return {
    title: session.title ?? undefined,
    description: session.description ?? undefined,
    openGraph: ogImage
      ? {
          images: [{ url: ogImage, width: 1200, height: 630 }],
        }
      : undefined,
  };
};


export const Page = async (props: PageParams<PortfolioParams>) => {
  const { slug }: PortfolioParams = await props.params;
  const session = await client.fetch(sessionData, { slug });

  if (!session) {
    notFound();
  }

  return (
    <div className='flex flex-col text-default px-4 md:px-10 py-4 pt-25'>
      <h1 className='leading-tight tracking-tight font-display'>
        <span className='text-4xl md:text-6xl text-default'>
          Wszystkie kadry w kategorii{' '}
          <span className='text-gradient-brand font-handwrite'>
            {session.title}
          </span>
        </span>
      </h1>
      <span className='text-subtle text-xl md:text-xl italic font-light tracking-wide md:mt-4 md:mb-4 block font-display'>
        Przeciągnij taśmę, przewiń kółkiem albo użyj strzałek — klik na środkową klatkę otwiera podgląd.
      </span>
      <div className='my-6 h-full'>
        <PortfolioGallery images={session.images} />
      </div>
    </div>
  );
};

export default Page;
