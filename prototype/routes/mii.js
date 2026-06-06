var express = require('express');
var router = express.Router();

router.get('/new', function(req, res, next) {
    res.render('mii/new', { title: 'mii作成ページ'});
});

module.exports = router;