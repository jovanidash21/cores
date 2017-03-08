var mongoose = require('mongoose');
var Promise = require('bluebird');
var Schema = mongoose.Schema;
var timestamps = require('mongoose-timestamp');

mongoose.Promise = Promise;

var seminarsDataSchema = new Schema
(
    {
        title: {type:String, default: ''},
        speaker: {type:String, default: ''},
        date: {type:Date, default: ''}
    },
    {
        collection: 'seminarsData'
    }
);

seminarsDataSchema.plugin(timestamps);

module.exports = mongoose.model('seminarsData',seminarsDataSchema);