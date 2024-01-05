const path = require("path");

const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors')
const mongoose = require("mongoose");
const expressWinston = require('express-winston')
const {transports, format} = require('winston')
const logger = require('./logger')
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

const authRoutes = require('./routes/auth')
const apiRoutes = require('./routes/api')
const redirectRoutes = require('./routes/redirectRoutes')

const User = require('./models/users')

const MONGODB_URI = process.env.ATLAS_URI;

const app = express();
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: "sessions",
});


app.use(expressWinston.logger({
  winstonInstance: logger,
  statusLevels: true
}))

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({origin: "http://localhost:3000", credentials: true}))
// app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});



app.get("/admin", (req,res,next) =>{
    res.send('<h1>Hello, this the main page</h>')
});

// Routes
app.use(authRoutes)
app.use('/api/',apiRoutes)
app.use('',redirectRoutes)


mongoose
  .connect(MONGODB_URI)
  .then((result) => {
    app.listen(process.env.PORT)
  }).then(res => {
    console.log(`Server listening on port ${process.env.PORT}`);
  })
  .catch((err) => {
    console.log(err);
  });