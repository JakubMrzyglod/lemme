import { FC } from 'react';
import { Collection } from '../../../../common/firebase/constants';
import { useCollection } from '../../../../common/firebase/useCollection';
import { Loading } from '../../../../components/loading';
import { Table } from '../../../../components/table';
import { INVOICE_TABLE_TITLES } from '../../constants';

export const Invoices: FC = () => {
  const { data } = useCollection(Collection.INVOICES);
  const loading = !data;
  return (
    <>
      <Table
        {...{
          titles: INVOICE_TABLE_TITLES,
          data: [{ name: 'value name', otherName: 'other name value' }],
        }}
      />
      <Loading {...{ loading }} />
    </>
  );
};
