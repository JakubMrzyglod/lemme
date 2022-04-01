import styled from 'styled-components';
import { BackdropProps } from './types';

export const Backdrop = styled.div<BackdropProps>`
  z-index: auto;
  display: ${({ loading }) => (loading ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;
