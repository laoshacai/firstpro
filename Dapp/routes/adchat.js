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
    var sql = 'select * from chat';
    connection.query(sql, function (err, result, fields) {
        if (err) {
            console.log('err', err);
            return;
        } else { res.render('adchat', { data: result }); }
    });
});


router.post('/', function (req, res, next) {
    var insql = 'insert into adchat(admintxt) values(?)';
    connection.query(insql, [req.body.admintxt], function (err, result, fields) {
        if (err) {
            console.log('err', err);
            return;
        } else {
            res.render('chat', { list: result });
            res.redirect('/bilList');
        }
    });
});


module.exports = router;