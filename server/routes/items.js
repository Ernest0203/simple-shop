const express = require('express');
const router = express.Router();

const upload = require('../lib/fileUpload');

const Items = require('../models/items.js');

router.get('/', (req, res) => {
  Items.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
    .catch(err => res.send('error: ' + err))
})

router.post('/', (req, res) => {
  return upload(req.body.image.data).then((imageUrl) => {
    const data = { ...req.body };
    data.imageUrl = imageUrl;
    Items.create(data).then(item => res.json(item));
  })
  .catch(err => res.send('error: ' + err))
})

router.delete('/:id', (req,res) => {
  Items.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ succes: true })))
    .catch(err => res.status(404).json({ success: false }))
})

module.exports = router;