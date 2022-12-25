export type TArchiveItem = {
  time: string;
  price: number;
  instrument: string;
  volume: string;
};

export type ArchiveSliceState = {
  items: TArchiveItem[];
};
