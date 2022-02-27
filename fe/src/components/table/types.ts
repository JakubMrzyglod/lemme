import { Sizes } from '../box/types';

export type TableProps<T = any> = {
  titles: Titles
  data: T[];
};

export type Titles = Record<string, RowItem>

export type HeaderProps = {
  headers: RowItem[];
};

export type BodyProps = { body: RowItem[][] };

export type RowItem = { text: string } & Sizes;
