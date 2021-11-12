const axios = require("axios");
const movies = require("./../model/Movie");
const Movies = require("./250-movies.json");
const mongoose = require("mongoose");

if (!process.env.MONGO_URI) {
  throw "cannot read MONGO_URI";
}

mongoose
  .connect(process.env.MONGO_URI)
  .then(async (x) => {
    await Movies.deleteMany();
    for (let i = 0; i < 100; i++) {
      const id = Movies.movies[i].id;
      const { data } = await axios.get(
        `https://imdb-api.com/en/API/Title/k_10znj6fx/${id}`
      );
      await movies.create(data);
    }
    mongoose.disconnect(() => {
      console.log("disconnected");
    });
  })
  .catch((err) => {
    console.log(err);
  });
