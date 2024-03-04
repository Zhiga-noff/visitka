export interface IStatisticsTypes {
  top?: string;
  center: string;
  bottom?: string;
  description?: string;
}

export interface IArrayStatistics {
  tvzvezda: IStatisticsTypes[];
  'radio-zvezda': IStatisticsTypes[];
  ezhenedelnik: IStatisticsTypes[];
  'zvezda-plus': IStatisticsTypes[];
  glavkino: IStatisticsTypes[];
}
