const Subscriber = require('./../models/subscriberModel');

exports.getAllSubscribers = async (req, res, next) => {
  req.data = await Subscriber.find({});
  next();
};

exports.saveSubscriber = async (req, res) => {
  const sub = new Subscriber({
    name: req.body.name,
    email: req.body.email,
    zipCode: req.body.zipCode
  })
  console.log('save:',await sub.save());
  res.render('thanks');
};
