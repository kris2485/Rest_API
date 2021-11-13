const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();

const db = [
  { id: 1, author: 'John Doe', text: 'This company is worth every coin!' },
  { id: 2, author: 'Amanda Doe', text: 'They really know how to make you happy.' },
  { id: 3, author: 'Steve Jobs', text: "Don't let the noise of others opinions drown out your own inner voice." },
];

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/testimonials', (req, res) => {
  res.json(db);
});
app.get('/testimonials/random', (req, res) => {
  const randomElem = (e) => {
    return Math.floor(Math.random() * (e + 1));
  };
  res.json(db[randomElem(db.length)]);
});

app.get('/testimonials/:id', (req, res) => {
  const item = db.find((e) => e.id == req.params.id);
  res.json(item);
});

app.post('/testimonials', (req, res) => {
  db.push({ id: uuidv4(), author: req.body.author, text: req.body.text });
  res.json({ message: 'OK' });
});

app.put('/testimonials/:id', (req, res) => {
  const item = db.find((e) => e.id == req.params.id);
  const index = db.indexOf(item);
  const updateItem = {
    ...item,
    author: req.body.author,
    text: req.body.text,
  };
  db[index] = updateItem;
  res.json({ message: 'OK' });
});

app.delete('/testimonials/:id', (req, res) => {
  const deleteItem = db.findIndex((e) => e.id == req.params.id);
  db.splice(deleteItem, 1);
  res.json({ message: 'OK' });
});

app.use((req, res) => {
  res.status(404).send({ message: 'Not found...' });
});

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});
