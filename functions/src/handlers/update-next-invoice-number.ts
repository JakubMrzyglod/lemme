import { EventContext } from 'firebase-functions/v1';
import {
  DocumentSnapshot,
  QueryDocumentSnapshot,
} from 'firebase-functions/v1/firestore';
import { FsDocKeyName, fsPath } from '../constants/firebase';
import { firestore } from '../utils/firebase';

export const updateNextInvoiceNumber = async (
  invoice: QueryDocumentSnapshot,
  ctx: EventContext
) => {
  const invoiceNum = ctx.params[FsDocKeyName.INVOICE];
  if (isInvoiceNumWithPatter(invoiceNum)) {
    const org = await getOrg(ctx);
    const numSign = getNumSignature(invoice);
    const invoiceCount = getInvoicesCount(org, numSign);
    const expectedInvoiceNum = getExpectedInvoiceNum(invoiceCount, numSign);
    if (invoiceNum === expectedInvoiceNum) {
      await updateInvoiceCount(org, numSign, invoiceCount);
    } else {
      await deleteCreatedInvoice(invoice);
    }
  }
};

const deleteCreatedInvoice = (invoiceSnapshot: QueryDocumentSnapshot) =>
  firestore.doc(invoiceSnapshot.ref.path).delete();

const updateInvoiceCount = (
  org: DocumentSnapshot,
  numSign: string,
  invoiceCount: number
) =>
  firestore
    .doc(org.ref.path)
    .set({ invoiceCount: { [numSign]: invoiceCount + 1 } }, { merge: true });

const getExpectedInvoiceNum = (invoiceCount: number, numSign: string) =>
  `${invoiceCount + 1}-${numSign}`;

const getInvoicesCount = (org: DocumentSnapshot, numSign: string) =>
  org.get('invoiceCount')?.[numSign] ?? 0;

const isInvoiceNumWithPatter = (invoiceNum: string) => {
  const invoiceNumRegex = /(\d*-([1-9]|1[0-2])-20(2[2-9]|[3-9][0-9])$)/;
  return invoiceNum.match(invoiceNumRegex);
};

const getOrg = (ctx: EventContext) => {
  const orgId = ctx.params[FsDocKeyName.ORGANIZATION];
  const orgDocPath = fsPath.organizations(orgId);
  return firestore.doc(orgDocPath).get();
};

const getNumSignature = (snapshot: QueryDocumentSnapshot) => {
  const createdAt = snapshot.get('createdAt').toDate();
  const createdMonth = createdAt.getMonth() + 1;
  const createdYear = createdAt.getFullYear();
  return `${createdMonth}-${createdYear}`;
};
