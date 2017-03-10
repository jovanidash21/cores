var mongoose = require('mongoose');
var Promise = require('bluebird');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
var timestamps = require('mongoose-timestamp');

mongoose.Promise = Promise;

var usersDataSchema = new Schema
(
    {
        firstName: {type:String, default: ''},
        lastName: {type:String, default: ''},
        email: {type:String, default: ''},
        profileImage: {
            type:String,
            default: ''
        },
        birthDate: {type: Date, default: ''},
        gender: {
            type:String,
            enum: ['male', 'female'],
            default: ''
        },
        school: {type:String, default: ''},
        studentNumber: {type:String, default: ''},
        course: {type:String, default: ''},
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
        }],
        role: {
            type:String,
            enum: ['administrator', 'registrant'],
            default: 'registrant'
        }
    },

    {
        collection: 'usersData'
    }
);

usersDataSchema.plugin(passportLocalMongoose);
usersDataSchema.plugin(timestamps);

module.exports = mongoose.model('usersData', usersDataSchema);