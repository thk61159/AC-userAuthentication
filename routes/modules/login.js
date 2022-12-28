const express = require('express');
const router = express.Router();
const user = require('../../models/user');
// const url = require('url'); //給redirect 傳入variable
router.use(express.urlencoded({ extended: true }));

router.post('/', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  user
    .findOne({ email, password })
    .lean()
    .then((e) => {
      console.log(e);
      if (e) {
        res.redirect(`./login/${e.firstName}`);
      } else {
        res.redirect(`./`);
      }
    })
    .catch((err) => console.log(err));
});
router.get('/:userFirstname', (req, res) => {
  console.log(req.params.userFirstname);
  const firstName = req.params.userFirstname;
  res.render('userPage', { firstName });
});

module.exports = router;
