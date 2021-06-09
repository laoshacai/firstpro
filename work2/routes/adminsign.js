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
    res.render('adminsign');
});
router.post('/', function (req, res, next) {
    var selectSQL = "select ad_phone,ad_password from admin_goin where ad_phone = '" + req.body.adminPhone + "' and ad_password = '" + req.body.adminPassword + "'";
    connection.query(selectSQL, function (err, result, fields) {
        if (err) {
            console.log('err', err);
            return;
        } else {
            // results = JSON.stringify(result);
            if (result == '') {
                res.send('登录失败');
            }
            else {
                res.render('adminmain')
            }
        }
    });
});
module.exports = router;