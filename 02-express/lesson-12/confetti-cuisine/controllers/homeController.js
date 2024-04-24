const courses = [
  {
    title: "event driven cakes",
    cost: 50
  },
  {
    title: "asynchronous artichoke",
    cost: 25
  },
  {
    title: "object oriented orange juice",
    cost: 10
  }
];
exports.showCourses = (req, res) => {
  res.render('courses', { cofferedCourses: courses });
};
exports.showSignUp = (req, res) => {
  res.render('contact');
};
exports.postedSignUpForm = (req, res) => {
  res.render('thanks');
};
