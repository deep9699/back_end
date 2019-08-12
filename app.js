var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var customer_router=require('./routes/customer_route');
var customer_router1=require('./routes/customer_route1');
var product_router=require('./routes/product_router');
var category_product_router=require("./routes/category_product_router");
var category_router=require("./routes/category_router");
var order_router=require("./routes/order_route");
var order_route1=require("./routes/order_route1");
var order_route2=require("./routes/order_route2");
var admin_router=require("./routes/admin_route");
var product_admin_router=require("./routes/product_router_admin");
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/customer',customer_router);
app.use('/customer1',customer_router1);
app.use('/product',product_router);
app.use('/category_product',category_product_router);
app.use('/category',category_router);
app.use('/order',order_router);
app.use('/order1',order_route1);
app.use('/order2',order_route2);
app.use('/product_admin',product_admin_router);
app.use('/admin',admin_router);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
