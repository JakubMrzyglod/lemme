import { registerControllers } from '@jakubmrzyglod/react-hook-form';
import { Label } from '../input/styled/input-label';
import { Error } from '../input/styled/input-error';
import { DateField } from './dateField';

const MAIN_CONTROLLER_GROUP = { Label, Controller: DateField, Error };
export const DatePicker = registerControllers(MAIN_CONTROLLER_GROUP, {
  CreatedAt: {
    name: 'createdAt',
    label: 'Created at',
    defaultValue: new Date(),
  },
});
