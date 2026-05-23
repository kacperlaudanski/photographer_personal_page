import { FaRing, FaFilm, FaCamera, FaChild, FaBirthdayCake } from 'react-icons/fa';
import { MdOutlineChildFriendly } from 'react-icons/md';

import { PolaroidItemVariant } from '@/enums';

export const sessionItems = [
  { variant: PolaroidItemVariant.Blue, label: 'portrety', visibleId: '01', icon: FaCamera, rotation: -3 },
  { variant: PolaroidItemVariant.DarkPurple, label: 'sesje plenerowe', visibleId: '02', icon: FaFilm, rotation: 2 },
  { variant: PolaroidItemVariant.Pink, label: 'śluby', visibleId: '03', icon: FaRing, rotation: -1.5 },
  { variant: PolaroidItemVariant.Blue, label: 'komunie', visibleId: '04', icon: FaChild, rotation: 3 },
  { variant: PolaroidItemVariant.Purple, label: 'jubileusze', visibleId: '05', icon: FaBirthdayCake, rotation: -2 },
  { variant: PolaroidItemVariant.Pink, label: 'chrzciny', visibleId: '06', icon: MdOutlineChildFriendly, rotation: 2 },
];