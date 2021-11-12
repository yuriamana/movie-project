require("dotenv").config();
require("./../../config/mongo");

const axios = require("axios");
const Movies = require("../../model/Movie");
const movies = require("./250-movies.json");
const mongoose = require("mongoose")


 
// const MONGO_URI = process.env.MONGODB_URI 

if (!process.env.MONGO_URI) {
  throw "cannot read MONGO_URI";
}

mongoose
  .connect(process.env.MONGO_URI)
  .then(async (x) => {
    await Movies.deleteMany();
    for (let i = 0; i < 100; i++) {
      console.log(`Connection to $(x.connection.name) established.`);
      const id = movies.items[i].id;
      const { data } = await axios.get(
        `https://imdb-api.com/en/API/Title/k_10znj6fx/${id}`
      );
      await Movies.create(data);
    }
    mongoose.disconnect(() => {
      console.log("disconnected");
    });
  })
  .catch((error) =>
    console.log(`An error occured trying to connect to the DB: ${error}`)
  );
