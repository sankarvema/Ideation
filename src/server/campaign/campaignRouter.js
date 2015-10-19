'use strict';

var express = require('express');
var router = express.Router();
var campaignModel = require('./campaignSchema');

/* GET /campaigns listing. */
router.get('/', function(req, res, next) {
  console.log("Campaign api get '/'");
  campaignModel.find(function (err, campaignList) {
    if (err) return next(err);
    res.json(campaignList);
  });
});

/* POST /campaigns */
router.post('/', function(req, res, next) {
  console.log("Campaign api post '/'");
  campaignModel.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /campaigns/id */
router.get('/:id', function(req, res, next) {
  console.log("Campaign api get '/:id'");
  campaignModel.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /campaigns/:id */
router.put('/:id', function(req, res, next) {
  console.log("Campaign api put '/:id'");
  campaignModel.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /campaigns/:id */
router.delete('/:id', function(req, res, next) {
  console.log("Campaign api delete '/:id'");
  campaignModel.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
