const Firebase = require("firebase-admin");
const serviceAccount = require("../drive-e8540-firebase-adminsdk-8lzq6-99be746ab3.json");

const firebase = Firebase.initializeApp({
  credential: Firebase.credential.cert(serviceAccount),
  storageBucket: "drive-e8540.appspot.com",
});

module.exports = Firebase;
