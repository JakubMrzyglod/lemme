import styled from 'styled-components';
import { Box } from '../../../box';
import { BoxItem } from '../../../box/item';

export const BodyBox = styled(Box)`
  padding: 1rem;
  color: ${({ theme }) => theme.color.text.primary} !important;
  &:hover {
    background-color: ${({ theme }) => theme.color.table.hover} !important;
  }
`;

export const BodyItem = styled(BoxItem)``;
