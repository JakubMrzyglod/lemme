import { FC } from 'react';
import { DatePicker } from '../../../../../../../components/date-picker';
import { InvoiceInput } from '../../../../../../../components/input/customs';
import { useInvoiceNumberSetter } from './invoice-number-setter';

export const Details: FC = () => {
  useInvoiceNumberSetter();
  return (
    <>
      <InvoiceInput.Number {...{ xs: 4 }} />
      <InvoiceInput.CreatePlace {...{ xs: 4 }} />
      <DatePicker.CreatedAt {...{ xs: 4 }} />
    </>
  );
};
