import { FC, useEffect } from 'react';
import { useFormContext, useFieldArray } from '@jakubmrzyglod/react-hook-form';
import { Line } from '../../../../../../../components/line';
import { BASE_NAME } from './constants';
import { Row } from './components/row';

export const Items: FC = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: BASE_NAME,
  });
  useEffect(() => {
    append({});
  }, []);
  const itemsCount = fields.length;
  return (
    <>
      <Line />
      {fields.map((field, index) => (
        <Row {...{ field, index, append, remove, itemsCount }} />
      ))}
      <button {...{ type: 'button', onClick: () => append({}) }}>add</button>
    </>
  );
};
