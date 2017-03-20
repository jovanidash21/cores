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

        usersData.findById(userID)
            .populate('seminars')
            .exec(function(err, results) {
                if(err) {
                    res.end(err);
                }
                else {
                    res.json([results]);
                }
            });
    }
});

router.patch('/user/:userID', function(req, res, next) {
    if (req.user === undefined) {
        res.json({});
    }
    else {
        var userID = req.params.userID;
        var userData = req.body;
        userData.forEach(function (userData) {
            var user = {
                username: userData.username,
                email: userData.email,
                firstName: userData.firstName,
                lastName: userData.lastName,
                birthDate: userData.birthDate,
                gender: userData.gender,
                school: userData.school,
                studentNumber: userData.studentNumber,
                course: userData.course,
                role: userData.role
            };

            usersData.findByIdAndUpdate(userID, user, function(err, results) {
                if(err) {
                    res.end(err);
                }
                else {
                    res.json([results]);
                }
            });
        });
    }
});

router.delete('/user/:userID', function(req, res, next) {
    if (req.user === undefined) {
        res.json({});
    }
    else {
        var userID = req.params.userID;
        usersData.findByIdAndRemove(userID, function(err) {
            if(err) {
                res.end(err);
            }
            else {
                res.end();
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
                birthDate: userData.birthDate,
                gender: userData.gender,
                school: userData.school,
                studentNumber: userData.studentNumber,
                course: userData.course,
                seminars: userData.seminars,
                role: userData.role
            };
            var password = userData.password;

            usersData.register(new usersData(user), password, function(err, user) {
                if(err) {
                    res.end(err);
                }
                else {
                    userData.seminars.forEach(function (seminarID){
                        seminarsData.findByIdAndUpdate(
                            seminarID,
                            { $push: { registrants: user._id }},
                            { safe: true, upsert: true, new: true },
                            function(err) {
                                if(err) {
                                    res.end(err);
                                }
                                else {
                                    res.end();
                                }
                            }
                        );
                    });
                }
            });
        });
    }
});

router.get('/seminar/:seminarID', function(req, res, next) {
    if (req.user === undefined) {
        res.json({});
    }
    else {
        var seminarID = req.params.seminarID;

        seminarsData.findById(seminarID)
            .populate(['speaker', 'registrants'])
            .exec(function(err, results) {
                if(err) {
                    res.end(err);
                }
                else {
                    res.json([results]);
                }
            });
    }
});

router.patch('/seminar/:seminarID', function(req, res, next) {
    if (req.user === undefined) {
        res.json({});
    }
    else {
        var seminarID = req.params.seminarID;
        var seminarData = req.body;
        seminarData.forEach(function (seminarData) {
            var seminar = {
                title: seminarData.title,
                location: seminarData.location,
                schedule: seminarData.schedule
            };
            seminarsData.findByIdAndUpdate(seminarID, seminar, function(err, results) {
                if(err) {
                    res.end(err);
                }
                else {
                    res.json([results]);
                }
            });
        });
    }
});

router.delete('/seminar/:seminarID', function(req, res, next) {
    if (req.user === undefined) {
        res.json({});
    }
    else {
        var seminarID = req.params.seminarID;
        seminarsData.findByIdAndRemove(seminarID, function(err) {
            if(err) {
                res.end(err);
            }
            else {
                res.end();
            }
        });
    }
});

router.get('/seminars', function(req, res, next) {
    if (req.user === undefined) {
        res.json({});
    }
    else {
        seminarsData.find({}, function(err, results) {
            if(err) {
                res.end(err);
            }
            else {
                res.json(results);
            }
        });
    }
});

router.post('/seminars', function(req, res, next) {
    if (req.user === undefined) {
        res.redirect('/');
    }
    else {
        var seminarData = req.body;
        seminarData.forEach(function (seminarData) {
            var seminar = {
                title: seminarData.title,
                speaker: seminarData.speaker,
                schedule: seminarData.schedule,
                location: seminarData.location,
            };
            var newSeminar = new seminarsData(seminar);
            newSeminar.save(function(err, seminar) {
                if(err) {
                    res.end(err);
                }
                else {
                    speakersData.findByIdAndUpdate(
                        seminarData.speaker,
                        { seminar: seminar._id },
                        function(err) {
                            if(err) {
                                res.end(err);
                            }
                            else {
                                res.end();
                            }
                        }
                    );
                }
            });
        });
    }
});

router.get('/speaker/:speakerID', function(req, res, next) {
    if (req.user === undefined) {
        res.json({});
    }
    else {
        var speakerID = req.params.speakerID;

        speakersData.findById(speakerID)
            .populate('seminar')
            .exec(function(err, results) {
                if(err) {
                    res.end(err);
                }
                else {
                    res.json([results]);
                }
            });
    }
});

router.patch('/speaker/:speakerID', function(req, res, next) {
    if (req.user === undefined) {
        res.json({});
    }
    else {
        var speakerID = req.params.speakerID;
        var speakerData = req.body;
        speakerData.forEach(function (speakerData) {
            var speaker = {
                firstName: speakerData.firstName,
                lastName: speakerData.lastName,
                email: speakerData.email,
                school: speakerData.school,
                course: speakerData.course,
                office: speakerData.office
            };

            speakersData.findByIdAndUpdate(speakerID, speaker, function(err, results) {
                if(err) {
                    res.end(err);
                }
                else {
                    res.json([results]);
                }
            });
        });
    }
});

router.delete('/speaker/:speakerID', function(req, res, next) {
    if (req.user === undefined) {
        res.json({});
    }
    else {
        var speakerID = req.params.speakerID;
        speakersData.findByIdAndRemove(speakerID, function(err) {
            if(err) {
                res.end(err);
            }
            else {
                res.end();
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