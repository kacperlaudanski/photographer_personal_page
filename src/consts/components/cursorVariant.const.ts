import { CursorLabelAnimation, CursorVariant } from '@/enums';
import { CursorVariantConfig } from '@/interfaces';

export const cursorVariant: Record<CursorVariant, CursorVariantConfig> = {
  [CursorVariant.Default]: {
    ring: { width: 36, height: 36, borderRadius: 999, backgroundColor: 'rgba(0,0,0,0)' },
    ringClassName: 'border border-focus',
  },
  [CursorVariant.Link]: {
    ring: { width: 16, height: 16, borderRadius: 999, backgroundColor: 'rgba(0,0,0,0)' },
    ringClassName: 'border border-accent',
    magnetic: true,
  },
  [CursorVariant.View]: {
    ring: { width: 96, height: 96, borderRadius: 999, backgroundColor: 'rgba(255,255,255,1)' },
    ringClassName: 'mix-blend-difference text-neutral-950',
    label: 'Powiększ',
    labelAnimation: CursorLabelAnimation.Circle,
    hideDot: true,
  },
  [CursorVariant.Open]: {
    ring: { width: 14, height: 14, borderRadius: 999, backgroundColor: 'var(--color-accent)' },
    ringClassName: 'text-accent',
    label: 'Otwórz serię',
    labelAnimation: CursorLabelAnimation.Slide,
    hideDot: true,
  },
  [CursorVariant.Drag]: {
    ring: { width: 150, height: 44, borderRadius: 999, backgroundColor: 'rgba(0,0,0,0)' },
    ringClassName: 'border border-accent text-accent',
    label: '← Przeciągnij →',
    labelAnimation: CursorLabelAnimation.Mask,
    hideDot: true,
  },
  [CursorVariant.Text]: {
    ring: { width: 2, height: 17, borderRadius: 1, backgroundColor: 'var(--color-focus)' },
    ringClassName: 'animate-pulse',
    hideDot: true,
  },
  [CursorVariant.Scroll]: {
    ring: { width: 64, height: 64, borderRadius: 999, backgroundColor: 'rgba(0,0,0,0)' },
    ringClassName: 'border border-on-media-subtle text-on-media',
    label: 'Przeciągnij ↓',
    labelAnimation: CursorLabelAnimation.Letters,
    hideDot: true,
  },
};
