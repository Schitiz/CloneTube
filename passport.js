const passport = require('passport');
const GithubStrategy = require('passport-github');

const User = require('./models/userModel');
const userController = require('./controllers/userController');
const routes = require('./routes');

passport.use(User.createStrategy());
passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      callbackURL: `http://localhost:4000${routes.github}`,
    },
    userController.githubLoginCallback
  )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
