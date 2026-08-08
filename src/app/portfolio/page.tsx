import { SessionCard } from '@/components';
import { LabelVariant } from '@/enums';
import { getAllSessions, urlFor } from '@/sanity';

import { SanitySessionImage } from './types';

export const Portfolio = async () => {
  const sessions = await getAllSessions();
  const variants = Object.values(LabelVariant)
  const mapTagsToLabel = (tag: string, index: number) => ({
    text: tag,
    variant: variants[index % variants.length],
  });

  const mapSanityImage = (image: SanitySessionImage | null | undefined) => ({
    url: urlFor(image)?.width(1200).quality(80).auto('format').url() ?? null,
    blurDataURL: image?.asset?.metadata?.lqip ?? '',
    width: image?.asset?.metadata?.dimensions?.width ?? 0,
    height: image?.asset?.metadata?.dimensions?.height ?? 0,
  });

  return (
    <section className='flex flex-col text-default px-4 md:px-10 py-25'>
      <div className='flex items-center gap-4 text-sm tracking-widest text-subtle font-mono'>
        <span>→</span>
        <span>PORTFOLIO · 01</span>
      </div>
      <div className='flex flex-col gap-2'>
        <h1 className='mt-6 font-display text-5xl md:text-6xl'>
          Wybrane {' '}
          <span className='text-gradient-brand font-handwrite'>kadry</span>
        </h1>
      </div>
      <div className='flex flex-col gap-20 mt-16 justify-center'>
        {sessions.map((session, index) => (
          <SessionCard
            coverImage={mapSanityImage(session.coverImage)}
            secondaryImage={mapSanityImage(session.secondaryImage)}
            tertiaryImage={mapSanityImage(session.tertiaryImage)}
            description={session.description ?? ''}
            header={session.title ?? ''}
            index={index + 1}
            priority={index === 0}
            key={session.slug}
            path={`/portfolio/${session.slug}`}
            labels={session.tags?.map(mapTagsToLabel) ?? []}
            reversed={index % 2 !== 0}
            sessionNumber={session.sessionsAmount ?? 0}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
