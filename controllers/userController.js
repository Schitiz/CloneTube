const routes = require('../routes');

exports.getJoin = (req, res) => {
  res.render('join', {
    pageTitle: 'Join',
  });
};

exports.postJoin = (req, res) => {
  // console.log(req.body);
  const {
    // eslint-disable-next-line no-unused-vars
    body: { name, email, password, password2 },
  } = req;

  if (password !== password2) {
    res.status(400);
    res.render('join', {
      pageTitle: 'Join',
    });
  } else {
    // TODO: Register User
    // TODO: Log User In

    res.redirect(routes.home);
  }
};
exports.getLogin = (req, res) =>
  res.render('login', {
    pageTitle: 'Login',
  });

exports.postLogin = (req, res) => {
  res.redirect(routes.home);
};

exports.logout = (req, res) => {
  // TODO: Process LogOut
  res.redirect(routes.home);
};

exports.getAllUsers = (req, res) =>
  res.render('userIndex', {
    pageTitle: 'User Index',
  });
exports.editProfile = (req, res) =>
  res.render('editProfile', {
    pageTitle: 'Edit Profile',
  });
exports.changePassword = (req, res) =>
  res.render('changePassword', {
    pageTitle: 'Change Password',
  });
exports.getUserDetails = (req, res) =>
  res.render('userDetails', {
    pageTitle: 'User Details',
  });
