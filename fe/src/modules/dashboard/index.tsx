import { FC } from 'react';
import { AppBar } from './elements/app-bar';
import { ContentBox } from './elements/content-box';
import { DashboardBox } from './elements/dashboard-box';
import { DashboardRouting } from './routing';

export const Dashboard: FC = () => {
  console.log('object');
  return (
    <DashboardBox>
      <AppBar />
      <ContentBox>
        <DashboardRouting />
      </ContentBox>
    </DashboardBox>
  );
};
