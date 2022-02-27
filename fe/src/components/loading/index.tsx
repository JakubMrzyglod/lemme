import { FC } from 'react';
import { Backdrop } from '../backdrop';
import { BackdropProps } from '../backdrop/types';
import { Spinner } from './spinner';

export const Loading: FC<BackdropProps> = props => (
  <Backdrop {...props}>
    <Spinner />
  </Backdrop>
);
