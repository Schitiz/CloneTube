const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const globalRouter = require('./routes/globalRoutes');
const userRouter = require('./routes/userRoutes');
const videoRouter = require('./routes/videoRoutes');
const routes = require('./routes');
const localMiddleware = require('./middlewares');

const app = express();

//* 1) Middlewares
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(localMiddleware.getLocals);

app.set('view engine', 'pug');

//* 2) Routes
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

module.exports = app;
