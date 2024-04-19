const port = 3000;
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log(req.params);  // --> {}
  console.log(req.body);  // --> undefined
  console.log(req.url);  // --> /
  console.log(req.query);  // --> {}
  res.send('Hello, Universe!');
}).listen(port, () => {
  console.log(`Listening on port ${port}.`);
})