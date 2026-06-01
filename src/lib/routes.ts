import { Route } from "@/enums";

/* do wywalenia */

export const routes = {
  home: Route.Home,
  session: (slug: string): string => `${Route.Portfolio}/${slug}`,
  about: Route.About,
  contact: Route.Contact,
} as const;
