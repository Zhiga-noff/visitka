'use client';

import React, { FC, useState } from 'react';
import styles from './SliderLG.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { IData } from '../../libs/types/data.types';
import { Navigation } from 'swiper/modules';
import { SlideElement } from './slide-element/SlideElement';
import { ButtonSlider } from '../button-slider';

interface IProps {
  data: IData[];
}

export const SliderLG: FC<IProps> = ({ data }) => {
  const [index, setIndex] = useState(1);
  const idOne = 'id-next-button';
  const idTwo = 'id-prev-button';

  const clickSlideButton = (type) => {
    if (type === 'prev' && index !== 1) {
      setIndex((prevState) => prevState - 1);
    }
    if (type === 'next' && index !== data.length) {
      setIndex((prevState) => prevState + 1);
    }
  };

  return (
    <article className={styles.wrapper}>
      <Swiper
        className={styles.slider}
        onSlideChange={() => console.log('slide-element change')}
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
              <SlideElement url={url} media={media} title={title} dateNow={dateNow} />
            </SwiperSlide>
          );
        })}
        <div className={styles.buttonsContainer}>
          <ButtonSlider
            id={idTwo}
            type={'prev'}
            onClick={() => clickSlideButton('prev')}
          />
          <p>{index + '/' + data.length}</p>
          <ButtonSlider
            id={idOne}
            type={'next'}
            onClick={() => clickSlideButton('next')}
          />
        </div>
      </Swiper>
    </article>
  );
};
