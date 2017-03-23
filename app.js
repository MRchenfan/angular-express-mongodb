var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
let proxy = require('express-http-proxy')

var app = express();
var sessionOptions = {
  resave:true,
  saveUninitialized:false,
	cookie: {
		maxAge: 3 * 60 * 60 * 60 * 1000
	},
	secret: 'catch your cat',
  rolling: true, // 基于每次访问都可以刷新过期时间
};

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(session(sessionOptions));

app.use(express.static(path.join(__dirname, 'public')));

/* cross.origin */
app.use('*', function (req, res, next) {

  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1');
  if(req.method == "OPTIONS") res.sendStatus(200);/*让options请求快速返回*/
  else  next();
});

/**
 * proxy
 */

/*app.use('/', proxy('', {
  forwardPath: (req, res) => {

    return require('url').parse(req.url).path
  }
}))*/

// routers 
var index = require('./routes/index');
var users = require('./routes/users');
let articles = require('./routes/articles')
let message = require('./routes/message')
let works = require('./routes/works')
let login = require('./routes/login')
let banner = require('./routes/banner')

app.use('/', index);
app.use('/users', users);
app.use('/articles', articles)
app.use('/message', message)
app.use('/works', works)
app.use('/login', login)
app.use('/banner', banner)

// api
let video = require('./routes/api/video');

app.use('/video', video);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
