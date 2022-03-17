import { FC } from 'react';
import { InvoiceItemInput } from '../../../../../../../../../components/input/customs';
import { SUMMARY_PROPS, BASE_NAME as baseName } from '../../constants';
import { RowProps } from '../../types';
import { HandleRow } from '../handle-row-button';
import { Summary } from '../summary';
import { RowBox } from './row.container';

export const Row: FC<RowProps> = ({ field, index, ...rowHandlerProps }) => {
  return (
    <RowBox {...{ key: field.id }}>
      <InvoiceItemInput.Name {...{ xs: 11, index }} />
      <InvoiceItemInput.Quantity {...{ xs: 2, index }} />
      <InvoiceItemInput.Unit {...{ xs: 2, index }} />
      <InvoiceItemInput.Price {...{ xs: 2, index }} />
      <InvoiceItemInput.Tax {...{ xs: 2, index }} />
      <Summary {...{ index, ...SUMMARY_PROPS.NET }} />
      <Summary {...{ index, ...SUMMARY_PROPS.GROSS }} />
      <HandleRow {...{ index, ...rowHandlerProps }} />
    </RowBox>
  );
};
