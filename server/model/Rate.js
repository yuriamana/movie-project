const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RateSchema = new Schema({
    rate: Number,
    id_author: { type: Schema.Types.ObjectId, ref: "user" },
    id_film: { type: Schema.Types.ObjectId, ref: "movie" },
})

const RateModel = mongoose.model("rate", RateSchema);

module.exports = RateModel;