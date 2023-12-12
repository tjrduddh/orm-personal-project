var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '개인 프로젝트 실습중' });
});

module.exports = router;
