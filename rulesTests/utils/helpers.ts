import { DocumentReference, getDoc, Timestamp } from 'firebase/firestore';

export const matchObjects = <T, R extends T>(obj1: T, obj2: R) => {
  const keys = Object.keys(obj1) as (keyof typeof obj1)[];
  keys.forEach((key) => {
    if (typeof obj1[key] === 'object') {
      if (obj2[key] instanceof Timestamp) {
        const timestamp = obj2[key] as unknown as Timestamp;
        expect(obj1[key]).toStrictEqual(timestamp.toDate());
      } else {
        expect(obj1[key]).toStrictEqual(obj2[key]);
      }
    } else {
      expect(obj1[key]).toBe(obj2[key]);
    }
  });
};

export const isCreatedRefAndMatch = async <T, R extends T>(
  ref: DocumentReference<R>,
  obj: T
) => {
  const createdObj = await getDoc(ref);
  expect(createdObj).toBeDefined();
  expect(createdObj.exists()).toBeTruthy();
  const createdObjData = createdObj.data();
  if (createdObjData) {
    matchObjects(obj, createdObjData);
  }
};

export const getPartialUpdateObjects = <T>(items: T) => {
  const keys = Object.keys(items) as (keyof T)[];
  return keys.map((key) => ({ [key]: items[key] }));
};
