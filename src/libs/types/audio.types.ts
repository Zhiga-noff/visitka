export interface IAudioPlayer {
  title: string;
  dateCreate: Date;
  dateUpdate: Date;
  urlApi: string;
  items: AudioPlayerItems[];
}

/* временно присвоил ту же типизацию что и IItem */
export interface AudioPlayerItems {
  // title: string;
  // anons: string;
  // url: string;
  // urlApi: string;
  // dateCreate: Date;
  // media: {
  //   images: {
  //     i16x9: string | null;
  //     i16x7: string | null;
  //     i4x3: string | null;
  //   };
  //   video: string | null;
  //   audio: string | null;
  // };
  title: string;
  url: string;
  tags: string[];
  dateCreate: string;
  parentTitle: string;
  media: {
    audio?: string;
    images: {
      i16x9: string | undefined;
      i16x7: string;
      i4x3: null | string;
    };
    video?: null;
  };
  hasVideo?: boolean;
  text: string;
  anons: string;
}
