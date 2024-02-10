import React, { FC } from 'react';
import Link from 'next/link';

interface IProps {
  info: {
    type?: string,
    resource: string,
    image: string,
    url: string,
    title: string
  };
  download?: boolean;
}

export const RowMedia: FC<IProps> = ({ info, download }) => {
  const { type, resource, image, url, title } = info;
  return (
    <Link href={url} className="">
      <div className="">
        {type ? <h5>{type}</h5> : ''}
        <h4>{resource}</h4>
      </div>
      <div className="">
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
    </Link>
  );
};
