const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const path = require('path');

require('./config/passport.js')(passport);

const items = require('./routes/items');
const users = require('./routes/users');
const db = require('./config/keys').mongoURI;

const app = express();

mongoose.connect(db)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use(express.json());
app.use(cors({ credentials: true }));
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false, cookie: { maxAge: 3600000 } }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/items', items);
app.use('/users', users);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve()(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 2000;
app.listen(port, () => console.log(`Server started on port ${port}...`));

