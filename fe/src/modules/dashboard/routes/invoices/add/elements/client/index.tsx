import { FC } from 'react';
import { InvoiceClientInput } from '../../../../../../../components/input/customs';
import { Line } from '../../../../../../../components/line';

export const Client: FC = () => {
  return (
    <>
      <Line />
      <InvoiceClientInput.Name {...{ xs: 12 }} />
      <InvoiceClientInput.TaxNumber {...{ xs: 12 }} />
      <InvoiceClientInput.Address {...{ xs: 12 }} />
      <InvoiceClientInput.PostCode {...{ xs: 3 }} />
      <InvoiceClientInput.City {...{ xs: 9 }} />
    </>
  );
};
