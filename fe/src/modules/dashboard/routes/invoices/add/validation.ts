import { object, array, string, number } from 'yup';
import { BASE_NAME } from './constants';
import { yupResolver } from '@hookform/resolvers/yup';

const isNumber = number()
  .required()
  .min(0, 'Must be position')
  .typeError('Is Required');
const isString = string().required('Is Required');

const schema = object({
  createPlace: isString,
  num: isString,
  [BASE_NAME]: array().of(
    object({
      name: isString,
      quantity: isNumber,
      unit: isString,
      price: isNumber,
    })
  ),
});

export const resolver = yupResolver(schema);
