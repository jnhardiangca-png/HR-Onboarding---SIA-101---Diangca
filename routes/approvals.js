const express = require('express');
const router = express.Router();
const db = require('../data/db');

// GET ALL
router.get('/', (req, res) => {
  res.json(db.approvals);
});

// CREATE
router.post('/', (req, res) => {
  const approval = {
    id: Date.now(),
    status: "Pending",
    ...req.body
  };

  db.approvals.push(approval);
  res.status(201).json(approval);
});

// ✅ UPDATE (THIS WAS MISSING)
router.put('/:id', (req, res) => {
  const approval = db.approvals.find(a => a.id == req.params.id);

  if (!approval) {
    return res.status(404).json({ message: "Not found" });
  }

  Object.assign(approval, req.body);
  res.json(approval);
});

module.exports = router;