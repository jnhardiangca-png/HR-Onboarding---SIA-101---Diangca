const express = require('express');
const router = express.Router();
const db = require('../data/db');

router.get('/', (req, res) => res.json(db.workflows));

router.post('/', (req, res) => {
  const workflow = {
    id: Date.now(),
    status: "Pending",
    ...req.body
  };
  db.workflows.push(workflow);
  res.status(201).json(workflow);
});

router.put('/:id', (req, res) => {
  const wf = db.workflows.find(w => w.id == req.params.id);
  if (!wf) return res.status(404).json({ message: "Not found" });

  Object.assign(wf, req.body);
  res.json(wf);
});

router.delete('/:id', (req, res) => {
  db.workflows = db.workflows.filter(w => w.id != req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;