import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AddInvoice } from './routes/invoices/add';

export const DashboardRouting: FC = () => {
  return (
    <Routes>
      <Route {...{ path: '/', element: <AddInvoice /> }} />
    </Routes>
  );
};
