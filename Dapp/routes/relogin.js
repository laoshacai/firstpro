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

router.get('/', function (req, res) {
    res.render('relogin');
});

router.post('/', function (req, res, next) {
    var selectSQL = "select ad_phone,ad_password from admin_goin where ad_phone = '" + req.body.username + "' and ad_password = '" + req.body.password + "'";
    connection.query(selectSQL, function (err, result, fields) {
        if (err) {
            console.log('err', err);
            return;
        } else {
            // results = JSON.stringify(result);
            if (result == '') {
                res.send('退出失败');
            }
            else {
                res.redirect('main')
            }
        }
    });
});

module.exports = router;