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
        } else { res.render('main', { data: result }); }
    });
});
router.post('/', (req, res) => {
    var sql = 'select * from presale where title=? or detail=?';
    connection.query(sql, [req.body.sear, req.body.sear], function (err, result, fields) {
        if (err) {
            console.log('err', err);
            return;
        } else { res.render('main', { data: result }); }
    });
});

module.exports = router;