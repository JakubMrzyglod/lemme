import { FC } from 'react';
import { FormItem, useFormContext } from '@jakubmrzyglod/react-hook-form';
import { Label } from '../../../../../../../components/input/styled/input-label';
import { SummaryValue } from './summary-value';
import { SummaryProps } from '../../types';

export const Summary: FC<SummaryProps> = ({
  watchFieldNames,
  baseName,
  index,
  label,
}) => {
  const { watch } = useFormContext(); // TODO:replace with useWatch()
  watchFieldNames = watchFieldNames.map(
    (name) => `${baseName}.${index}.${name}`
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
