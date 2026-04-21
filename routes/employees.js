const express = require('express');
const router = express.Router();
const db = require('../data/db');

router.get('/', (req, res) => {
  res.json(db.employees);
});

router.post('/', (req, res) => {
  const employee = {
    id: Date.now(),
    ...req.body
  };
  db.employees.push(employee);
  res.status(201).json(employee);
});

router.put('/:id', (req, res) => {
  const emp = db.employees.find(e => e.id == req.params.id);
  if (!emp) return res.status(404).json({ message: "Not found" });

  Object.assign(emp, req.body);
  res.json(emp);
});

router.delete('/:id', (req, res) => {
  db.employees = db.employees.filter(e => e.id != req.params.id);
  res.json({ message: "Deleted successfully" });
});

module.exports = router;