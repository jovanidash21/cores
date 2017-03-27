var express = require('express');
var router = express.Router();
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var usersData = require('../models/users-data-schema');

// passport facebook configuration
passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  },
  function(token, refreshToken, profile, done) {
    usersData.findOne({ facebookID: profile.id }, function (err, user) {
        if(err) {
            return done(err);
        }
        if(user) {
            res.redirect('/');
        }
        else {
            var newUser = new usersData();

            newUser.facebookID = profile.id; 
            newUser.facebookToken = token;
            newUser.facebookEmail = profile.emails[0].value;
            newUser.facebookName = profile.name.givenName + ' ' + profile.name.familyName;

            newUser.save(function(err) {
                if (err) {
                    throw err;
                }
                else {
                    res.redirect('/');
                }
            });
        }
    });
  }
));

router.get('/login', function(req, res, next) {
    if (req.user) {
        if(req.user.role == 'administrator') {
            res.redirect('/admin');
        }
        else {
            res.redirect('/');
        }
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
                        if (req.user.role == 'administrator') {
                            res.redirect('/admin');
                        }
                        else {
                            res.redirect('/');
                        }
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

router.get('/facebook', passport.authenticate('facebook'));

router.get('/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/auth/login' }),
    function(req, res) {
        res.redirect('/');
    });

router.post('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});


module.exports = router;