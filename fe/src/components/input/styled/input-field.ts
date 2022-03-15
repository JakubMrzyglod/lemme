import styled from 'styled-components';
import { BaseInput } from '@jakubmrzyglod/react-hook-form';

export const Input = styled(BaseInput)`
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 0.625rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  border: 1px solid #dee2e6;
  border-radius: 0.5rem;
  background-color: #222529;
  color: #d1d2d3;
  box-shadow: 0 1px 3px rgb(50 50 93 / 15%), 0 1px 0 rgb(0 0 0 / 2%);
  border-color: ${({ error }) => (error ? '#d92550' : '#565856')};
  &:focus {
    outline: none !important;
    border-color: ${({ error, theme }) =>
      error ? '#d92550' : theme.color.primary};
    box-shadow: 0 3px 9px rgb(50 50 9 / 0%), 3px 4px 8px rgb(94 114 128 / 10%);
  }
  &::placeholder {
    color: #d1d2d333;
  }
`;
