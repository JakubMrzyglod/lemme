import styled from 'styled-components';

export const SummaryValue = styled.div`
  padding: 0.625rem 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #d1d2d3;
`;

export const Input = styled.div`
  display: block;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #dee2e6;
  border-radius: 0.5rem;
  background-color: #222529;
  box-shadow: 0 1px 3px rgb(50 50 93 / 15%), 0 1px 0 rgb(0 0 0 / 2%);
  &:focus {
    outline: none !important;
    box-shadow: 0 3px 9px rgb(50 50 9 / 0%), 3px 4px 8px rgb(94 114 128 / 10%);
  }
  &::placeholder {
    color: #d1d2d333;
  }
`;
