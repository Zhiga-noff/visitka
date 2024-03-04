import { FC, Fragment } from 'react';
import { IBlock } from '../../../libs/types';
import styles from './slider-md.module.scss';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { clsx } from 'clsx';
import { AdFox } from '../../ad-fox';
import { Card } from '../../ui/card';
import { ArrowLinkTitle } from '../../ui/icons/arrow-link-title';
import { SliderButton } from '../../ui/slider-button/slider-button';
import {Autoplay, FreeMode, Navigation} from "swiper/modules";
import {iconCards} from "../../../libs/constants/icons-card";

interface IProps {
  data: IBlock;
}

export const SliderMd: FC<IProps> = ({ data }) => {
  const { items, urlApi, title, order } = data;
  const [idOne, idTwo] = ['button1' + order, 'button2' + order];

  return (
    <article className={styles.content}>
      <header className={styles.header}>
        <Link href={urlApi} className={styles.link}>
          <h2 className={styles.title}>
            {(title === 'Новости' && 'Последние новости') || title}
          </h2>
          <ArrowLinkTitle />
        </Link>
      </header>
      <Swiper
        freeMode={true}
        modules={[FreeMode, Autoplay, Navigation]}
        autoplay={{ delay: 2000 * (order + 1) }}
        className={styles.swiper}
        // direction={position}
        wrapperClass={clsx(styles.wrapper)}
        slidesPerView={3}
        spaceBetween={'15px'}
        navigation={{
          nextEl: `#${idOne}`,
          prevEl: `#${idTwo}`,
        }}
      >
        <SliderButton type="next" id={idOne} /> {/* Кнопка вперед */}
        <SliderButton type="prev" id={idTwo} /> {/* Кнпока назад */}
        {items.map((item, i) => (
          <Fragment key={item.url}>
            {/* В теории 3й в списке слайдера
             и каждый 8 слайд должен быть рекламой
             судя по вссему работает на мобилке */}
            {(i === 2 || ++i % 7 === 0) && (
              <SwiperSlide
                virtualIndex={i}
                key={item.url + i}
                className={clsx(styles.slide, styles.ad)}
              >
                <AdFox name={'mv3'} />
              </SwiperSlide>
            )}
            {/* В теории 5й в списке слайдера
             и каждый 11 слайд должен быть рекламой
             судя по всему работает на мобилке */}
            {(i === 5 || i % 10 === 0) && (
              <SwiperSlide
                virtualIndex={i}
                key={item.url + i + 1}
                className={clsx(styles.slide, styles.ad)}
              >
                <AdFox name={'mv4'} />
              </SwiperSlide>
            )}
            <SwiperSlide virtualIndex={i} key={item.url + i + 2} className={styles.slide}>
              {/* компанент карточки */}
              <Card data={item} titleBlock={title} icon={iconCards['Новости']}/>
            </SwiperSlide>
          </Fragment>
        ))}
      </Swiper>
    </article>
  );
};
