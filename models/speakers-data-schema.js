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
        profileImage: {
            type:String,
            default: 'https://raw.githubusercontent.com/jovanidash21/cores/master/public/images/profile/default.png'
        },
        position: {type:String, default: ''},
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
        office: {type:String, default: ''},
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
        }]
    },
    {
        collection: 'speakersData'
    }
);

speakersDataSchema.plugin(timestamps);

module.exports = mongoose.model('speakersData',speakersDataSchema);