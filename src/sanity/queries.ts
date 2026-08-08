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
  secondaryImage{
    ...,
    asset->{
      _id,
      metadata { lqip, dimensions },
    }
  },
  tertiaryImage{
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

export const aboutDataQuery = groq`*[_type == 'about'][0]{
  timeline[]{ year, header, description },
  sessionTypes[]{ label, iconName }
}`;

export const galleryQuery = groq`*[_id == 'gallery'][0]{
  images[]{ _key, asset, alt }
}`;
