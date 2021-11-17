const express = require("express");
const router = new express.Router();
const CommentModel = require("../model/Comment");

//READ

router.get("/comments/", (req, res, next) => { //id du movie
    CommentModel.find()
    .then((comments) => {
      // console.log(comments);
      res.status(200).json(comments)
    })
    .catch((error) => console.error(error))
    
  });

router.get("/comments/:id", (req, res, next) => { //id du movie
  CommentModel.find({id_film: req.params.id})
  .then((comment) => {
    // console.log(comment);
    res.status(200).json(comment)
  })
  .catch((error) => console.error(error))
  
});

//CREATE
router.post("/comments/create", (req,res,next) => {
  console.log("api:back post comment")
    CommentModel.create({
        ...req.body,
    })
    .then((comment) => {
        res.status(201).json(comment)
      })
      .catch((error) => console.error(error))
      
    });

//EDIT

router.patch("/comments/:id/edit", (req,res) => {
    CommentModel.create({
        ...req.body,
    },{new: true})
    .then((comment) => {
        res.status(201).json(comment)
      })
      .catch((error) => console.log("something went wrong with the album editing", error))
      
    });

// DELETE 

router.delete("/comments/:id", (req,res) => {
  CommentModel
    .findByIdAndDelete(req.params.id)
    .then((album) => res.status(200).json(album))
    .catch((err) => {
      console.error(err);
    });
});

module.exports = router;
