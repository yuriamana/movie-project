const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  title: String,
  year: Date,
  image: String,
  runtimeMins: String,
  plot: String,
  directors: String,
  actorList: [{
    image: String,
    name: String,
  }],
  genreList: [{
    key: String,
    value: String,
  }],
  imDbRating: String,
  duration: String,
  usersRating: String,
  id_genre: [{ type: Schema.Types.ObjectId, ref: "genre" }],
  //id_comments: { type: Schema.Types.ObjectId, ref: "comment" },

});

const MovieModel = mongoose.model("movie", MovieSchema);

module.exports = MovieModel;
