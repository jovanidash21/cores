 var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  if (req.user) {
    if(req.user.role == 'administrator') {
      res.render('admin/index', {
        title: 'Dashboard'
      });
    }
    else {
      res.redirect('/');
    }
  }
  else {
    res.redirect('/auth/login');
  }
});

module.exports = router;
