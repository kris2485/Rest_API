const express = require('express');
const router = express.Router();
const db = require('../db');
const { v4: uuidv4 } = require('uuid');

router.route('/concerts').get((req, res) => {
  res.json(db.concerts);
});

router.route('/concerts/:id').get((req, res) => {
  const item = db.concerts.find((e) => e.id == req.params.id);
  res.json(item);
});

router.route('/concerts').post((req, res) => {
  db.concerts.push({ id: uuidv4(), performer: req.body.performer, genre: req.body.genre, price: req.body.price, day: req.body.day, image: req.body.image });
  res.json({ message: 'OK' });
});

router.route('/concerts/:id').put((req, res) => {
  const item = db.concerts.find((e) => e.id == req.params.id);
  const index = db.concerts.indexOf(item);
  const updateItem = {
    ...item,
    id: req.params.id,
    performer: req.params.performer,
    genre: req.params.genre,
    price: req.params.price,
    day: req.params.day,
    image: req.params.image,
  };
  db.concerts[index] = updateItem;
  res.json({ message: 'OK' });
});

router.route('/concerts/:id').delete((req, res) => {
  const deleteItem = db.concerts.findIndex((e) => e.id == req.params.id);
  db.concerts.splice(deleteItem, 1);
  res.json({ message: 'OK' });
});

module.exports = router;
