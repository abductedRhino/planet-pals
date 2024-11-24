import express from 'express';
import passport from 'passport';
import serve_static from 'serve-static';
import cookie_parser from 'cookie-parser';
import body_parser from 'body-parser';
import express_session from 'express-session';
import db from './db/init.js';
import router from "./router/router.js";

db.init()

const app = express();

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.set("views", import.meta.dirname+"/views");

app.use(express.static("src/public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(serve_static(import.meta.dirname + '/../../public'));
app.use(cookie_parser());
app.use(body_parser.urlencoded({ extended: true }));
app.use(express_session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use("/", router);

const port = app.get("port");
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
