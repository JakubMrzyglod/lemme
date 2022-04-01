import { useEffect, useState } from 'react';
import {
  onSnapshot,
  QueryDocumentSnapshot,
  QuerySnapshot,
} from 'firebase/firestore';
import { Collection } from './constants';
import { useDbRef } from './useCollPath';

type Doc = { id: string };

export const useCollection = <T extends Doc = Doc>(coll: Collection) => {
  const [data, setData] = useState<T[]>();
  const { collRef } = useDbRef(coll);

  useEffect(() => {
    return onSnapshot(collRef, (snapshot) => setData(getCollData<T>(snapshot)));
  }, [collRef]);

  return { collRef, data };
};

const getCollData = <T extends Doc = Doc>(snapshot: QuerySnapshot) =>
  snapshot.docs.map(getItemData) as T[];

const getItemData = (doc: QueryDocumentSnapshot) => ({
  id: doc.id,
  ...doc.data(),
});
