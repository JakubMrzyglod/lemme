import {
  assertFails,
  assertSucceeds,
  initializeTestEnvironment,
  RulesTestEnvironment,
} from '@firebase/rules-unit-testing';
import {
  CollectionReference,
  collection,
  getDoc,
  updateDoc,
  addDoc,
  DocumentReference,
  doc,
} from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import { datatype } from 'faker';
import { isCreatedRefAndMatch } from './utils/helpers';
import {
  getInvoiceData,
  Invoice,
  objectsOfPartialUpdate,
  objectsOfWrongPartialUpdate,
} from './utils/invoice.utils';

describe('member', () => {
  const ownerToken = datatype.uuid();
  const otherUserToken = datatype.uuid();
  const orgPath = (token: string = ownerToken) => `organizations/${token}`;
  const collectionPath = (token?: string) => `${orgPath(token)}/invoices`;

  const createNewInvoice = async (): Promise<
    [DocumentReference<Invoice>, Invoice]
  > => {
    const newMemberData = getInvoiceData();
    const myProjectsCollRef = collection(
      ownerFirestore,
      collectionPath()
    ) as CollectionReference<Invoice>;
    const newProject = await assertSucceeds(
      addDoc(myProjectsCollRef, newMemberData)
    );
    const myProjectDocRef = doc(myProjectsCollRef, newProject.id);
    return [myProjectDocRef, newMemberData];
  };

  let testEnv: RulesTestEnvironment;
  let ownerFirestore: firebase.firestore.Firestore;
  let otherUserFirestore: firebase.firestore.Firestore;

  beforeAll(async () => {
    testEnv = await initializeTestEnvironment({ projectId: datatype.uuid() });
    ownerFirestore = testEnv.authenticatedContext(ownerToken).firestore();
    otherUserFirestore = testEnv
      .authenticatedContext(otherUserToken)
      .firestore();
  });

  beforeEach(async () => {
    await testEnv.clearFirestore();
  });

  it('Should create invoice', async () => {
    const createdMember = await createNewInvoice();
    await isCreatedRefAndMatch(...createdMember);
  });

  it('Should update invoice', async () => {
    const [docRef] = await createNewInvoice();
    const updateData = getInvoiceData();
    await assertSucceeds(updateDoc(docRef, updateData));
    await isCreatedRefAndMatch(docRef, updateData);
  });

  describe('Should update invoice partial', () => {
    objectsOfPartialUpdate.forEach((obj) => {
      const key = Object.keys(obj)[0];
      it(key, async () => {
        const [docRef] = await createNewInvoice();
        await assertSucceeds(updateDoc(docRef, obj));
        await isCreatedRefAndMatch(docRef, obj);
      });
    });
  });

  describe('Should throw error for wrong types', () => {
    objectsOfWrongPartialUpdate.forEach((obj) => {
      const key = Object.keys(obj)[0];
      it(key, async () => {
        const [docRef] = await createNewInvoice();
        await assertFails(updateDoc(docRef as DocumentReference, obj));
      });
    });
  });

  describe('Should throw error for missing arg', () => {
    let myCollRef: CollectionReference;
    beforeEach(async () => {
      myCollRef = collection(ownerFirestore, collectionPath());
    });
    const memberDataKeys = Object.keys(getInvoiceData()) as (keyof Invoice)[];
    memberDataKeys.forEach((key) => {
      it(`missing ${key}`, async () => {
        const newData = getInvoiceData();
        delete newData[key];
        await assertFails(addDoc(myCollRef, newData));
      });
    });
  });

  it('Should throw error when try create invoice for other user organization', async () => {
    const otherUserCollRef = ownerFirestore.collection(
      collectionPath(otherUserToken)
    );
    await assertFails(otherUserCollRef.add(getInvoiceData()));
  });

  it('Should throw error when try update other user invoice', async () => {
    const [docRef] = await createNewInvoice();
    const newMemberData = getInvoiceData();

    const projectRefForOtherUser = otherUserFirestore.doc(docRef.path);
    await assertFails(updateDoc(projectRefForOtherUser, newMemberData));
  });

  it('Should get user invoice', async () => {
    const [docRef] = await createNewInvoice();
    const data = await assertSucceeds(getDoc(docRef));
    // await isCreatedRefAndMatch(docRef, data);
  });

  it('Should throw error when user try get other user invoice', async () => {
    const [docRef] = await createNewInvoice();
    const memberRefForOtherUser = otherUserFirestore.doc(docRef.path);
    await assertFails(getDoc(memberRefForOtherUser));
  });

  it('Should throw error when user try get all user invoice', async () => {
    const [docRef] = await createNewInvoice();
    const memberRefForOtherUser = otherUserFirestore.collection(
      docRef.parent.path
    );
    await assertFails(memberRefForOtherUser.get());
  });

  it('Should return all users invoices', async () => {
    const memberCollRef = ownerFirestore.collection(collectionPath());
    const addMember = () => assertSucceeds(memberCollRef.add(getInvoiceData()));
    await Promise.all([addMember(), addMember()]);
    const documentsSnapshot = await assertSucceeds(memberCollRef.get());
    expect(documentsSnapshot).toBeDefined();
    expect(documentsSnapshot.empty).toBeFalsy();
    expect(documentsSnapshot.size).toBe(2);
  });
});
