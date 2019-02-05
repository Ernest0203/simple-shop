const express = require('express');
const router = express.Router();

const upload = require('../../lib/fileUpload');

// Item model
const Items = require('../../models/Item');

router.get('/', (req, res) => {
  Items.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
})

router.post('/', (req, res) => {
  return upload(req.body.image.data).then((imageUrl) => {
    const data = { ...req.body };
    data.imageUrl = imageUrl;
    const newItem = new Items(data);
    newItem.save().then(item => res.json(item));
  })
})

router.delete('/:id', (req,res) => {
  Items.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ succes: true })))
    .catch(err => res.status(404).json({ success: false }))
})

module.exports = router;