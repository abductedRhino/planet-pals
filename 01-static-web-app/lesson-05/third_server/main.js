const port = 3000
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

  console.log('method', req.method);
  console.log('url', req.url);
  console.log('headers', get_json_string(req.headers));

  res.writeHead(http_status_codes.OK, {
    'Content-Type': 'text/html'
  });
  let response_message = '<h1>Hello, Universe!</h1>';
  res.end(response_message);
})

app.listen(port);
console.log(`Listening on port ${port}`);

function get_json_string(obj) {
  return JSON.stringify(obj, null, 2);
}
