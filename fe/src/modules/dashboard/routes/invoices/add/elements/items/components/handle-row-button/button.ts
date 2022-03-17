import styled from 'styled-components';
import { Button } from '../../../../../../../../../components/button';
import { HandleRowButtonProps } from '../../types';

export const HandleRowButton = styled(Button).attrs({
  type: 'button',
})<HandleRowButtonProps>`
  margin-top: 1.8125rem;
  padding: 0.625rem 0;
  background-color: ${({ theme, isLastItem }) =>
    theme.color[isLastItem ? 'primary' : 'error']};
`;
