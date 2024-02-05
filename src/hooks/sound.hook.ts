'use client';
import {useCallback, useEffect, useRef, useState} from 'react';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {getPlayer, initPlayer, setCurrenTrack, setPause, setPlay, trackSwith,} from 'store/slices/player.slices';

export const useSound = () => {
    const [audio, setAudio] = useState<HTMLAudioElement>();
    const intervalRef = useRef<NodeJS.Timer>();

    const dispatch = useAppDispatch();

    /* Получение ключей Player из state */
    const {track, isPlay, volume, initTrack, userCurrentTime, trakList, activeTrackNum} =
        useAppSelector(getPlayer);

    /* Создает HTML элемент audio и помещает его в констану
     * и устанавлиевает звук согласно тегу audio 1 */
    useEffect(() => {
        const audio = new Audio(track);
        setAudio(audio);
        dispatch(initPlayer(audio!.volume));
    }, []);

    /* Остлеживает изменение громкости в плеере */
    useEffect(() => {
        if (audio) {
            audio.volume = volume;
        }
    }, [volume]);

    /* Получает из трека при рендере
     * его текущее положение по звуковой дорожке
     * а так же длительность трека и присваивает их
     * в состояние Player*/
    const setTrack = () => {
        dispatch(
            setCurrenTrack({
                currentTime: audio?.currentTime || 0.1,
                duration: audio?.duration || 0.1,
            }),
        );
    };

    /* Обновленияет информацию о треке
     * либо переключает его по списку
     * при условии изменения зависимостей  */
    const updCurrentTrack = useCallback(() => {
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            if (audio?.ended)
                if (trakList.length > activeTrackNum + 1) {
                    dispatch(trackSwith(activeTrackNum + 1));
                }
            setTrack();
        }, 500);
    }, [track, intervalRef, audio]);

    /* Присваивает ссылку на трек тегу audio */
    useEffect(() => {
        if (audio) {
            audio.src = track;
            setTrack();
            play();
        }
    }, [track]);

    /* Воспроизводит видео с установленной точки */
    useEffect(() => {
        if (audio) {
            audio.currentTime = userCurrentTime;
            if (!isPlay && initTrack) {
                play();
                updCurrentTrack();
            }
        }
    }, [userCurrentTime]);

    /* Запускает воспроизведение аудио */
    const play = () => {
        if (audio?.src === window.location.href) {
            audio.src = track;
        }
        audio?.play(); // Метод объекта audio включающий проигрыш аудио
        updCurrentTrack();
        dispatch(setPlay());
    };

    /* Останавливает воспроизведение аудио */
    const pause = () => {
        audio?.pause();
        dispatch(setPause());
        clearInterval(intervalRef.current);
    };

    return {
        pause,
        play,
        isPlay,
    };
};
