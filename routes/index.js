var express = require('express');
var router = express.Router();
const config = require('../config');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express', 
    env: process.env.NODE_ENV,
    value: config.CONFIG_VALUE
  });
});

module.exports = router;
