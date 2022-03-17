import { Form } from '@jakubmrzyglod/react-hook-form';
import { FC } from 'react';
import { Client } from './elements/client';
import { Details } from './elements/details';
import { Items } from './elements/items';
import { resolver } from './validation';

export const AddInvoice: FC = () => {
  const submit = (data: any) => console.log(data);
  return (
    <Form {...{ submit, /*resolver,*/ gap: 1 }}>
      <Details />
      <Client />
      <Items />
      <button type='submit'>submit</button>
    </Form>
  );
};
