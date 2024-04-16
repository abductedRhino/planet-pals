const port = 4000;
const http = require('http');
const fs = require('fs');
const router = require('./router');
const contentTypes = require('./contentTypes');
const utils = require('./utils');


const htmlContentType = { 'Content-Type': 'text/html' };

class FileLocator {
  constructor() { }
  locations = {
    '.html': (url) => `./views${url}`,
    '.js': (url) => `./public/js${url}`,
    '.css': (url) => `./public/css${url}`,
    '.png': (url) => `./public/images${url}`,
  }
  /**
   * @param {String} url The url to convert to a file location.
   */
  getFilePathForUrl(url) {
    for (let key in this.locations) {
      if (url.endsWith(key)) {
        return this.locations[key](url);
      }
    }
    throw new Error(`No file location found for URL: ${url}`)
  }
}
const fileLocator = new FileLocator();

function readFile(file, res) {
  fs.readFile(file, (error, data) => {
    if (error) {
      console.error(error);
    }
    res.end(data);
  });
}
router.get("/", (req, res) => {
  res.writeHead(200, contentTypes.html);
  utils.getFile("views/index.html", res);
});

router.get("/courses.html", (req, res) => {
  res.writeHead(200, contentTypes.html);
  utils.getFile("views/courses.html", res);
});

router.get("/contact.html", (req, res) => {
  res.writeHead(200, contentTypes.html);
  utils.getFile("views/contact.html", res);
});

router.post("/", (req, res) => {
  res.writeHead(200, contentTypes.html);
  utils.getFile("views/thanks.html", res);
});

router.get("/graph.png", (req, res) => {
  res.writeHead(200, contentTypes.png);
  utils.getFile("public/images/graph.png", res);
});

router.get("/people.jpg", (req, res) => {
  res.writeHead(200, contentTypes.jpg);
  utils.getFile("public/images/people.jpg", res);
});

router.get("/product.jpg", (req, res) => {
  res.writeHead(200, contentTypes.jpg);
  utils.getFile("public/images/product.jpg", res);
});

router.get("/confetti_cuisine.css", (req, res) => {
  res.writeHead(200, contentTypes.css);
  utils.getFile("public/css/confetti_cuisine.css", res);
});

router.get("/bootstrap.css", (req, res) => {
  res.writeHead(200, contentTypes.css);
  utils.getFile("public/css/bootstrap.css", res);
});

router.get("/confetti_cuisine.js", (req, res) => {
  res.writeHead(200, contentTypes.js);
  utils.getFile("public/js/confetti_cuisine.js", res);
});

http.createServer(router.handle).listen(port);
console.log(`The server is listening on port number: ${port}`);
