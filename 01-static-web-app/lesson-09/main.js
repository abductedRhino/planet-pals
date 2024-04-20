const port = 3000;
const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('incoming request');
  next();
})
app.use('/items', (req, res, next) => {
  console.log('incoming request to "/items"');
  next();
})
// use middleware that analyses incoming request bodies that are url-encoded.
// urlencoded are form posts and utf-8 content.
app.use(express.urlencoded({ extended: false }));
// use format json to parse middleware.
app.use(express.json());

// curl --data "first_name=Jon&last_name=Doe" 127.0.0.1:3000
app.post('/', (req, res) => {
  console.log('body : ', req.body);
  console.log('query: ', req.query);
  res.send('Submitted.\n');
});

app.get('/', (req, res) => {
  console.log(req.params);  // --> {}
  console.log(req.body);  // --> undefined
  console.log(req.url);  // --> /
  console.log(req.query);  // --> {}
  res.send('Hello, Universe!');
})
// curl --data '' 127.0.0.1:3000/contact
app.post('/contact', (req, res) => {
  res.send('Submitted.\n');
})
// curl 127.0.0.1:3000/items/apple
app.get('/items/:vegetable', (req, res) => {
  res.send(`vegetable: ${req.params.vegetable}\n`);
})
app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
})