const express = require("express");
const router = new express.Router();
const MovieModel = require("../model/Movie");

router.get("/search", async (req, res, next) => {
  const regExp = new RegExp(req.query.q, "i");
  const movieSearch = MovieModel.find({
    name: regExp
  });
    // .populate({
    //   path: "movies",
    //   match: { name: regExp }
    // });

  Promise.all([movieSearch])
    .then(dbRes => res.json({movies: dbRes[0]}))
    .catch(next);
});

module.exports = router;