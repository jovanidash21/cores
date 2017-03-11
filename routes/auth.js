var express = require('express');
var router = express.Router();
var passport = require('passport');
var usersData = require('../models/users-data-schema');

router.get('/login', function(req, res, next) {
    if(req.user){
        res.render('admin/index', {
            title: 'Task Tracker'
        });
    }
    else {
        res.render('login', {
            title: 'Login | CoRES',
            alertMessage: req.flash('alertMessage')
        });
    }
});

router.post('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user) {
        if(!err){
            if(!user){
                req.flash('alertMessage', 'Invalid username or password!');
                res.redirect('/auth/login');
            }
            else{
                req.logIn(user, function(err) {
                    if(!err){
                        res.redirect('/admin');
                    }
                    else{
                        res.end(err);
                    }
                })
            }
        }
        else {
            res.end(err);
        }
    })(req, res, next);
});

router.post('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});


module.exports = router;