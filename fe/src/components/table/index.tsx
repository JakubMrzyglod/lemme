import { FC } from 'react';
import { Body } from './elemtnts/body';
import { Header } from './elemtnts/header/idndex';
import { RowItem, TableProps } from './types';

export const Table: FC<TableProps> = ({ titles, data }) => {
  const titleEntries: [string, RowItem][] = Object.entries(titles);
  const headers = titleEntries.map(([, headerDetails]) => headerDetails);
  const orderKeys = titleEntries.map(([key]) => key);
  const body = data.map(item => orderKeys.map((key, index) => ({ ...headers[index], text: item[key] })));
  return (
    <>
      <Header {...{ headers }} />
      <Body {...{ body }} />
    </>
  );
};
