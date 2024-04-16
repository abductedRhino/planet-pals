const port = 4000;
const http = require('http');
const fs = require('fs');
const router = require('./router');

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
http
  .createServer((req, res) => {
    readFile(fileLocator.getFilePathForUrl(req.url), res)
  })
  .listen(port);
console.log(`Listening on port ${port}`);