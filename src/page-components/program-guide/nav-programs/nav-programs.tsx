'use client';
import { FC } from 'react';
import { toFormatDate } from './utils';
import { clsx } from 'clsx';
import { useProgramQuide } from 'hooks';
import styles from './nav-programs.module.scss';

interface IProps {
  data: string[];
}

export const NavPrograms: FC<IProps> = ({ data }) => {
  const { onActive, currentDate, active } = useProgramQuide();

  return (
    <section className={styles.wrap}>
      <nav className={styles.nav}>
        {data.map((item) => (
          <button
            className={clsx(styles.nav__btn, { [styles.active]: item === active })}
            key={item}
            onClick={() => onActive(item)}
          >
            {item === currentDate ? 'Сегодня' : toFormatDate(item)}
          </button>
        ))}
      </nav>
    </section>
  );
};
