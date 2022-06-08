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
    res.render('billAdd');
});

router.post('/', function (req, res, next) {
    var insql = 'insert into presale(id,image,title,detail,nowprice,start,create_time,hash) values(?,?,?,?,?,?,?,?)';
    connection.query(insql, [req.body.bill, req.body.billId, req.body.billName, req.body.billCom, req.body.nowMoney, req.body.billstatus, new Date(), req.body.billHash], function (err, result, fields) {
        if (err) {
            console.log('err', err);
            return;
        } else {
            res.render('billList', { list: result });
            res.redirect('/billList');
        }
    });
});


module.exports = router;