const express = require('express');
const router = express.Router();
const db = require('../data/db');

// =========================
// GET ALL
// =========================
router.get('/', (req, res) => {
  res.json(db.approvals);
});

// =========================
// CREATE (FIXED STRUCTURE)
// =========================
router.post('/', (req, res) => {
  const approval = {
    id: Date.now(),

    type: req.body.type || "Unknown",
    submittedBy: req.body.submittedBy || "N/A",
    description: req.body.description || "",
    date: req.body.date || new Date(),
    status: req.body.status || "Pending"
  };

  db.approvals.push(approval);
  res.status(201).json(approval);
});

// =========================
// UPDATE
// =========================
router.put('/:id', (req, res) => {
  const approval = db.approvals.find(a => a.id == req.params.id);

  if (!approval) {
    return res.status(404).json({ message: "Not found" });
  }

  Object.assign(approval, req.body);
  res.json(approval);
});

module.exports = router;