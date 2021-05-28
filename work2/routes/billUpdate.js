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
router.get('/:id', function (req, res, next) {
    var sql = 'select * from presale where id=?';
    connection.query(sql, [req.params.id], function (err, result, fields) {
        if (err) {
            console.log('err', err);
            return;
        } else {
            res.render('billUpdate', { data: result[0] });
        }
    });
});
router.post('/', function (req, res, next) {
    var insql = 'update presale set image=?,title=?,detail=?,nowprice=?,oldprice=?,start=? where id=?';
    connection.query(insql, [req.body.billId, req.body.billName, req.body.billCom, req.body.nowMoney, req.body.oldMoney, req.body.billstatus, req.body.id], function (err, result, fields) {
        if (err) {
            console.log('err', err);
            return;
        } else {
            res.redirect('/billList')
        }
    });
});
module.exports = router;