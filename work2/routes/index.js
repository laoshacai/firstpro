var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
let data = Array();
let pid;
var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "wyzml",
    database: "wangyang"
});
connection.connect();
// fs.readFile(path.join(__dirname, "bean/user.json"), {
//     encoding: "utf-8"
// }, (err, d) => {
//     data = JSON.parse(d);
// })

/* GET home page. */
router.get('/', function (req, res, next) {
    // let newData = data.splice(0, 3);
    // res.render('index', { list: newData });
    var sql = 'select * from connection order by id desc';
    connection.query(sql, function (err, result, fields) {
        if (err) {
            console.log('err', err);
            return;
        } else { res.render('index', { list: result }); }
    });
})

router.get('/del/:id', function (req, res, next) {
    delete data[req.params.id];
    res.redirect('/');
})

router.get('/mod/:id', (req, res) => {
    console.log(data);
    res.render('mod', { obj: data[req.params.id] });
    pid = req.params.id;
})

router.post('/mod', (req, res) => {
    let obj = {
        name: req.body.name,
        ch: req.body.ch,
        ma: req.body.ma,
        en: req.body.en,
        am: Number(parseInt(req.body.ch) + parseInt(req.body.ma) + parseInt(req.body.en))
    }
    data[pid] = obj;
    // 对象存入相应数组位置
    res.redirect('/');
})

router.post('/', (req, res) => {
    // let obj = {
    //     name: req.body.name,
    //     ch: req.body.ch,
    //     ma: req.body.ma,
    //     en: req.body.en,
    //     am: Number(parseInt(req.body.ch) + parseInt(req.body.ma) + parseInt(req.body.en))
    // }
    // data.unshift(obj);
    // res.redirect('/');
    var insql = 'insert into connection(name,ch,ma,en) values(?,?,?,?)';
    connection.query(insql, [req.body.name, req.body.ch, req.body.ma, req.body.en], function (err, result, fields) {
        if (err) {
            console.log('err', err);
            return;
        } else {
            res.render('index', { list: result });
            res.redirect('/');
        }
    });
})

router.post('/nextPage', (req, res) => {
    // res.json(data);


});

module.exports = router;
