import { TransitionPhase } from '@/enums';

export interface PageTransitionContextValue {
  phase: TransitionPhase;
  destinationPath: string;
  navigate: (href: string) => void;
  onCoverComplete: () => void;
  onUncoverComplete: () => void;
}
