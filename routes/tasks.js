const express = require('express');
const router = express.Router();
const db = require('../data/db');

router.get('/', (req, res) => res.json(db.tasks));

router.post('/', (req, res) => {
  const task = {
    id: Date.now(),
    status: "Pending",
    ...req.body
  };
  db.tasks.push(task);
  res.status(201).json(task);
});

router.put('/:id', (req, res) => {
  const task = db.tasks.find(t => t.id == req.params.id);
  if (!task) return res.status(404).json({ message: "Not found" });

  Object.assign(task, req.body);
  res.json(task);
});

router.delete('/:id', (req, res) => {
  db.tasks = db.tasks.filter(t => t.id != req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;