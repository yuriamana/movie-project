var express = require('express');
var router = express.Router();
const movieModel = require("../model/Movie")

router.get('/movies', async (req, res, next) => {
  try{
    const movies = await movieModel.find()
    res.status(200).json(movies); 
  } catch(e) {
    next(e);
  }
})

router.get("/movies/:id", async (req, res, next) => {
  try {
    const movie = await movieModel.findById(req.params.id);
    res.status(200).json(movie);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
