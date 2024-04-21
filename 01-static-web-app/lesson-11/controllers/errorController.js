exports.logErrors = (error, req, res, next) => {
  console.error(error.stack);
  next(error);
};
exports.respondNoResourceFound = (req, res) => {
  console.error('404 - NOT FOUND');
  res.status(404);
  res.sendFile(`./public/404.html`, { root: './' })
};
exports.respondInternalError = (error, req, res, next) => {
  console.error('500 - INTERNAL SERVER ERROR');
  console.error(error.stack)
  res.status(500);
  res.sendFile(`./public/500.html`, { root: './' })
};
