const path = require("path");

const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors')
const mongoose = require("mongoose");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

const authRoutes = require('./routes/auth')

const MONGODB_URI = process.env.ATLAS_URI;

const app = express();
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: "sessions",
});


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



app.get("/admin", (req,res,next) =>{
    res.send('<h1>Hello, this the main page</h>')
});

// Routes
app.use(authRoutes)


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