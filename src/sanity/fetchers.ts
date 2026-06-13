import { client } from './lib';
import { allSessionsQuery } from './queries';
import { AllSessionsQueryResult } from './types';

export const getAllSessions = (): Promise<AllSessionsQueryResult> => client.fetch(allSessionsQuery);
