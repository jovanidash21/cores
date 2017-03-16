var express = require('express');
var router = express.Router();
var usersData = require('../models/users-data-schema');
var seminarsData = require('../models/seminars-data-schema');
var speakersData = require('../models/speakers-data-schema');

router.get('/user', function(req, res, next) {
    if (req.user === undefined) {
        res.json({});
    }
    else {
        res.json([req.user]);
    }
});

router.get('/user/:userID', function(req, res, next) {
    if (req.user === undefined) {
        res.json({});
    }
    else {
        var userID = req.params.userID;

        usersData.findById(userID, function(err, results) {
            if(err) {
                res.end(err);
            }
            else {
                res.json([results]);
            }
        });
    }
});

router.get('/users', function(req, res, next) {
    if (req.user === undefined) {
        res.json({});
    }
    else {
        usersData.find({}, function(err, results) {
            if(err) {
                res.end(err);
            }
            else {
                res.json(results);
            }
        });
    }
});

router.post('/users', function(req, res, next) {
    if (req.user === undefined) {
        res.redirect('/');
    }
    else {
        var userData = req.body;

        userData.forEach(function (userData) {
            var user = {
                username: userData.username,
                email: userData.email,
                firstName: userData.firstName,
                lastName: userData.lastName,
                gender: userData.gender,
                school: userData.school,
                studentNumber: userData.studentNumber,
                course: userData.course,
                role: userData.role
            };
            var password = userData.password;

            usersData.register(new usersData(user), password, function(err, results) {
                if(err) {
                    res.end(err);
                }
                else {
                    res.json(results);
                }
            });
        });
    }
});

router.get('/seminars', function(req, res, next) {
    if (req.user === undefined) {
        res.json({});
    }
    else {
        seminarsData.find({}, function(err) {
            if(err) {
                res.end(err);
            }
        });
    }
});

router.post('/seminars', function(req, res, next) {
    if (req.user === undefined) {
        res.redirect('/');
    }
    else {
        var seminarData = new seminarsData(req.body);
        seminarData.save(function(err, results) {
            if(err) {
                res.end(err);
            }
            else {
                res.json(results);
            }
        });
    }
});

router.get('/speakers', function(req, res, next) {
    if (req.user === undefined) {
        res.json({});
    }
    else {
        speakersData.find({}, function(err, results) {
            if(err) {
                res.end(err);
            }
            else {
                res.json(results);
            }
        });
    }
});

router.post('/speakers', function(req, res, next) {
    if (req.user === undefined) {
        res.redirect('/');
    }
    else {
        var speakerData = req.body;
        speakerData.forEach(function (speakerData) {
            var speaker = {
                firstName: speakerData.firstName,
                lastName: speakerData.lastName,
                email: speakerData.email,
                position: speakerData.position,
                school: speakerData.school,
                course: speakerData.course,
                office: speakerData.role
            };
            var newSpeaker = new speakersData(speaker);
            newSpeaker.save(function(err, results) {
                if(err) {
                    res.end(err);
                }
                else {
                    res.json(results);
                }
            });
        });
    }
});

module.exports = router;