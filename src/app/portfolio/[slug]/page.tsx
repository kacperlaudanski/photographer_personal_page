import { notFound } from 'next/navigation';
import React from 'react';

import { PageParams } from '@/types';

import { PortfolioParams } from './types';
import { client } from '@/sanity';

const generateStaticParam = async () => {
  const slugs = await client.fetch(`*[_type == 'session' && defined(slug.current)][].slug.current`);

  return slugs.map((slug: string) => ({ slug }));
};

export const Page = async (props: PageParams<PortfolioParams>) => {
  const { slug }: PortfolioParams = await props.params;
  const session = await client.fetch(
    `*[_type == "session" && slug.current == $slug][0]{
      title,
      "gallery": gallery[]{
        "url": asset->url
      }
    }`,
    { slug },
  );

  if (!session) {
    notFound();
  }

  return (
    <div className='flex flex-col text-stone-800 px-4 md:px-10 py-4 pt-25'>
      page {session.title}
    </div>
  );
};
export default Page;
