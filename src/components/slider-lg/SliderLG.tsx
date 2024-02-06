'use client';

import React, { FC, useState } from 'react';
import styles from './SliderLG.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { IData } from '../../libs/types/data.types';
import Link from 'next/link';
import { Navigation } from 'swiper/modules';

interface IProps {
  data: IData[];
}

export const SliderLG: FC<IProps> = ({ data }) => {
  const [index, setIndex] = useState(1);
  const idOne = 'id-next-button';
  const idTwo = 'id-prev-button';

  return (
    <article className={styles.wrapper}>
      <Swiper
        className={styles.slider}
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
            <SwiperSlide key={i}>
              <Link href={url}>
                <figure className={styles.figure}>
                  <div className={styles.imageContainer}>
                    <img src={media.images.i16x9} alt={title} />
                  </div>
                  <figcaption className={styles.figcaption}>
                    <div className={styles.description}>
                      <h2 className={styles.title}>{title}</h2>
                      <div className="">
                        <data>{dateNow}</data>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </article>
  );
};
