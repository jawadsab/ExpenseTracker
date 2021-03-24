require('dotenv').config({ path: './config/config.env' });
const express = require('express');
const app = express();
const colors = require('colors');
const morgan = require('morgan');
const mongoose = require("mongoose");

const connectDB = async () => {
  try {

    const conn = await mongoose.connect(process.env.MONGO_URI,{
      useNewUrlParser:true,
      useCreateIndex:true,
      useUnifiedTopology:true,
    });

    console.log(`MongoDB connected ${conn.connection.host}`.cyan.underline.bold);
    
  } catch (err) {
    console.log(`Error ${err.message}`.red);
    process.exit(1);
  }
}
connectDB();

app.get('/', (req, res) => {
  res.send('Hello World');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Dev Server is running at port ${PORT}`.blue);
});
