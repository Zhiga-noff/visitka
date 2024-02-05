import { FC, useEffect, useRef, useState } from 'react';
import { Li } from './li';
import { IProgramGuide } from 'libs/types/program-guide.types';
import styles from './more.module.scss';

interface IProps {
  data: IProgramGuide;
  isOpen: boolean;
}

export const More: FC<IProps> = ({ data, isOpen }) => {
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const elem = ref.current as HTMLElement;
    if (isOpen) {
      setHeight(elem.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <section ref={ref} className={styles.description} style={{ height }}>
          {data.textAnons && (
            <p className={styles.anons}>
              <span className={styles.anons__title}>Анонс:</span> {data.textAnons}
            </p>
          )}
          {data.text && (
            <p
              className={styles.description__text}
              dangerouslySetInnerHTML={{ __html: data.text }}
            />
          )}
          <ul className={styles.description__list}>
            <Li title='Жанр' text={data.genre} />
            <Li title='Страна' text={data.country} />
            <Li title='Год' text={data.year} />
            <Li title='Студия' text={data.studio} />
            <Li title='Возрастное ограничение' text={data.age} />
            <Li title='Директор' text={data.director} />
            <Li title='Композитор' text={data.composer} />
            <Li title='Сценарист' text={data.scriptwriter} />
            <Li title='Актеры' text={data.actor} />
          </ul>
        </section>
      )}
    </>
  );
};
