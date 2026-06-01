export const gridBackground: React.CSSProperties = {
  backgroundColor: '#1a1a1a',
  backgroundImage: `
    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(rgba(0,0,0,0.2) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,0,0,0.2) 1px, transparent 1px)
  `,
  backgroundSize: '6px 6px',
  backgroundPosition: '-1px -1px, -1px -1px, 0 0, 0 0',
};
