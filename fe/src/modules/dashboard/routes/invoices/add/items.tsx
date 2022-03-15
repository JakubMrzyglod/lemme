import { FC, useEffect } from 'react';
import { useFormContext, useFieldArray } from '@jakubmrzyglod/react-hook-form';
import { Line } from '../../../../../components/line';
import { BASE_NAME } from './constants';
import { Row } from './comopnents/row';

export const Items: FC = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: BASE_NAME,
  });
  useEffect(() => {
    append({});
  }, []);
  return (
    <>
      <Line />
      {fields.map((field, index) => {
        const itemsCount = fields.length;
        return <Row {...{ field, index, append, remove, itemsCount }} />;
      })}
      <button {...{ type: 'button', onClick: () => append({}) }}>add</button>
    </>
  );
};
