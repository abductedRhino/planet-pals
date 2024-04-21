const express = require('express');
const app = express();
const homeController = require('./controllers/homeController');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
// http://127.0.0.1:3000/?cart=3&pagesVisited=4&utmcode=1234
app.use(homeController.logRequestPath);
app.use('/items', homeController.logRequestPathItems);
// use middleware that analyses incoming request bodies that are url-encoded.
// urlencoded are form posts and utf-8 content.
app.use(express.urlencoded({ extended: false }));
// use format json to parse middleware.
app.use(express.json());

// curl --data "first_name=Jon&last_name=Doe" 127.0.0.1:3000
app.post('/', homeController.postIndex);

app.get('/', homeController.getIndex);
// curl --data '' 127.0.0.1:3000/contact
app.post('/contact', homeController.postContact);
// curl 127.0.0.1:3000/items/apple
app.get('/items/:vegetable', homeController.getItemsVegetable);
app.listen(app.get('port'), () => {
  console.log(`Listening on port ${app.get('port')}.`);
})
app.get('/name', homeController.respondWithName);
