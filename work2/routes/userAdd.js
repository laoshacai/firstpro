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
    res.render('userAdd');
});
router.post('/', function (req, res, next) {
    var insql = 'insert into goin(phone,password,create_time) values(?,?,?)';
    connection.query(insql, [req.body.billId, req.body.billName, new Date()], function (err, result, fields) {
        if (err) {
            console.log('err', err);
            return;
        } else {
            res.render('userList', { list: result });
            res.redirect('/userList');
        }
    });
});
module.exports = router;