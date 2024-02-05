export interface IEditionData {
  title: string;
  anons: string;
  text: string;
  url: string;
  tags: string[];
  authors: string[];
  topics: any[];
  dateCreate: string;
  dateUpdate: string;
  dateDelete: any;
  media: {
    images: { i16x9: string; i16x7: any; i4x3: any };
    video: string;
  };
}
