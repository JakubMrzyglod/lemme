import { ControllerProps } from '@jakubmrzyglod/react-hook-form';
import { FC } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { Input } from '../input/styled/input-field';

export const DateField: FC<ControllerProps> = ({
  field: { value, onChange },
}) => {
  const onDayChange = (date: Date) => onChange(date);
  return <DayPickerInput {...{ value, onDayChange, component: Input }} />;
};
