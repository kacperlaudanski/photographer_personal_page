export interface MobileNavbarItemProps {
  title: string;
  description: string;
  id: number;
  isActive: boolean;
  path: string;
  onClick: () => void;
}
