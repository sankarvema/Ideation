'use strict';

var mongoose = require('mongoose');

var campaignSchema = new mongoose.Schema({
  title: String,
  desc: { type: String, default: '' },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, default: Date.now },
  sponsor: { type: String, default: 'sankarvema' }
});

module.exports = mongoose.model('campaignModel', campaignSchema);

console.log("Campaign schema defined")
