var express = require('express');
var router = express.Router();
// var Usermessage = require('./bean/userMessage');
var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "wyzml",
    database: "program"
});
connection.connect();

router.get('/', function (req, res) {
    res.render('registered');
});

router.post('/', (req, res) => {


    // var useMessage = new Usermessage(req.body.phone, req.body.password);
    // console.log(useMessage);
    // req.session.userMessage = userMessage;
    // res.redirect('/sign');


    // req.session.phone = req.body.phone;
    // req.session.password = req.body.password;
    // console.log(req.session.phone);
    // console.log(req.session.password);
    // res.redirect('/sign');
    // res.redirect('http://www.baidu.com');
    // 跳转到百度

    var insertSql = 'insert into goin(phone,password) values(?,?)';
    connection.query(insertSql, [req.body.phone, req.body.password], function (err, result, fields) {
        if (err) {
            console.log('err', err);
            return;
        } else {
            // return res.redirect('/sign');
            res.redirect('/sign');
        }
    });

});
module.exports = router;