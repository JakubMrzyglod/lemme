import { Form } from '@jakubmrzyglod/react-hook-form';
import { addDoc, getDoc, setDoc } from 'firebase/firestore';
import { FC } from 'react';
import { Collection } from '../../../../../common/firebase/constants';
import { useDbRef } from '../../../../../common/firebase/useCollPath';
import { Client } from './elements/client';
import { Details } from './elements/details';
import { Items } from './elements/items';
import { resolver } from './validation';

export const AddInvoice: FC = () => {
  const { getDocRef } = useDbRef(Collection.INVOICES);
  const submit = async (data: any) => {
    const { num, ...invoice } = data;
    const docRef = getDocRef(num);
    try {
      console.log('started');
      await setDoc(docRef, invoice);
      console.log('finished');
    } catch (err) {
      console.log('Error', { err });
    }
  };
  return (
    <Form {...{ submit, /*resolver,*/ gap: 1 }}>
      <Details />
      <Client />
      <Items />
      <button type='submit'>submit</button>
    </Form>
  );
};
