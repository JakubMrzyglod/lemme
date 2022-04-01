import { Form } from '@jakubmrzyglod/react-hook-form';
import { FC } from 'react';
import { Box } from '../../../../../components/box';
import { InvoiceInput } from '../../../../../components/input/customs';
import { Items } from './items';
import { resolver } from './validation';

export const AddInvoice: FC = () => {
  const submit = (data: any) => console.log(data);
  return (
    <>
      <Form {...{ submit, resolver, gap: 1 }}>
        <Box>
          <InvoiceInput.Number {...{ xs: 4 }} />
          <InvoiceInput.CreatePlace {...{ xs: 4 }} />
        </Box>
        <div>
          <Items />
        </div>
        <button type='submit'>submit</button>
      </Form>
    </>
  );
};
