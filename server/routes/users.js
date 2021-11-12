const express = require('express');
const router = express.Router();
const UserModel = ("./../model/User.js");

/* GET users listing. */
router.get("/users", async (req, res, next) => {
  try {
    res.json({ users: await UserModel.find() });
  } catch (dbErr) {
    next(dbErr);
  }
});

router.get("/users/:id", async (req, res, next) => {
  try {
    res.json(
      await (await UserModel.findById(req.params.id))
    );
  } catch (dbErr) {
    next(dbErr);
  }
});

module.exports = router;
