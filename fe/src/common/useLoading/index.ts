import { useState } from 'react';

export const useLoading = () => {
  const [loading, setLoading] = useState(false);

  const loadingFn = async (asyncFn: () => any) => {
    setLoading(true);
    const result = await asyncFn();
    setLoading(false);
    return result;
  };
  return { loading, loadingFn };
};
