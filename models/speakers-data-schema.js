var mongoose = require('mongoose');
var Promise = require('bluebird');
var Schema = mongoose.Schema;
var timestamps = require('mongoose-timestamp');
var seminarsData = require('./seminars-data-schema');

mongoose.Promise = Promise;

var speakersDataSchema = new Schema
(
    {
        firstName: {type:String, default: ''},
        lastName: {type:String, default: ''},
        email: {type:String, default: ''},
        position: {type:String, default: ''},
        school: {type:String, default: ''},
        office: {type:String, default: ''},
        seminar: {
            type: Schema.Types.ObjectId,
            ref: 'seminarsData'
        },
        socialLinks: [{
            website: {type: String, default: ''},
            facebook: {type: String, default: ''},
            twitter: {type: String, default: ''},
            instagram: {type: String, default: ''},
            googleplus: {type: String, default: ''},
            linkedin: {type: String, default: ''},
            youtube: {type: String, default: ''},
            github: {type: String, default: ''},
            codepen: {type: String, default: ''}
        }]
    },
    {
        collection: 'speakersData'
    }
);

speakersDataSchema.plugin(timestamps);

module.exports = mongoose.model('speakersData',speakersDataSchema);