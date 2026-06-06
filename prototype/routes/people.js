var express = require('express');
var router = express.Router();

/* GET /people/new → new.ejs（知り合い登録ページ） */
router.get('/new', function(req, res, next) {
  res.render('people/new', { title: '知り合い登録ページ' });
});

/* GET /people → index.ejs（知り合い表示ページ） */
router.get('/index', function(req, res, next) {
  res.render('people/index', { title: '知り合い表示ページ' });
});

/* POST /people → DBに保存してリダイレクト */
router.post('/', function(req, res, next) {
  res.redirect('/people');
});

module.exports = router;
