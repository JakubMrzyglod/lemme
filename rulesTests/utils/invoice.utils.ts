import { random, datatype, address } from 'faker';
import { getPartialUpdateObjects } from './helpers';

export type Invoice = ReturnType<typeof getInvoiceData>;

export const getInvoiceData = (partialData = {}) => ({
  num: datatype.uuid(),
  createPlace: random.word(),
  items: [
    {
      name: random.word(),
      quantity: datatype.number(),
      unit: random.word(),
      price: datatype.number(),
      tax: datatype.number(),
    },
  ],
  client: {
    taxNumber: datatype.uuid(),
    name: random.word(),
    city: address.city(),
    address: address.streetAddress(),
    postCode: random.word(),
  },
  ...partialData,
});

export const objectsOfPartialUpdate: Partial<Invoice>[] =
  getPartialUpdateObjects(getInvoiceData());

export const objectsOfWrongPartialUpdate = [
  { num: datatype.number() },
  { createPlace: datatype.number() },
  { items: datatype.number() },
  { client: datatype.number() },
  {
    client: {
      taxNumber: datatype.number(),
      name: datatype.number(),
      city: datatype.number(),
      address: datatype.number(),
      postCode: datatype.number(),
    },
  },
];
