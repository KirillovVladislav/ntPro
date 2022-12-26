export type TArchiveItem = {
  side: string;
  time: string;
  price: number;
  instrument: string;
  volume: string;
};

export type ArchiveSliceState = {
  items: TArchiveItem[];
};
