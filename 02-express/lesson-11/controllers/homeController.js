exports.postIndex = (req, res) => {
  console.log('body : ', req.body);
  console.log('query: ', req.query);
  res.send('Submitted.\n');
};
exports.getIndex = (req, res) => {
  console.log(req.params);  // --> {}
  console.log(req.body);  // --> undefined
  console.log(req.url);  // --> /
  console.log(req.query);  // --> {}
  res.send('Hello, Universe!');
};
exports.postContact = (req, res) => {
  res.send('Submitted.\n');
};
exports.getItemsVegetable = (req, res) => {
  res.send(`vegetable: ${req.params.vegetable}\n`);
};
exports.logRequestPath = (req, res, next) => {
  console.log('middleware=app.use');
  console.log(req.query)  // --> { cart: '3', pagesVisited: '4', utmcode: '1234' }
  next();
};
exports.logRequestPathItems = (req, res, next) => {
  console.log('middleware=app.use /items');
  next();
};
exports.respondWithName = (req, res) => {
  const paramsName = req.params.name;  
  res.render('index', {name: paramsName});
}
