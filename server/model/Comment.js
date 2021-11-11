const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  id_author: { type: Schema.Types.ObjectId, ref: "user" },
  id_film: { type: Schema.Types.ObjectId, ref: "movie" },
  comment: {
      type: String,
      maxlength: 500
  },
  rate: String
});

const CommentModel = mongoose.model("comment", CommentSchema);

module.exports = CommentModel;
// {
//     author: Id,
//     film: Id,
//     comment: String,
//     rate: String
// }

// Select a film by ID => Retrieve rate associes
//
