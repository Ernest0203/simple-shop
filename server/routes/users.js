const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const Users = require('../models/users.js');

router.get('/login' , (req, res) => res.send('Login'));

router.get('/register' , (req, res) => res.send('Register'));

module.exports = router;
