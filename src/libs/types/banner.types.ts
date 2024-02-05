export interface IBanner {
  key: string;
  order: number;
  slot: string;
  type: string;
  templateKey: string;
  options: Options;
  props: IProps;
  title: string;
  dateCreate: string;
  dateUpdate: string;
  urlApi: string;
  lazy: boolean;
  urlApiPlaylist: string;
  items: string;
}

interface Options {}

export interface IProps {
  width: string;
  height: string;
  params: Params;
}

interface Params {
  p2: string;
  pp: string;
  ps: string;
}
