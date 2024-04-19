const port = 3000;
const express = require('express');
const app = express();

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