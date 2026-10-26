import { client } from './lib';
import { aboutDataQuery, allSessionsQuery, galleryQuery, sessionData, sessionMetadataQuery } from './queries';
import { AboutDataQueryResult, AllSessionsQueryResult, GalleryQueryResult, SessionMetadataQueryResult } from './types';

export const getAllSessions = (): Promise<AllSessionsQueryResult> => client.fetch(allSessionsQuery);

export const getAboutData = (): Promise<AboutDataQueryResult> => client.fetch(aboutDataQuery);

export const getGallery = (): Promise<GalleryQueryResult> => client.fetch(galleryQuery);

export const getSessionData = () => client.fetch(sessionData);

export const getSessionMetadata = (slug: string): Promise<SessionMetadataQueryResult> => client.fetch(sessionMetadataQuery, { slug });