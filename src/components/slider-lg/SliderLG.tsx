'use client';

import React, {FC, useState} from 'react';
import styles from './SliderLG.module.scss';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import {SlideElement} from './slide-element/SlideElement';
import {ButtonSlider} from '../ui/button-slider';
import {IBlock} from "../../libs/types";

interface IProps {
    data: IBlock;
}

export const SliderLG: FC<IProps> = ({data}) => {
    const [index, setIndex] = useState(1);
    const idOne = 'id-next-button';
    const idTwo = 'id-prev-button';

    const {items} = data;

    const clickSlideButton = (type) => {
        if (type === 'prev' && index !== 1) {
            setIndex((prevState) => prevState - 1);
        }
        if (type === 'next' && index !== items.length) {
            setIndex((prevState) => prevState + 1);
        }
    };

    return (
        <section className={styles.wrapper}>
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
                        onClick={() => clickSlideButton('prev')}
                    />
                    <p>{index + '/' + items.length}</p>
                    <ButtonSlider
                        id={idOne}
                        type={'next'}
                        onClick={() => clickSlideButton('next')}
                    />
                </div>
            </Swiper>
        </section>
    );
};
