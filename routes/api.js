var express = require('express');
var router = express.Router();
var usersData = require('../models/users-data-schema');

router.get('/user', function(req, res, next) {
    if (req.user === undefined) {
        res.json({});
    }
    else {
        res.json([req.user]);
    }
});

router.get('/users', function(req, res, next) {
    if (req.user === undefined) {
        res.json({});
    }
    else {
        usersData.find()
            .then(function (usersData) {
                res.json([usersData]);
            });
    }
});

router.post('/users', function(req, res, next) {
    if (req.user === undefined) {
        res.redirect('/');
    }
    else {
        usersData.register(new req.body.userData, req.body.password, function(err) {
            if(err) {
                res.end(err);
            }
        });
    }
});

module.exports = router;