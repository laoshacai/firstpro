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

    // var loginPhone = req.body.loginPhone;
    // var loginPassword = req.body.loginPassword;
    // if (req.session.user != undefined
    //     && loginPhone == req.session.useMessage.phone
    //     && loginPassword == req.session.useMessage.password) {
    //     res.send("登录成功")
    // } else {
    //     res.send('手机号或密码错误，登录失败')
    // }

    // if (req.body.loginPhone == req.session.phone && req.body.loginPassword == req.session.password) {
    //     // res.send("登录成功")
    //     res.render('home');
    // } else {
    //     res.send('手机号或密码错误，登录失败')
    // }
    // console.log(req.body.loginPhone);
    // console.log(req.body.loginPassword);

    var selectSQL = "select phone,password from goin where phone = '" + req.body.loginPhone + "' and password = '" + req.body.loginPassword + "'";
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
                res.redirect('/main')
            }
        }
    });
});

module.exports = router;