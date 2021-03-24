require('dotenv').config({ path: './config/config.env' });
const express = require('express');
const app = express();
const colors = require('colors');
const morgan = require('morgan');

app.get('/', (req, res) => {
  res.send('Hello World');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Dev Server is running at port ${PORT}`.blue);
});
