const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ItemSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  imageUrl: { type: String, required: true },
  ownerId: String,
  deleted: Boolean,
  date: { type: Date, default: Date.now },
})

module.exports = Items = mongoose.model('items', ItemSchema);