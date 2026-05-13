import { RefObject } from 'react';

export interface UseCursor {
  dotRef: RefObject<HTMLDivElement | null>;
  ringRef: RefObject<HTMLDivElement | null>;
}
