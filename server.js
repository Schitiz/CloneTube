const app = require('./app');

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`App running on: http://localhost:${PORT}`);
});