import { FC } from 'react';
import { InvoiceInput } from '../../../../../../../components/input/customs';

export const Details: FC = () => {
  return (
    <>
      <InvoiceInput.Number {...{ xs: 4 }} />
      <InvoiceInput.CreatePlace {...{ xs: 4 }} />
    </>
  );
};
