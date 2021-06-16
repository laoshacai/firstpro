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
    res.render('providerAdd');
});
router.post('/', function (req, res, next) {
    var find = "select ad_phone,ad_password from admin_goin where ad_phone = '" + req.body.billId + "' and ad_password = '" + req.body.billName + "'";
    var insertSql = 'insert into admin_goin(ad_phone,ad_password,create_time) values(?,?,?)';
    connection.query(find, function (err, result, fields) {
        if (err) {
            console.log('err', err);
            return;
        } else if (result.length > 0) {
            res.send('用户帐号或密码已存在')
        } else {
            connection.query(insertSql, [req.body.billId, req.body.billName, new Date()], function (err, result, fields) {
                res.redirect('/providerList');
            });
        }
    });
});
module.exports = router;