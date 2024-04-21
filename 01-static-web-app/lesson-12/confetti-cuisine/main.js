const express = require('express');
const layouts = require('express-ejs-layouts');
const app = express();
const errorController = require('./controllers/errorController');
const homeController = require('./controllers/homeController');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(layouts);

// curl --data "first_name=Jon&last_name=Doe" 127.0.0.1:3000
app.post('/', homeController.postIndex);
// curl --data '' 127.0.0.1:3000/contact
app.post('/contact', homeController.postContact);
// curl 127.0.0.1:3000/items/apple

app.get('/', homeController.getIndex);
app.get('/items/:vegetable', homeController.getItemsVegetable);

app.listen(app.get('port'), () => {
  console.log(`Listening on port ${app.get('port')}.`);
})
app.get('/name/:name', homeController.respondWithName);
// this catches errors:
app.use(errorController.respondInternalError);
// this needs to be the last thing, it catches routes:
app.use(errorController.respondNoResourceFound);
