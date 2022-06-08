var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var ejs = require('ejs');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var signRouter = require('./routes/sign');
var registeredRouter = require('./routes/registered');
var indexRouter = require('./routes/index');
var mainRouter = require('./routes/main');
var cartRouter = require('./routes/cart');
var adminsignRouter = require('./routes/adminsign');
var shopRouter = require('./routes/shop');
var billAddRouter = require('./routes/billAdd');
var billUpdateRouter = require('./routes/billUpdate');
var billListRouter = require('./routes/billList');
var billViewRouter = require('./routes/billView');
var providerAddRouter = require('./routes/providerAdd');
var providerUpdateRouter = require('./routes/providerUpdate');
var providerListRouter = require('./routes/providerList');
var providerViewRouter = require('./routes/providerView');
var userAddRouter = require('./routes/userAdd');
var userUpdateRouter = require('./routes/userUpdate');
var userListRouter = require('./routes/userList');
var adminmainRouter = require('./routes/adminmain');
var publicRouter = require('./routes/public');
var repasswordRouter = require('./routes/repassword');
var reloginRouter = require('./routes/relogin');
var chatRouter = require('./routes/chat');
var adchatRouter = require('./routes/adchat');
var detailRouter = require('./routes/detail');
var historyRouter = require('./routes/history');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
// app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('work2'));
app.use(session({
  secret: 'work2',
  name: 'text',
  cookie: { maxAge: 1000 * 60 * 60 * 24 },
  resave: false,
  saveUninitialized: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/sign', signRouter);
app.use('/registered', registeredRouter);
app.use('/', indexRouter);
app.use('/main', mainRouter);
app.use('/cart', cartRouter);
app.use('/adminsign', adminsignRouter);
app.use('/shop', shopRouter);
app.use('/billAdd', billAddRouter);
app.use('/billUpdate', billUpdateRouter);
app.use('/billList', billListRouter);
app.use('/billView', billViewRouter);
app.use('/providerAdd', providerAddRouter);
app.use('/providerUpdate', providerUpdateRouter);
app.use('/providerList', providerListRouter);
app.use('/providerView', providerViewRouter);
app.use('/userAdd', userAddRouter);
app.use('/userUpdate', userUpdateRouter);
app.use('/userList', userListRouter);
app.use('/adminmain', adminmainRouter);
app.use('/public', publicRouter);
app.use('/repassword', repasswordRouter);
app.use('/relogin', reloginRouter);
app.use('/chat', chatRouter);
app.use('/adchat', adchatRouter);
app.use('/detail', detailRouter);
app.use('/history', historyRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
