import React, { FC } from 'react';
import styles from './article-lg.module.scss';
import Link from 'next/link';
import { IBlock } from '../../../libs/types';
import { useInitPleer } from 'hooks/player-js.hook';
import {Image} from "../../ui/image";
import {Tags} from "../../ui/tags";
import {MoreInfo} from "../../ui/more-info";

interface IProps {
  data: IBlock;
}

export const ArticleLg: FC<IProps> = ({ data }) => {
  const { items } = data;
  const { dateCreate,anons, hasVideo, media, tags, title, url, text } = items[0];

  /* Инициализирует видео на странице, при этом сразу включенное */
  useInitPleer({
    hasVideo,
    video: media.video?.url,
    url,
    poster: media.images.i16x9.url as string,
    title,
  });

  return (
    <>
      <section className={styles.wrapper}>
        <header className={styles.header}>
          <h2>Новости</h2>
        </header>
        {(!!media.video) ? (
          <div id={'video'} />
        ) : (
          <Image
            thumbnail={false}
            className={styles.image}
            width={660}
            height={371}
            alt={title}
            src={media.images.i16x9.url || media.images.i4x3.url || (media.images.i16x7.url as string)}
          />
        )}
        {/*{nameIcon === 'Лица канала' || (*/}
          <time className={styles.time}>{dateCreate}</time>
        {/*)}*/}
        <h1 className={styles.title}>{title}</h1>
        {anons ? <p className={styles.discription}>{anons}</p> : ''}
        {/* компанент тэгов */}
        {tags ? <Tags data={tags} /> : ''}
        {/* кнопка "Больше информации" */}
        <MoreInfo text={text} url={'https://tvzvezda.ru' + url} section={'Новости'} />
      </section>
    </>
  );
};
