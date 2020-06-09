const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app');

// const Video = require('./models/videoModel');
// const Comment = require('./models/commentModel');
// const User = require('./models/userModel');

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
