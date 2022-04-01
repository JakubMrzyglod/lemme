import { FC } from 'react';
import { FormItem, useFormContext } from '@jakubmrzyglod/react-hook-form';
import { SummaryValue } from './summary-value';
import { Label } from '../../../../../../../../../components/input/styled/input-label';
import { SummaryProps } from '../../types';
import { BASE_NAME } from '../../constants';

export const Summary: FC<SummaryProps> = ({
  watchFieldNames,
  index,
  label,
}) => {
  const { watch } = useFormContext(); // TODO:replace with useWatch()
  watchFieldNames = watchFieldNames.map(
    (name) => `${BASE_NAME}.${index}.${name}`
  );
  const watchFields = watch(watchFieldNames);
  const value = watchFields.reduce(
    (total, fieldValue) => (fieldValue ? total * fieldValue : 0),
    1
  );
  return (
    <FormItem {...{ xs: 2 }}>
      <Label>{label}</Label>
      <SummaryValue {...{ children: value || 0 }} />
    </FormItem>
  );
};
