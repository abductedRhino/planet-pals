const express = require("express");
const layouts = require("express-ejs-layouts");
const httpStatus = require("http-status-codes");
const mongoose = require('mongoose');
const passport = require('passport');
const passport_strategy = require('passport-strategy')
const contentTypes = require("./contentTypes");
const homeController = require("./controllers/homeController");
const errorController = require("./controllers/errorController");
const utils = require("./utils");
const productModel = require("./models/productModel");
const productSeed = require("./models/productSeed");
const userSeed = require("./models/userSeed");
const db = require("./controllers/databaseController");
const productsController = require('./controllers/productsController');
const registerController = require('./controllers/registerController');
const usersController = require('./controllers/usersController');
const userRoutes = require("./routes/userRoutes");
const utilRoutes = require("./routes/utilRoutes");
const homeRoutes = require("./routes/homeRoutes");
const productRoutes = require("./routes/productRoutes");
const errorRoutes = require("./routes/errorRoutes");
const apiRoutes = require("./routes/apiRoutes");

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/basic');
mongoose.connection.once('open', () => { console.log('open!') }) // delete?

db.fill(productSeed);
db.fillUsers(userSeed);

const app = express();
const router = express.Router();
router.use("/users", userRoutes);
router.use("/", utilRoutes);
router.use("/products", productRoutes);
router.use("/api", apiRoutes);
router.use("/", homeRoutes);
router.use("/", errorRoutes);

app.set("port", process.env.PORT || 3000);

app.set("view engine", "ejs");

app.use(express.static("public"));
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
