const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = require('./app');

dotenv.config({ path: './config.env' });

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true,
  })
  .then(() => console.log('DB Connected Successfully'));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`App running on: http://localhost:${PORT}`);
});
