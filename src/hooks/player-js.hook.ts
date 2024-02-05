'use client';
import {useEffect, useId} from 'react';

interface IProps {
    video: string;
    init?: boolean;
    url?: string;
    poster?: string;
}

export const usePlayerJs = ({video, init = true, url = '', poster}: IProps) => {
    const id = useId();

    const initPlayer = () => {
        const config = {
            url: `${window.location.origin}${url}`,
            poster: poster,
            autoplay: false,
            muted: false,
            embed: `${window.location.origin}${url}`,
            id: id,
            file: video,
            shareclred: true,
            sharebgcolor: '#9a0000',
            share1: 'vk',
            share2: 'ok',
            share3: 'telegram',
            share4: '',
            share5: ''
        };

        if (window.Playerjs) {
            new window.Playerjs(config);
        } else {
            window.pjscnfgs[config.id] = config;
        }
    };

    useEffect(() => {
        if (init) {
            initPlayer();
        }
        return () => {
            window.pljssglobal[0]?.api('stop', video);
            if (window.pjscnfgs) {
                window.pjscnfgs = {};
                window.pljssglobal = {};
            }
        };
    }, [video, url, poster]);

    return {id, initPlayer};
};
