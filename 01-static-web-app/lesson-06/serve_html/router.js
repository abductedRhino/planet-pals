const routes = {
  'GET': {
    '/info': (req, res) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('welcome to info page');
    }
  },
  'POST': {}
};
exports.handle = (req, res) => {
  try {
    if (routes[req.method][req.url]) {
      routes[req.method][req.url](req, res);
    } else {
      res.writeHead(404, htmlContentType);
      res.end('<h1>not found</h1>');
    }
  } catch (e) {
    console.error(e);
  }
}
exports.get = (url, action) => {
  routes['GET'][url] = action;
}
exports.post = (url, action) => {
  routes['POST'][url] = action;
}