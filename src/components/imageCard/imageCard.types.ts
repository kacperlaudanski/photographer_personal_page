import { MotionValue } from 'motion';

export interface ImageCardProps {
  src: string;
  index: number;
  total: number;
  scrollProgress: MotionValue<number>;
}

export interface ImageCoords {
  x: number;
  y: number;
}
