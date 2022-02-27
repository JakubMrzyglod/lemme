import { FC } from 'react';
import { useCollection, Collection } from '../../common/firebase/useCollection';
import { Loading } from '../../components/loading';
import { Table } from '../../components/table';
import { INVOICE_TABLE_TITLES } from './constants';
import { AppBar } from './elements/app-bar';
import { ContentBox } from './elements/content-box';
import { DashboardBox } from './elements/dashboard-box';

export const Dashboard: FC = () => {
  const { data } = useCollection(Collection.INVOICES);
  const loading = !data;
  return (
    <DashboardBox>
      <AppBar />
      <ContentBox>
        <Table
          {...{
            titles: INVOICE_TABLE_TITLES,
            data: [{ name: 'value name', otherName: 'other name value' }],
          }}
        />
      </ContentBox>
      <Loading {...{ loading }} />
    </DashboardBox>
  );
};
