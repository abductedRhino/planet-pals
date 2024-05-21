const Subscriber = require('./../models/subscriberModel');

exports.create_product = (item) => {
  const sub = new Subscriber(item);
  sub.save().then(() => console.log(`saved ${sub.name}`));
}
exports.fill = (seed) => {
  for (const item of seed) {
    const sub = new Subscriber(item);
    sub.save().then(() => console.log(`saved ${sub.name}`));
  }
  return 'ok'
}
