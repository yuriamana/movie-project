const express = require("express");
const router = new express.Router();
const RateModel = require("../model/Rate");

//READ
router.get("/rates/:userId/:filmId", async (req, res, next) => {
  try {
    const alreadyRated = await RateModel.findOne({
      $and: [{ id_author: req.params.userId }, { id_film: req.params.filmId }],
    });
    if (alreadyRated) res.status(200)
    else res.status(400)
  } catch (e) {
    next(e);
  }
});
router.get("/rates/:id", async (req, res, next) => {
  try {
    const ratedmovies = await RateModel.findById({ id_film: req.params.id });
    res.status(200).json(comment);
  } catch (error) {
    console.error(error);
  }
});

//CREATE

router.post("/rates", async (req, res, next) => {
  try {
    const rates = await RateModel.create({
      ...req.body,
    });
    res.status(201).json(rates);
  } catch (error) {
    console.error(error);
  }
});

//UPDATE

router.patch("/rates/:id", async (req, res, next) => {
  try {
    const updatedrates = await RateModel.findByIdAndUpdate(
      {
        ...req.body,
      },
      { new: true }
    ); // ?
    res.status(201).json(updatedrates);
  } catch (error) {
    console.log("something went wrong with the comment editing", error);
  }
});

module.exports = router;
