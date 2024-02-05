import { FC, useState, MouseEventHandler, useRef, memo } from 'react';
import { toFormatTime } from '../utils';
import { More } from './more';
import { IProgramGuide } from 'libs/types/program-guide.types';
import { clsx } from 'clsx';
import styles from './program.module.scss';

interface IProps {
  data: IProgramGuide;
  today: boolean;
}

export const Program: FC<IProps> = memo(function Program({ data, today }) {
  const { i16x7, i4x3, i16x9 } = data.media.images;
  const [isShow, setIsShow] = useState(false);
  const [isFull, setIsFull] = useState(today && data.isActiv);
  const { current: time } = useRef(toFormatTime(data.datePublished));

  const onFullOpen: MouseEventHandler<HTMLElement> = ({ target }) => {
    const element = target as HTMLElement;
    if (!element.closest(`.${styles.content__wrap}`)) {
      setIsFull(!isFull);
    }
  };

  return (
    <section className={styles.program} onClick={onFullOpen}>
      <div className={clsx(styles.wrap, { [styles.full]: isFull })}>
        <img
          className={styles.image}
          width={isFull ? 500 : 160}
          height={isFull ? 281 : 90}
          src={i16x9 || i16x7 || i4x3 || ''}
          alt={data.title}
        />
        <article className={styles.content}>
          <h3 className={clsx(styles.title, { [styles.full]: isFull })}>
            <time className={styles.title__time}>{time}</time> {data.title}
          </h3>
          {isFull && (
            <div className={styles.content__wrap}>
              <button onClick={() => setIsShow(!isShow)} className={styles.btn}>
                Подробнее
              </button>
              <More data={data} isOpen={isShow} />
            </div>
          )}
        </article>
      </div>
    </section>
  );
});
