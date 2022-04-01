import styled from 'styled-components';
import { Box } from '../../../box';
import { BoxItem } from '../../../box/item';

export const HeaderBox = styled(Box)`
  padding: 1rem;
  color: ${({ theme }) => theme.color.text.secondary} !important;
  background-color: ${({ theme }) => theme.color.table.header} !important;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
`;

export const HeaderItem = styled(BoxItem)``;
