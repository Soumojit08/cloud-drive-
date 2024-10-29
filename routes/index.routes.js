const express = require("express");
const router = express.Router();
const upload = require("../config/multer.config");
const fileModel = require("../models/files.model");
const authMiddleware = require("../middlewares/authe");
const firebase = require("../config/firebase.config");

router.get("/home", authMiddleware, async (req, res) => {
  const userFiles = await fileModel.find({
    user: req.user.userId,
  });

  res.render("home", {
    files: userFiles,
  });
});

router.post(
  "/upload",
  authMiddleware,
  upload.single("file"),
  async (req, res) => {
    const newFile = await fileModel.create({
      path: req.file.path,
      originalname: req.file.originalname,
      user: req.user.userId,
    });

    res.json(newFile);
  }
);

router.get("/download/:path", authMiddleware, async (req, res) => {
  const loggedinUserID = req.user.userId;
  const path = req.params.path;

  const file = await fileModel.findOne({
    user: loggedinUserID,
    path: path,
  });

  if (!file) {
    return res.status(404).json({
      message: "Unauthorized",
    });
  }

  const signedUrl = await firebase
    .storage()
    .bucket()
    .file(path)
    .getSignedUrl({
      action: "read",
      expires: Date.now() + 1000 * 60,
    });

  res.redirect(signedUrl[0]);
});

module.exports = router;
