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
    var find = "select phone,password from goin where phone = '" + req.body.billId + "' and password = '" + req.body.billName + "'";
    var insertSql = 'insert into goin(phone,password,create_time) values(?,?,?)';
    connection.query(find, function (err, result, fields) {
        if (err) {
            console.log('err', err);
            return;
        } else if (result.length > 0) {
            res.send('用户帐号或密码已存在')
        } else {
            connection.query(insertSql, [req.body.billId, req.body.billName, new Date()], function (err, result, fields) {
                res.redirect('/userList');
            });
        }
    });
});
module.exports = router;