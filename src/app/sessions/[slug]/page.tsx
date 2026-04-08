import { PageParams } from '@/types';

import { client } from '@/lib';

import { SessionParams } from './types';

const SessionPage = async (props: PageParams<SessionParams>) => {
  const { slug }: SessionParams = await props.params;
  const session = await client.fetch(
    `*[_type == "session" && slug.current == $slug][0]{
      title,
      "gallery": gallery[]{
        "url": asset->url
      }
    }`,
    { slug },
  )

  return (
    <div className="p-20 text-white">
      <h1>Status: {slug ? "Slug odebrany" : "Slug zgubiony"}</h1>
      <p>Wartość sluga: <span className="text-yellow-500">{slug}</span></p>
      {session && <p>Dane z Sanity: {session.title}</p>}
    </div>
  );
};

export default SessionPage;
