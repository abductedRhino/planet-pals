const express = require('express');
const layouts = require('express-ejs-layouts');
const app = express();
const errorController = require('./controllers/errorController');
const homeController = require('./controllers/homeController');

app.set('port', process.env.PORT || 3000);

app.set('view engine', 'ejs');
app.use(layouts);

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Welcome to Confetti cuisine.\n')
});
app.get('/courses', homeController.showCourses);
app.get('/contact', homeController.showSignUp);
app.post('/contact', homeController.postedSignUpForm);



app.listen(app.get('port'), () => {
  console.log(`Listening on port ${app.get('port')}.`);
})
// this catches errors:
app.use(errorController.internalServerError);
// this needs to be the last thing, it catches routes:
app.use(errorController.pageNotFoundError);
