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
            var editUser = {
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
                user.seminars.forEach(function (seminarID) {
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

router.get('/users/count', function(req, res, next) {
    if (req.user === undefined) {
        res.json({});
    }
    else {
        usersData.find({}, function(err, results) {
            if(err) {
                res.end(err);
            }
            else {
                res.json({count: results.length});
            }
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
                seminar.registrants.forEach(function (userID){
                    usersData.findByIdAndUpdate(
                        userID,
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

router.get('/seminars/count', function(req, res, next) {
    if (req.user === undefined) {
        res.json({});
    }
    else {
        seminarsData.find({}, function(err, results) {
            if(err) {
                res.end(err);
            }
            else {
                res.json({count: results.length});
            }
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
            var editSpeaker = {
                firstName: speakerData.firstName,
                lastName: speakerData.lastName,
                email: speakerData.email,
                school: speakerData.school,
                course: speakerData.course,
                office: speakerData.office,
                seminars: speakerData.seminars
            };

            speakersData.findById(speakerID, function(err, speaker) {
                if(err) {
                    res.end(err);
                }
                else {
                    speaker.seminars.forEach(function (seminarID){
                        seminarsData.findByIdAndUpdate(
                            seminarID,
                            { $pull: { speakers: speaker._id }},
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
                    speaker.update({ $set: editSpeaker}, function(err){
                        if(err) {
                            res.end(err);
                        }
                        else {
                            speakersData.findById(speakerID, function(err, updateSpeaker) {
                                if(err) {
                                    res.end(err);
                                }
                                else {
                                    updateSpeaker.seminars.forEach(function (seminarID){
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
                        }
                    });
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

        speakersData.findById(speakerID, function(err, speaker){
            if(err) {
                res.end(err);
            }
            else {
                speaker.seminars.forEach(function (seminarID){
                    seminarsData.findByIdAndUpdate(
                        seminarID,
                        { $pull: { speakers: speaker._id }},
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
                speaker.remove(function(err) {
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

router.get('/speakers/count', function(req, res, next) {
    if (req.user === undefined) {
        res.json({});
    }
    else {
        speakersData.find({}, function(err, results) {
            if(err) {
                res.end(err);
            }
            else {
                res.json({count: results.length});
            }
        });
    }
});

module.exports = router;