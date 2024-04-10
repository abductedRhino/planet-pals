const port = 3000
const http = require('http');
const http_status_codes = require('http-status-codes');
const app = http.createServer((req, res) => {
  console.log('Received an incoming request!');
  res.writeHead(http_status_codes.OK, {
    'Content-Type': 'text/html'
  });
  let response_message = '<h1>Hello, Universe!</h1>';
  res.write(response_message);
  res.end();
  console.log(`Sent a response : ${response_message}`);
})

app.listen(port);
console.log(`Listening on port ${port}`);
