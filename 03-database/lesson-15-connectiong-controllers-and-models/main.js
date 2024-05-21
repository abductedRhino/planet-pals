const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Subscriber = require('./models/subscriberModel');

const subscriberSeed = require("./models/subscriberSeed");
const db = require("./controllers/databaseController");
const subscribersController = require('./controllers/subscribersController');
mongoose.connect('mongodb://localhost:27017/basic');
mongoose.connection.once('open', () => { console.log('open!') }) // delete?
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/fill', (req, res) => {
  res.send(db.fill(subscriberSeed));
})
app.get('/contact', (req, res) => {
  res.render('contact');
})
app.get('/subscribers', subscribersController.getAllSubscribers, (req, res, next) => {
  console.log(req.data);
  res.render('subscribers', { subscribers: req.data });
});
app.post('/subscribe', subscribersController.saveSubscriber);
app.listen(3000, () => {
  console.log(`Listening on port 3000.`);
})
