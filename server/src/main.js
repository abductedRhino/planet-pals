const express = require("express");
const mongoose = require('mongoose');
const passport = require('passport');
const productSeed = require("./models/productSeed");
const userSeed = require("./models/userSeed");
const db = require("./controllers/databaseController");
const router = require("./routes/routes");

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/basic');
mongoose.connection.once('open', () => { console.log('open!') }) // delete?

db.fill(productSeed);
db.fillUsers(userSeed);

const app = express();

app.set("port", process.env.PORT || 3000);

app.set("view engine", "ejs");

app.use(express.static("src/public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(require('serve-static')(__dirname + '/../../public'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use("/", router);

const port = app.get("port");
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

