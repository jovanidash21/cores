var mongoose = require('mongoose');
var Promise = require('bluebird');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
var timestamps = require('mongoose-timestamp');
var seminarsData = require('./seminars-data-schema');

mongoose.Promise = Promise;

var usersDataSchema = new Schema
(
    {
        firstName: {type:String, default: ''},
        lastName: {type:String, default: ''},
        email: {type:String, default: ''},
        profileImage: {
            type:String,
            default: 'https://raw.githubusercontent.com/jovanidash21/cores/master/public/images/profile/default.png'
        },
        birthDate: {type: Date, default: ''},
        gender: {
            type:String,
            enum: ['male', 'female'],
            default: 'male'
        },
        school: {
            type:String,
            enum: [
                'pup-manila',
                'adu',
                'au',
                'ceu',
                'dbtc',
                'earist',
                'feu',
                'gardner',
                'icct',
                'icst',
                'jru',
                'neu',
                'nu',
                'plmar',
                'plm',
                'philsca',
                'pup-batangas',
                'rtu',
                'sjtcp',
                'sti',
                'sti-global-city',
                'tcu',
                'tnhs',
                'tip',
                'tup',
                'urs',
                'ue',
                'ust',
                'wis',
                'other'
            ],
            default: 'pup-manila'
        },
        studentNumber: {type:String, default: ''},
        course: {
            type:String,
            enum: [
                'bscpe',
                'bsit',
                'bscs',
                'other'
            ],
            default: 'bscpe'
        },
        seminars: [{
            type: Schema.Types.ObjectId,
            ref: 'seminarsData'
        }],
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
        },
        facebookID: {type:String},
        facebookToken: {type:String},
        facebookEmail: {type:String},
        facebookName: {type:String}
    },

    {
        collection: 'usersData'
    }
);

usersDataSchema.plugin(passportLocalMongoose);
usersDataSchema.plugin(timestamps);

module.exports = mongoose.model('usersData', usersDataSchema);