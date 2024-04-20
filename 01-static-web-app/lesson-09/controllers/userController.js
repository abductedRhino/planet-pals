const utils = require('./utils')
exports.getSignUp = (req, res) => {
  res.writeHead(200, utils.contentTypes.html);
  utils.getFile("views/sign_up.html", res);
};
exports.signUpProcessor = (req, res) => {
  console.log('body : ', req.body);
  console.log('query: ', req.query);
  res.writeHead(200, utils.contentTypes.html);
  utils.getFile("views/sign_up.html", res);
};