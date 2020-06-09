const passport = require('passport');

const routes = require('../routes');
const User = require('../models/userModel');

exports.getJoin = (req, res) => {
  res.render('join', {
    pageTitle: 'Join',
  });
};

exports.githubLoginCallback = (accessToken, refreshToken, profile, cb) => {
  console.log(accessToken, refreshToken, profile, cb);
};

exports.postGithubLogin = (req, res) => {
  res.redirect(routes.home);
};

exports.githubLogin = passport.authenticate('github');

exports.postJoin = async (req, res, next) => {
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
    try {
      // TODO: Register User
      // TODO: Log User In
      const user = await User({
        name,
        email,
      });
      await User.register(user, password);
      next();
    } catch (err) {
      console.log(err);
      res.redirect(routes.home);
    }
  }
};
exports.getLogin = (req, res) =>
  res.render('login', {
    pageTitle: 'Login',
  });

exports.postLogin = passport.authenticate('local', {
  failureRedirect: routes.login,
  successRedirect: routes.home,
});
exports.logout = (req, res) => {
  // TODO: Process LogOut
  req.logout();
  req.session.destroy();
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
