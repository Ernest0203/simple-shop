const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  login: { type: String, required: true, },
  password: { type: String, required: true },
  role: { type: String },
  date: { type: Date, default: Date.now() }
})

module.exports = Users = mongoose.model('users', UserSchema);