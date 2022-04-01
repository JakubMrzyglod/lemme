export type HandleRowProps = {
  itemsCount: number;
  index: number;
} & RowHandlers;

export type SummaryProps = {
  watchFieldNames: string[];
  baseName: string;
  index: number;
  label: string;
};

export type RowProps = {
  field: Record<'id', string>;
  index: number;
  itemsCount: number;
} & RowHandlers;

type RowHandlers = {
  append: (obj: Object) => void;
  remove: (index: number) => void;
};

export type HandleRowButtonProps = {
  isLastItem: boolean;
};
