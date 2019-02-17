const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const Users = require('../models/users.js');

router.get('/login' , (req, res) => res.send('Login'));

router.get('/register' , (req, res) => res.send('Register'));

router.post('/register' , (req, res) => {
  const { email, password, password2 } = req.body;

  let errors = [];

  if (!email || !password) {
    errors.push({ message: 'Please fill in all fields' });
  }
  if(password !== password2) {
    errors.push({ message: 'Password do not match' });
  }

  if (errors.length > 0) {
    res.status(500).send(errors);
  } else { res.send('pass') }
});

module.exports = router;
