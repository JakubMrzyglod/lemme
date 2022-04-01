import * as firebaseFunctions from 'firebase-functions';
import { FsTriggerPath, REGION } from './constants/firebase';
import { updateNextInvoiceNumber } from './handlers/update-next-invoice-number';

const functions = firebaseFunctions.region(REGION);

export const onInvoiceWrite = functions.firestore
  .document(FsTriggerPath.invoices)
  .onCreate(updateNextInvoiceNumber);
