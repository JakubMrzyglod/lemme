import { registerInputs } from '@jakubmrzyglod/react-hook-form';
import { Input } from './styled/input-field';
import { Label } from './styled/input-label';
import { Error } from './styled/input-error';
import { BASE_NAME } from '../../modules/dashboard/routes/invoices/add/elements/items/constants';
const MAIN_INPUT_GROUP = { Label, Input, Error };
export const InvoiceInput = registerInputs(MAIN_INPUT_GROUP, {
  Number: {
    name: 'num',
    label: 'Number',
    placeholder: 'Test test test',
  },
  CreatePlace: {
    name: 'createPlace',
    label: 'Create place',
  },
});

export const InvoiceClientInput = registerInputs(
  MAIN_INPUT_GROUP,
  {
    Name: {
      name: 'name',
      label: 'Name',
    },
    TaxNumber: {
      name: 'taxNumber',
      label: 'Tax Number',
    },
    Address: {
      name: 'address',
      label: 'Address',
    },
    PostCode: { name: 'postCode', label: 'Post Code' },
    City: { name: 'city', label: 'City' },
  },
  { baseName: 'client' }
);

export const InvoiceItemInput = registerInputs(
  MAIN_INPUT_GROUP,
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
  },
  { baseName: BASE_NAME }
);
