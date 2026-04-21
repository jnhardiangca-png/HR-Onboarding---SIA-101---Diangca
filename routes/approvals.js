const express = require('express');
const router = express.Router();
const db = require('../data/db');

router.get('/', (req, res) => res.json(db.approvals));

router.post('/', (req, res) => {
  const approval = {
    id: Date.now(),
    ...req.body
  };

  db.approvals.push(approval);
  res.status(201).json(approval);
});

module.exports = router;