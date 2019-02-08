const express = require('express');
const mongoose = require('mongoose');

const items = require('./routes/items');
const users = require('./routes/users');
const db = require('./config/keys').mongoURI;

const app = express();
app.use(express.json());

mongoose.connect(db)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use('/items', items);
app.use('/users', users);
  
const port = process.env.PORT || 2000;
app.listen(port, () => console.log(`Server started on port ${port}...`));

