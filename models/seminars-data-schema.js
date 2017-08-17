var mongoose = require('mongoose');
var Promise = require('bluebird');
var Schema = mongoose.Schema;
var timestamps = require('mongoose-timestamp');
var speakersData = require('./speakers-data-schema');
var usersData = require('./users-data-schema');

mongoose.Promise = Promise;

var seminarsDataSchema = new Schema
(
  {
    title: {type:String, default: ''},
    featuredImage: {
      type:String,
      default: 'https://raw.githubusercontent.com/jovanidash21/cores/master/public/images/seminar/default.png'
    },
    description: {type:String, default: ''},
    speakers: [{
      type: Schema.Types.ObjectId,
      ref: 'speakersData'
    }],
    schedule: {type:Date, default: Date.now},
    location: {
      type:String,
      enum: [
        'none',
        'bulwagang-balagtas',
        'claro-m-recto',
        'ictc',
        'pup-theater',
        'avr-cea',
        'avr-cot',
        'manila-room'
      ],
      default: 'none'
    },
    registrants: [{
      type: Schema.Types.ObjectId,
      ref: 'usersData'
    }]
  },
  {
    collection: 'seminarsData'
  }
);

seminarsDataSchema.plugin(timestamps);

module.exports = mongoose.model('seminarsData',seminarsDataSchema);
