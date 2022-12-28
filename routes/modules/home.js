const express = require('express');
const router = express.Router();
const user = require('../../models/user');

router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;
