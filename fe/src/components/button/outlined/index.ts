import styled from 'styled-components';
import { Button } from '..';

export const OutlinedButton = styled(Button)`
  color: ${({ theme }) => theme.color.primary};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.color.primary};
  &:hover {
    border-color: ${({ theme }) => theme.color.primary};
    background-color: ${({ theme }) => theme.color.primary};
    color: #fff;
  }
`;
