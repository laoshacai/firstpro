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

router.get('/', function (req, res) {
    res.render('sign');
});
router.post('/', (req, res) => {



    var selectSQL = "select phone,password from goin where phone = '" + req.body.loginPhone + "' and password = '" + req.body.loginPassword + "'";
    connection.query(selectSQL, function (err, result, fields) {

        if (err) {
            console.log('err', err)
            return;
        } else {
            // results = JSON.stringify(result);
            if (result.length == 0) {
                res.send('用户帐号或密码不能为空')
            }
            else if (result == '') {
                res.send('登录失败,账号或密码不匹配');
            }
            else {
                res.redirect('/main')
            }
        }
    });




});

module.exports = router;