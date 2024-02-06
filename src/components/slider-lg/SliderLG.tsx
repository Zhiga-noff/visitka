'use client';

import React, { FC, useMemo } from 'react';
import { random } from '../../libs/utils/random';
import mock from 'assets/image/mock/mock-large.png';
import styles from './SliderLG.module.scss';

import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { IData } from '../../libs/types/data.types';

interface IProps {
  data: IData[];
}

export const SliderLG: FC<IProps> = ({ data }) => {
  const [idOne, idTwo] = useMemo(() => random(10, 2), []);

  const onSlideChange: SwiperProps['onSlideChange'] = ({ activeIndex }) => {};
  return (
    <article className="">
      <Swiper
        onSlideChange={onSlideChange}
        slidesPerView={1}
        navigation={{
          nextEl: `#${idOne}`,
          prevEl: `#${idTwo}`,
        }}
        modules={[Navigation]}
      >
        <SwiperSlide>
          {data.map(({ title, url, media }, i) => {
            return (
              <figure className={styles.figure}>
                <img src={mock.src} alt={'заглушка'} />
                <figcaption className={styles.figcaption}>
                  В Санкт-Петербурге готовится к старту самый масштабный общественный
                  арктический форум года
                </figcaption>
              </figure>
            );
          })}
        </SwiperSlide>
      </Swiper>
    </article>
  );
};
