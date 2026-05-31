export interface MobileNavbarItemProps {
  title: string;
  description: string;
  id: number;
  isActive: boolean;
  path: string;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}
