import { createContext } from 'react';

type ContainerContextType = {
  gap?: number;
};

export const ContainerContext = createContext<ContainerContextType>({
  gap: 0,
});
