import { FC } from 'react';
import { HeaderProps } from '../../types';
import { HeaderBox, HeaderItem } from './styled';

export const Header: FC<HeaderProps> = ({ headers }) => (
  <HeaderBox>
    {headers.map(({ text, ...sizes }) => (
      <HeaderItem {...sizes}>{text}</HeaderItem>
    ))}
  </HeaderBox>
);
