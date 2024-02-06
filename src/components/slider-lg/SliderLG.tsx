'use client';

import React, { FC, useMemo } from 'react';
import styles from './SliderLG.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { IData } from '../../libs/types/data.types';
import Link from 'next/link';
import { Navigation } from 'swiper/modules';
import { random } from '../../libs/utils/random';

interface IProps {
  data: IData[];
}

export const SliderLG: FC<IProps> = ({ data }) => {
  const [idOne, idTwo] = useMemo(() => random(10, 2), []);

  return (
    <article className={styles.wrapper}>
      <Swiper
        className=""
        onSlideChange={() => console.log('slide change')}
        slidesPerView={1}
        navigation={{
          nextEl: `#${idOne}`,
          prevEl: `#${idTwo}`,
        }}
        modules={[Navigation]}
      >
        {data.map(({ title, url, media, date: dateNow }, i) => {
          return (
            <Link href={url}>
              <SwiperSlide key={i}>
                <figure className={styles.figure}>
                  <div className={styles.imageContainer}>
                    <img src={media.images.i16x9} alt={title} />
                  </div>
                  <figcaption className={styles.figcaption}>
                    <div className={styles.description}>
                      <h2 className={styles.title}>{title}</h2>
                      <data>{dateNow}</data>
                    </div>
                  </figcaption>
                </figure>
              </SwiperSlide>
            </Link>
          );
        })}
      </Swiper>
    </article>
  );
};
