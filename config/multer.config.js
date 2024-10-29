const { credential } = require("firebase-admin");
const multer = require("multer");
const firebaseStorage = require("multer-firebase-storage");
const firebase = require("./firebase.config");
const serviceAccount = require("../drive-e8540-firebase-adminsdk-8lzq6-99be746ab3.json");

const storage = firebaseStorage({
  credentials: firebase.credential.cert(serviceAccount),
  bucketName: "drive-e8540.appspot.com",
  unique: true,
});

const upload = multer({
  storage: storage,
});

module.exports = upload;
