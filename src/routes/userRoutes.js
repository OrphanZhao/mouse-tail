const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const passport = require('passport');

// 用户注册
router.post('/register', userController.register);

// 用户登录
router.post('/login', passport.authenticate('local'), userController.login);

// 获取当前用户
router.get('/me', userController.getCurrentUser);

// 更新用户
router.put('/:id', userController.updateUser);

// 删除用户
router.delete('/:id', userController.deleteUser);

module.exports = router;
