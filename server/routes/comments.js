const express = require("express");
const router = new express.Router();
const CommentModel = require("../model/Comment");

//READ

router.get("/comments", (req, res, next) => { //id du movie
    CommentModel.find()
    .then((comments) => {
      // console.log(comments);
      res.status(200).json(comments)
    })
    .catch((error) => console.error(error))
    
  });

router.get("/comments/:id", (req, res, next) => { //id du movie
  CommentModel.findById({id_film: req.params.id})
  .then((comment) => {
    // console.log(comment);
    res.status(200).json(comment)
  })
  .catch((error) => console.error(error))
  
});

//CREATE
router.post("/comments", (req,res,next) => {
  console.log("api:back post comment")
    CommentModel.create({
        ...req.body,
    })
    .then((comment) => {
        res.status(201).json(comment)
      })
      .catch((error) => console.error(error))
      
    });

// UPDATE
router.patch("/comments/:id", (req,res) => {
    CommentModel.findByIdAndUpdate({
        ...req.body,
    },{new: true})
    .then((comment) => {
        res.status(201).json(comment)
      })
      .catch((error) => console.log("something went wrong with the comment editing", error))
      
    });

// DELETE 

router.delete("/comments/:id", async (req,res, next) => {
  try {
    const deletedComment = await CommentModel.findByIdAndDelete(req.params.id)
    res.status(200).json(deletedComment)
  } catch(error) {
    console.error(error);
  }
})

module.exports = router;
