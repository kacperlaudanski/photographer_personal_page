export const routes = {
  home: '/',
  session: (slug: string): string => `/sessions/${slug}`, 
  about: '/about',
  contact: '/contact',
} as const;
