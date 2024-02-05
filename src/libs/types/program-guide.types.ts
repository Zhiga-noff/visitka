export interface IProgramGuide {
  title: string;
  anons: any;
  text: string;
  type: string;
  titleAnons?: string;
  textAnons?: string;
  url: string;
  urlOrigin: string;
  datePublished: string;
  media: {
    images: { i16x9?: string; i16x7: any; i4x3: any };
    video: any;
  };
  year?: string;
  age: string;
  studio?: string;
  country?: string;
  progtype?: string;
  genre?: string;
  actor?: string;
  director?: string;
  composer?: string;
  scriptwriter?: string;
  isActiv: boolean;
}

export interface IDayGuide {
  date: string;
  programGuide: IProgramGuide[];
}

export interface IProgramGuideData {
  programGuide: IDayGuide[];
}
