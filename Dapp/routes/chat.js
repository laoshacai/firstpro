var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "wyzml",
    database: "program"
});
connection.connect();
/* GET users listing. */
router.get('/', function (req, res, next) {
    var sql = 'select * from adchat';
    connection.query(sql, function (err, result, fields) {
        if (err) {
            console.log('err', err);
            return;
        } else { res.render('chat', { data: result }); }
    });
});


router.post('/', function (req, res, next) {
    var insql = 'insert into chat(usertxt) values(?)';
    connection.query(insql, [req.body.usertxt], function (err, result, fields) {
        if (err) {
            console.log('err', err);
            return;
        } else {
            res.render('chat', { list: result });
            res.redirect('/main');
        }
    });
});

module.exports = router;