'use client';
import { FC, useMemo } from 'react';
import { ProgramsDay } from './programs-day';
import { creteObjTimeFront } from './utils';
import { useProgramQuide } from 'hooks';
import { IDayGuide } from 'libs/types/program-guide.types';
import styles from './list-program.module.scss';

interface IProps {
  data: IDayGuide[];
}

export const ListPrograms: FC<IProps> = ({ data }) => {
  const { active } = useProgramQuide();

  const { date, programGuide } =
    useMemo(() => data.find(({ date }) => date === active), [active]) || {};

  const time = useMemo(() => creteObjTimeFront(data), []);

  return (
    <>
      {date && programGuide && (
        <article className={styles.list}>
          <section className={styles.wrap}>
            <h2 className={styles.list__title}>{time[date]}</h2>
            <ProgramsDay propgrams={programGuide} date={date} />
          </section>
        </article>
      )}
    </>
  );
};
