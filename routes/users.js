var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post("/", function (req, res, next) {
  console.log(req.body);
  let newUser = new models.users();
  newUser.users_id = 0;
  newUser.first_name = req.body.name;
  newUser.last_name = req.body.name;
  newUser.username_email = req.body.name;
  newUser.pass_word = req.body.name;
  newUser.save().then(user => res.json(user)).catch(err => console.log(err));
  //models.users.create(req.body).then(user => res.json(user)).catch(error => console.log(error));
});

module.exports = router;
