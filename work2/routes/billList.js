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
    var pageNum = req.query.page;
    var sql = 'select * from presale order by id desc';
    connection.query(sql, function (err, result, fields) {
        var pager = {};
        // 当前默认第一页
        pager.pagerCurrent = pageNum || 1;
        //总的记录条数
        pager.maxNum = result.length;
        //每页显示记录条数
        pager.pageSize = 5;
        //总共页数
        pager.pageCount = parseInt(Math.ceil(pager.maxNum / pager.pageSize));

        var resultList = result.slice((pager.pagerCurrent - 1) * pager.pageSize, (pager.pagerCurrent - 1) * pager.pageSize + pager.pageSize);

        if (err) {
            console.log('err', err);
            return;
        } else {
            res.render('billList', { data: resultList, pager: pager });
        }
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

router.post('/', (req, res) => {
    var sql = 'select * from presale where title=? or detail=?';
    connection.query(sql, [req.body.searone, req.body.searone], function (err, result, fields) {
        var pageNum = req.query.page;
        var pager = {};
        // 当前默认第一页
        pager.pagerCurrent = pageNum || 1;
        //总的记录条数
        pager.maxNum = result.length;
        //每页显示记录条数
        pager.pageSize = 5;
        //总共页数
        pager.pageCount = parseInt(Math.ceil(pager.maxNum / pager.pageSize));

        var resultList = result.slice((pager.pagerCurrent - 1) * pager.pageSize, (pager.pagerCurrent - 1) * pager.pageSize + pager.pageSize);

        if (err) {
            console.log('err', err);
            return;
        } else { res.render('billList', { data: resultList, pager: pager }); }
    });
});
module.exports = router;