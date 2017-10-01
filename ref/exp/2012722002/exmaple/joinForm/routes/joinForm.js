var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('joinForm', {title: 'Join Form!' });
});

router.post('/', function (req, res, next) {
  console.log('req.body : %j', req.body);
  res.json(req.body);
});

module.exports = router;
