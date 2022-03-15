import { registerInputs } from '@jakubmrzyglod/react-hook-form';
import { Input } from './styled/input-field';
import { Label } from './styled/input-label';
import { Error } from './styled/input-error';

export const InvoiceInput = registerInputs(
  { Label, Input, Error },
  {
    Number: {
      name: 'num',
      label: 'Number',
      placeholder: 'Test test test',
    },
    CreatePlace: {
      name: 'createPlace',
      label: 'Create place',
    },
  }
);

export const InvoiceItemInput = registerInputs(
  { Label, Input, Error },
  {
    Name: {
      name: 'name',
      label: 'Name',
    },
    Quantity: {
      name: 'quantity',
      label: 'Quantity',
    },
    Unit: {
      name: 'unit',
      label: 'Unit',
    },
    Price: {
      name: 'price',
      label: 'Price',
    },
    Tax: {
      name: 'tax',
      label: 'Tax',
    },
  }
);
