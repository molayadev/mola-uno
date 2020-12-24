import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as http from 'http';

const serviceAccountKey = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey),
  databaseURL: "https://mol-uno.firebaseio.com"
});

const storage = admin.storage();
const bucket = storage.bucket('gs://mol-uno.appspot.com');
const listFiles = bucket.getFiles({ prefix: 'uno-cards' });

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

export const getUnoCardImages = functions.https.onRequest(async(request, response) => {
  const files = (await listFiles).map(item => item.getSigned);
  console.log(files);
  response.send(files);
 });
