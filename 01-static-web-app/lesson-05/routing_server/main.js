const route_response_map = {
  "/info": "<h1>Info Page</h1>",
  "/contact": "<h1>Contact Us</h1>",
  "/about": "<h1>Learn More About Us.</h1>",
  "/hello": "<h1>Say hello by emailing us here</h1>",
  "/error": "<h1>Sorry the page you are looking for is not here.</h1>"
};
const port = 4000
const http = require('http');
const http_status_codes = require('http-status-codes');
const app = http.createServer();

app.on('request', (req, res) => {
  const body = [];
  req.on('data', (body_chunk) => {
    body.push(body_chunk)
  });
  req.on('end', () => {
    const body_string = Buffer.concat(body).toString();
    console.log(`Request body contents: ${body_string}`)
  });


  res.writeHead(http_status_codes.OK, {
    'Content-Type': 'text/html'
  });
  let response_message = route_response_map[req.url] || '<h1>Hello, Universe!</h1>';
  setTimeout(() => res.end(response_message), 2000);
})

app.listen(port);
console.log(`Listening on port ${port}`);

