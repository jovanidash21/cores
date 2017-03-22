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

        userData.forEach(function (userDataBody) {
            var editUser = {
                username: userDataBody.username,
                email: userDataBody.email,
                firstName: userDataBody.firstName,
                lastName: userDataBody.lastName,
                birthDate: userDataBody.birthDate,
                gender: userDataBody.gender,
                school: userDataBody.school,
                studentNumber: userDataBody.studentNumber,
                course: userDataBody.course,
                seminars: userDataBody.seminars,
                role: userDataBody.role
            };

            usersData.findById(userID, function(err, user) {
                if(err) {
                    res.end(err);
                }
                else {
                    user.seminars.forEach(function (seminarID){
                        seminarsData.findByIdAndUpdate(
                            seminarID,
                            { $pull: { registrants: user._id }},
                            { new: true, upsert: true },
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
                    user.update({ $set: editUser}, function(err){
                        if(err) {
                            res.end(err);
                        }
                        else {
                            usersData.findById(userID, function(err, updateUser) {
                                if(err) {
                                    res.end(err);
                                }
                                else {
                                    updateUser.seminars.forEach(function (seminarID){
                                        seminarsData.findByIdAndUpdate(
                                            seminarID,
                                            { $push: { registrants: user._id }},
                                            { new: true, safe: true, upsert: true },
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
                        }
                    });
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

        usersData.findById(userID, function(err, user){
            if(err) {
                res.end(err);
            }
            else {
                user.seminars.forEach(function (userSeminar) {
                    seminarsData.findByIdAndUpdate(
                        userSeminar,
                        { $pull: { registrants: user._id }},
                        { new: true, upsert: true },
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
                user.remove(userID, function(err) {
                    if(err) {
                        res.end(err);
                    }
                    else {
                        res.end();
                    }
                });
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
                    user.seminars.forEach(function (seminarID){
                        seminarsData.findByIdAndUpdate(
                            seminarID,
                            { $push: { registrants: user._id }},
                            { new: true, safe: true, upsert: true },
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
            .populate(['speakers', 'registrants'])
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
                speakers: seminarData.speakers,
                location: seminarData.location,
                schedule: seminarData.schedule
            };
            seminarsData.findByIdAndUpdate(seminarID, seminar, function(err, seminar) {
                if(err) {
                    res.end(err);
                }
                else {
                    seminar.speakers.forEach(function (speakerID){
                        speakersData.findByIdAndUpdate(
                            speakerID,
                            { $pull: { seminars: seminar._id }},
                            { new: true, upsert: true },
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
                    seminarData.speakers.forEach(function (speakerID){
                        speakersData.findByIdAndUpdate(
                            speakerID,
                            { $push: { seminars: seminar._id }},
                            { new: true, safe: true, upsert: true },
                            function(err) {
                                if(err) {
                                    res.end(err);
                                }
                                else {
                                    res.end();
                                }
                            }
                        }
                    );
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
                speakers: seminarData.speakers,
                schedule: seminarData.schedule,
                location: seminarData.location,
            };
            var newSeminar = new seminarsData(seminar);
            newSeminar.save(function(err, seminar) {
                if(err) {
                    res.end(err);
                }
                else {
                    seminarData.speakers.forEach(function (speakerID){
                        speakersData.findByIdAndUpdate(
                            speakerID,
                            { $push: { seminars: seminar._id }},
                            { new: true, safe: true, upsert: true },
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

router.get('/speaker/:speakerID', function(req, res, next) {
    if (req.user === undefined) {
        res.json({});
    }
    else {
        var speakerID = req.params.speakerID;

        speakersData.findById(speakerID)
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
                office: speakerData.office,
                seminar: speakerData.seminar
            };

            speakersData.findByIdAndUpdate(speakerID, speaker, function(err, speaker) {
                if(err) {
                    res.end(err);
                }
                else {
                    seminarsData.findByIdAndUpdate(
                        speakerData.seminar,
                        { speaker: speaker._id },
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
                office: speakerData.role,
                seminars: speakerData.seminars
            };
            var newSpeaker = new speakersData(speaker);
            newSpeaker.save(function(err, speaker) {
                if(err) {
                    res.end(err);
                }
                else {
                    speakerData.seminars.forEach(function (seminarID){
                        seminarsData.findByIdAndUpdate(
                            seminarID,
                            { $push: { speakers: speaker._id }},
                            { new: true, safe: true, upsert: true },
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

module.exports = router;