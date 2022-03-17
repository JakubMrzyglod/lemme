import { FormBucket } from '@jakubmrzyglod/react-hook-form';
import { FC } from 'react';
import { InvoiceClientInput } from '../../../../../../../components/input/customs';
import { Line } from '../../../../../../../components/line';

export const Client: FC = () => {
  return (
    <>
      <Line />
      <FormBucket {...{ xs: 12 }}>
        <InvoiceClientInput.TaxNumber />
        <InvoiceClientInput.Name />
        <InvoiceClientInput.Address />
        <InvoiceClientInput.PostCode {...{ xs: 6 }} />
        <InvoiceClientInput.City {...{ xs: 18 }} />
      </FormBucket>
    </>
  );
};
