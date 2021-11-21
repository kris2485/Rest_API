const express = require('express');
const router = express.Router();
const db = require('../db');
const { v4: uuidv4 } = require('uuid');

router.route('/testimonials').get((req, res) => {
  res.json(db.testimonials);
});
router.route('/testimonials/random').get((req, res) => {
  const randomElem = (e) => {
    return Math.floor(Math.random() * (e + 1));
  };
  res.json(db.testimonials[randomElem(db.testimonials.length)]);
});

router.route('/testimonials/:id').get((req, res) => {
  const item = db.testimonials.find((e) => e.id == req.params.id);
  res.json(item);
});

router.route('/testimonials').post((req, res) => {
  db.testimonials.push({ id: uuidv4(), author: req.body.author, text: req.body.text });
  res.json({ message: 'OK' });
});

router.route('/testimonials/:id').put((req, res) => {
  const item = db.testimonials.find((e) => e.id == req.params.id);
  const index = db.testimonials.indexOf(item);
  const updateItem = {
    ...item,
    author: req.body.author,
    text: req.body.text,
  };
  db.testimonials[index] = updateItem;
  res.json({ message: 'OK' });
});

router.route('/testimonials/:id').delete((req, res) => {
  const deleteItem = db.testimonials.findIndex((e) => e.id == req.params.id);
  db.testimonials.splice(deleteItem, 1);
  res.json({ message: 'OK' });
});

module.exports = router;
