import {
  collection,
  CollectionReference,
  doc,
  DocumentReference,
} from 'firebase/firestore';
import { db } from '.';
import { useUserContext } from '../user';
import { Collection } from './constants';

export const useDbRef = (coll: Collection) => {
  const { uid } = useUserContext();

  //TODO: redirect to login if uid is nullish
  switch (coll) {
    case Collection.INVOICES: {
      const collRef = collection(db, `organizations/${uid}/invoices`);
      const getDocRef = (docId: string) => doc(collRef, docId);
      return { collRef, getDocRef };
    }
    case Collection.ORGANIZATIONS: {
      const collRef = collection(db, `organizations`);
      const getDocRef = (docId: string) => doc(collRef, docId);
      return { collRef, getDocRef };
    }
  }
};
