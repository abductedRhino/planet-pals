const port = 4000;
const http = require('http');
const fs = require('fs');
const route_map = {
  '/': 'views/index.html'
}
http
  .createServer((req, res) => {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    if (route_map[req.url]) {
      fs.readFile(route_map[req.url], (error, data) => {
        res.write(data);
        res.end();
      });
    } else {
      res.end('Sorry, not found');
    }
  })
  .listen(port);
console.log(`Listening on port ${port}`);

function dynamicRoute(url) {
  fs.readFile(url, (error, data) => {
    if (error) {
      res.writeHead(404);
      res.write('<h1>FILE NOT FOUND</h1>');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
    }
    res.end();
  });
}