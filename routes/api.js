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
                user.remove(function(err) {
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
            var editSeminar = {
                title: seminarData.title,
                speakers: seminarData.speakers,
                location: seminarData.location,
                schedule: seminarData.schedule
            };

            seminarsData.findById(seminarID, function(err, seminar) {
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
                    seminar.update({ $set: editSeminar}, function(err) {
                        if (err) {
                            res.end(err);
                        }
                        else {
                            seminarsData.findById(seminarID, function(err, updateSeminar) {
                                if (err) {
                                    res.end(err);
                                }
                                else {
                                    updateSeminar.speakers.forEach(function (speakerID){
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
                        }
                    });
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

        seminarsData.findById(seminarID, function(err, seminar){
            if(err) {
                res.end(err);
            }
            else {
                seminar.registrants.forEach(function (seminarRegistrant){
                    usersData.findByIdAndUpdate(
                        seminarRegistrant,
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
                seminar.speakers.forEach(function (seminarSpeaker){
                    speakersData.findByIdAndUpdate(
                        seminarSpeaker,
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
                seminar.remove(function(err) {
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

router.post('/speakers', function(req, res, next) {
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
                    seminar.speakers.forEach(function (speakerID){
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

module.exports = router;