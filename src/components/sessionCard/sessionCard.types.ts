import { LabelData, SessionCardImage } from '@/interfaces';

export interface SessionCardProps {
  header: string;
  description: string;
  sessionNumber: number;
  index: number;
  coverImage: SessionCardImage | null;
  secondaryImage: SessionCardImage | null;
  tertiaryImage: SessionCardImage | null;
  path: string;
  labels: LabelData[];
  reversed?: boolean;
  priority?: boolean;
}
