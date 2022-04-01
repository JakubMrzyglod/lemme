import styled from 'styled-components';

type ErrorProps = {
  error?: string;
};

export const Error = styled.div.attrs<ErrorProps>(({ error }) => ({
  children: error,
}))<ErrorProps>`
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.75rem;
  color: #d92550;
  min-height: 1.5rem;
`;
