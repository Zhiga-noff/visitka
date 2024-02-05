import {IEditionData} from 'libs/types';
import {toFormatDate} from 'libs/utils/time';
import {FC, useEffect, useState} from 'react';
import {Tags} from 'components/left-block/tags';
import {Video} from './video';
import styles from './edition.module.scss';
import {IconLike, IconShare} from 'components/ui/icons/interaction';
import {Expand} from 'components/left-block/parceling-item/article-lg/expand';

interface IProps {
    data: IEditionData;
    showInfoFlag?: boolean
}

export const Edition: FC<IProps> = ({data}) => {
    const {title, dateCreate, anons, media, text, tags, url} = data;

    const [time, setTime] = useState<string>('');

    useEffect(() => {
        setTime(toFormatDate(dateCreate));
    }, []);

    return (
        <article className={styles.edition}>
            <header className={styles.header}>
                <h1 className={styles.title}>{title}</h1>
                <time className={styles.time}>{time}</time>
            </header>
            <img className={styles.image} width={890} alt={title} src={media.images.i16x9}/>
            <Tags data={tags}/>
            <section className={styles.materials}>
                <article className={styles.interaction}>
                    <IconLike/>
                    <IconShare/>
                </article>
                <section className={styles.content}>
                    <Video video={media.video} url={url}/>
                    <Expand data={anons} title={'Описание'}/>
                    <Expand data={text} title={'Текст выпуска'}/>
                </section>
            </section>
        </article>
    );
};
