const express = require("express");
const router = new express.Router();
const commentModel = require("../model/Comment");

router.get("/comments/movie/:id", async (req, res, next) => {
  res.status(200).json({ msg: "@todo" })
});

router.post("/comments/movie/:id", async (req, res, next) => {
  res.status(200).json({ msg: "@todo" })
});

module.exports = router;
