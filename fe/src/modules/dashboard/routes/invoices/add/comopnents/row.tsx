import { FC } from 'react';
import { InvoiceItemInput } from '../../../../../../components/input/customs';
import { BASE_NAME as baseName, SUMMARY_PROPS } from '../constants';
import { HandleRow } from '../elements/handle-row-button';
import { Summary } from '../elements/summary';
import { RowProps } from '../types';
import { RowBox } from './row.container';

export const Row: FC<RowProps> = ({ field, index, ...rowHandlerProps }) => {
  const arrayProps = { baseName, index };
  return (
    <RowBox {...{ key: field.id }}>
      <InvoiceItemInput.Name {...{ xs: 11, arrayProps }} />
      <InvoiceItemInput.Quantity {...{ xs: 2, arrayProps }} />
      <InvoiceItemInput.Unit {...{ xs: 2, arrayProps }} />
      <InvoiceItemInput.Price {...{ xs: 2, arrayProps }} />
      <InvoiceItemInput.Tax {...{ xs: 2, arrayProps }} />
      <Summary {...{ ...arrayProps, ...SUMMARY_PROPS.NET }} />
      <Summary {...{ ...arrayProps, ...SUMMARY_PROPS.GROSS }} />
      <HandleRow {...{ index, ...rowHandlerProps }} />
    </RowBox>
  );
};
