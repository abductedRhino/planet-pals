const port = 4000;
const http = require('http');
const fs = require('fs');

http
  .createServer((req, res) => {
    fs.readFile(get_view_url(req.url), (error, data) => {
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