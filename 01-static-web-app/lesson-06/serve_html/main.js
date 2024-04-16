const port = 4000;
const http = require('http');
const fs = require('fs');

const routes = {
  '.html': (url) => `./views${url}`,
  '.js': (url) => `./public/js${url}`,
  '.css': (url) => `./public/css${url}`,
  '.png': (url) => `./public/images${url}`,
}

http
  .createServer((req, res) => {
    let filePath = null;
    for (let key in routes) {
      if (req.url.endsWith(key)) {
        filePath = routes[key](req.url);
      }
    }
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

function get_view_url(url) {
  url = `./views/index.html`;
  console.log(url)
  return url;
}