'use client';

import {FC, useEffect, useState} from 'react';

import {usePlayerJs} from 'hooks';
import {Hidden} from 'components/left-block/parceling-item/article-lg/expand/hidden';

interface IProps {
    url?: string
    video: string;
    title?: string;
    media?: {
        audio?: string;
        images: {
            i16x9: string | undefined;
            i16x7: string;
            i4x3: null | string;
        };
        video?: string | null;
    };
}

export const Video: FC<IProps> = ({video, title, media, url}) => {
    const {id, initPlayer} = usePlayerJs({video, init: false, url});

    const [isOpen, setIsOpen] = useState(false);
    const [showVideoElement, setShowVideoElement] = useState(true);


    useEffect(() => {
        if (!isOpen) {
            initPlayer();
        }
    }, [isOpen]);

    return (
        <>
            <Hidden fn={setIsOpen} title={'Видео'} showFlag={true} showVideo={showVideoElement}>
                <article id={id}/>
            </Hidden>
        </>
    );
};
