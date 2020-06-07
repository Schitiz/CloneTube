const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = require('./app');
// import Video from './models/videoModel';
// import Comment from './models/commentModel';

dotenv.config({ path: './config.env' });

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB Connected Successfully'));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`App running on: http://localhost:${PORT}`);
});
