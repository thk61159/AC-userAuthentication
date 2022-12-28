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
        res.redirect(`./login/${e._id}`);
      } else {
        res.redirect(`./`);
      }
    })
    .catch((err) => console.log(err));
});
router.get('/:id', (req, res) => {
  const id = req.params.id;
  user.findById(id)
    .lean()
    .then((e) => {
      res.render('userPage', { firstName: e.firstName });
    })
    .catch((err) => console.log(err));
  
});

module.exports = router;
