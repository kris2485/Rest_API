const express = require('express');
const router = express.Router();
const db = require('../db');
const { v4: uuidv4 } = require('uuid');

router.route('/seats').get((req, res) => {
  res.json(db.seats);
});

router.route('/seats/:id').get((req, res) => {
  const item = db.seats.find((e) => e.id == req.params.id);
  res.json(item);
});

router.route('/seats').post((req, res) => {
  db.seats.push({ id: uuidv4(), day: req.body.day, seat: req.body.seat, client: req.body.client, email: req.body.email });
  res.json({ message: 'Your seat has been added' });
});

router.route('/seats/:id').put((req, res) => {
  const item = db.seats.find((e) => e.id == req.params.id);
  const index = db.seats.indexOf(item);
  const updateItem = {
    ...item,
    id: req.body.id,
    day: req.body.day,
    seat: req.body.seat,
    client: req.body.client,
    email: req.body.email,
  };
  db.seats[index] = updateItem;
  res.json({ message: 'OK' });
});

router.route('/seats/:id').delete((req, res) => {
  const deleteItem = db.seats.findIndex((e) => e.id == req.params.id);
  db.seats.splice(deleteItem, 1);
  res.json({ message: 'OK' });
});

module.exports = router;
