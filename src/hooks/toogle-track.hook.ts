'use client';
import {AudioPlayerItems} from 'libs/types/audio.types';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {setInfoTrack, trackSwith} from 'store/slices/player.slices';
import noFoto from "../assets/image/no-photo.png";

export interface IPropsAiduo {
    track: string;
    nameTrack: string;
    description: string;
    cover: string;
}

export const useTooogleTrack = () => {
    const dispatch = useAppDispatch();

    const {isPlay, activeTrackNum} = useAppSelector((store) => store.player);

    /* Включает трек по переданному индексу */
    const trackNumberSwith = (numberTrack: number) => {
        dispatch(trackSwith(numberTrack));
    };

    /* Устанавливает информацию о треке */
    const setTrack = ({media, anons, title}: AudioPlayerItems) => {
        dispatch(
            setInfoTrack({
                cover: media.images.i4x3 ||
                    media.images.i16x7 ||
                    media.images.i16x9 ||
                    noFoto.src,
                description: anons,
                nameTrack: title,
                track: media.audio,
            })
        );
    };

    return {
        isPlay,
        setTrack,
        trackNumberSwith,
        activeTrackNum,
    };
};
