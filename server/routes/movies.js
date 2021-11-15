var express = require('express');
var router = express.Router();
const MovieModel = require("../model/Movie")

router.get('/movies', async (req, res, next) => {
  try{
    const movies = await MovieModel.find()
    res.status(200).json(movies); 
  } catch(e) {
    next(e);
  }
})

router.get("/movies/:id", async (req, res, next) => {
  try {
    const movie = await MovieModel.findById(req.params.id);
    res.status(200).json(movie);
  } catch (err) {
    next(err);
  }
});



module.exports = router;
