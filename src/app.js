const express = require('express');
const session = require('express-session');
const passport = require('passport');
const routes = require('./routes');
const sequelize = require('./config/db');

const app = express();

// 中间件
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  }),
);
app.use(passport.initialize());
app.use(passport.session());

// 路由
app.use('/api', routes);

// 数据库同步
sequelize.sync().then(() => {
  console.log('Database synced');
});

module.exports = app;
