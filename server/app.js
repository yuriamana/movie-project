require("dotenv").config(); // import all key/value pairs from .env in process.env : really usefull when going online :)
require("./config/mongo");
require("./config/passport")()

const express = require("express");
const session = require("express-session"); //sessions make data persist between http calls
const path = require("path");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const _DEVMODE = false;

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));


app.use(
  session({
    cookie: { secure: false, maxAge: 4 * 60 * 60 * 1000 }, // 4 hours
    resave: true,
    saveUninitialized: true,
    secret: process.env.SECRET_SESSION,
  })
);

const corsOptions = {
  origin: [process.env.CLIENT_URL],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(passport.initialize())
//------------------------------------------
// Fake Loggedin Users
// ------------------------------------------
if (_DEVMODE === true) {
    app.use(function devMode(req, res, next) {
      req.user = {
        _id: "5de9c376fa023e21a766a606",
        username: "ironhack",
        email: "toto@foo.bar",
        password: "1234",
        avatar:
          "https://res.cloudinary.com/gdaconcept/image/upload/v1575298339/user-pictures/jadlcjjnspfhknucjfkd.png",
        role: "user"
      };
  
      next();
    });
  }

//------------------------------------------
// BASE BACKEND ROUTE
// ------------------------------------------

app.get("/", (req, res) => {
    res.send("backend server is running");
  });
//------------------------------------------
// SPLITED ROUTING
// ------------------------------------------

// const usersRouter = require("./routes/users.js");
// const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users.js");
const authRouter = require("./routes/auth.js");
const commentsRouter = require("./routes/comments.js");
const moviesRouter = require("./routes/movies.js");
const rateRouter = require('./routes/rate')

app.use("/api", authRouter);
app.use("/api", usersRouter);
app.use("/api", commentsRouter);
app.use("/api", moviesRouter);
app.use('/api', rateRouter)

module.exports = app;

