import { useEffect, useMemo, useState } from 'react';
import {
  collection,
  onSnapshot,
  QueryDocumentSnapshot,
} from 'firebase/firestore';
import { db } from '.';
import { useUserContext } from '../user';

type Doc = { id: string };

export const useCollection = <T extends Doc = Doc>(coll: Collection) => {
  const { uid } = useUserContext();
  const [data, setData] = useState<T[]>();
  const collRef = useMemo(() => getCollRef(coll, uid), []);

  useEffect(() => {
    const unsubscribe = onSnapshot(collRef, (snapshot) => {
      const res = snapshot.docs.map(getData);
      setData(res as T[]);
    });
    return unsubscribe;
  }, [collRef]);

  return { collRef, data };
};

const getData = (doc: QueryDocumentSnapshot) => ({
  id: doc.id,
  ...doc.data(),
});

const getCollRef = (coll: Collection, uid: string) => {
  switch (coll) {
    case Collection.INVOICES:
      return collection(db, `organizations/${uid}/invoices`);
  }
};

export enum Collection {
  INVOICES,
}
