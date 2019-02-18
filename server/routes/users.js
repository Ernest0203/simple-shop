const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const Users = require('../models/users.js');

router.get('/login' , (req, res) => res.send('Login'));

router.get('/register' , (req, res) => res.send('Register'));

router.post('/register' , (req, res) => {
  const { login, password, password2 } = req.body;
 
  let errors = [];
  if (!login || !password) {
    errors.push({ message: 'Please fill in all fields' });
  }
  if(password !== password2) {
    errors.push({ message: 'Password do not match' });
  }

  if (errors.length > 0) {
    res.status(500).send(errors);
  } else { 
    Users.findOne({ login: login })
      .then(user => {
        if (user) {
          errors.push({ message: 'User exist!' })
          res.status(500).send(errors);
        }

        const newUser = {
          login,
          password
        }

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
          
            Users.create(newUser)
              .then(result => {
                res.json(result)
            })
              .catch(err => {
                errors.push({ message: err })
                res.status(500).send(errors);
              });
          })
        }) 
    })
  }
});

module.exports = router;
