import styled from 'styled-components';

export const ContentBox = styled.div`
  height: 100%;
  border-left: 1px solid ${({ theme }) => theme.color.border};
  border-right: 1px solid ${({ theme }) => theme.color.border};
  width: 100%;
  max-width: 800px;
`;
