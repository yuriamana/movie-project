const express = require("express");
const router = new express.Router();
const commentModel = require("../model/Comment");

//READ

router.get("/comments/", (req, res, next) => { //id du movie
    commentModel.find().populate("movie")
    .then((comments) => {
      console.log(comments);
      res.status(200).json(comments)
    })
    .catch((error) => console.error(error))
    
  });

router.get("/comments/:id", (req, res, next) => { //id du movie
  commentModel.find(req.params.id).populate("movie")
  .then((comment) => {
    console.log(comment);
    res.status(200).json(comment)
  })
  .catch((error) => console.error(error))
  
});

//CREATE
router.post("/comments/create", (req,res,next) => {
    commentModel.create({
        ...req.body,
    })
    .then((comment) => {
        res.status(201).json(comment)
      })
      .catch((error) => console.error(error))
      
    });

//EDIT

router.patch("/comments/:id/edit", (req,res) => {
    commentModel.create({
        ...req.body,
    },{new: true})
    .then((comment) => {
        res.status(201).json(comment)
      })
      .catch((error) => console.log("something went wrong with the album editing", error))
      
    });

// DELETE 

router.delete("/comments/:id", (req,res) => {
  commentModel
    .findByIdAndDelete(req.params.id)
    .then((album) => res.status(200).json(album))
    .catch((err) => {
      console.error(err);
    });
});

module.exports = router;
