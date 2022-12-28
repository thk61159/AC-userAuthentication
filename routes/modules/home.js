const express = require('express');
const router = express.Router();
const user = require('../../models/user');

router.get('/', (req, res) => {
  let wrong = req.query.wrong
  res.render('index', { wrong });
});

module.exports = router;
