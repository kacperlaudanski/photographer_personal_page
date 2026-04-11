import { Path } from "@/enums";

export const routes = {
  home: Path.Home,
  session: (slug: string): string => `${Path.Sessions}/${slug}`,
  about: Path.About,
  contact: Path.Contact,
} as const;
