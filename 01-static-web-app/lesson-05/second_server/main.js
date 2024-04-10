const port = 3000
const http = require('http');
const http_status_codes = require('http-status-codes');
const app = http.createServer();

app.on('request', (req, res) => {
  res.writeHead(http_status_codes.OK, {
    'Content-Type': 'text/html'
  });
  let response_message = '<h1>Hello, Universe!</h1>';
  res.end(response_message);
})

app.listen(port);
console.log(`Listening on port ${port}`);
