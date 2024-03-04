import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import {AudioPlayer} from 'libs/types';
import {RootState} from 'store';

interface IState {
    track: string;
    nameTrack: string;
    cover: string;
    description: string;
    err: Error;
    IsPause: boolean;
    isPlay: boolean;
    volume: number;
    activeTrackNum: number;
    trakList: AudioPlayer['items'];
    initTrack: boolean;
    currentPercentage: number;
    duration: number;
    currentTime: number;
    userCurrentTime: number;
}

const initialState: IState = {
    track: '', // Трек на звуковую дорожку
    nameTrack: '', // Название трека
    description: '', // Краткое описание трека
    cover: '', // Обложка трека
    volume: 0, // Громкость звука от 0 до 1
    err: null as unknown as Error,
    IsPause: true, // Флаг нахождения на паузе плеера
    isPlay: false, // Флаг включен плеер или нет
    activeTrackNum: 0, // Думаю индекс активного трека из списка
    trakList: [], // Массив из треков, по которому в теории можно будет переключаться
    initTrack: false,
    currentPercentage: 0, // Позиция трека в прогресс баре
    duration: 0, // Продолжительность трека
    currentTime: 0,
    userCurrentTime: 0, // Установленное значение юзером куда перемотать аудио
};

interface ISetInfoTrack {
    track: string;
    nameTrack: string;
    description: string;
    cover: string;
}

export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        /* Инициализирует что плеер на паузе */
        setPause: (state) => {
            state.IsPause = true;
            state.isPlay = false;
        },

        /* Инициализирует что плеер включен и не находится на паузе */
        setPlay: (state) => {
            state.isPlay = true;
            state.IsPause = false;
        },

        /* Усанавливает информацию о трекер, название, описание, картинку и ссылку на трек */
        setInfoTrack: (state, {payload}: PayloadAction<ISetInfoTrack>) => {
            state.track = payload.track;
            state.nameTrack = payload.nameTrack;
            state.description = payload.description;
            state.cover = payload.cover;
        },

        setDescription: (state, {payload}) => {
            state.description = payload.description;
        },

        /* Устанавливает позицию трека в плейлисте */
        setActiveTrackNum: (state, {payload}) => {
            state.activeTrackNum = payload;
        },

        /*   */
        initPlayer: (state, {payload}) => {
            state.initTrack = true;
            state.volume = payload;
        },

        /* Получаю активный трек по списку плейлиста */
        setTrackList: (state, {payload}) => {
            state.trakList = payload;
        },

        /* Установка громкости */
        setAudioVolume: (state, {payload}: PayloadAction<number>) => {
            state.volume = payload;
        },

        /* Включает трек в списке по переданному индексу */
        trackSwith: (state, {payload}: PayloadAction<number>) => {
            state.activeTrackNum = payload;
        },

        /* Устанавливает длину трека а так же начальное положение трека */
        setCurrenTrack: (
            state,
            {payload}: PayloadAction<{ currentTime: number; duration: number }>,
        ) => {
            state.duration = payload.duration;
            state.currentTime = payload.currentTime;
            state.currentPercentage = state.currentTime / state.duration;
        },

        /* Устанавливает по клику на какое место точно перематывает */
        setUserCurrentTime: (state, {payload}: PayloadAction<number>) => {
            state.userCurrentTime = payload;
        },
    },
});

export const {
    setPause,
    setPlay,
    setInfoTrack,
    setActiveTrackNum,
    initPlayer,
    setAudioVolume,
    trackSwith,
    setTrackList,
    setCurrenTrack,
    setUserCurrentTime,
    setDescription
} = playerSlice.actions;

/* Получение из store Palyer */
export const getPlayer = (store: RootState) => store.player;
