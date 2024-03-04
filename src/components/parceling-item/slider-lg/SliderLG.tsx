'use client';

import React, {FC, useState} from 'react';
import styles from './SliderLG.module.scss';

import {Swiper, SwiperSlide,} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import {SlideElement} from './slide-element/SlideElement';
import {ButtonSlider} from 'components/ui/button-slider';
import {IBlock} from "libs/types";

interface IProps {
    data: IBlock;
}

export const SliderLG: FC<IProps> = ({data}) => {
    const [index, setIndex] = useState(0);
    const idOne = 'id-next-button';
    const idTwo = 'id-prev-button';

    const {items} = data;

    return (
        <section className={styles.wrapper}>
            <Swiper
                className={styles.slider}
                slidesPerView={1}
                navigation={{
                    nextEl: `#${idOne}`,
                    prevEl: `#${idTwo}`,
                }}
                modules={[Navigation]}
                onRealIndexChange={(el) => setIndex(el.activeIndex)}
            >
                {items.map(({title, url, media, dateCreate: dateNow}, i) => {
                    return (
                        <SwiperSlide key={i}>
                            <SlideElement url={url} media={media} title={title} dateNow={dateNow}/>
                        </SwiperSlide>
                    );
                })}
                <div className={styles.buttonsContainer}>
                    <ButtonSlider
                        id={idTwo}
                        type={'prev'}
                    />
                    <p>{index + 1 + '/' + items.length}</p>
                    <ButtonSlider
                        id={idOne}
                        type={'next'}
                    />
                </div>
            </Swiper>
        </section>
    );
};
