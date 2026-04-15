import { useWindowSize as useReactUseWindowSize } from 'react-use';

export const useWindowSize = () => {
  // Envolvemos el hook nativo de react-use para aislar la dependencia
  return useReactUseWindowSize();
};
