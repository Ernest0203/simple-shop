const express = require('express');
const mongoose = require('mongoose');
const Joi = require('joi');

const items = require('./routes/api/items');

const app = express();

const bodyParser = require('body-parser');

app.use(express.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to Mongo

mongoose.connect(db)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use('/api/items', items);

const port = process.env.PORT || 2000;
app.listen(port, () => console.log(`Server started on port ${port}...`));

// app.get('/courses', (req, res) => {
//   res.send(courses);
// });

// app.get('/courses/:id', (req, res) => {
//   const course = courses.find(item => item.id === +req.params.id);
//   if (!course) res.status(404).send('The course with the given ID was not found');

//   res.send(course);
// });

// app.post('/courses', (req, res) => {
//   const schema = {
//     name: Joi.string().min(3).required()
//   };

//   const result = Joi.validate(req.body, schema);

//   if (result.error) {
//     res.status(400).send(result.error.details[0].message);
//     return;
//   }

//   const course = {
//     id: courses.length + 1,
//     name: req.body.name
//   };

//   courses.push(course);
//   res.send(course);
// });

// app.put('/courses/:id', (req, res) => {
//   const course = courses.find(item => item.id === +req.params.id);
//   if (!course) res.status(404).send('The course with the given ID was not found');

//   const schema = {
//     name: Joi.string().min(3).required()
//   };
//   const result = Joi.validate(req.body, schema);

//   if (result.error) {
//     res.status(400).send(result.error.details[0].message);
//     return;
//   }
  
//   course.name = req.body.name;
//   res.send(course);
// });
