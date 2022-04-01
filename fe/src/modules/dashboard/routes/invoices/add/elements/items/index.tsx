import { FC, useEffect } from 'react';
import { useFormContext, useFieldArray } from '@jakubmrzyglod/react-hook-form';
import { Line } from '../../../../../../../components/line';
import { BASE_NAME } from './constants';
import { Row } from './components/row';

export const Items: FC = () => {
  const { control, reset } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: BASE_NAME,
  });
  // useEffect(() => {
  //   append({});
  // }, []);
  const itemsCount = fields.length;
  const onClick = () => {
    reset({
      createPlace: 'Bielsko-Biała',
      client: {
        name: 'Client name',
        taxNumber: '123123123',
        address: 'ul. Jasna 12',
        postCode: '12-222',
        city: 'Katowice',
      },
      items: [
        { name: 'Product 1', quantity: 10, unit: 'szt', price: 10, tax: 23 },
        { name: 'Product 2', quantity: 15, unit: 'szt', price: 5, tax: 23 },
      ],
    });
  };
  return (
    <>
      <Line />
      {fields.map((field, index) => (
        <Row {...{ field, index, append, remove, itemsCount }} />
      ))}
      <button {...{ type: 'button', onClick }}>set</button>
    </>
  );
};
