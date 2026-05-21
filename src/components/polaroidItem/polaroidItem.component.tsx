import clsx from 'clsx';
import React, { JSX } from 'react'

import styles from './polaroidItem.module.css';
import { PolaroidItemProps } from './polaroidItem.types';

export const PolaroidItem: React.FC<PolaroidItemProps> = (props: PolaroidItemProps): JSX.Element => {
  const { label, visibleId, icon: Icon, variant, style }: PolaroidItemProps = props;

  return (
    <div className={clsx(styles.container, styles[variant])} style={style}>
      <div className={styles.iconContainer}>
        <div className={styles.visibleId}>{visibleId}</div>
        <div className={styles.iconBox}>
          <div className={styles.icon}>
            <Icon />
          </div>
        </div>
      </div>
      <span className={styles.label}>{label}</span>
    </div>
  );
};
