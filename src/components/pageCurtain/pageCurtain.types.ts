import { TransitionPhase } from '@/enums';

export interface PageCurtainProps {
  phase: TransitionPhase;
  destinationPath: string;
  onAnimationComplete: () => void;
  destinationTitle?: string;
}
