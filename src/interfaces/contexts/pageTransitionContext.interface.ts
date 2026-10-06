import { TransitionPhase } from '@/enums';

export interface PageTransitionContextValue {
  phase: TransitionPhase;
  destinationPath: string;
  navigate: (href: string, title?: string) => void;
  onCoverComplete: () => void;
  onUncoverComplete: () => void;
}
