import { AllSessionsQueryResult } from '@/sanity';

export type SanitySessionImage =
  | NonNullable<AllSessionsQueryResult[number]['coverImage']>
  | NonNullable<NonNullable<AllSessionsQueryResult[number]['images']>[number]>;
