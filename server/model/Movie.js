const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  title: String,
  year: Date,
  director: String,
  actors: [String],
  duration: String,
  id_genre: [{ type: Schema.Types.ObjectId, ref: "genre" }],
  usersRating: String,
  imdbRating: Number,
  //id_comments: { type: Schema.Types.ObjectId, ref: "comment" },

});

const MovieModel = mongoose.model("movie", MovieSchema);

module.exports = MovieModel;
