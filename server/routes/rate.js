const express = require("express");
const router = new express.Router();
const RateModel = require("../model/Rate");

//READ

router.get("/rate/:id", (req, res, next) => {
    try {
        const rate = await RateModel.find(req.params.id)
        
    }
}

//CREATE

//UPDATE

module.exports = router