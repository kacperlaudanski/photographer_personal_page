import { groq } from 'next-sanity'

export const allSessionsQuery = groq`*[_type == 'session' && defined(slug.current)]{
  _id,
  title,
  'slug': slug.current,
  coverImage{
    ...,
    asset->{
      _id,
      metadata { lqip, dimensions },
    }
  },
  description,
  sessionsAmount,
  tags,
  images[]{
    ...,
    asset->{
      _id,
      metadata { lqip, dimensions },
    }
  },
}`;
