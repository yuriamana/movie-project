require("dotenv").config();
require("./../../config/mongo");

const axios = require("axios");
const Movies = require("../../model/Movie");
const movies = require("./250-movies.json");
const mongoose = require("mongoose");
 
// const MONGO_URI = process.env.MONGODB_URI 

if (!process.env.MONGO_URI) {
  throw "cannot read MONGO_URI";
}

mongoose
  .connect(process.env.MONGO_URI)
  .then(async (x) => {
    // await Movies.deleteMany();
    console.log(`Connection to ${x.connection.name} established.`);
    for (let i = 0; i < 100; i++) {
      const id = movies.items[i].id;
      const { data } = await axios.get(
        `https://imdb-api.com/en/API/Title/k_12345678/${id}`
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

  //key API - IMDB
  // Joey: k_by6fp93n
  // Yuki: k_10znj6fx
  // Marc: k_12345678
  // Priscilla: k_p4jvq6vq
  