const route_response_map = {
  '/': {
    'response': '<h1>Hello, Universe!</h1>'
  },
  '/about': {
    'response': '<p>Learn More about us</p>'
  },
  '/hello': {
    'response': '<p>Say hello by emailing us <a href="mailto:abductedRhino@example.com">here</a>.</p>'
  },
  '/error': {
    'response': 'Sorry, the page you are looking for is not here.',
    'status': 404
  }
};

const port = 4000;
const http = require('http');
const app = http.createServer();

app.on('request', (req, res) => {
  let entry = route_response_map[req.url] || route_response_map['/'];
  let status_code = entry['status'] || 200;
  res.writeHead(status_code, {
    'Content-Type': 'text/html'
  });
  res.end(entry['response'])
})

app.listen(port);
console.log(`Listening on port ${port}`);

