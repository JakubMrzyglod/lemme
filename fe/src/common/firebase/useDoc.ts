import { useEffect, useState } from 'react';
import { onSnapshot } from 'firebase/firestore';
import { Collection } from './constants';
import { useDbRef } from './useCollPath';

export const useDoc = <T extends {} = {}>(coll: Collection, docId: string) => {
  const [data, setData] = useState<T>();
  const { getDocRef } = useDbRef(coll);
  const docRef = getDocRef(docId);

  useEffect(() => {
    return onSnapshot(docRef, ({ data }) => setData(data() as T));
  }, []);

  return { docRef, data };
};
