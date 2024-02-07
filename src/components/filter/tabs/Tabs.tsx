import React, { FC } from 'react';
import { clsx } from 'clsx';

interface IProps {
  active: string;
  className: string;
  item: string;
  typeInfo: string;
  click;
}

export const Tabs: FC<IProps> = ({ item, className, active, typeInfo, click }) => {
  return (
    <button
      className={clsx(className, {
        [active]: typeInfo === item,
      })}
      onClick={() => {
        click(item);
      }}
    >
      {item}
    </button>
  );
};
