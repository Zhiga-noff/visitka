import React, { FC } from 'react';
import { IMenu } from '../../libs/types/menu.types';
import Link from 'next/link';

interface IProps {
  className: string;
  noLink: boolean;
  elements: IMenu[];
}

export const List: FC<IProps> = ({ className, noLink, elements, ...props }) => {
  return noLink ? (
    <ul className={className}>
      {elements.map((item, index) => (
        <li key={index}>
          <a href={item.link}>{item.title}</a>
        </li>
      ))}
    </ul>
  ) : (
    <ul className={className}>
      {elements.map((item, index) => (
        <li key={index}>
          <Link href={item.link}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};
