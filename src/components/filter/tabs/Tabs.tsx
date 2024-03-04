import React, {FC} from 'react';
import {clsx} from 'clsx';
import Link from "next/link";

interface IProps {
    active: string;
    className: string;
    item: string;
    typeInfo: string;
    link: string
}

export const Tabs: FC<IProps> = ({item, className, active, typeInfo, link}) => {
    return (
        <Link href={link}
              className={clsx(className, {
                  [active]: typeInfo === item,
              })}
              scroll={false}
        >
            {item}
        </Link>
    );
};
