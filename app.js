const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const userRouter = require('./routes/userRoutes');
const videoRouter = require('./routes/videoRoutes');
const globalRouter = require('./routes/globalRoutes');
const routes = require('./routes');

const app = express();

// 1) Middlewares
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

// 2) Routes
//// app.get('/', (req, res) => res.send('Hello World'));
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

module.exports = app;
