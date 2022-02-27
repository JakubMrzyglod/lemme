export type ItemProps = {
  gap?: number;
} & Sizes;

export type Sizes = {
  xs?: Size;
  sm?: Size;
  lg?: Size;
};

type Size = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
