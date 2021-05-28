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
    var sql = 'select * from presale';
    connection.query(sql, function (err, result, fields) {
        if (err) {
            console.log('err', err);
            return;
        } else { res.render('billList', { data: result }); }
    });
});

router.get('/:id', function (req, res, next) {
    var sql = 'delete from presale where id=?';
    connection.query(sql, [req.params.id], function (err, result, fields) {
        if (err) {
            console.log('err', err);
            return;
        } else {
            res.redirect('/billList')
        }
    });
})

module.exports = router;