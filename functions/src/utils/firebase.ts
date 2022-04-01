import admin from 'firebase-admin';
// import * as functions from 'firebase-functions';

admin.initializeApp();

// export const bucket = admin.storage().bucket();
export const firestore = admin.firestore();
export const auth = admin.auth();
// export const fnConfig = functions.config();
