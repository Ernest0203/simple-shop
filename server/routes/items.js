const express = require('express');
const router = express.Router();

const upload = require('../lib/fileUpload');

const Items = require('../models/items.js');

const categories = [
  { value: 'All' },
  { value: 'Video Game Consoles' },
  { value: 'Cell Phones & Smartphones' },
  { value: 'Fitness Technology' },
];

//Items.update({}, {$set: {category: 'Video Game Consoles'}}, {upsert: true, multi: true}).then(res => console.log(res))
//Items.find().then((res) => console.log(res))

router.get('/', (req, res) => {
  const data = {};
  data.categories = categories;
  Items.find({ ...req.query })
    .sort({ date: -1 })
    .then(items => {
      data.items = items;
      res.json(data);
    })
    .catch(err => res.send('error: ' + err))
})

router.post('/', (req, res) => {
  return upload(req.body.image.data).then((imageUrl) => {
    console.log(req.body);
    
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