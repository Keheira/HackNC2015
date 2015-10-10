var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('Login-Register', { title: 'Login/Register' });
});

module.exports = router;
