import { client } from './lib';
import { aboutDataQuery, allSessionsQuery, galleryQuery } from './queries';
import { AboutDataQueryResult, AllSessionsQueryResult, GalleryQueryResult } from './types';

export const getAllSessions = (): Promise<AllSessionsQueryResult> => client.fetch(allSessionsQuery);

export const getAboutData = (): Promise<AboutDataQueryResult> => client.fetch(aboutDataQuery);

export const getGallery = (): Promise<GalleryQueryResult> => client.fetch(galleryQuery);
