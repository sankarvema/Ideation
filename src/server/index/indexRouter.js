'use strict';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Ideation Portal' });
});

/* GET todo page. */
router.get('/todo', function(req, res) {
  res.render('todo', { title: 'Ideation Portal - ToDo List' });
});

/* GET campaign page. */
router.get('/campaign', function(req, res) {
  res.render('campaign', { title: 'Ideation Portal - Campaigns' });
});

/* GET campaign page. */
router.get('/idea', function(req, res) {
  res.render('idea', { title: 'Ideation Portal - Ideas' });
});


module.exports = router;
