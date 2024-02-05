import noFoto from '../../assets/image/no-photo.png';
import { AudioPlayerItems } from '../types/audio.types';
import { IItem } from '../types/page-home.types';
import radio from 'assets/image/radio-img.png';

export const liveBroadcast: AudioPlayerItems[] = [
  {
    title: 'Прямой эфир',
    url: '',
    tags: [''],
    dateCreate: '',
    parentTitle: '',
    media: {
      audio: 'http://icecast-zvezda.mediacdn.ru/radio/zvezda/zvezda_128',
      images: {
        i16x9: noFoto.src,
        i16x7: noFoto.src,
        i4x3: radio.src,
      },
    },
    text: 'Прямой эфир',
    anons: 'Слушайте прямо сейчас в прямом эфире...',
  },
];
