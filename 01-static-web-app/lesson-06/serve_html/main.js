const port = 4000;
const http = require('http');
const fs = require('fs');

const fileLocations = {
  '.html': (url) => `./views${url}`,
  '.js': (url) => `./public/js${url}`,
  '.css': (url) => `./public/css${url}`,
  '.png': (url) => `./public/images${url}`,
}
class FileLocator {
  constructor() { }
  locations = {
    '.html': (url) => `./views${url}`,
    '.js': (url) => `./public/js${url}`,
    '.css': (url) => `./public/css${url}`,
    '.png': (url) => `./public/images${url}`,
  }
  getFilePathForUrl(url) {
    for (let key in this.locations) {
      if (url.endsWith(key)) {
        return this.locations[key](url);
      }
    }
  }
}
const fileLocator = new FileLocator();
http
  .createServer((req, res) => {
    let filePath = fileLocator.getFilePathForUrl(req.url)
    fs.readFile(filePath, (error, data) => {
      if (error) {
        res.writeHead(404);
        res.write('<h1>FILE NOT FOUND</h1>');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
      }
      res.end();
    });
  })
  .listen(port);
console.log(`Listening on port ${port}`);